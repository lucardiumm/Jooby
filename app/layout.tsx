import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"], weight: '500' })

export const metadata: Metadata = {
  title: 'Jooble',
  description: 'Consegui el puesto de trabajo de tus sueños en las mejores empresas!',
};

export const viewport: Viewport = {
  userScalable: false,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
