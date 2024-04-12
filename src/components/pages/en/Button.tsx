export const Button = () => {
  return (
    <section className="button pb-8 px-3">
      <h1 className="text-center font-semibold pb-8 text-3xl lg:text-4xl">
        Join us!
      </h1>
      <div className="sm:flex text-lg md:text-xl font-PublicSans mx-auto max-w-lg justify-between">
        <div className="button__tutor cursor-pointer text-slate-800 px-6 py-4 mb-4 sm:mb-0 rounded-3xl sm:mr-3 transition hover:bg-slate-600 hover:text-white">
          Become a tutor
        </div>
        <div className="bg-blue-500 text-white cursor-pointer button__student sm:ml-3 px-6 py-4 transition rounded-3xl hover:bg-slate-500">
          Enroll a student
        </div>
      </div>
    </section>
  );
};
