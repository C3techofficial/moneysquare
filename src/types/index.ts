import type { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'outline';
export type SectionAlign = 'left' | 'center';

export interface NavigationItem { label: string; href: string }
export interface Service { title: string; description: string; icon: LucideIcon; href: string; category: string }
export interface ExchangeService { title: string; text: string; icon: LucideIcon; href: string }
export interface ProcessStep { number: string; title: string; text: string }
export interface ButtonProps { children: React.ReactNode; href?: string; variant?: ButtonVariant; onClick?: () => void }
