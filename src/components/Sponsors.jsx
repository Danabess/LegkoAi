import Section from "./Section";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";

import icon_1C from "../assets/images/sponsors/1C.svg";
import icon_akamai from "../assets/images/sponsors/akamai.svg";
import icon_reddit from "../assets/images/sponsors/reddit.svg";
import icon_amazon from "../assets/images/sponsors/amazon.svg";
import icon_GoogleSheets from "../assets/images/sponsors/google-sheets.svg";
import icon_behance from "../assets/images/sponsors/behance.svg";
import icon_apple from "../assets/images/sponsors/apple.svg";
import icon_forbes from "../assets/images/sponsors/forbes.svg";
import icon_Slack from "../assets/images/sponsors/Slack.svg";
import icon_Telegram from "../assets/images/sponsors/tg.svg";
import icon_facebook from "../assets/images/sponsors/facebook.svg";
import icon_WordPress from "../assets/images/sponsors/wp.svg";

const Sponsors = () => {
  const iconsList = [
    icon_akamai,
    icon_1C,
    icon_reddit,
    icon_facebook,
    icon_Telegram,
    icon_GoogleSheets,
    icon_Slack,
    icon_behance,
    icon_forbes,
    icon_WordPress,
    icon_amazon,
    icon_apple,
  ];

  return (
    <Section>
      <div className="section_container">
        <SectionTitle className="max-[960px]:text-center">
          <SpecialText>Don't even think</SpecialText> about hiring expensive developers
        </SectionTitle>
        <div className="flex lg:mt-[60px] md:mt-[39px] mt-[18px] justify-around items-center max-[960px]:flex-col gap-y-8">
          <h2 className="min-[960px]:max-w-[530px] max-[960px]:text-center max-[476px]:text-[20px]">
            We integrate 🧑‍🔧 with all major services{" "}
            <SpecialText small extraSmall>
              in two clicks
            </SpecialText>
          </h2>
          <div className="flex flex-wrap justify-center max-w-[500px] max-[960px]:max-w-[400px] lg:gap-x-10 lg:gap-y-5 md:gap-x-6 gap-x-3 gap-y-4">
            {iconsList.map((item) => {
              return <img key={iconsList.indexOf(item)} src={item} alt="" className="lg:h-7 md:h-5 h-4" />;
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Sponsors;
