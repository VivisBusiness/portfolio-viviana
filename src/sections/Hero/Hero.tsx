const Hero = () => {
  return (
    <section className="w-full flex items-center bg-stone-50 justify-center px-4">
      <div className="max-w-4xl text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-purple-800">
          Viviana Moreno Gordillo
        </h1>

        <h2 className="text-2xl font-medium text-gray-700 mt-2">
          Frontend Developer
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Frontend focus, fullstack approach — transforming ideas into complete digital products.
        </p>

        <div className="mt-6 flex gap-4 max-w-sm mx-auto">
          <button className="flex-1 bg-purple-800 hover:bg-purple-900 text-white font-medium py-2 px-6 rounded-xl shadow">
            View CV
          </button>

          <button className="flex-1 border border-purple-800 text-purple-800 hover:bg-purple-50 font-medium py-2 px-6 rounded-xl">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;