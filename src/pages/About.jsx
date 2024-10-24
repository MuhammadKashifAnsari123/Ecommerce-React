import React from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";

const About = () => {
  return (
    <div>
    <div>
      <Header />
      <div className="">
        <div className="about-container  py-12 px-2 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h1>
              <p className="text-lg text-gray-600">
                Discover the art of comfort and style with our exclusive
                collection of furniture.
              </p>
            </div>

            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Furniture Image 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Furniture Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div
              className="bg-white 
             rounded-lg p-8"
            >
              <p className="text-gray-700 text-lg mb-6">
                Welcome to{" "}
                <span className="font-semibold">Furniro</span>, where
                comfort meets style. We are proud to offer an exclusive
                collection of high-quality furniture that enhances the beauty
                and functionality of your home.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Our mission is to provide modern, elegant, and durable furniture
                pieces that fit seamlessly into your living spaces. From the
                dining room to the bedroom, we have a variety of options to suit
                your unique style and needs.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                At <span className="font-semibold">Furniro</span>, we
                prioritize customer satisfaction by ensuring that each piece of
                furniture is crafted with precision and care. Our team of
                skilled artisans and designers work tirelessly to create
                products that bring comfort, luxury, and style into your home.
              </p>
              <p className="text-gray-700 text-lg">
                Whether you're looking for a cozy sofa, a functional dining
                table, or a luxurious bed, we have something for everyone. Thank
                you for choosing{" "}
                <span className="font-semibold">Furniro</span> to make
                your home more beautiful and comfortable.
              </p>
            </div>

            {/* More Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Furniture Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Furniture Image 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Furniture Image 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              <Footer/>
</div>
);
};

export default About;
