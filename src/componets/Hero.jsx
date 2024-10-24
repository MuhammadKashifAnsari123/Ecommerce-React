import hero from "../images/hero.jpg";

function Hero() {
  return (
    <section
      className="text-gray-600 body-font"
      style={{
        backgroundImage: `url(${hero})`,
        height: '80vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pt-5 hidden md:block">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white uppercase">
            New Arrival
          </h1>
          <h2 className="text-3xl mt-3 font-semibold text-black-300">
            Discover New Collection
          </h2>
          <p className="mt-3 text-sm md:text-base text-black-100 max-w-md font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, laborum nostrum. Distinctio earum libero corporis qui
            facere deleniti quo, cupiditate omnis velit voluptate asperiores
            beatae eius quidem animi maxime ullam?
          </p>
          <button className="mt-5 px-6 py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300">
            Buy Now
          </button>
          {/* <img
            className="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="https://dummyimage.com/600x400"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
