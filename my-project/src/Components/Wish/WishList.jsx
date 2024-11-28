import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import {
  getAllData,
  getAllDatas,
  removeCards,
  removeCardss,
} from "../LocalHost";
import DeshboardCards from "../DeshboardCards/DeshboardCards";
import Single from "./Single";
import { useNavigate } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const WishList = () => {

  
  const navigate = useNavigate();
  const handleNavegate = () => {
    navigate("/");
  };
  const hendleRemove = (product_id) => {
    removeCards(product_id);
    const setDetails = getAllData();
    setDetailsData(setDetails);
  };
  const [detailsData, setDetailsData] = useState([]);
  useEffect(() => {
    const setDetails = getAllData();
    setDetailsData(setDetails);
  }, []);

  const hendleRemovess = (product_id) => {
    removeCardss(product_id);
    const setDetails = getAllDatas();
    setDetailsDatas(setDetails);
  };
  const [detailsDatas, setDetailsDatas] = useState([]);
  useEffect(() => {
    const setDetails = getAllDatas();
    setDetailsDatas(setDetails);
  }, []);

  return (
    <div>
      <div>
        <div className="text-center py-14 bg-violet-600">
          <h1 className="text-2xl font-bold mb-7">Deshboard</h1>
          <p className="text-lg font-semibold">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
          <div className="flex justify-center gap-6 mt-10"></div>
        </div>

        <div className="flex justify-center">
          <Tabs>
            <div className="bg-violet-600 flex justify-center -mt-20">
              <TabList>
                <Tab>Cards</Tab>
                <Tab>WishList 2</Tab>
              </TabList>
            </div>

            <div className="mt-40">
              <TabPanel className={" lg:w-[1400px]"}>
                <div className="bg-gray-200 space-y-5 py-20 ">
                  <div className="flex justify-around">
                    <div>
                      <h1 className="font-bold text-2xl text-gray-600">Cart</h1>
                    </div>
                    <div className="flex space-x-8 items-center">
                      <p className="text-lg text-gray-600">
                        Total cost:$100000.99
                      </p>
                      <button
                       
                        className="text-lg text-violet-900 font-bold border border-violet-600 px-6 py-1 rounded-2xl"
                      >
                        Sort by Price
                      </button>
                      <button
                        className="btn bg-violet-700 text-white"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        Purchase
                      </button>
                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <img
                            className="h-20 w-20 mx-auto"
                            src="https://i.ibb.co.com/yVqSRNk/approved-icon-from-competition-success-bicolor-vector-5607774.jpg"
                            alt=""
                          />
                          <h3 className="font-bold text-xl text-center mt-10  ">
                            Prament Successfully!
                          </h3>
                          <p className="text-lg font-semibold text-center mt-3">
                            {" "}
                            Total :
                          </p>
                          <h1 className="border-b-2 mt-6 w-2/3 mx-auto mb-10"></h1>
                          <p className="text-2xl font-semibold text-center">
                            Thank you purchasing
                          </p>

                          <div className="modal-action">
                            <form method="dialog">
                             
                              <button
                                onClick={handleNavegate}
                                className="btn justify-center"
                              >
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                  {detailsData.map((item) => (
                    <DeshboardCards
                      hendleRemove={hendleRemove}
                      key={item.product_id}
                      item={item}
                    ></DeshboardCards>
                  ))}
                </div>
              </TabPanel>
            </div>
            <TabPanel>
              <div className="bg-gray-200 space-y-5 py-20 ">
                <div className="flex justify-around">
                  <div className="lg:mr-40">
                    <h1 className="font-bold text-2xl text-gray-600 ">
                      Wishlist
                    </h1>
                  </div>
                  <div className="flex space-x-8 items-center"></div>
                </div>
                {detailsDatas.map((items) => (
                  <Single
                    hendleRemovess={hendleRemovess}
                    key={items.product_id}
                    items={items}
                  ></Single>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default WishList;

//
