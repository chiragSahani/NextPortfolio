"use client"

import type { Project, CodeSnippet, Technology, Experience, Education, Achievement } from "@/lib/types"

export const projects: Project[] = [
  {
    title: "Chat Room",
    description: "Real-time chat application with messaging, presence tracking, and notifications.",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Zustand", "Tailwind CSS"],
    demoUrl: "https://chiragchat.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/chatRoom.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1742303199/8477495_3917249_grvyhi.jpg",
  },
  {
    title: "CryptoWeather Nexus",
    description: "Real-time dashboard for weather and crypto trends using Next.js & Redux.",
    techStack: ["Next.js", "TypeScript", "Redux Toolkit", "WebSockets", "Tailwind CSS"],
    demoUrl: "https://chiragnexus.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/Nexus.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1743684513/cr1_wlvyul.svg",
  },
  
  {
    title: "Stroke Prediction AI",
    description: "ML model predicting stroke risks based on health data.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    demoUrl: "https://github.com/chiragSahani/Heart_disease.git",
    githubUrl: "https://github.com/chiragSahani/Heart_disease.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1734772905/ai-technology-brain-background-digital-transformation-concept_hpnzul.jpg",
  },
  {
    title: "Netflix Clone",
    description: "Static website mimicking Netflix UI.",
    techStack: ["HTML", "CSS", "Bootstrap", "Flex"],
    demoUrl: "https://netchir95.ccbp.tech/",
    githubUrl: "https://netchir95.ccbp.tech/",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1743665615/netflix_xxdd0l.webp",
  },
  {
    title: "NestTravels",
    description: "Responsive tourism website for seamless trip planning.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://nesttravels.ccbp.tech/",
    githubUrl: "https://github.com/chiragSahani/Gogaga-Holidays.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1710677931/g-2_yrlp9t.jpg",
  },
  {
    title: "AI Voicebot",
    description: "Conversational AI system inspired by ChatGPT.",
    techStack: ["Python", "TensorFlow", "NLP", "WebRTC"],
    demoUrl: "https://github.com/chiragSahani/AI_Voice_Alexa.git",
    githubUrl: "https://github.com/chiragSahani/AI_Voice_Alexa.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1743665464/aibot_k2jjkk.jpg",
  },
  {
    title: "Nxt Trendz",
    description: "E-commerce application with smooth online shopping experience.",
    techStack: ["React", "JWT Authentication", "E-commerce"],
    demoUrl: "https://chiragtech.ccbp.tech/",
    githubUrl: "https://github.com/chiragSahani/ecommQuadB.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1734764669/Screenshot_202_ocrd70.png",
  },
  {
    title: "Portfolio Website",
    description: "Showcasing web development expertise with React & TypeScript.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://chiragsahni093.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/MyPortfolio.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1736608522/Screenshot_5_zrxsdb.png",
  },
  {
    title: "Expense Tracker",
    description: "Web-based finance management tool with real-time calculations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://expensechirag.ccbp.tech/",
    githubUrl: "https://github.com/chiragSahani/ExpenseTracker.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1736660767/Screenshot_6_fsipxm.png",
  },
  {
    title: "Screen Recorder",
    description: "Web-based screen recording app with filters and downloads.",
    techStack: ["React", "Tailwind", "TypeScript"],
    demoUrl: "https://chirag9528.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/ScreenRecorder.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1743684670/screen_xx45sc.jpg",
  },
  {
    title: "MedBook",
    description: "Digital healthcare management platform with secure records storage.",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    demoUrl: "https://medbookchirag.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/medbook.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1741625242/Screenshot_252_oa2il7.png",
  },
  {
    title: "Communion",
    description: "Social networking platform with real-time chat and event organization.",
    techStack: ["Next.js", "Firebase", "WebRTC", "Tailwind"],
    demoUrl: "https://communionchirag.netlify.app/",
    githubUrl: "https://github.com/chiragSahani/communion.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1741608026/4167995_1967_h4iykf.jpg",
  },
  {
    title: "UserApi React App",
    description: "React-based user management application integrating with Reqres API for authentication and CRUD operations.",
    techStack: ["React.js, React Router, Axios, Tailwind CSS, Reqres API"],
    demoUrl: "https://chiraguser.vercel.app/",
    githubUrl: "https://github.com/chiragSahani/UserApi.git",
    image: "https://res.cloudinary.com/dlyctssmy/image/upload/v1743665362/Screenshot_2025-04-03_125803_vm1em8.png",
  }
];
  

export const codeSnippets: CodeSnippet[] = [
  {
    title: "Binary Search Algorithm",
    description: "Efficient implementation of the binary search algorithm in JavaScript.",
    language: "JavaScript",
    code: `// Binary Search implementation in JavaScript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }
  
  return -1; // Target not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);

console.log(\`Found \${targetValue} at index: \${result}\`);`,
  },
  {
    title: "Merge Sort Algorithm",
    description: "Implementation of the merge sort algorithm in Python.",
    language: "Python",
    code: `# Merge Sort implementation in Python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    # Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Recursively sort both halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    result = []
    i = j = 0
    
    # Compare elements from both arrays and add the smaller one to the result
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Example usage
unsorted_array = [38, 27, 43, 3, 9, 82, 10]
sorted_array = merge_sort(unsorted_array)
print(f"Sorted array: {sorted_array}")`,
  },
  {
    title: "React Custom Hook",
    description: "A custom React hook for managing local storage state.",
    language: "TypeScript",
    code: `// useLocalStorage.ts - Custom React hook for managing local storage
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Get stored value from localStorage or use initialValue
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  };

  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;

// Example usage:
// const [theme, setTheme] = useLocalStorage('theme', 'dark');`,
  },
  {
    title: "Node.js API Endpoint",
    description: "A RESTful API endpoint implementation using Express.js.",
    language: "JavaScript",
    code: `// Express.js API endpoint for user authentication
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// User login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;`,
  },
]

export const technologies: Technology[] = [
  {
    name: "JavaScript",
    category: "Programming Languages",
    experience: "3+ years",
    proficiency: 90,
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    experience: "2+ years",
    proficiency: 85,
  },
  {
    name: "Python",
    category: "Programming Languages",
    experience: "3+ years",
    proficiency: 80,
  },
  {
    name: "Java",
    category: "Programming Languages",
    experience: "2+ years",
    proficiency: 75,
  },
  {
    name: "C++",
    category: "Programming Languages",
    experience: "2+ years",
    proficiency: 70,
  },
  {
    name: "React.js",
    category: "Frontend Technologies",
    experience: "2+ years",
    proficiency: 90,
  },
  {
    name: "Next.js",
    category: "Frontend Technologies",
    experience: "1+ year",
    proficiency: 85,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend Technologies",
    experience: "2+ years",
    proficiency: 90,
  },
  {
    name: "Node.js",
    category: "Backend Development",
    experience: "2+ years",
    proficiency: 85,
  },
  {
    name: "Express.js",
    category: "Backend Development",
    experience: "2+ years",
    proficiency: 85,
  },
  {
    name: "Flask",
    category: "Backend Development",
    experience: "1+ year",
    proficiency: 75,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    experience: "2+ years",
    proficiency: 80,
  },
  {
    name: "MongoDB",
    category: "Databases",
    experience: "1+ year",
    proficiency: 75,
  },
  {
    name: "MySQL",
    category: "Databases",
    experience: "2+ years",
    proficiency: 80,
  },
  {
    name: "Supabase",
    category: "Databases",
    experience: "1+ year",
    proficiency: 70,
  },
  {
    name: "Azure",
    category: "Cloud & DevOps",
    experience: "1+ year",
    proficiency: 75,
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    experience: "1+ year",
    proficiency: 70,
  },
  {
    name: "CI/CD",
    category: "Cloud & DevOps",
    experience: "1+ year",
    proficiency: 65,
  },
  {
    name: "Git",
    category: "Version Control",
    experience: "3+ years",
    proficiency: 90,
  },
]

export const experience: Experience[] = [
  {
    title: "Content Strategist - Tech Intern",
    company: "UpGrad Edtech (Bangalore, Hybrid)",
    period: "Oct 2024 – Feb 2025",
    responsibilities: [
      "Developed and structured technical content strategies to enhance the learning experience for software development courses.",
      "Collaborated with SMEs to create engaging technical content, ensuring clarity and industry relevance.",
      "Optimized course structures, coding exercises, and documentation for better student engagement and understanding.",
    ],
    technologies: ["JavaScript", "Python", "React", "Node.js"],
  },
  {
    title: "Azure Cloud Intern",
    company: "Coincent.ai (Remote)",
    period: "July 2022 – Nov 2022",
    responsibilities: [
      "Developed cloud-native applications using Azure services, ensuring 99.9% uptime.",
      "Automated ETL pipelines with Azure Data Factory, boosting efficiency by 30%.",
      "Optimized cloud storage and implemented RBAC security policies, reducing infrastructure costs by 20%.",
    ],
    technologies: ["Azure", "Cloud Computing", "ETL", "Security"],
  },
]

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Chandigarh Group of Colleges (CGC), Mohali",
    period: "Aug 2021 – May 2025",
    description:
      "Gold Medalist with GPA: 8.7/10.0. Focused on Data Structures, Algorithms, System Design, DBMS, Operating Systems, and Software Engineering.",
    achievements: [
      "Gold Medalist for Academic Excellence",
      "Ranked in top 5% of the class",
      "Active member of the college coding club",
    ],
  },
  {
    degree: "M.Sc. in Computer Science",
    institution: "Woolf University, England (In Association with NxtWave)",
    period: "2022 - 2026 (In Progress)",
    description: "Focus Areas: AI, Cloud Computing, Full-Stack Development",
    achievements: [
      "Ranked top in DSA contests conducted by NxtWave",
      "Hands-on experience in building scalable applications using modern technologies",
    ],
  },
]

export const achievements: Achievement[] = [
  {
    title: "Gold Medalist – Academic Excellence",
    issuer: "CGC Jhanjeri",
    date: "2025",
    description: "Awarded gold medal for outstanding academic performance throughout the B.Tech program.",
  },
  {
    title: "Silver Medalist – Skill India State Level Competition",
    issuer: "Skill India",
    date: "2024",
    description:
      "Secured silver medal in the Industry 4.0 Domain at the state level competition organized by Skill India.",
  },
  {
    title: "Ranked 12th – DSA Contest",
    issuer: "NxtWave",
    date: "2025",
    description: "Secured 12th position in the national level Data Structures and Algorithms contest.",
  },
  {
    title: "1300+ DSA Problems Solved",
    issuer: "Various Coding Platforms",
    date: "2021-2025",
    description:
      "Solved over 1300 Data Structures and Algorithms problems across various coding platforms like LeetCode, HackerRank, and CodeChef.",
  },
  {
    title: "NxtWave Industry-Ready Certification (IRC)",
    issuer: "NxtWave",
    date: "2023",
    description:
      "Completed the Industry-Ready Certification program with distinction, focusing on full-stack development and cloud technologies.",
  },
]

