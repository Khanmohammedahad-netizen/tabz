'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4">
                        Get in <span className="text-gradient-gold">Touch</span>
                    </h1>
                    <p className="text-xl text-charcoal-300">
                        We'd love to hear from you
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <Card glass className="hover:shadow-glow-gold transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-gold-500/10 rounded-lg">
                                        <Phone size={32} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                                        <p className="text-charcoal-300 mb-2">Call us for orders and inquiries</p>
                                        <a href="tel:+919XXXXXXXXX" className="text-gold-500 hover:text-gold-400 transition-colors text-lg">
                                            +91 XXXXX XXXXX
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card glass className="hover:shadow-glow-gold transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-gold-500/10 rounded-lg">
                                        <Mail size={32} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                                        <p className="text-charcoal-300 mb-2">Send us your queries</p>
                                        <a href="mailto:info@tabskitchen.com" className="text-gold-500 hover:text-gold-400 transition-colors">
                                            info@tabskitchen.com
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card glass className="hover:shadow-glow-gold transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-gold-500/10 rounded-lg">
                                        <MapPin size={32} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Location</h3>
                                        <p className="text-charcoal-300">
                                            Hyderabad, Telangana<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card glass className="hover:shadow-glow-gold transition-shadow">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-gold-500/10 rounded-lg">
                                        <Clock size={32} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Hours</h3>
                                        <div className="text-charcoal-300 space-y-1">
                                            <p>Monday - Sunday</p>
                                            <p className="text-gold-500 font-semibold">10:00 AM - 11:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Map Placeholder */}
                    <Card glass>
                        <div className="h-full min-h-[400px] bg-charcoal-800 rounded-lg flex items-center justify-center">
                            <div className="text-center p-8">
                                <MapPin size={64} className="mx-auto mb-4 text-gold-500" />
                                <h3 className="text-2xl font-playfair font-semibold mb-2">Hyderabad</h3>
                                <p className="text-charcoal-400">
                                    Serving premium cloud kitchen food across Hyderabad
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
