import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PersonaForge AI | Stop Building on Assumptions",
  description: "AI-native customer discovery platform for B2B SaaS founders. Simulate interviews with synthetic enterprise buyers to validate product-market fit before building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}