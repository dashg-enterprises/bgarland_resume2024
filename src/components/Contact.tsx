const Contact = () => {
  return (
    <section className="p-8 bg-pink-950 opacity-90 text-white relative">
      <div className="top-[-75px] md:top-[-150px] absolute" id="contact" />

      <div className="">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="font-bold text-xl">Interested in collaborating?</h2>
          <h2 className="font-bold text-xl">Reach out!</h2>
        </div>
        <div className="flex flex-col gap-8 items-center mt-8">
          <p>Email:</p>
          <a
            className="font-bold text-2xl -mt-8"
            href={`mailto:brandy.e.garland@gmail.com`}
          >
            brandy.e.garland@gmail.com
          </a>
          <p>Call or text:</p>
          <a className="font-bold text-2xl -mt-8" href={`tel:843-453-5536`}>
            843-453-5536
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
