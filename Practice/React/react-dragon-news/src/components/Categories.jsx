import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
    const categories = use(categoryPromise);

    return (
      <div>
        <h1 className="font-bold">All Category ({categories.length})</h1>
        <div className="grid grid-cols-1 mt-3">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              className={"btn bg-base-100 border-0 mt-2 hover:bg-base-200 font-semibold text-accent"}
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default Categories;