// import React from 'react';
// import { getAllDatas, removeCardss } from '../LocalHost';
// import Single from './Single';

// const Wish = () => {

//   const hendleRemovess = (product_id) => {
//     removeCardss(product_id);
//     const setDetails = getAllDatas();
//     setDetailsDatas(setDetails);
//   };
//   const [detailsDatas, setDetailsDatas] = useState([]);
//   useEffect(() => {
//     const setDetails = getAllDatas();
//     setDetailsDatas(setDetails);
//   }, []);

//   return (
//     <div>
//       <div className="bg-gray-200 space-y-5 py-20 ">
//                   <div className="flex justify-around">
//                     <div>
//                       <h1 className="font-bold text-2xl text-gray-600">Cart</h1>
//                     </div>
//                     <div className="flex space-x-8 items-center">
//                       <p className="text-lg text-gray-600">
//                         Total cost:$999.99
//                       </p>
//                       <button className="text-lg text-violet-900 font-bold border border-violet-600 px-6 py-1 rounded-2xl">
//                         Sort by Price
//                       </button>
//                       <button className="text-lg text-white bg-violet-800 px-5 py-1 rounded-2xl">
//                         Purchase
//                       </button>
//                     </div>
//                   </div>
//                   {detailsDatas.map(items => (
//                     <Single hendleRemovess={hendleRemovess} key={items.product_id} items={items}></Single>
//                   ))}
//                 </div>
//     </div>
//   );
// };

// export default Wish;