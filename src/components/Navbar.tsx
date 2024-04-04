import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import nis from "../img/icons/nis.png";

import { slide as Menu } from "react-burger-menu";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: any) => {
    setIsOpen(state.isOpen);
  };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <nav className="z-50 fixed top-0 left-0 w-full text-shadow p-5 pr-0 bg-white flex justify-between items-center">
      <div className="ml-auto pl-8 md:pl-0 md:ml-0 font-PtSerif text-darkGreen text-4xl lg:text-5xl font-bold italic lg:pr-3">
        UIREN
      </div>
      <Menu
        className="block lg:hidden"
        isOpen={isOpen}
        onStateChange={handleStateChange}
        right // Optional: open menu from the right
        width={"250px"} // Set menu width
      >
        <a href="">О нас</a>
        <a href="">Курсы</a>
        <a href="">Процесс Обучения</a>
        <a href="">Вопросы</a>
        <a href="">Отзывы</a>
        <a href="">Контакты</a>
      </Menu>

      <ul className="hidden nav_links text-base lg:text-xl md:flex md:items-center">
        <li className=" mx-3">
          <a
            href="#"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            О нас
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Курсы
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Процесс Обучения
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Вопросы
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Отзывы
          </a>
        </li>
        <li className=" mx-3">
          <a
            href="#"
            className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear"
          >
            Контакты
          </a>
        </li>
      </ul>
      <div className="nav__icon w-12 md:w-14 lg:w-20 ml-auto mr-3 order-2">
        <img src={nis} alt="" />
      </div>
    </nav>
  );
};
