import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "./components/Nav";
import Minymon from "./components/Minymon";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Autumn Munz | UX & Product Design Portfolio",
  description:
    "UX designer passionate about interface design and functionality.",
  icons: {
    icon: "/icons/initial-icon.png?v=2",
    shortcut: "/icons/initial-icon.png?v=2",
    apple: "/icons/initial-icon.png?v=2",
  },
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
        <Minymon />
      </body>
    </html>
  );
}