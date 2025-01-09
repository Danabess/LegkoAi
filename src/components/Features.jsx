import Section from "./Section";
import FeaturesSliderCard from "./Features_Slider_Card";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";
import FeaturesSliderButton from "./Features_Slider_Button";
import SalesImg_1 from "../assets/images/features/sales-1.png";
import SalesImg_2 from "../assets/images/features/sales-2.png";
import SalesImg_3 from "../assets/images/features/sales-3.png";
import MarketingImg_1 from "../assets/images/features/marketing-1.png";
import MarketingImg_2 from "../assets/images/features/marketing-2.png";
import MarketingImg_3 from "../assets/images/features/marketing-3.png";
import ManagementImg_1 from "../assets/images/features/management-1.png";
import ManagementImg_2 from "../assets/images/features/management-2.png";
import ManagementImg_3 from "../assets/images/features/management-3.png";
import { useState } from "react";

const Features = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const FeaturesSlidesList = [
    {
      name: "Sales",
      description:
        "Find new growth points and increase conversion into sales through Ad Hoc analysis of sales processes.",
      ImgList: [SalesImg_1, SalesImg_2, SalesImg_3],
      LinksList: ["Autofunnels", "Chatbots", "Speech analytics"],
    },
    {
      name: "Marketing and advertising",
      description: "Save on ineffective advertising and attract more sales at a lower cost.",
      ImgList: [MarketingImg_1, MarketingImg_2, MarketingImg_3],
      LinksList: ["AI Analytics", "Creatives and Copywriting", "Website Audit"],
    },
    {
      name: "Project management",
      description: "Save time for routine tasks, increase productivity and process transparency.",
      ImgList: [ManagementImg_1, ManagementImg_2, ManagementImg_3],
      LinksList: ["Auto reports", "Performance analysis", "Chat bots"],
    },
  ];

  const PreviousSlide = () => {
    setImgIndex(imgIndex === 0 ? 0 : imgIndex - 1);
  };
  const NextSlide = () => {
    setImgIndex(imgIndex === FeaturesSlidesList.length - 1 ? FeaturesSlidesList.length - 1 : imgIndex + 1);
  };

  window.addEventListener("resize", () => {
    window.innerWidth < 1024 ? setImgIndex(0) : null;
  });

  return (
    <Section id="Solutions" className="section_container">
      <SectionTitle className="text-center mb-12">
        How AI <SpecialText>will help</SpecialText> <br />
        your business?
      </SectionTitle>
      <div className="relative">
        <div className="xl:max-w-[1040px] lg:max-w-[824px] m-auto flex lg:flex-row lg:overflow-hidden flex-col md:gap-y-5 gap-y-3">
          {FeaturesSlidesList.map((item) => (
            <FeaturesSliderCard key={FeaturesSlidesList.indexOf(item)} FeatureSlideItem={item} imgIndex={imgIndex} />
          ))}
        </div>
        <button onClick={PreviousSlide}>
          <FeaturesSliderButton imgIndex={imgIndex} slideListLength={FeaturesSlidesList.length} />
        </button>
        <button onClick={NextSlide}>
          <FeaturesSliderButton rightButton imgIndex={imgIndex} slideListLength={FeaturesSlidesList.length} />
        </button>
      </div>
    </Section>
  );
};

export default Features;
