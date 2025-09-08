import { Nunito_Sans } from "next/font/google";
import Paris2024 from "next/font/local";

// Importando as fontes
const nunitoSans = Nunito_Sans({
  weight: ["400", "500"],
  variable: "--font-nunito-sans",
});

const paris2024 = Paris2024({
  src: "../../public/fonts/Paris2024-Variable.ttf",
  variable: "--font-paris2024",
});

export default function Home() {
  return (
    <div className={`${(nunitoSans.variable, paris2024.variable)}`}>
      <h1 className="text-red-700 font-bold font-paris2024 text-2xl">
        Whereas disregard and contempt for human rights have resulted P
      </h1>
      <h1 className="text-red-700 font-bold font-main text-2xl">
        Whereas disregard and contempt for human rights have resulted
      </h1>
    </div>
  );
}
