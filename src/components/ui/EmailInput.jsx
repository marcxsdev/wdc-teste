import ArrowIcon from "../icons/ArrowIcon";

const EmailInput = ({ buttonBgColor, arrowColor }) => {
  return (
    <div className="relative w-80 h-11.5">
      {/* Campo pro email */}
      <input
        type="email"
        placeholder="Digite aqui o seu melhor e-mail"
        className="w-full h-full bg-white text-xs text-deep-blue placeholder:text-deep-blue font-extrabold leading-3.5 pb-3.5 pt-4.5 pl-5 border border-soft-gold focus:outline-none"
      />

      {/* Botão pra submit com props pra trocar a cor de fundo e do icone */}
      <button
        className={`absolute top-0 right-0 w-24 h-full rounded-l-4xl pl-6 ${buttonBgColor}`}
      >
        <ArrowIcon className={arrowColor} width={45} />
      </button>
    </div>
  );
};

export default EmailInput;
