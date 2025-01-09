import Section from "./Section";
import Button from "./Button";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";

const Economy = () => {
  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <SectionTitle>
          Saved - <br />
          <SpecialText>earned</SpecialText>
        </SectionTitle>
        <p className="font-Gilroy font-medium xl:text-[48px] md:text-[34px] text-[20px] md:leading-none leading-[1.1] max-w-[900px] lg:mb-8 lg:mt-16 md:mb-7 md:mt-11 mb-6 mt-6 px-4">
          Delegate routine tasks to artificial 🦾 intelligence and focus on priority tasks 🦸
        </p>
        <Button
          btnContent="Discuss the project"
          dark
          className="hover:border-lightGreen hover:text-dark hover:bg-lightGreen"
        />
      </div>
    </Section>
  );
};
export default Economy;
