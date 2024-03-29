import icon1 from "../img/icons/data/1.svg";
import icon2 from "../img/icons/data/2.svg";
import icon3 from "../img/icons/data/3.svg";

export const Data = () => {
  return (
    <section className="data">
      <div className="flex mx-auto">
        <div className="data__elem">
          <div className="data__column">
            <div className="data__icon w-7 h-7 rounded-full">
              <img src={icon1} alt="no image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
