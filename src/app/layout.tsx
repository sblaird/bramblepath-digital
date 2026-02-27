import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bramblepath Digital | Building Tools That Teach",
  description:
    "Bramblepath Digital is a software studio creating AI-powered educational tools. Home of DecodiVerse — personalized storybooks grounded in the Science of Reading.",
  keywords: [
    "Bramblepath Digital",
    "DecodiVerse",
    "AI education",
    "phonics",
    "Science of Reading",
    "personalized learning",
  ],
  openGraph: {
    title: "Bramblepath Digital | Building Tools That Teach",
    description:
      "AI-powered educational tools grounded in research. Home of DecodiVerse.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
