'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardImage } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-charcoal-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-playfair text-gradient-gold">
                Tabs Kitchen
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/menu" className="text-charcoal-100 hover:text-gold-500 transition-colors">Menu</Link>
              <Link href="/party-orders" className="text-charcoal-100 hover:text-gold-500 transition-colors">Party Orders</Link>
              <Link href="/about" className="text-charcoal-100 hover:text-gold-500 transition-colors">About</Link>
              <Button size="sm" variant="primary">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-royal-dark"></div>
        <div className="absolute inset-0 bg-fire-gradient opacity-30"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge variant="featured" className="mb-6 text-sm md:text-base">
              ✨ Now Delivering Premium Culinary Excellence
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 text-shadow">
              The Art of
              <span className="block text-gradient-gold mt-2">Fine Culinary</span>
            </h1>

            <p className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-12">
              Experience Hyderabad's finest cloud kitchen. From authentic Hyderabadi biryani to Arabian mandi,
              every dish is a royal feast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" className="group">
                Explore Menu
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2" size={20} />
                Call to Order
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-gold-500 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Signature <span className="text-gradient-gold">Collections</span>
            </h2>
            <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
              Explore our curated selection of premium dishes, crafted with passion and served with pride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Hyderabadi Biryani',
                description: 'Authentic dum biryani',
                icon: '👑',
                color: 'gold'
              },
              {
                title: 'Arabian Mandi',
                description: 'Slow-roasted perfection',
                icon: '⭐',
                color: 'orange'
              },
              {
                title: 'Kebabs & Tikka',
                description: 'Tandoori masterpieces',
                icon: '🔥',
                color: 'red'
              },
              {
                title: 'Royal Desserts',
                description: 'Sweet indulgence',
                icon: '🍰',
                color: 'pink'
              }
            ].map((category, index) => (
              <Card key={index} hover3d glass className="group">
                <CardContent className="text-center p-8">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-gold-500 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-charcoal-400 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-charcoal-950 to-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Customer <span className="text-gradient-gold">Favorites</span>
            </h2>
            <p className="text-charcoal-300 text-lg">
              Our most-loved dishes that keep customers coming back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Chicken Biryani',
                price: 199,
                dietary: 'non-veg' as const,
                tags: ['🏆 Popular', '🌶️🌶️'],
                image: '🍛'
              },
              {
                name: 'Mutton Boti Kebab',
                price: 429,
                dietary: 'non-veg' as const,
                tags: ['⭐ Featured', '🌶️🌶️'],
                image: '🍖'
              },
              {
                name: 'Paneer Butter Masala',
                price: 239,
                dietary: 'veg' as const,
                tags: ['🏆 Popular', '🌶️'],
                image: '🥘'
              }
            ].map((dish, index) => (
              <Card key={index} hover3d className="group cursor-pointer">
                <div className="relative h-64 bg-gradient-to-br from-charcoal-800 to-charcoal-900 flex items-center justify-center">
                  <div className="text-9xl group-hover:scale-110 transition-transform duration-500">
                    {dish.image}
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {dish.tags.map((tag, i) => (
                      <Badge key={i} variant="featured" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-playfair font-semibold group-hover:text-gold-500 transition-colors">
                      {dish.name}
                    </h3>
                    <Badge variant={dish.dietary} className="text-xs">
                      {dish.dietary === 'veg' ? '🌿 Veg' : '🍗 Non-Veg'}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gold-500">₹{dish.price}</span>
                    <Button size="sm" variant="primary">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View Full Menu
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Why <span className="text-gradient-gold">Tabs Kitchen</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: 'Fresh & Hot',
                description: 'Every dish prepared fresh to order with premium ingredients'
              },
              {
                icon: '👨‍🍳',
                title: 'Master Chefs',
                description: 'Experienced chefs bringing authentic flavors to your table'
              },
              {
                icon: '⚡',
                title: 'Fast Delivery',
                description: 'Quick and reliable delivery straight to your doorstep'
              }
            ].map((feature, index) => (
              <Card key={index} glass className="text-center p-8">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-playfair font-semibold mb-3 text-gold-500">
                  {feature.title}
                </h3>
                <p className="text-charcoal-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-charcoal-900 to-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Ready to Experience
            <span className="block text-gradient-gold mt-2">Fine Culinary?</span>
          </h2>
          <p className="text-xl text-charcoal-300 mb-10">
            Order now and taste the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" className="group">
              Order Now via WhatsApp
              <Phone className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-950 border-t border-charcoal-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-playfair text-gradient-gold mb-4">Tabs Kitchen</h3>
              <p className="text-charcoal-400">The Art of Fine Culinary</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gold-500">Quick Links</h4>
              <ul className="space-y-2 text-charcoal-400">
                <li><Link href="/menu" className="hover:text-gold-500 transition-colors">Menu</Link></li>
                <li><Link href="/party-orders" className="hover:text-gold-500 transition-colors">Party Orders</Link></li>
                <li><Link href="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gold-500">Contact</h4>
              <ul className="space-y-3 text-charcoal-400">
                <li className="flex items-center gap-2">
                  <MapPin size={18} className="text-gold-500" />
                  <span>Hyderabad, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-gold-500" />
                  <span>+91 XXXXX XXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={18} className="text-gold-500" />
                  <span>10:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-charcoal-800 text-center text-charcoal-500">
            <p>© 2026 Tabs Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
