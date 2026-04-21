import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Autumn Munz | UX & Product Design Portfolio",
  description: "UX designer passionate about interface design and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
