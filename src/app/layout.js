import { Nunito_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import Paris2024 from "next/font/local";
import "./globals.css";

// Importando as fontes
const nunitoSans = Nunito_Sans({
  weight: ["400", "500"],
  variable: "--font-nunito-sans",
});

const paris2024 = Paris2024({
  src: "../../public/fonts/Paris2024-Variable.ttf",
  variable: "--font-paris2024",
});

const inter = Inter({
  weight: "400",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${paris2024.variable}`}>
      <body>{children}</body>
    </html>
  );
}
