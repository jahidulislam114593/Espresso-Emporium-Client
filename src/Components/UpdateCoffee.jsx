import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 text-black">
      <h3 className="text-7xl font-extrabold mb-8">Updated Coffee</h3>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mr-4 mb-6">
            <label className="label">
              <span className="label-text text-black">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text text-black">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={quantity}
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mr-4 mb-6">
            <label className="label">
              <span className="label-text text-black">Supplier</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={supplier}
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text text-black">Taste</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={taste}
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 mr-4 mb-6">
            <label className="label">
              <span className="label-text text-black">Category</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={category}
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 mb-6">
            <label className="label">
              <span className="label-text text-black">Details</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={details}
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={photo}
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block btn-success text-white mt-8"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
