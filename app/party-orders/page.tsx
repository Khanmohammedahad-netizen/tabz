'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Phone, Mail, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PartyOrdersPage() {
    const [formData, setFormData] = useState({
        eventType: '',
        guestCount: '',
        eventDate: '',
        menuPreferences: '',
        specialRequirements: '',
        contactName: '',
        contactPhone: '',
        contactEmail: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For V1, open WhatsApp with pre-filled message
        const message = `Party Order Request:\nEvent: ${formData.eventType}\nGuests: ${formData.guestCount}\nDate: ${formData.eventDate}\nPreferences: ${formData.menuPreferences}\nName: ${formData.contactName}\nPhone: ${formData.contactPhone}`;
        const whatsappUrl = `https://wa.me/919XXXXXXXXX?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

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
                        Party & <span className="text-gradient-gold">Bulk Orders</span>
                    </h1>
                    <p className="text-xl text-charcoal-300">
                        Make your celebrations unforgettable with our premium catering
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <Card glass>
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-playfair font-bold mb-6">Request a Quote</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Event Type</label>
                                    <input
                                        type="text"
                                        placeholder="Birthday, Corporate Event, Wedding..."
                                        value={formData.eventType}
                                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                                        className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Guest Count</label>
                                        <input
                                            type="number"
                                            placeholder="50"
                                            value={formData.guestCount}
                                            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                                            className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Event Date</label>
                                        <input
                                            type="date"
                                            value={formData.eventDate}
                                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                                            className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 focus:outline-none focus:border-gold-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Menu Preferences</label>
                                    <textarea
                                        placeholder="Biryani, Kebabs, Desserts..."
                                        value={formData.menuPreferences}
                                        onChange={(e) => setFormData({ ...formData, menuPreferences: e.target.value })}
                                        className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 h-24 resize-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Special Requirements</label>
                                    <textarea
                                        placeholder="Any dietary restrictions or special requests"
                                        value={formData.specialRequirements}
                                        onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                                        className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 h-24 resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        value={formData.contactName}
                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                        className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.contactPhone}
                                            onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                                            className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email (Optional)</label>
                                        <input
                                            type="email"
                                            value={formData.contactEmail}
                                            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                            className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500"
                                        />
                                    </div>
                                </div>

                                <Button type="submit" size="lg" variant="primary" className="w-full">
                                    <Phone className="mr-2" size={20} />
                                    Send via WhatsApp
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Info */}
                    <div className="space-y-8">
                        <Card glass>
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-playfair font-bold mb-6 text-gold-500">
                                    Popular Party Packages
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Birthday Special', serves: '20-30 guests', price: '₹8,999+' },
                                        { name: 'Corporate Lunch', serves: '50-75 guests', price: '₹18,999+' },
                                        { name: 'Wedding Feast', serves: '100+ guests', price: 'Custom Quote' },
                                    ].map((pkg, idx) => (
                                        <div key={idx} className="p-4 bg-charcoal-800/50 rounded-lg border border-charcoal-700">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-lg">{pkg.name}</h4>
                                                <span className="text-gold-500 font-bold">{pkg.price}</span>
                                            </div>
                                            <p className="text-sm text-charcoal-400">Serves {pkg.serves}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card glass>
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-playfair font-bold mb-6 text-gold-500">
                                    What's Included
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Customized menu based on your preferences',
                                        'Fresh preparation on the day of event',
                                        'Premium packaging and presentation',
                                        'Flexible delivery timing',
                                        'Dedicated support team',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-gold-500 mt-1">✓</span>
                                            <span className="text-charcoal-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card glass>
                            <CardContent className="p-8 text-center">
                                <Phone size={48} className="mx-auto mb-4 text-gold-500" />
                                <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                                <p className="text-charcoal-400 mb-4">
                                    Call us directly for immediate assistance
                                </p>
                                <Button variant="outline" size="lg">
                                    <Phone className="mr-2" size={20} />
                                    +91 XXXXX XXXXX
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
