import CarouselCard from "./CarouselCard";

// Conteúdo dos cards
const carouselItems = [
  {
    id: 1,
    imageUrl: "/images/CarouselCard1.png",
    title: "SALTO NA VARA",
    text: "As manobras pompoarísticas mais avançadas – você vai ter uma ppk, forte, resistente, saudável e com truques de tirar o fôlego, como: chupitar, dedilhar, enlaçar, sugar, e vários outros segredos",
  },
  {
    id: 2,
    imageUrl: "/images/CarouselCard2.png",
    title: "APERTÊ",
    text: "Os melhores golpes para nocautear de uma vez por todas os problemas que atrapalham a sua saúde íntima – como a incontinência, cólicas e os incômodos da menopausa, por exemplo",
  },
  {
    id: 3,
    imageUrl: "/images/CarouselCard3.png",
    title: "GINÁSTICA NHANHAÍSTICA",
    text: "O passo a passo para desenvolver habilidades que farão você liderar no quesito rebolada sensual e manuseio de bolas.",
  },
  {
    id: 4,
    imageUrl: "/images/CarouselCard4.png",
    title: "SIRIRICLISMO",
    text: "Exercícios para aumentar a sua consciência corporal e te ajudar a entender quais são os pontos que mais te dão prazer para que você se torne uma mulher altamente orgástica",
  },
];

const Carousel = () => {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 scrollbar-hide">
      {carouselItems.map((item) => (
        <CarouselCard
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Carousel;
