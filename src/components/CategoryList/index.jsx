import Category from "./Category";
import React from "react";

const CategoryList = () => {
  const items = [
    { catId: 1, catName: "Friction" },
    { catId: 1, catName: "History" },
    { catId: 1, catName: "Science" },
    { catId: 1, catName: "External Affairs" },
  ];
  return (
    <div>
      <h2 className="text-center mb-5">All Categories</h2>
      <div className="row">
        {items.map((item, i) => (
          <Category data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
