import image1 from "../../../img/icons/reviews/orange_quotes.svg";

export const Reviews = () => {
  return (
    <section id="reviews" className="bg-lightPurple">
      <div className="container px-4 py-24 mx-auto">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-orange1 text-shadow">
          Пікірлер
        </h2>
        <h3 className="text-xl mt-4 lg:mt-7 text-orange1 mb-12 xl:mb-20 text-shadow">
          Ата-аналардың жобамызға берген бағасы...
        </h3>
        <div className="md:flex justify-between">
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Математика
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              UIREN тобына үлкен алғыс білдіремін! Сіздер өткізген сабақтардың
              арқасында баламның оқуға деген ынтасы мен үлгерімді айтарлықтай
              жақсарды!
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 md:mr-4 rounded-3xl mb-5 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
                Ағылшын тілі
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              Баламның ағылшын тілін меңгеру деңгейі айтарлықтай өсті. Сабақтар
              ол үшін өте қызықты болды, әсіресе әртүрлі интерактивті ойындарды
              ойнау.
            </p>
          </div>
          <div className="reviews__elem bg-white p-8 rounded-3xl ">
            <div className="flex items-center justify-between mb-4">
              <div className="reviews__section mr-3 text-xl lg:text-2xl font-bold">
              Қазақстан тарихы
              </div>
              <div>
                <img src={image1} alt="" />
              </div>
            </div>
            <p className=" max-w-96 ">
              UIREN жобасының арқасында менің балам сыныпта өткен тақырыптарды
              жақсырақ түсіне бастады. Сонымен қатар, оқытушының сабақ барысында
              қызықты фактілер мен әртүрлі хикаяларды қосуы баламның
              қызығушылығын одан әрі арттырды.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
