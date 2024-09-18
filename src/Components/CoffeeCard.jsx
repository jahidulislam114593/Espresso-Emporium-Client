import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  const handleDetailsCoffee = (_id) => {};

  return (
    <div className="bg-[#ECEAE3] shadow-lg rounded-lg flex items-center p-6 border border-gray-200">
      <figure className="w-1/3 ">
        <img src={photo} alt={name} className="w-full h-auto object-cover" />
      </figure>

      <div className="flex flex-col justify-between w-2/3 p-4">
        <div className="">
          <p className="text-gray-600">
            <span className="font-semibold text-black">Name: </span>
            {name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-black">Supplier: </span>{" "}
            {supplier}{" "}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-black">Quantity: </span>{" "}
            {quantity}{" "}
          </p>
        </div>
      </div>
      <div className="card-actions justify-end ">
        <div className="join join-vertical space-y-4">
          <Link to={`/deailsCoffee/${_id}`}>
            <button className="btn bg-[#D2B48C] text-white border-none text-xl">
              <FaRegEye />
            </button>
          </Link>

          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn text-white text-xl bg-[#3C393B]">
              <MdEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-[#EA4744] text-white border-none text-xl"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
