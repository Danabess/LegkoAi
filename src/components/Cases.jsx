import Section from "./Section";
import Button from "./Button";
import casesImg_1 from "../assets/images/cases/cases-1.png";
import casesImg_2 from "../assets/images/cases/cases-2.png";
import casesImg_3 from "../assets/images/cases/cases-3.png";

const Cases = () => {
  const casesList = [
    {
      title: "Рога и копыта",
      subtitle: "Мясокомбинат",
      description:
        "Выявили неэффективные каналы привлечения клиентиов, нашли и проанализировали ошибки менеджеров по продажам",
      conclusion: "в итоге получили",
      result: "ROI 364%",
      imgUrl: casesImg_1,
    },
    {
      title: "Темщики",
      subtitle: "Сидят в сити",
      description:
        "Устранили неравномерное распределение работчей нагрузки на менеджеров, увеличили производительность команды",
      conclusion: "рост производительности",
      result: "68%",
      imgUrl: casesImg_2,
    },
    {
      title: "Брокер с Уолл Стрит",
      subtitle: "Производство водных насосов",
      description:
        "Создали прозрачную и удобную отчетность. Устранили микро-менеджмент и увеличили продажи при помощи речевой аналитики",
      conclusion: "рост продаж",
      result: "+113%",
      imgUrl: casesImg_3,
    },
  ];

  return (
    <Section id="Кейсы" className="bg-lightGreen">
      <div className="section_container flex flex-col items-center">
        <h2 className="font-semibold">Кейсы наших 🚀 клиентов</h2>
        <div className="my-[60px] w-full">
          <div className="flex gap-y-7 max-lg:flex-wrap">
            {casesList.map((item) => {
              return (
                <article
                  key={casesList.indexOf(item)}
                  className=" lg:w-1/3 max-lg:w-1/2 max-md:w-full max-md:px-0 px-2.5">
                  <div className="h-full flex flex-col bg-white lg:rounded-[60px] md:rounded-[38px] rounded-[16px] overflow-hidden">
                    <div className="w-full py-20 overflow-hidden relative">
                      <img src={item.imgUrl} alt="caseImg" className="absolute -top-[120px] z-0" />
                    </div>
                    <div className="lg:p-[50px] md:p-[40px] p-[30px] h-full flex flex-col">
                      <h3>{item.title}</h3>
                      <span className="font-LTSuperior font-medium text-gray-500 lg:text-[20px] md:text-[17px] text-[14px] leading-[1.2]">
                        {item.subtitle}
                      </span>
                      <p className="font-LTSuperior font-medium leading-[1.1] lg:text-[18px] md:text-[16px] text-[14px} mt-5 mb-auto">
                        {item.description}
                      </p>
                      <div className="lg:my-8 md:my-6 my-4 ">
                        <p className="font-Gilroy font-medium leading-[1.1] text-[20px]">{item.conclusion}</p>
                        <p className="font-Gilroy font-medium leading-[1.1] text-[32px]">{item.result}</p>
                      </div>
                      <Button
                        btnContent="Подробнее о проекте"
                        dark
                        className="hover:border-lightGreen hover:text-dark hover:bg-lightGreen w-full px-0"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <Button
          btnContent={
            <div className="flex items-center">
              <span>Все кейсы</span>
              <div className=" rotate-180 translate-x-[6px]">
                <svg width="14" height="14" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.5 13.0576L1.5 7.05762L7.5 1.05762"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          }
          transparent
          className="hover:border-dark hover:bg-dark stroke-dark hover:stroke-white hover:text-white"></Button>
      </div>
    </Section>
  );
};
export default Cases;
