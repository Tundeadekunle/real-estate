// import type { Metadata } from "next";
// import "./globals.css";
// import WhatsAppChat from "../components/WhatsAppChat";

// export const metadata: Metadata = {
//   title: "ACE Real Estate",
//   description: "Trusted Real Estate in Abeokuta, ACE Real Estate",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="font-sans flex flex-col min-h-screen">
//         {/* Main Content */}
//         <main className="flex-grow">{children}</main>
// <div className="fixed bottom-6 right-6 z-50">
//           <WhatsAppChat />
//         </div>
//         {/* Footer */}
        
//       </body>
//     </html>
//   );
// }
 
















import type { Metadata } from "next";
import "./globals.css";
import WhatsAppChat from "../components/WhatsAppChat";

export const metadata: Metadata = {
  title: "IAS Unique Homes",
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
        {/* WhatsApp Chat Floating Button */}
        <div className="fixed bottom-6 right-6 z-[9999]">
          <WhatsAppChat />
        </div>
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        {/* Footer (add here if needed) */}
      </body>
    </html>
  );
}