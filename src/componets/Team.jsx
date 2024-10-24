import dinner from "../images/dinner.jpg";
import living from "../images/living.jpg";
import Bedroom from "../images/Bedroom.jpg";

function Team() {
  return (
    <section className="text-gray-700 body-font bg-gray-100 py-10">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-4xl font-bold title-font text-gray-900 mt-5">Browse The Range</h1>
          <p className="lg:w-1/2 mx-auto leading-relaxed text-base text-gray-600 mt-4">
            Discover our latest collection of furniture, crafted to fit your space perfectly.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[{ img: dinner, title: "Dinner" }, { img: living, title: "Living" }, { img: Bedroom, title: "Bedroom" }].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                alt={item.title}
                className="rounded-lg w-full h-64 object-cover object-center mb-6 transition-transform duration-300 hover:scale-105"
                src={item.img}
              />
              <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
