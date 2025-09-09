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

export const metadata = {
  title: "Pompolimpíadas | Cátia Damasceno",
  description:
    "Entrando no ritmo das Olimpíadas, eu vou realizar uma superaula, onde eu vou ensinar todos os exercícios do meu curso de Ginástica Íntima. Dia 13 de agosto, às 20h, horário de Brasília. Cadastre-se, gratuitamente, e receba o link da live.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} ${paris2024.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
