import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'veg' | 'non-veg' | 'seafood' | 'popular' | 'featured' | 'new' | 'spicy';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'veg', className }) => {
    const variants = {
        veg: 'bg-green-500/20 text-green-400 border-green-500/30',
        'non-veg': 'bg-red-500/20 text-red-400 border-red-500/30',
        seafood: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        popular: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
        featured: 'bg-gradient-gold text-charcoal-950 border-0',
        new: 'bg-warmOrange-500/20 text-warmOrange-400 border-warmOrange-500/30',
        spicy: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    };

    return (
        <span className={cn(
            'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};

interface DietaryBadgeProps {
    type: 'veg' | 'non-veg' | 'seafood' | 'dessert';
    className?: string;
}

export const DietaryBadge: React.FC<DietaryBadgeProps> = ({ type, className }) => {
    const icons = {
        veg: '🌿',
        'non-veg': '🍗',
        seafood: '🐟',
        dessert: '🍰',
    };

    const labels = {
        veg: 'Veg',
        'non-veg': 'Non-Veg',
        seafood: 'Seafood',
        dessert: 'Dessert',
    };

    return (
        <Badge variant={type === 'dessert' ? 'featured' : type} className={className}>
            <span className="mr-1">{icons[type]}</span>
            {labels[type]}
        </Badge>
    );
};
