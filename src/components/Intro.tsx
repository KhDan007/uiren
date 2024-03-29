import img1 from "../img/intro/1.png";

export const Intro = () => {
  return (
    <section className="intro bg-darkBlue text-white text-shadow flex items-center">
      <div className="intro__column w-1/2 font-PublicSans py-20 md:py-44 ">
        <div className="text-2xl sm:text-3xl md:text-4xl mx-auto lg:text-5xl w-4/5">
          UIREN — это некоммерческая организация, которая предоставляет
          бесплатное репетиторство и наставничество детям.
        </div>
      </div>
      <div className="intro__column w-1/2 -translate-y-12 md:-translate-y-24">
        <img className="" src={img1} alt="no image" />
      </div>
    </section>
  );
};
