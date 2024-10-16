function SpecialText({ children, small, extraSmall }) {
  return (
    <span
      className={`relative text-inherit leading-[0.9] after:absolute  after:-z-10 after:w-full text-nowrap ${
        small
          ? "xl:after:h-[55px] md:after:h-[46px] after:h-[37px] lg:after:top-2 md:after:top-1 xl:after:rounded-r-[15px] md:after:rounded-r-[13px] after:rounded-r-[12px] md:after:left-2 after:left-1"
          : "lg:after:h-[100px] md:after:h-[65px] after:h-[40px] md:after:left-5 after:left-2 lg:after:top-6 md:after:top-5 lg:after:rounded-r-[30px] md:after:rounded-r-[21px] after:rounded-r-[12px]"
      } ${
        extraSmall ? "max-[476px]:after:h-[24px] max-[476px]:after:rounded-[8px]" : ""
      } after:bg-gradient-to-r after:from-transparent after:to-lightGreen `}>
      {children}
    </span>
  );
}

export default SpecialText;
