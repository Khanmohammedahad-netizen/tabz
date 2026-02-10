// Core Types
export type Variant = 'Half' | 'Full' | 'Family' | 'Single' | '2pcs' | '4pcs' | '8pcs' | '5pcs';

export type DietaryType = 'veg' | 'non-veg' | 'seafood' | 'dessert';

export interface MenuItem {
    id: string;
    name: string;
    category: MenuCategory;
    description: string;
    basePrice: number; // Price for default variant
    variants?: {
        type: Variant;
        price: number;
    }[];
    image: string; // Path to AI-generated image
    dietary: DietaryType;
    featured?: boolean;
    popular?: boolean;
    spicyLevel?: 1 | 2 | 3;
    tags?: string[];
}

export type MenuCategory =
    | 'chicken-starters'
    | 'mutton-starters'
    | 'fish-seafood'
    | 'veg-starters'
    | 'chinese-non-veg'
    | 'chinese-veg'
    | 'chicken-curries'
    | 'mutton-curries'
    | 'veg-curries'
    | 'rice-pulao'
    | 'biryani'
    | 'mandi'
    | 'burgers'
    | 'sandwiches'
    | 'wraps'
    | 'fries-nuggets'
    | 'broast'
    | 'desserts'
    | 'party-orders';

export interface CategoryInfo {
    id: MenuCategory;
    name: string;
    description: string;
    icon: string;
    order: number;
}

export interface CartItem {
    menuItem: MenuItem;
    variant?: Variant;
    quantity: number;
    price: number; // Final price for this item (variant price * quantity)
}

export interface Order {
    id: string;
    items: CartItem[];
    customerInfo: {
        name: string;
        phone: string;
        email?: string;
        address: string;
    };
    subtotal: number;
    tax: number;
    deliveryCharge: number;
    total: number;
    status: 'pending' | 'confirmed' | 'preparing' | 'delivered' | 'cancelled';
    createdAt: Date;
    paymentMethod: 'razorpay' | 'upi' | 'whatsapp' | 'call';
    paymentStatus: 'pending' | 'paid' | 'failed';
}

export interface PartyOrderRequest {
    eventType: string;
    guestCount: number;
    eventDate: Date;
    menuPreferences: string;
    specialRequirements?: string;
    contactName: string;
    contactPhone: string;
    contactEmail?: string;
}
