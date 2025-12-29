
// Fix: Import React to resolve 'Cannot find namespace React' errors for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}