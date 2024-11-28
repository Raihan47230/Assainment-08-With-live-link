import React, { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { addCard, addCards  } from "./LocalHost";
import { GiLoveMystery } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";


const Details = () => {
 const handleHart=(dlis)=>{
  addCards(dlis)
  console.log(dlis)
 }
  const hendelclick = (dli) => {
    addCard(dli);
  };
  const { product_id } = useParams();
  const loaderDara = useLoaderData()
  console.log(loaderDara)
const [count,setCount]=useState([])
useEffect(()=>{
  const singleData=loaderDara.find(coffee=>coffee.product_id==product_id)
  setCount(singleData)
},[loaderDara,product_id])
console.log(count.product_id)
const { product_image, product_title, description, price ,Specification,availability,rating} = count;

//   const Details = loader.find(Details => Details.product_id === id);
// console.log(Details)


  return (
    // <div> coffee details {count.description} </div>
    <div className="relative pb-64 ">
      <div className="bg-violet-500 text-center py-8 pb-40 text-white  ">
        <h1 className="text-2xl font-bold ">Product Details</h1>
        <p className="font-semibold">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>

      <div className="hero bg-base-200 min-h-[50vh] w-4/6 mx-auto rounded-xl absolute -mt-36 ml-80  ">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={product_image}
            className=" h-96 w-96 rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-5xl font-bold">{product_title}</h1>
            <p className="py-6">Price : ${price}</p>
            <h1 className="bg-lime-300 px-5 py-2 rounded-xl">
              {availability}
            </h1>
            <h1 className="">{description}</h1>
            <h1 className=" font-bold">
              Specification : {Specification}
            </h1>
            <h1 className="">
              Rating <br />
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>{" "}
              {rating}
            </h1>
            <div className="flex gap-3 mt-5  items-center">
              <button
                onClick={() => hendelclick(count)}
                className="px-5 py-3 bg-violet-500 font-bold text-white rounded-xl flex items-center gap-3"
              >
                <p>Add To Card</p> <p><FiShoppingCart className="h-7 w-7"/></p>

              </button>
              <button onClick= { () =>handleHart(count)} className="btn bg-violet-500"><GiLoveMystery className="h-6 w-6"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

// Category
// :
// "Laptop"
// Specification
// :
// Array(5)
// 0
// :
// "15.6-inch 4K display"
// 1
// :
// "Intel Core i7"
// 2
// :
// "16GB RAM"
// 3
// :
// "512GB SSD"
// 4
// :
// "NVIDIA RTX 3060"
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)
// availability
// :
// "In Stock"
// description
// :
// "High-performance laptop with ultra-fast processing."
// price
// :
// 1299.99
// product_id
// :
// 1
// product_image
// :
// "https://i.ibb.co.com/yVyBVfC/Laptop-PNG-Image-Background.png"
// product_title
// :
// "Premium Laptop X15"
// rating
// :
// 4.7
