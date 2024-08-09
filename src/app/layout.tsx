import type { Metadata } from "next";
import { inter } from "@/config/font";


import "./globals.css";
import { Provider } from "@/components";


export const metadata: Metadata = {
  title: {
    template: '%s - Teslo | Shop',
    default: 'Home - Teslo | Shop'
  },
  description: "Tienda virtual de productos",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {


  return (
    <html lang="es">
      <body className={inter.className}>
        <Provider>
        
          {children}

        </Provider>
      </body>
    </html>
  );

}
