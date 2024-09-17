import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const OurProduct = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">
        --- Sip & Savor ---
        <br />
        <span className="text-3xl font-light">Our Popular Products</span>
      </h2>

      <div className="text-center mb-10">
        <Link to="/addCoffee">
          <button className="btn btn-warning btn-lg">Add Coffee</button>
        </Link>
      </div>

      <div className="m-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
