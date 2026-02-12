'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Phone, MapPin, Clock, Flame, Star, Utensils, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    // 3D Card Animations - trigger once only
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          rotateX: -15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            once: true, // Only animate once
          },
        }
      );
    });

    // Parallax for images - smoother on mobile
    const images = document.querySelectorAll('.parallax-image');
    images.forEach((img) => {
      gsap.to(img, {
        y: -30, // Reduced movement for mobile
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    // Stagger fade-in for text elements - once only
    gsap.fromTo(
      '.stagger-text',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.stagger-text',
          start: 'top bottom-=50',
          once: true, // Only animate once
        },
      }
    );
  }, []);

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

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-royal-dark"></div>
        <div className="absolute inset-0 bg-fire-gradient opacity-30"></div>

        {/* Floating Food Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-10 opacity-20"
        >
          <Flame className="text-gold-500" size={100} />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Badge variant="featured" className="mb-6 text-sm md:text-base">
              <Sparkles className="inline mr-2" size={16} />
              Now Delivering Premium Culinary Excellence
            </Badge>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 text-shadow"
            >
              The Art of
              <span className="block text-gradient-gold mt-2">Fine Culinary</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-charcoal-300 max-w-2xl mx-auto mb-12"
            >
              Experience Hyderabad's finest cloud kitchen. From authentic Hyderabadi biryani to Arabian mandi,
              every dish is a royal feast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/menu">
                <Button size="lg" variant="primary" className="group">
                  Explore Menu
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Phone className="mr-2" size={20} />
                Call to Order
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-gold-500 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Categories with 3D Effects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 stagger-text">
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
                icon: Star,
                color: 'gold',
                image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80'
              },
              {
                title: 'Arabian Mandi',
                description: 'Slow-roasted perfection',
                icon: Utensils,
                color: 'orange',
                image: 'https://images.unsplash.com/photo-1645177628172-a94c30a5f136?w=800&q=80'
              },
              {
                title: 'Kebabs & Tikka',
                description: 'Tandoori masterpieces',
                icon: Flame,
                color: 'red',
                image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80'
              },
              {
                title: 'Royal Desserts',
                description: 'Sweet indulgence',
                icon: Sparkles,
                color: 'pink',
                image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80'
              }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="animate-card"
                >
                  <Card hover3d glass className="group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover parallax-image group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Icon className="text-gold-500 mb-2" size={32} />
                        <h3 className="text-xl font-playfair font-semibold text-white mb-1">
                          {category.title}
                        </h3>
                        <p className="text-charcoal-300 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Dishes with Real Images */}
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
                price: 130,
                dietary: 'non-veg' as const,
                popular: true,
                featured: false,
                spicy: 2,
                image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80'
              },
              {
                name: 'Mutton Boti Kebab',
                price: 330,
                dietary: 'non-veg' as const,
                popular: false,
                featured: true,
                spicy: 2,
                image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80'
              },
              {
                name: 'Paneer Butter Masala',
                price: 225,
                dietary: 'veg' as const,
                popular: true,
                featured: false,
                spicy: 1,
                image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80'
              }
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="animate-card"
              >
                <Card hover3d className="group cursor-pointer overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover parallax-image group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      {dish.popular && (
                        <Badge variant="popular" className="text-xs">
                          Popular
                        </Badge>
                      )}
                      {dish.featured && (
                        <Badge variant="featured" className="text-xs">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="spicy" className="text-xs">
                        {'🌶️'.repeat(dish.spicy)}
                      </Badge>
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
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <Button size="lg" variant="outline">
                View Full Menu
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
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
                icon: Flame,
                title: 'Fresh & Hot',
                description: 'Every dish prepared fresh to order with premium ingredients'
              },
              {
                icon: Utensils,
                title: 'Master Chefs',
                description: 'Experienced chefs bringing authentic flavors to your table'
              },
              {
                icon: Sparkles,
                title: 'Fast Delivery',
                description: 'Quick and reliable delivery straight to your doorstep'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="animate-card"
                >
                  <Card glass className="text-center p-8 hover:shadow-glow-gold transition-shadow duration-300">
                    <Icon className="text-gold-500 mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-playfair font-semibold mb-3 text-gold-500">
                      {feature.title}
                    </h3>
                    <p className="text-charcoal-300">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-charcoal-900 to-charcoal-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
          >
            Ready to Experience
            <span className="block text-gradient-gold mt-2">Fine Culinary?</span>
          </motion.h2>
          <p className="text-xl text-charcoal-300 mb-10">
            Order now and taste the difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary" className="group">
              Order Now via WhatsApp
              <Phone className="ml-2" size={20} />
            </Button>
            <Link href="/menu">
              <Button size="lg" variant="outline">
                View Menu
              </Button>
            </Link>
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
