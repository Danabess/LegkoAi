import Section from "./Section";
import Button from "./Button";
import SectionTitle from "./Section_Title";
import BenefitsMainImg from "../assets/images/benefits/benefits_Main.png";

const Benefits = () => {
  const benefitsList = [
    {
      icon: "📥",
      title: "Бухгалтерия",
      description: "Вести отчетность проще и удобнее при помощи искусственного интелекта.",
    },
    {
      icon: "🧑‍💻",
      title: "HR процессы",
      description: "AI-хайринг заменит 30% HR департамента и сделает эффективнее поиск и онбординг новых сотрудников.",
    },
  ];

  return (
    <Section
      id="Интеграции"
      className="bg-dark text-white overflow-hidden relative max-md:after:absolute max-md:after:top-0 max-md:after:w-full max-md:after:h-[450px] max-sm:after:h-[350px] max-md:after:bg-gradient-to-b max-md:after:from-dark max-md:after:to-transparent">
      <div className="section_container flex md:flex-row flex-col items-center justify-between gap-10 max-h-[800px]">
        <div className="z-10 md:pl-[90px] max-md:flex max-md:flex-col max-md:items-center">
          <SectionTitle className="text-nowrap max-md:text-center">
            И это еще <br /> не все
          </SectionTitle>
          <div className="flex flex-col gap-9 mt-[60px] mb-[37px] max-md:mb-[24px] max-md:mt-[350px] max-sm:mt-[250px]">
            {benefitsList.map((item) => {
              return (
                <div key={benefitsList.indexOf(item)} className="flex flex-col gap-y-3 max-w-[360px]">
                  <h2 className="text-nowrap max-md:text-center">
                    {item.icon}
                    {item.title}
                  </h2>
                  <p className="font-LTSuperior font-meddium text-[18px] leading-[1.1] max-md:text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <Button btnContent="Узнать больше на вебинаре" className="hover:bg-sky-500 hover:border-sky-500" green wide />
        </div>
        <div className="md:h-[580px] md:relative w-full absolute top-0">
          <div className="absolute lg:w-[830px] lg:h-[1000px] md:w-[530px] md:h-[700px] sm:w-[430px] sm:h-[510px] w-[330px] h-[410px] lg:-bottom-9 md:bottom-4 max-md:top-[-60px] max-md:left-1/2 max-md:-translate-x-1/2">
            <img src={BenefitsMainImg} alt="" className="size-full" />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Benefits;
