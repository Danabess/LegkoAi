import Section from "./Section";
import SpecialText from "./SpecialText";
import Button from "./Button";
import { useEffect, useState } from "react";

const Motivation = () => {
  const defaultRangeValue = 500000;

  const [rangeValue, setRangeValue] = useState(defaultRangeValue);
  const [rangeValueTextPosition, setRangeValueTextPosition] = useState(rangeValue / 10000);
  const [rangeValueArrowPosition, setRangeValueArrowPosition] = useState((rangeValue / 10000) * 0.9);
  const [rangeValueArrowTranslate, setRangeValueArrowTranslate] = useState(0);

  function setDefaultRangeValueArrowPosition() {
    useEffect(() => {
      const rangeValueBlockStyle = document.getElementById("rangeValueBlock").style;

      rangeValueBlockStyle.setProperty("--rangeValueArrowPosition", `${rangeValueArrowPosition}%`);
      rangeValueBlockStyle.setProperty("--rangeValueArrowTranslate", `${rangeValueArrowTranslate}%`);
    });
  }

  function changingRangeValue() {
    const rangeInputValue = document.getElementById("rangeInput").value;

    setRangeValue(rangeInputValue);
    setRangeValueTextPosition(rangeInputValue / 10000);
    setRangeValueArrowPosition(rangeValue / 10000);
    setRangeValueArrowTranslate(-(rangeValue / 10000));
  }

  return (
    <Section className="relative before:absolute before:top-0 before:left-0 before:size-full before:bg-gray-200 before:-z-10">
      <div className="section_container">
        <h2 className="font-semibold mb-[75px]">
          Find out how much 💸 you can
          <br />
          save <SpecialText small>with Legko AI?</SpecialText>
        </h2>
        <div className="flex flex-col gap-y-12 bg-dark text-white min-[1170px]:px-10 min-[1170px]:py-12 md:px-5 md:py-6 px-2 py-3 rounded-[20px]">
          <div className="flex max-[1170px]:flex-col max-[1170px]:gap-[100px] flex-row justify-between items-center min-[1170px]:px-10 min-[1170px]:py-7 md:px-5 md:py-3 px-2 py-3">
            <h3 className="min-[1170px]:w-[360px]">Your monthly operating expenses:</h3>
            <form
              action=""
              className="min-[1170px]:max-w-[600px] w-full relative font-LTSuperior font-medium text-[18px] leading-[1.1] text-white">
              <div
                id="rangeValueBlock"
                className={`absolute -top-[72px] bg-lightGreen text-dark px-5 py-3 rounded-[5px] after:absolute after:size-0 after:border-t-[9px] after:border-t-lightGreen after:border-r-[6px] after:border-r-transparent after:border-l-[6px] after:border-l-transparent after:-bottom-[9px] after:left-[--rangeValueArrowPosition] after:translate-x-[--rangeValueArrowTranslate]`}
                style={{
                  left: `${rangeValueTextPosition}%`,
                  transform: `translateX(-${rangeValueTextPosition}%)`,
                }}
                onLoad={setDefaultRangeValueArrowPosition()}>
                <span className="font-LTSuperior font-bold text-[20px] leading-[1.2] text-nowrap">{rangeValue} $</span>
              </div>
              <input
                id="rangeInput"
                type="range"
                min="10000"
                max="1000000"
                value={rangeValue}
                step="1000"
                onInput={changingRangeValue}
                className="w-full appearance-none h-[2px] bg-lightGreen thumb-custom"
              />
              <div className="absolute top-10 ">10 000 $</div>
              <div className="absolute right-0 top-10">more then 1 000 000 $</div>
            </form>
          </div>
          <div className="flex justify-between flex-row max-[1170px]:flex-col bg-lightGreen min-[1170px]:px-10 min-[1170px]:py-11 md:px-5 md:py-6 px-2 py-3 text-dark rounded-[12px] min-[1170px]:items-center gap-y-6">
            <div className="flex justify-between">
              <div className="">
                <h3 className="mb-4 text-nowrap">
                  You can save:
                  <span className="inline-block max-[1170px]:block font-bold w-[171px]">{rangeValue * 0.3} $</span>
                </h3>
                <p className="font-LTSuperior font-medium xl:text-[18px] md:text-[16px] text-[14px] leading-[1.1]">
                  Want the same result? Leave your email and we will contact you
                </p>
              </div>
              <div className="hidden max-[1170px]:block text-[48px] leading-0">💡</div>
            </div>
            <form
              action=""
              className="flex flex-row max-[1170px]:flex-col min-[1170px]:bg-white min-[1170px]:rounded-[30px] min-[1170px]:border-2 min-[1170px]:border-gray-500 min-[1170px]:p-1 min-[1170px]:pl-5 w-full min-[1170px]:max-h-14 min-[1170px]:items-center font-RobotoMono font-medium text-[16px] xl:ml-14 gap-y-3">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="w-full focus:outline-none min-[1170px]:mr-5 max-[1170px]:bg-white max-[1170px]:rounded-[30px] max-[1170px]:border-2 max-[1170px]:border-gray-500 max-[1170px]:p-[10px] max-[1170px]:pl-5"
              />
              <Button
                btnContent="Leave a request"
                className="hover:bg-sky-500 hover:border-sky-500 md:block min-[1170px]:w-full"
                dark
              />
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Motivation;
