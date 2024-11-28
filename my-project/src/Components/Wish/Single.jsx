import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoTrashOutline } from "react-icons/io5";

const Single = ({items,hendleRemovess}) => {
     const {pathname}=useLocation()
     const { product_id,product_image, product_title, description, price } =items
     return (
          <div className="flex gap-20  w-8/12 mx-auto bg-white px-10 py-5 rounded-xl relative">
                <div className="shadow-xl shadow-cyan-50">
      <figure >
            <img className="h-40 w-52 object-cover p-4 rounded-xl bg-slate-50 "
              src={product_image}
              alt="x"
            />
          </figure>
      </div>
      <div className="">
            <h2 className="text-4xl font-bold mb-5">{product_title}</h2>
            <p className="text-xl font-semibold mb-2">{description}</p>
            <p className="text-lg font-semibold  ">Price : ${price}</p>
            <p className="text-lg font-semibold bg-violet-500 px-6 py-2 rounded-xl w-40 cursor-pointer">Add to Card</p>
          </div>

          {
          pathname==='/deshboard'&&(
               <div onClick={()=>hendleRemovess(product_id)}  className="absolute -top-3 -right-3 text-4xl  cursor-pointer"><IoTrashOutline  className='rounded-full bg-pink-500 text-red-800'/></div>
          )
          
      }
          </div>
     );
};

export default Single;