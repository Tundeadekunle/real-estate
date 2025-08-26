import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACE Real Estate",
  description: "Trusted Real Estate in Abeokuta, ACE Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        
      </body>
    </html>
  );
}
import Image from "next/image";   
