import React, { useState } from "react";
import Header from "../componets/Header";

const FloatingLabelInput = ({ label, type, id }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        id={id}
        className={`block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer ${
          focus || value ? "focus:border-orange-600" : ""
        }`}
        placeholder=" "
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <label
        htmlFor={id}
        className={`absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
          focus || value ? "text-orange-500" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-container py-12 px-2 md:px-6">
        <div className="max-w-4xl mx-auto bg-white  p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Whether you have a question about our
              products, need assistance, or just want to share your feedback,
              we're here to help.
            </p>
          </div>

          {/* Floating Label Form */}
          <form className="space-y-6">
            <FloatingLabelInput label="Your Name" type="text" id="name" />
            <FloatingLabelInput label="Your Email" type="email" id="email" />
            <FloatingLabelInput
              label="Your Message"
              type="textarea"
              id="message"
            />

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-300 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Our Contact Information
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Email: <span className="font-semibold">support@furniro.com</span>
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Phone: <span className="font-semibold">+92 3092662658</span>
          </p>
          <p className="text-lg text-gray-600">
            Address:{" "}
            <span className="font-semibold">
              majeed colony sec 2, Karachi, Pakistan
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
