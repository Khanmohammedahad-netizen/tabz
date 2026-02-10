import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    glass?: boolean;
    hover3d?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, glass = false, hover3d = false }) => {
    const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
    const glassStyles = glass ? 'glass' : 'bg-charcoal-900 border border-charcoal-800';
    const hoverStyles = hover3d ? 'hover-lift hover:shadow-royal cursor-pointer' : '';

    return (
        <div className={cn(baseStyles, glassStyles, hoverStyles, className)}>
            {children}
        </div>
    );
};

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className }) => {
    return (
        <div className={cn('relative overflow-hidden', className)}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
        </div>
    );
};

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
    return (
        <div className={cn('p-4 md:p-6', className)}>
            {children}
        </div>
    );
};
