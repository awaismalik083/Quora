import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { CartProvider } from "./context/Context";
import Cart from "./components/Cart"

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quora-Smart Home",
  description: "Quora-Smart Home",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`min-h-full flex flex-col ${urbanist.variable}`}
        suppressHydrationWarning
      >
        <CartProvider>
          <Cart/>
          {children}
          </CartProvider>
      </body>
    </html>
  );
}