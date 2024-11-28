import toast from "react-hot-toast";

const addCard = (Details) => {
  console.log(Details)
  const singleData = getAllData();

  console.log(singleData)

  const findData = singleData.find(
    (data) => data.product_id == Details.product_id
  );
  if (findData) return toast.error("This card already exist!");
  singleData.push(Details);
  localStorage.setItem("name", JSON.stringify(singleData));
  toast.success('Successfully created!');
//   else {
//     return toast.success("Successfully add!");
//   }



};
const getAllData = () => {
  const allData = localStorage.getItem("name");

  if (allData) {
    const all = JSON.parse(allData);
    return all;
  } else {
    console.log([]);
    return [];
  }
};

const removeCards = (product_id) => {
  const singleData = getAllData();
  const remaining = singleData.filter((data) => data.product_id != product_id);
  localStorage.setItem("name", JSON.stringify(remaining));
  toast.success("Successfully remove!");
};
/////////////////////////////
const addCards = (Detail) => {
  const singleData = getAllDatas();
  const findData = singleData.find(
    (data) => data.product_id == Detail.product_id
  );

  if (findData) return toast.error("This card already exist!");
  singleData.push(Detail);
  localStorage.setItem("raihan", JSON.stringify(singleData));
  toast.success('Successfully created!');
};
const getAllDatas = () => {
  const allData = localStorage.getItem("raihan");

  if (allData) {
    const all = JSON.parse(allData);
    return all;
  } else {
    console.log([]);
    return [];
  }
};

const removeCardss = (product_id) => {
  const singleData = getAllDatas();
  const remaining = singleData.filter((data) => data.product_id != product_id);
  localStorage.setItem("raihan", JSON.stringify(remaining));
  toast.success("Successfully remove!");
};

export {
  addCard,
  getAllData,
  removeCards,
  addCards,
  getAllDatas,
  removeCardss,
};
