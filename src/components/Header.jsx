import { useState } from "react";
import logo from "../assets/images/header/logo.svg";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const navLinksList = ["Решения", "Интеграции", "Кейсы", "Вебинары"];

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 768 ? setActiveMenu(false) : null;
  });

  return (
    <section className="z-50 sticky top-4 backdrop-blur-sm mt-5 bg-white/80 rounded-[30px]">
      <div className="section_container flex justify-between items-center p-4 pl-8">
        <div className="z-50">
          <a href="" className="flex gap-1 md:gap-3 items-center w-full">
            <img src={logo} alt="logo" className="flex h-4 md:h-full" />
            <span className="font-bold text-base md:text-3xl tracking-tighter font-Gilroy">legko.ai</span>
          </a>
        </div>
        <nav className="md:block hidden justify-center">
          <ul className="flex gap-x-10">
            {navLinksList.map((item) => (
              <li key={navLinksList.indexOf(item)}>
                <a
                  href={`#${item}`}
                  className="lg:text-lg font-LTSuperior font-medium"
                  onClick={activeMenu ? handleMenu : null}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button btnContent="Обсудить проект" className="hover:bg-sky-500 hover:border-sky-500" dark hidden />
        <div className="md:hidden cursor-pointer z-10" onClick={handleMenu}>
          {!activeMenu ? <RxHamburgerMenu size={20} /> : <IoCloseOutline size={20} />}
        </div>
      </div>
      <nav className={`${activeMenu ? "block" : "hidden"} text-center`}>
        <ul className="">
          {navLinksList.map((item) => (
            <li key={navLinksList.indexOf(item)} className="pb-4">
              <a
                href={`#${item}`}
                className="lg:text-lg font-LTSuperior font-medium"
                onClick={activeMenu ? handleMenu : null}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Header;
