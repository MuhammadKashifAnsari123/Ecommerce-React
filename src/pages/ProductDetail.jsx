import { useState, useEffect, useContext} from "react";
import {CartContext} from "../context/CartContext";
import { useParams } from "react-router";
import Header from "../componets/Header";

function ProductDetail() {
  const { id } = useParams();
  const {addToCart, isItemAdded} = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [id]);

  console.log(product);
  
  return (
    <>
    <Header/>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col md:flex-row -m-4 items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <a className="block relative h-96 rounded overflow-hidden shadow-lg">
            <img
              alt="ecommerce"
              className="object-contain object-center w-full h-full block"
              src={product.image}
            />
          </a>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full p-4">
          <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
            {product.category}
          </h3>
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.title}
          </h1>
          <p className="mt-3 text-xl font-bold text-orange-500">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <button onClick={() => addToCart(product)} className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300">
           {isItemAdded(product.id)
           ? `Add to Cart (${isItemAdded(product.id).quantity})`
            :"Add To Cart"
           }
            
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
