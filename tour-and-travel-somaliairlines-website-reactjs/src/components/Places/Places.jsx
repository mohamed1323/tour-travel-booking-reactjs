import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/jasiiro.jpg";
import Img2 from "../../assets/places/liidosomalia.jpg";
import Img3 from "../../assets/places/bari.jpg";
import Img4 from "../../assets/places/mogadishu.jpg";
import Img5 from "../../assets/places/koyamasomalia.jpg";
import Img6 from "../../assets/places/kismaayo.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "jasiiro",
    location: "soomalia",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 50,
    type: "price",
  },
  {
    img: Img2,
    title: "liidosomalia",
    location: "somalia",
    description:
"lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 30,
    type: "price",
  },
  {
    img: Img3,
    title: "bari",
    location: "somalia",
    description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    type: "price",
  },
  {
    img: Img4,
    title: "curubo",
    location: "somalia",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 40,
    type: "price",
  },
  {
    img: Img5,
    title: "koyama",
    location: "somalia",
    description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 200,
    type: "price",
  },
  {
    img: Img6,
    title: "kismaayo",
    location: "somalia",
    description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 150,
    type: "price",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
