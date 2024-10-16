import Section from "./Section";
import Button from "./Button";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";

const Economy = () => {
  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <SectionTitle>
          Сэкономил - <br />
          <SpecialText>заработал</SpecialText>
        </SectionTitle>
        <p className="font-Gilroy font-medium xl:text-[48px] md:text-[34px] text-[20px] md:leading-none leading-[1.1] max-w-[900px] lg:mb-8 lg:mt-16 md:mb-7 md:mt-11 mb-6 mt-6 px-4">
          Делегируй рутину искусственному 🦾 интеллекту и сфокусируйся на приоритетных задачах 🦸
        </p>
        <Button
          btnContent="Обсудить проект"
          dark
          className="hover:border-lightGreen hover:text-dark hover:bg-lightGreen"
        />
      </div>
    </Section>
  );
};
export default Economy;
