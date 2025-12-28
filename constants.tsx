
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
import { Service, Project, Skill, Experience } from './types';

export const ROLES = [
  "Fullstack Developer",
  "UI/UX Motion Designer",
  "Creative Engineer",
  "Product Strategist"
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
    title: 'Technical Consulting',
    description: 'Helping startups choose the right stack and scale their engineering teams effectively.',
    icon: <Cpu className="w-8 h-8 text-emerald-400" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Lumina Dashboard',
    category: 'Saas Platform',
    image: 'https://picsum.photos/seed/lumina/600/400',
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
    title: 'Aura Wallet',
    category: 'Fintech',
    image: 'https://picsum.photos/seed/aura/600/400',
    link: '#',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, icon: 'https://cdn.simpleicons.org/react' },
  { name: 'TypeScript', level: 90, icon: 'https://cdn.simpleicons.org/typescript' },
  { name: 'Tailwind CSS', level: 95, icon: 'https://cdn.simpleicons.org/tailwindcss' },
  { name: 'Framer Motion', level: 85, icon: 'https://cdn.simpleicons.org/framer' },
  { name: 'Node.js', level: 80, icon: 'https://cdn.simpleicons.org/node.js' },
  { name: 'PostgreSQL', level: 75, icon: 'https://cdn.simpleicons.org/postgresql' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechFlow Systems',
    role: 'Senior Frontend Engineer',
    period: '2022 - Present',
    description: 'Leading the development of a next-generation data visualization platform using React and D3.',
  },
  {
    company: 'Creative Pixel Agency',
    role: 'UI/UX Developer',
    period: '2020 - 2022',
    description: 'Crafted award-winning marketing sites and interactive prototypes for international clients.',
  },
  {
    company: 'Spark Startup Lab',
    role: 'Junior Web Developer',
    period: '2018 - 2020',
    description: 'Built and maintained internal tools and customer-facing dashboards for early-stage startups.',
  },
];

export const SOCIALS = [
  { icon: <Github className="w-6 h-6" />, href: '#', label: 'GitHub' },
  { icon: <Linkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn' },
  { icon: <Twitter className="w-6 h-6" />, href: '#', label: 'Twitter' },
  { icon: <Mail className="w-6 h-6" />, href: '#', label: 'Email' },
];
