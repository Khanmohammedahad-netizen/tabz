# Tabs Kitchen - Immersive 3D Cloud Kitchen Website

A premium, cinematic website for Tabs Kitchen, Hyderabad's finest cloud kitchen. Built with Next.js 14, featuring a royal design aesthetic with 3D food visuals and seamless ordering experience.

## 🌟 Features

- **Premium Design**: Dark theme with royal gold accents, glassmorphism, and smooth animations
- **Complete Menu**: 100+ dishes across 19 categories (Biryani, Mandi, Kebabs, Curries, and more)
- **Smart Filtering**: Search and filter by category, dietary preferences (Veg/Non-Veg/Seafood)
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Party Orders**: Custom quote system for bulk and catering orders
- **WhatsApp Integration**: Direct ordering via WhatsApp (V1 approach)
- **Payment Ready**: Infrastructure ready for Razorpay integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone or navigate to the project:
```bash
cd C:\Users\ahad\.gemini\antigravity\scratch\tabs-kitchen
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local with your actual values
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
tabs-kitchen/
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # Homepage
│   ├── menu/              # Full menu page
│   ├── party-orders/      # Party order form
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   └── menu/              # Menu-specific components
├── data/
│   └── menuData.json      # Complete menu database
├── types/                 # TypeScript definitions
├── lib/                   # Utilities
└── public/                # Static assets
```

## 🎨 Design System

### Colors
- **Charcoal Black**: `#1a1a1a` - Primary background
- **Royal Gold**: `#d4af37` - Accent and highlights
- **Warm Orange**: `#ff6b35` - CTAs and energy

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, clean)

### Effects
- Glassmorphism with backdrop blur
- Gold glow effects on hover
- Smooth scroll animations
- 3D card lift effects

## 🍽️ Menu Data

The complete menu is stored in `/data/menuData.json` with:
- 111 menu items across 19 categories
- Variant pricing (Half/Full/Family)
- Dietary tags (Veg/Non-Veg/Seafood)
- Popular and featured flags
- Spicy level indicators

To update menu:
1. Edit `data/menuData.json`
2. Update prices, add/remove items
3. Changes reflect immediately (no rebuild needed)

## 📱 WhatsApp Ordering (V1)

Current implementation uses WhatsApp for orders:
- Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`
- Party order form pre-fills WhatsApp message
- Direct "Order Now" buttons link to WhatsApp

## 💳 Payment Integration (V2 Ready)

The codebase is structured for Razorpay integration:
1. Add Razorpay credentials to `.env.local`
2. Implement checkout flow in `/components/checkout/`
3. Backend order storage required

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

## 📝 Next Steps (V2 Enhancements)

1. **AI Food Images**: Generate realistic food photos for each dish
2. **GSAP Animations**: Add scroll-triggered animations on homepage
3. **Cart State Management**: Full shopping cart with localStorage
4. **Razorpay Integration**: Live payment processing
5. **Order Backend**: Database for order management
6. **3D Models**: Spline or Three.js for hero dishes
7. **Admin Panel**: CMS for menu updates

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion, GSAP (ready)
- **Payment**: Razorpay (infrastructure ready)

## 📧 Contact

**Tabs Kitchen**
- Location: Hyderabad, Telangana
- Phone: +91 XXXXX XXXXX
- Email: info@tabskitchen.com
- Hours: 10:00 AM - 11:00 PM (Daily)

---

**The Art of Fine Culinary** 🍽️✨
