"use client"

import { Renderer, Program, Mesh, Triangle } from "ogl"
import { useEffect, useRef } from "react"

interface GradientSphereProps {
  className?: string
  color1?: string
  color2?: string
  color3?: string
  color4?: string
}

function hexToVec3(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ]
}

const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uReduced;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;
uniform vec3 uC4;

vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453123);
}

float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash3(i + vec3(0.0, 0.0, 0.0)).x;
  float n100 = hash3(i + vec3(1.0, 0.0, 0.0)).x;
  float n010 = hash3(i + vec3(0.0, 1.0, 0.0)).x;
  float n110 = hash3(i + vec3(1.0, 1.0, 0.0)).x;
  float n001 = hash3(i + vec3(0.0, 0.0, 1.0)).x;
  float n101 = hash3(i + vec3(1.0, 0.0, 1.0)).x;
  float n011 = hash3(i + vec3(0.0, 1.0, 1.0)).x;
  float n111 = hash3(i + vec3(1.0, 1.0, 1.0)).x;
  float nx00 = mix(n000, n100, u.x);
  float nx10 = mix(n010, n110, u.x);
  float nx01 = mix(n001, n101, u.x);
  float nx11 = mix(n011, n111, u.x);
  float nxy0 = mix(nx00, nx10, u.y);
  float nxy1 = mix(nx01, nx11, u.y);
  return mix(nxy0, nxy1, u.z);
}

float fbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 4; i++) {
    s += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return s;
}

mat3 rotY(float a) {
  float c = cos(a); float s = sin(a);
  return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
}
mat3 rotX(float a) {
  float c = cos(a); float s = sin(a);
  return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;

  vec3 ro = vec3(0.0, 0.0, 2.7);
  vec3 rd = normalize(vec3(uv, -1.7));

  float R = 1.0;
  float b = dot(ro, rd);
  float c = dot(ro, ro) - R * R;
  float disc = b * b - c;

  vec3 halo1 = mix(uC2, uC3, 0.5);
  vec3 halo2 = mix(uC1, uC4, 0.5);

  if (disc < 0.0) {
    float d = length(uv);
    float halo = smoothstep(1.85, 0.95, d);
    vec3 hcol = mix(halo1, halo2, smoothstep(-0.6, 0.8, uv.y));
    gl_FragColor = vec4(hcol, halo * 0.16);
    return;
  }

  float sq = sqrt(disc);
  float t = -b - sq;
  vec3 pos = ro + rd * t;
  vec3 n = normalize(pos);

  float speed = mix(0.16, 0.03, uReduced);
  float time = uTime * speed;

  mat3 rot = rotY(time * 0.7 + uMouse.x * 0.35) * rotX(-0.25 + uMouse.y * 0.25);
  vec3 sp = rot * pos;

  float flow = fbm(sp * 1.5 + vec3(0.0, 0.0, time * 1.2));
  flow += 0.5 * fbm(sp * 3.1 - vec3(time * 0.6, 0.0, 0.0));

  float g = clamp(0.5 + 0.5 * n.y + (flow - 0.75) * 0.8, 0.0, 1.0);
  vec3 col = mix(uC1, uC2, smoothstep(0.0, 0.5, g));
  col = mix(col, uC3, smoothstep(0.45, 0.88, g));
  col = mix(col, uC4, smoothstep(0.78, 1.0, g) * 0.55);

  vec3 lightDir = normalize(vec3(0.45 + uMouse.x * 0.55, 0.55 + uMouse.y * 0.45, 0.75));
  float diff = clamp(dot(n, lightDir), 0.0, 1.0);
  float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), 2.6);
  vec3 refl = reflect(-lightDir, n);
  float spec = pow(clamp(dot(refl, -rd), 0.0, 1.0), 28.0);

  col = col * (0.5 + 0.62 * diff);
  col += fres * mix(uC3, vec3(1.0), 0.45) * 0.55;
  col += spec * vec3(1.0) * 0.45;

  // gentle ambient occlusion toward the bottom
  col *= mix(0.82, 1.06, smoothstep(-1.0, 1.0, n.y));

  float alpha = smoothstep(0.0, 0.045, disc);

  gl_FragColor = vec4(col, alpha);
}
`

export default function GradientSphere({
  className = "h-full w-full",
  color1 = "#6d5efc",
  color2 = "#3b82f6",
  color3 = "#22d3ee",
  color4 = "#c084fc",
}: GradientSphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false, dpr: Math.min(window.devicePixelRatio || 1, 2) })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [1, 1] },
        uMouse: { value: new Float32Array([0, 0]) },
        uReduced: { value: reduced ? 1 : 0 },
        uC1: { value: hexToVec3(color1) },
        uC2: { value: hexToVec3(color2) },
        uC3: { value: hexToVec3(color3) },
        uC4: { value: hexToVec3(color4) },
      },
    })

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

    function resize() {
      if (!container) return
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height]
    }
    resize()
    window.addEventListener("resize", resize)

    const current: [number, number] = [0, 0]
    const target: [number, number] = [0, 0]
    function handleMove(e: MouseEvent) {
      const rect = (gl.canvas as HTMLCanvasElement).getBoundingClientRect()
      target[0] = ((e.clientX - rect.left) / rect.width) * 2 - 1
      target[1] = (1 - (e.clientY - rect.top) / rect.height) * 2 - 1
    }
    window.addEventListener("mousemove", handleMove)

    container.appendChild(gl.canvas)

    // pause rendering when offscreen
    let visible = true
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 }
    )
    io.observe(container)

    let raf = 0
    function update(time: number) {
      raf = requestAnimationFrame(update)
      if (!visible) return
      program.uniforms.uTime.value = time * 0.001
      current[0] += 0.06 * (target[0] - current[0])
      current[1] += 0.06 * (target[1] - current[1])
      program.uniforms.uMouse.value[0] = current[0]
      program.uniforms.uMouse.value[1] = current[1]
      renderer.render({ scene: mesh })
    }
    raf = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMove)
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [color1, color2, color3, color4])

  return <div ref={containerRef} className={className} />
}
