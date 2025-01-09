import { useEffect, useState } from "react";
import Section from "./Section";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";
import MainImg from "../assets/images/intro/Main_img.png";
import MainImgSmall from "../assets/images/intro/Main_img_small.png";
import HabrLogo from "../assets/images/intro/Habr_logo.svg";
import LentaLogo from "../assets/images/intro/Lenta_logo.svg";
import RbkLogo from "../assets/images/intro/Rbk_logo.svg";
import VcLogo from "../assets/images/intro/Vc_logo.svg";
import Button from "./Button";

const Intro = () => {
  const [textTransform, setTextTransform] = useState(100);
  const [blockTransform, setBlockTransform] = useState(0);

  const [sloganList] = useState([
    "Monitor your business performance and receive daily reports",
    "Sell ​​more with AI scoring of applications and audit of recorded calls",
    "Reduce costs on ineffective channels and find new growth points",
  ]);

  useEffect(() => {
    setTimeout(() => {
      setTextTransform(textTransform + 100);
      const shiftedElement = sloganList.shift();
      sloganList.push(shiftedElement);
      setBlockTransform(blockTransform + 100 / sloganList.length);
    }, 1500);
  });

  const AchivmentsList = [
    {
      value: "30%",
      text: (
        <span>
          capacity growth due
          <br />
          to routine optimization
        </span>
      ),
      icon: "🚀",
    },
    {
      value: "15+",
      text: (
        <span>
          successful
          <br />
          cases
        </span>
      ),
      icon: "🏅",
    },
    {
      value: "30%",
      text: (
        <span>
          commands can be
          <br />
          replaced by AI
        </span>
      ),
      icon: "🤖",
    },
    {
      value: "5.000.000",
      text: (
        <span>
          Our clients save on
          <br />
          average per year
        </span>
      ),
      icon: "🏦",
    },
  ];

  const LabelsList = [LentaLogo, VcLogo, HabrLogo, RbkLogo];

  return (
    <Section className="section_container relative min-[850px]:mt-[96px] max-[850px]:mt-[88px] max-md:mt-[76px] lg:pt-16 md:pt-10 pt-3 after:absolute after:-bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-lightGreen after:rounded-full">
      <div className="flex gap-10 md:flex-row flex-col-reverse">
        <div className="flex flex-col justify-center md:text-start text-center lg:gap-8 md:gap-6 gap-5">
          <SectionTitle>
            With AI <SpecialText>is simple</SpecialText>
          </SectionTitle>
          <div className="overflow-hidden min-[995px]:max-h-[60px] min-[810px]:max-h-[45px] sm:max-h-[53px] max-h-[39px] ">
            <div className="flex flex-col z-0" style={{ transform: `translateY(${blockTransform}%)` }}>
              {sloganList.map((item) => (
                <p
                  key={sloganList.indexOf(item)}
                  className="font-Gilroy font-medium min-[995px]:text-[27px] min-[810px]:text-[20px] sm:text-[24px] text-[18px] leading-[1.1]  transition-transform duration-500"
                  style={{ transform: `translateY(-${textTransform}%)` }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex lg:gap-4 gap-2 lg:flex-row flex-col">
            <Button
              btnContent="Sign up for the webinar"
              wide
              className="hover:bg-lightGreen hover:border-lightGreen hover:text-dark"
              dark
            />
            <Button btnContent="Find out more" className="hover:bg-lightGreen hover:border-lightGreen" transparent />
          </div>
        </div>
        <div className="flex">
          <img src={window.innerWidth > 1024 ? MainImg : MainImgSmall} alt="Intro-img" className="h-full" />
        </div>
      </div>
      <div className="md:mt-20 mt-6 mb-8 flex md:justify-between md:flex-row flex-col md:gap-0 gap-3 md:bg-dark rounded-[36px] md:py-8 lg:px-20 md:px-8">
        {AchivmentsList.map((item) => {
          return (
            <div
              key={AchivmentsList.indexOf(item)}
              className={`flex md:justify-normal justify-between items-center md:bg-transparent md:p-0 ${
                (AchivmentsList.indexOf(item) + 1) % 2 ? "bg-dark" : "bg-lightGreen"
              } p-8 md:rounded-none rounded-[16px]`}>
              <div className="flex flex-col">
                <h3
                  className={`md:text-lightGreen ${
                    (AchivmentsList.indexOf(item) + 1) % 2 ? "text-lightGreen" : "text-dark"
                  } font-Gilroy font-medium lg:text-[48px] md:text-[40px] text-[32px]`}>
                  {item.value}
                </h3>
                <p
                  className={`md:text-white ${
                    (AchivmentsList.indexOf(item) + 1) % 2 ? "text-white" : "text-dark"
                  } font-LTSuperior font-medium leading-[1.1] lg:text-[18px] md:text-[16px] text-[14px]`}>
                  {item.text}
                </p>
              </div>
              <div className="md:hidden flex text-[32px]">{item.icon}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center lg:gap-20 md:gap-12 gap-3">
          <p className="font-LTSuperior font-bold lg:text-[18px] md:text-[16px] text-[14px] relative before:absolute lg:before:-left-[18px] md:before:-left-[15px] before:-left-[12px] before:top-0 before:h-full before:w-[2px] before:rounded-full before:bg-lightGreen">
            They write about us:
          </p>
          <div className="flex flex-row lg:gap-12 md:gap-9 gap-6">
            {LabelsList.map((item) => {
              return (
                <img
                  src={item}
                  key={LabelsList.indexOf(item)}
                  className={`lg:max-h-[18px] md:max-h-[15px] max-h-[11px]`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
