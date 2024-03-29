import image1 from "../img/mission/1.png";
import React, { useState, useEffect } from 'react';

export const Mission = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = document.querySelector('.mission__circle') as HTMLElement;
    setWidth(element?.offsetWidth);

    window.addEventListener('resize', () => {
      setWidth(element?.offsetWidth);
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-green3 to-green4 px-3">
      <div className="container md:flex mx-auto items-center">
        <div className="mission__column md:w-1/2 relative">
          <img className="relative z-10" src={image1} alt="no image" />
          <div className="mission__circle h-auto w-3/5 translate-x-1/4 bg-blue1 absolute top-1/4 rounded-full box-shadow left-0 z-0" style={{ height: width }}></div>
        </div>
        <div className="mission__column py-10 md:py-20 md:w-1/2">
          <div className="mission__elem bg-green5 py-6 lg:py-16 px-10 rounded-3xl text-white text-shadow font-PublicSans mb-8 lg:mb-16">
            <div className="mission__title text-3xl lg:text-4xl mb-4 lg:mb-7">
              Наша миссия:
            </div>
            <div className="mission__subtitle text-md lg:text-xl">
              Устранить пробелы в образовании, вдохновить на мечты и
              способствовать успеху каждого ребенка, независимо от финансового
              состояния или других проблем
            </div>
          </div>
          <div className="mission__elem bg-green5 py-6 lg:py-16 px-10 rounded-3xl text-white text-shadow font-PublicSans">
            <div className="mission__title text-3xl lg:text-4xl mb-4 lg:mb-7">
              Наше видение:
            </div>
            <div className="mission__subtitle text-md lg:text-xl">
              Обеспечение того, чтобы каждый ребенок, независимо от финансового
              положения его/ее семьи или других проблем, имел поддержку,
              необходимую для академического и личностного успеха.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
