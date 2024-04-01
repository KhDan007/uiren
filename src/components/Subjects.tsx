import icon1 from "../img/icons/subjects/1.svg";
import icon2 from "../img/icons/subjects/2.svg";
import icon3 from "../img/icons/subjects/3.svg";
import icon4 from "../img/icons/subjects/4.svg";
import icon5 from "../img/icons/subjects/5.svg";
import icon6 from "../img/icons/subjects/6.svg";
import icon7 from "../img/icons/subjects/7.svg";
import icon8 from "../img/icons/subjects/8.svg";
import icon9 from "../img/icons/subjects/9.svg";

export const Subjects = () => {
  return (
    <section className="bg-gray py-24">
      <div className="container mx-auto">
        <h2 className="subjects__title text-shadow font-semibold mb-4 text-5xl">
          Наши предметы
        </h2>
        <div className="subjects__subtitle text-xl text-shadow text-orange1 mb-12">
          Вы можете ознакомится с предметами, которые входят в наши курсы
          обучения ...
        </div>
        <div className="flex justify-between">
          <div className="subjects__column w-1/4">
            <div className="subjects__elem mb-8 flex bg-white  items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon1} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Английский язык</div>
            </div>
            <div className="subjects__elem mb-8 flex bg-white items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon2} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Математика</div>
            </div>
            <div className="subjects__elem flex bg-white items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon3} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">История</div>
            </div>
          </div>
          <div className="subjects__column w-1/4">
            <div className="subjects__elem mb-8 flex bg-white  items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon4} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Казахский язык</div>
            </div>
            <div className="subjects__elem mb-8 flex bg-white items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon5} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Шахматы</div>
            </div>
            <div className="subjects__elem flex bg-white items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon6} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Рисование</div>
            </div>
          </div>
          <div className="subjects__column w-1/4">
            <div className="subjects__elem mb-8 flex bg-white items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon7} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Русский язык</div>
            </div>
            <div className="subjects__elem mb-8 flex bg-white  items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon8} alt="" />
              </div>
              <div className="subjects__subcolumn font-normal text-xl">ICT</div>
            </div>
            <div className="subjects__elem flex bg-white items-center font-PublicSans py-4 px-6 rounded-2xl justify-center">
              <div className="subjects__subcolumn mr-4">
                <img src={icon9} alt="" />
              </div>
              <div className="subjects__subcolumn text-xl">Логика</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
