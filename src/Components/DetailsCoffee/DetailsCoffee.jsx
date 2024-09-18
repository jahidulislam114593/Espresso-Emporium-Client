import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coffeeImage from "../../assets/more/16.png";
import detailsBg from "../../assets/more/11.png";

const DetailsCoffee = () => {
  const [coffee, setCoffee] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/coffee/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCoffee(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching coffee details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${detailsBg})`,
      }}
    >
      <div className="flex">
        <div>
          <img
            src={coffee.photo}
            alt="Coffee Cup"
            className="w-48 h-auto object-cover"
          />
        </div>

        <div className="text-gray-800 ml-10">
          <h2 className="text-3xl font-bold mb-4 text-brown-700">
            {coffee.name}
          </h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Supplier:</span> {coffee.supplier}
            </li>
            <li>
              <span className="font-semibold">Taste:</span> {coffee.taste}
            </li>
            <li>
              <span className="font-semibold">Category:</span> {coffee.category}
            </li>
            <li>
              <span className="font-semibold">Details:</span> {coffee.details}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsCoffee;
