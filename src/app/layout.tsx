import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bolu Kukus Semarang | Rasa Klasik, Sentuhan Modern",
  description: "Bolu kukus premium dengan rasa autentik dan tekstur selembut awan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-[#1A1A1A] bg-[#FAFAFA] min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
