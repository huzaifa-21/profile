import type { Metadata } from "next";
import { Outfit, Pattaya } from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
config.autoAddCss = false

const outfit = Outfit({
  subsets: ["latin"],
  display: "block",
});

const pattaya = Pattaya({
  subsets: ["latin"],
  weight:["400"]
})

export const metadata: Metadata = {
  title: "Huzaifa Ali",
  description: "Generated by create next app",
  icons: [
    {
      url: "/Vector-4.svg",
      sizes: "250x250",
      type: "image/jpeg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${pattaya.className}${outfit.className} selection:text-secondaryColor bg-backgroundColor`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
