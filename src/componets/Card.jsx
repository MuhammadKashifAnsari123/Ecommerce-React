import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const items = Array.isArray(data) ? data : [];
  console.log(items);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link to={`/Product/${item.id}`} className="block relative h-48 rounded overflow-hidden shadow-lg">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full"
                  src={item.image}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1 text-xl font-bold text-orange-500">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
