import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-charcoal-950 text-charcoal-100">
        {children}
      </body>
    </html>
  );
}
