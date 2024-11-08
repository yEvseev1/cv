import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Particles from "@/components/common/particles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "yEvseev Resume",
  description: "Information about me as Frontend Developer",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full w-full'>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black  h-full w-full`}
    >
    
    {children}
    </body>
    </html>
  );
}
