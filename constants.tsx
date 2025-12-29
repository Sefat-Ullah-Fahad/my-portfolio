
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
    title: 'Lumina Dashboard',
    category: 'Saas Platform',
    image: '',
    link: '#',
  },
  {
    id: 2,
    title: 'Nexus AI',
    category: 'Artificial Intelligence',
    image: 'https://picsum.photos/seed/nexus/600/400',
    link: '#',
  },
  {
    id: 3,
    title: 'Echo Commerce',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/echo/600/400',
    link: '#',
  },
  {
    id: 4,
    title: 'GreenNest',
    category: 'Home & Garden',
    image: 'https://picsum.photos/seed/aura/600/400',
    link: '#',
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
  { icon: <Github className="w-6 h-6" />, href: '#', label: 'GitHub' },
  { icon: <Linkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn' },
  { icon: <Twitter className="w-6 h-6" />, href: '#', label: 'Twitter' },
  { icon: <Mail className="w-6 h-6" />, href: '#', label: 'Email' },
];
