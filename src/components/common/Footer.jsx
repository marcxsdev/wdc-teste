import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-soft-gold flex flex-col items-center gap-6 py-8 lg:flex-row lg:gap-20 lg:justify-center">
      <p className="text-black text-center font-inter text-sm leading-5 px-3 lg:text-left lg:w-[353px]">
        <a
          href="mailto:suporte@mulheresbemresolvidas.com.br"
          className="underline"
        >
          suporte@mulheresbemresolvidas.com.br
        </a>{" "}
        | CNPJ: 23.705.563.0001/80. SHTN Bloco D RUV, SHCS CLS 216 - Asa Sul,
        Brasília - DF, 70294-530
      </p>

      <Image
        src="/images/footer/logoblack.png"
        alt="Logo do evento"
        width={184}
        height={56}
      />

      <p className="text-black text-center font-inter text-sm leading-5 px-12 lg:text-left lg:w-[373]">
        Política de privacidade | Termos de uso © 2022 Todos os direitos
        reservados
      </p>
    </footer>
  );
};

export default Footer;
