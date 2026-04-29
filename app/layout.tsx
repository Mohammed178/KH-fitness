import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KH Fitness Cyberjaya — 24/7 Boutique Gym",
  description:
    "Cyberjaya's exclusive 24-hour boutique gym. Premium equipment from Precor, Ziva, Torque Fitness and Hampton.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
