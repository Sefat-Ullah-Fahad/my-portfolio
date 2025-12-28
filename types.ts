
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface Service {
  title: string;
  description: string;
  // Added React namespace via import to resolve 'Cannot find namespace React' error
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
