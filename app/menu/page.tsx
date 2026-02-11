'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DietaryBadge, Badge } from '@/components/ui/Badge';
import { Search, ShoppingCart, Star, TrendingUp, Flame } from 'lucide-react';
import Link from 'next/link';
import menuData from '@/data/menuData.json';
import { MenuItem as MenuItemType, MenuCategory, DietaryType } from '@/types';

export default function MenuPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
    const [dietaryFilter, setDietaryFilter] = useState<DietaryType | 'all'>('all');

    const { categories, items } = menuData;

    // Filter items
    const filteredItems = useMemo(() => {
        return (items as MenuItemType[]).filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
            const matchesDietary = dietaryFilter === 'all' || item.dietary === dietaryFilter;

            return matchesSearch && matchesCategory && matchesDietary;
        });
    }, [items, searchQuery, selectedCategory, dietaryFilter]);

    // Group items by category
    const itemsByCategory = useMemo(() => {
        const grouped = new Map<string, MenuItemType[]>();
        filteredItems.forEach(item => {
            if (!grouped.has(item.category)) {
                grouped.set(item.category, []);
            }
            grouped.get(item.category)!.push(item);
        });
        return grouped;
    }, [filteredItems]);

    return (
        <div className="min-h-screen bg-charcoal-950">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 glass border-b border-charcoal-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="text-2xl font-playfair text-gradient-gold">
                            Tabs Kitchen
                        </Link>
                        <div className="flex items-center gap-4">
                            <Button size="sm" variant="outline">
                                <ShoppingCart size={18} className="mr-2" />
                                Cart (0)
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-gradient-royal pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4">
                        Our <span className="text-gradient-gold">Menu</span>
                    </h1>
                    <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
                        Explore 100+ premium dishes crafted with passion
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="sticky top-16 z-40 glass border-b border-charcoal-800/50 px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search dishes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 transition-colors"
                            />
                        </div>

                        {/* Category Filter */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value as MenuCategory | 'all')}
                            className="px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 focus:outline-none focus:border-gold-500 transition-colors"
                        >
                            <option value="all">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>

                        {/* Dietary Filter */}
                        <select
                            value={dietaryFilter}
                            onChange={(e) => setDietaryFilter(e.target.value as DietaryType | 'all')}
                            className="px-4 py-2 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 focus:outline-none focus:border-gold-500 transition-colors"
                        >
                            <option value="all">All Types</option>
                            <option value="veg">Vegetarian</option>
                            <option value="non-veg">Non-Veg</option>
                            <option value="seafood">Seafood</option>
                            <option value="dessert">Desserts</option>
                        </select>
                    </div>

                    <div className="mt-4 text-sm text-charcoal-400">
                        Showing {filteredItems.length} {filteredItems.length === 1 ? 'dish' : 'dishes'}
                    </div>
                </div>
            </div>

            {/* Menu Items */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {categories
                    .filter(cat => itemsByCategory.has(cat.id))
                    .map(category => {
                        const categoryItems = itemsByCategory.get(category.id) || [];
                        if (categoryItems.length === 0) return null;

                        return (
                            <div key={category.id} id={category.id} className="mb-16">
                                {/* Category Header */}
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-2">
                                        {category.name}
                                    </h2>
                                    <p className="text-charcoal-400">{category.description}</p>
                                </div>

                                {/* Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryItems.map((item) => (
                                        <Card key={item.id} hover3d className="group cursor-pointer overflow-hidden">
                                            {/* Item Image */}
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent"></div>

                                                {/* Badges Overlay */}
                                                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                                    <DietaryBadge type={item.dietary} />
                                                    {item.popular && (
                                                        <Badge variant="popular" className="text-xs flex items-center gap-1">
                                                            <TrendingUp size={12} /> Popular
                                                        </Badge>
                                                    )}
                                                    {item.featured && (
                                                        <Badge variant="featured" className="text-xs flex items-center gap-1">
                                                            <Star size={12} /> Featured
                                                        </Badge>
                                                    )}
                                                </div>

                                                {/* Spicy Level */}
                                                {item.spicyLevel && item.spicyLevel > 0 && (
                                                    <div className="absolute top-3 right-3">
                                                        <Badge variant="spicy" className="text-xs flex items-center gap-1">
                                                            <Flame size={12} /> {item.spicyLevel}
                                                        </Badge>
                                                    </div>
                                                )}
                                            </div>

                                            <CardContent className="p-5">
                                                <h3 className="text-lg font-playfair font-semibold mb-2 group-hover:text-gold-500 transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-charcoal-400 mb-4 line-clamp-2">
                                                    {item.description}
                                                </p>

                                                {/* Variants & Pricing */}
                                                {item.variants && item.variants.length > 0 ? (
                                                    <div className="space-y-2 mb-4">
                                                        {item.variants.map((variant, idx) => (
                                                            <div key={idx} className="flex justify-between items-center text-sm">
                                                                <span className="text-charcoal-300">{variant.type}</span>
                                                                <span className="font-semibold text-gold-500">₹{variant.price}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="text-2xl font-bold text-gold-500 mb-4">
                                                        ₹{item.basePrice}
                                                    </div>
                                                )}

                                                <Button size="sm" variant="primary" className="w-full">
                                                    Add to Cart
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                {/* No Results */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <Search className="mx-auto mb-4 text-charcoal-600" size={64} />
                        <h3 className="text-2xl font-playfair font-semibold mb-2">No dishes found</h3>
                        <p className="text-charcoal-400">Try adjusting your filters or search query</p>
                    </div>
                )}
            </div>
        </div>
    );
}
