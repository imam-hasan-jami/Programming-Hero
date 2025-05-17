import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { _id, name, quantity, price, taste, supplier, photo, details } =
    useLoaderData();

  return (
    <div>
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Coffee Details</h2>
        <div className="flex justify-center mt-8 space-x-8">
          <img src={photo} alt="" />
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-xl">Price: {price}</p>
            <p className="text-xl">Quantity: {quantity}</p>
            <p className="text-xl">Taste: {taste}</p>
            <p className="text-xl">Supplier: {supplier}</p>
            <p className="text-xl">Details: {details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
