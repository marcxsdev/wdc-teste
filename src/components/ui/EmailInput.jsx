import ArrowIcon from "../icons/ArrowIcon";

const EmailInput = ({ buttonBgColor, arrowColor }) => {
  return (
    <div className="relative w-80 h-11.5 lg:w-133 lg:h-19">
      {/* Campo pro email */}
      <input
        type="email"
        placeholder="Digite aqui o seu melhor e-mail"
        className="w-full h-full bg-white text-xs lg:text-base lg:uppercase text-deep-blue placeholder:text-deep-blue font-extrabold leading-3.5 pb-3.5 pt-4.5 pl-5 border-2 border-soft-gold focus:outline-none"
      />

      {/* Botão pra submit com props pra trocar a cor de fundo e do icone */}
      <button
        className={`absolute top-0 right-0 w-24 h-full lg:w-52 cursor-pointer rounded-l-full pl-6 lg:pl-16 ${buttonBgColor}`}
      >
        <ArrowIcon className={`w-[45px] lg:w-[75px] ${arrowColor}`} />
      </button>
    </div>
  );
};

export default EmailInput;
