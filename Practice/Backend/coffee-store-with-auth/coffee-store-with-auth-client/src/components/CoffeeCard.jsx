import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffees, setCoffees, coffee }) => {
  const { _id, name, price, quantity, photo } = coffee;

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
            fetch(`http://localhost:3000/coffees/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your Coffee has been deleted.",
                          icon: "success",
                        });

                        const remainingCoffees = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remainingCoffees);
                    }
                })
        }
    })
  };

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
            <Link to={`/update-coffee/${_id}`}>
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
