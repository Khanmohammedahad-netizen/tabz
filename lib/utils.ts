import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
    return `₹${price}`;
}

export function formatSpicyLevel(level: 1 | 2 | 3): string {
    return '🌶️'.repeat(level);
}
