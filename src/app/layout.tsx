import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team 12 — AI Native Enterprise Lab",
  description: "Welcome to Team 12's AI Native Enterprise Lab project",
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