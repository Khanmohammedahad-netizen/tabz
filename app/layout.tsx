import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tabs Kitchen - The Art of Fine Culinary | Hyderabad",
  description: "Experience premium cloud kitchen dining in Hyderabad. Order authentic Hyderabadi biryani, kebabs, mandi, and more. Direct delivery from Tabs Kitchen.",
  keywords: "Tabs Kitchen, cloud kitchen Hyderabad, Hyderabadi biryani, mandi, kebabs, online food order, premium dining",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-charcoal-950 text-charcoal-100 font-inter">
        {children}
      </body>
    </html>
  );
}
