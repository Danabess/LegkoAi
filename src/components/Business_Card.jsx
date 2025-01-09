import Section from "./Section";
import Button from "./Button";
import SpeakerPhoto from "../assets/images/businessCard/speakerPhoto.png";
import { list } from "postcss";

const BusinessCard = () => {
  const webinarProgramList = [
    "How to reduce costs on ineffective advertising?",
    "Where to find new growth points?",
    "How to build effective and transparent reporting for top management?",
    "Why do you need speech analytics and how can it impact closing a deal?",
  ];
  return (
    <Section id="Webinars" className="bg-specialGray">
      <div className="section_container">
        <article className="lg:rounded-[30px] md:rounded-[23px] rounded-[16px] bg-white w-full">
          <div className="px-[90px] py-[60px] max-lg:px-[60px] max-lg:py-[45px] max-md:p-[30px]">
            <div className="font-RobotoMono leading-none text-dark uppercase lg:text-[18px] md:text-[16px] text-[12px] py-3 px-6 border-[2px] border-dark rounded-[18px] w-max lg:mb-10 md:mb-8 mb-6">
              Free webinar
            </div>
            <div className="flex items-end gap-5">
              <div className="lg:max-w-[620px] flex flex-col">
                <h3 className="font-semibold">
                  How to make your business more efficient with 🧠 artificial intelligence?
                </h3>
                <div className="lg:hidden h-[2px] w-full bg-lightGreen my-6"></div>
                <div className="lg:hidden flex mb-6 gap-3">
                  <img src={SpeakerPhoto} alt="SpeakerImg" className="rounded-[12px] md:size-[120px] size-[78px]" />
                  <div className="flex flex-col font-Gilroy font-medium text-[14px]">
                    <p className="mb-auto font-RobotoMono uppercase text-dark">Speaker</p>
                    <div className="">
                      <h3 className="capitalize text-dark text-[20px]">Vitaliy Makarenko</h3>
                      <p className="text-gray-500">
                        A genius of thought,
                        <br />
                        the father of Russian democracy
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="lg:hidden">Webinar program:</h3>
                <ul className="font-LTSuperior font-medium lg:text-[18px] md:text-[16px] text-[14px] leading-[1.1] flex flex-col gap-y-2 lg:mt-8 lg:mb-10 md:mt-7 md:mb-8 my-6">
                  {webinarProgramList.map((item) => {
                    return (
                      <li
                        key={webinarProgramList.indexOf(item)}
                        className="pl-5 relative before:size-2 before:rounded-full before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:bg-lightGreen">
                        {item}
                      </li>
                    );
                  })}
                </ul>
                <Button
                  btnContent="Register"
                  green
                  className="hover:text-white hover:bg-sky-500 hover:border-sky-500 lg:self-start max-lg:px-14 self-center"
                />
              </div>
              <div className="w-[2px] h-[320px] bg-lightGreen mx-auto max-lg:hidden"></div>
              <div className="h-full flex items-center max-lg:hidden">
                <div className="h-full">
                  <p className="uppercase font-RobotoMono text-[16px] leading-none">Speaker</p>
                  <div className="">
                    <img src={SpeakerPhoto} alt="SpeakerImg" className="rounded-[12px] my-4 size-[162px]" />
                    <div className="">
                      <h3>Vitaliy Makarenko</h3>
                      <p className="font-Gilroy text-[18px] leading-[1.1] text-gray-500 pt-1">
                        A genius of thought, the father of Russian democracy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
};
export default BusinessCard;
