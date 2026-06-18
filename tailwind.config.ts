import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          2: "hsl(var(--surface-2))",
        },
        // Signature gradient stops (token-driven, theme aware)
        grad: {
          1: "hsl(var(--grad-1))",
          2: "hsl(var(--grad-2))",
          3: "hsl(var(--grad-3))",
          4: "hsl(var(--grad-4))",
        },
        // Premium palette
        electric: {
          DEFAULT: "hsl(248 84% 64%)",
          50: "hsl(248 84% 96%)",
          100: "hsl(248 84% 92%)",
          200: "hsl(248 84% 84%)",
          300: "hsl(248 84% 76%)",
          400: "hsl(248 84% 70%)",
          500: "hsl(248 84% 64%)",
          600: "hsl(248 70% 56%)",
          700: "hsl(248 60% 46%)",
          800: "hsl(248 55% 36%)",
          900: "hsl(248 50% 26%)",
        },
        violet: {
          DEFAULT: "hsl(286 78% 66%)",
          400: "hsl(286 78% 72%)",
          500: "hsl(286 78% 66%)",
          600: "hsl(286 70% 56%)",
        },
        cyan: {
          DEFAULT: "hsl(199 92% 50%)",
          400: "hsl(199 92% 60%)",
          500: "hsl(199 92% 50%)",
          600: "hsl(199 92% 40%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "aurora-a": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(6%,4%,0) scale(1.08)" },
          "66%": { transform: "translate3d(-4%,-3%,0) scale(0.96)" },
        },
        "aurora-b": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(-7%,5%,0) scale(1.12)" },
        },
        "aurora-c": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1.05)" },
          "50%": { transform: "translate3d(5%,-6%,0) scale(0.92)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.5s ease-out",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "spin-slow": "spin-slow 3s linear infinite",
        "aurora-a": "aurora-a 24s ease-in-out infinite",
        "aurora-b": "aurora-b 30s ease-in-out infinite",
        "aurora-c": "aurora-c 28s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
