
import React from 'react';
import { 
  Code2, 
  Palette, 
  Globe, 
  Cpu, 
  Layout, 
  Figma, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import { FaWordpress } from "react-icons/fa";
import { Service, Project, Skill, Experience } from './types';

export const ROLES = [
  "Frontend Developer",
  "UI/UX Designer",
  "Backend Developer",
  "WordPress Developer"
];

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Building high-performance, scalable web applications with the latest technologies.',
    icon: <Code2 className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and aesthetically pleasing digital experiences focused on conversion.',
    icon: <Palette className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'Interaction Design',
    description: 'Adding life to your products with smooth, premium animations and transitions.',
    icon: <Layout className="w-8 h-8 text-pink-400" />,
  },
 {
  title: 'WordPress Development',
  description: 'Building custom WordPress websites, themes, and plugins with a focus on performance, security, and scalability.',
  icon: <FaWordpress className="w-8 h-8 text-emerald-400" />,
}
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Care.IO',
    category: 'Healthcare Technology',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1767071803/Care-IO-Trusted-Family-Care-Services-12-30-2025_11_11_AM_zewqln.png',
    link: ' https://inquisitive-croissant-2a4d5f.netlify.app/',
  },
  {
    id: 2,
    title: 'Bill Management',
    category: 'Bill Payment & Utility Management',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1767072717/Home-Utility-Bill-System-12-30-2025_11_31_AM_c5uj4a.png',
    link: 'https://heartfelt-seahorse-19e34d.netlify.app/',
  },
  {
    id: 3,
    title: 'App Development',
    category: 'App Development Agency Website',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1767071796/hero-app-12-29-2025_08_10_PM_eqfiea.png',
    link: 'https://genuine-raindrop-132830.netlify.app/',
  },
  {
    id: 4,
    title: 'GreenNest',
    category: 'Home & Garden',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1767071806/green-nest-12-29-2025_08_10_PM_lxdzfe.png',
    link: 'https://rad-macaron-4adb07.netlify.app/',
  },
];

export const SKILLS: Skill[] = [
  
  { name: 'WordPress', level: 90, icon: 'https://cdn.simpleicons.org/wordpress' },
  { name: 'React / Next.js', level: 95, icon: 'https://cdn.simpleicons.org/react' },
  { name: 'Tailwind CSS', level: 95, icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Framer Motion', level: 85, icon: 'https://cdn.simpleicons.org/framer' },
  { name: 'Node.js', level: 80, icon: 'https://cdn.simpleicons.org/node.js' },
   { name: 'Mongodb', level: 90, icon: 'https://cdn.simpleicons.org/mongodb' },
 
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Exprovia', // এখানে তোমার কোম্পানি নাম লিখবে
    role: 'Full Stack Web Developer',
    period: '2026 – Present',
    description: `
      - Building responsive and dynamic web applications using React, Next.js, TailwindCSS, and DaisyUI.
      - Developing REST APIs and backend services with Node.js & Express.js.
      - Designing and managing MongoDB databases for scalable applications.
      - Implementing authentication, CRUD features, and reusable UI components.
      - Delivering end-to-end full stack projects from frontend to backend.
      - Using Git & GitHub for version control and team collaboration.
      - Optimizing code for performance, scalability, and maintainability.
    `,
  },
  {
    company: 'Programming Hero',
    role: 'Web Development Trainee',
    period: 'June 2025 – December 2025',
    description: `
      - HTML, CSS, JavaScript foundation.
      - Responsive design implementation.
    `,
  },
  {
    company: 'Coders Foundation',
    role: 'Advance WordPress Development Trainee',
    period: '2024 – 2024',
    description: `
      - Advanced WordPress customization.
      - Theme & plugin development fundamentals.
      - WooCommerce setup and optimization.
    `,
  },
];


export const SOCIALS = [
  { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Sefat-Ullah-Fahad', label: 'GitHub' },
  { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/md-fahad-3a0910396/', label: 'LinkedIn' },
  
 
];
