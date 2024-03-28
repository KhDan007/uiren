import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import nis from "../img/icons/nis.png"

export const Navbar = () => {
  return (
    <nav className="text-shadow p-5 bg-white flex justify-between items-center">
      <div className=" font-PtSerif text-darkGreen text-4xl lg:text-5xl font-bold italic pr-3">
        UIREN
      </div>
      <FontAwesomeIcon className="md:hidden order-3 cursor-pointer" size="2x" icon={faBars} />
      <ul className="hidden nav_links text-base block lg:text-xl md:flex md:items-center">
        <li className=" mx-3">
          <a href="#" className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear">
            О нас
          </a>
        </li>
        <li className=" mx-3">
          <a href="#" className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear">
            Курсы
          </a>
        </li>
        <li className=" mx-3">
          <a href="#" className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear">
            Процесс Обучения
          </a>
        </li>
        <li className=" mx-3">
          <a href="#" className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear">
            Вопросы
          </a>
        </li>
        <li className=" mx-3">
          <a href="#" className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear">
            Отзывы
          </a>
        </li>
        <li className=" mx-3">
          <a href="#" className="inline-block cursor-pointer hover:text-blue-600 transition font-Preahvihear">
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
