import React from "react";
import { Link } from "react-router";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, quantity, photo } = coffee;

  const handleDelete = (_id) => {
    
  }

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2">
      <figure>
        <img className="w-30 h-30 object-contain" src={photo} alt="Movie" />
      </figure>
      <div className="flex mt-8 w-full justify-around">
        <div>
          <h2 className="">{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <Link to={`/coffee/${_id}`}>
              <button className="btn join-item">View</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
