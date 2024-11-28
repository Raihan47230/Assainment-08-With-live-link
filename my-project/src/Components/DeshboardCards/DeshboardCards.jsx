
import { useLocation } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";


const DeshboardCards = ({ item,hendleRemove }) => {
     const {pathname}=useLocation()
   
  const { product_image, product_title, description, price,product_id } = item;
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
          </div>
      
          {
          pathname==='/deshboard'&&(
               <div onClick={()=>hendleRemove(product_id)}  className="absolute -top-3 -right-3 text-4xl cursor-pointer"><IoTrashOutline  className='rounded-full bg-pink-500 text-red-800'/></div>
          )
          
      }
    
    </div>
  );
};

export default DeshboardCards;

// / Category
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
