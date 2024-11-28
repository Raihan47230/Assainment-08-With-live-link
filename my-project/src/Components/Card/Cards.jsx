import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const navigate = useNavigate();
  const { Category } = useParams();
  const loaderDatas = useLoaderData();
  const [count, setCount] = useState([]);
  useEffect(() => {
    if (Category) {
      const filterByData = [...loaderDatas].filter(
        (data) => data.Category === Category
      );
      setCount(filterByData);
    } else {
      setCount(loaderDatas);
    }
  }, [loaderDatas, Category]);
  return (
    <div className="grid space-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:w-3/4">
      {count.map((AllData) => (
        <Card key={AllData.product_id} AllData={AllData}></Card>
      ))}
    </div>
  );
};

export default Cards;
