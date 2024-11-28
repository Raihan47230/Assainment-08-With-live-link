import React from "react";
import { Link } from "react-router-dom";

const Card = ({AllData}) => {
     const {product_id,product_title,price,product_image}=AllData
  return (
    <div className="card card-compact bg-base-100  shadow-xl shadow-gray-300 border border-solid">
      <figure className="py-10 px-3 ">
        <img
        className="h-60 w-72 object-cover rounded-xl mx-auto bg-slate-50"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>Price : ${price}</p>
        <div className="card-actions ">
          <Link to={`/categories/${product_id}`}><button  className="btn">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;


// {
//      "product_id": 17,
//      "product_title": "MacBook Pro 14 M2",
//      "product_image": "https://i.ibb.co.com/W6M3cpK/1-547d9c4f-70be-4874-8511-e7a5d43ffaed.webp",
//      "Category": "MacBook",
//      "price": 1999.99,
//      "description": "Compact powerhouse MacBook with the M2 chip.",
//      "Specification": ["14-inch Retina display", "M2 chip", "16GB RAM", "512GB SSD"],
//      "availability": "In Stock",
//      "rating": 4.4
//  }  