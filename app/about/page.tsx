'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Award, Heart, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-charcoal-950">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 glass border-b border-charcoal-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="text-2xl font-playfair text-gradient-gold">
                            Tabs Kitchen
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <div className="bg-gradient-royal pt-20 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="featured" className="mb-6">
                        Est. 2024
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4">
                        The Art of <span className="text-gradient-gold">Fine Culinary</span>
                    </h1>
                    <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
                        Bringing authentic flavors and premium dining experiences to Hyderabad
                    </p>
                </div>
            </div>

            {/* Story */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Card glass>
                    <CardContent className="p-10">
                        <h2 className="text-4xl font-playfair font-bold mb-6 text-center">
                            Our <span className="text-gold-500">Story</span>
                        </h2>
                        <div className="space-y-4 text-charcoal-300 leading-relaxed text-lg">
                            <p>
                                Tabs Kitchen was born from a passion for authentic cuisine and a desire to deliver
                                premium culinary experiences directly to your doorstep. We believe that exceptional
                                food should be accessible to everyone, without compromising on quality or taste.
                            </p>
                            <p>
                                From traditional Hyderabadi biryanis that have been perfected over generations, to
                                aromatic Arabian mandi slow-cooked to perfection, every dish at Tabs Kitchen tells
                                a story of heritage, craftsmanship, and love for food.
                            </p>
                            <p>
                                Our team of master chefs brings decades of experience, combining time-honored recipes
                                with modern cooking techniques to create dishes that not only taste extraordinary but
                                also celebrate the rich culinary traditions of Hyderabad and beyond.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-b from-charcoal-950 to-charcoal-900 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                            Our <span className="text-gradient-gold">Values</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card glass className="text-center">
                            <CardContent className="p-8">
                                <div className="inline-block p-6 bg-gold-500/10 rounded-full mb-4">
                                    <Award size={48} className="text-gold-500" />
                                </div>
                                <h3 className="text-2xl font-playfair font-semibold mb-3 text-gold-500">
                                    Quality First
                                </h3>
                                <p className="text-charcoal-300">
                                    We use only the finest ingredients and maintain the highest standards
                                    in every dish we prepare.
                                </p>
                            </CardContent>
                        </Card>

                        <Card glass className="text-center">
                            <CardContent className="p-8">
                                <div className="inline-block p-6 bg-gold-500/10 rounded-full mb-4">
                                    <Heart size={48} className="text-gold-500" />
                                </div>
                                <h3 className="text-2xl font-playfair font-semibold mb-3 text-gold-500">
                                    Made with Love
                                </h3>
                                <p className="text-charcoal-300">
                                    Every dish is prepared with care, passion, and attention to detail
                                    that you can taste in every bite.
                                </p>
                            </CardContent>
                        </Card>

                        <Card glass className="text-center">
                            <CardContent className="p-8">
                                <div className="inline-block p-6 bg-gold-500/10 rounded-full mb-4">
                                    <Users size={48} className="text-gold-500" />
                                </div>
                                <h3 className="text-2xl font-playfair font-semibold mb-3 text-gold-500">
                                    Customer First
                                </h3>
                                <p className="text-charcoal-300">
                                    Your satisfaction is our priority. We're committed to delivering
                                    excellence in every order.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Specialties */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                        Our <span className="text-gradient-gold">Specialties</span>
                    </h2>
                    <p className="text-charcoal-300 text-lg">
                        What makes us unique
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Authentic Hyderabadi Biryani',
                            description: 'Traditional dum-style biryani using age-old recipes and premium basmati rice',
                            icon: '🍛'
                        },
                        {
                            title: 'Arabian Mandi Excellence',
                            description: 'Slow-roasted meats with fragrant rice, prepared in traditional Arabian style',
                            icon: '⭐'
                        },
                        {
                            title: 'Tandoori Mastery',
                            description: 'Expert tandoori cooking with a variety of kebabs and tikkas',
                            icon: '🔥'
                        },
                        {
                            title: 'Royal Desserts',
                            description: 'Traditional Hyderabadi sweets like Qubani ka Meetha and Shahi Tukda',
                            icon: '🍰'
                        },
                    ].map((specialty, idx) => (
                        <Card key={idx} glass className="hover-lift">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="text-5xl">{specialty.icon}</div>
                                <div>
                                    <h3 className="text-xl font-playfair font-semibold mb-2 text-gold-500">
                                        {specialty.title}
                                    </h3>
                                    <p className="text-charcoal-300">{specialty.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
