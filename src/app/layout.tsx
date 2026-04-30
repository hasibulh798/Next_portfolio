import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GlobalBackground } from "@/components/GlobalBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Hasibul Hasan | Fullstack Developer Portfolio",
  description: "Modern portfolio of a passionate fullstack developer focused on building premium digital experiences.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <Providers>
          <GlobalBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
