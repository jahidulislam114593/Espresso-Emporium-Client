import React from "react";
import contactImg from "../assets/more/13.jpg";
import img1 from "../assets/more/logo1.png";
import {
  FaFacebook,
  FaFileContract,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
  return (
    <section
      className="py-20 flex items-center justify-center text-black h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${contactImg})` }}
    >
      <div className="  flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-11/12 md:w-3/4 lg:w-2/3">
        <div className="flex-1">
          <div className="text-center md:text-left">
            <img src={img1} alt="Logo" className="mx-auto md:mx-0 w-16 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Espresso Emporium</h2>
            <p className="mb-6">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a href="#" className="text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl">
                <FaLinkedinIn />
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="mb-1 flex items-center">
                <IoCall className="mr-2" /> +88 01533 333 333
              </p>
              <p className="mb-1 flex items-center">
                <MdEmail className="mr-2" />
                info@gmail.com
              </p>
              <p className="flex items-center">
                <IoLocation className="mr-2" />
                72, Wall street, King Road, Dhaka
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
            Connect with Us
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
