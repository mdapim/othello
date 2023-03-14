import React from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";
import ListItem from "./listItem";
import Menu from "../../Menu.json";

export default function OurMenu() {
  const [categoryName, setCategoryName] = useState("starters");
  const [menulist, setMenuList] = useState(Menu.starters);
  const [vegetarian, setVegetarian] = useState(false);
  const [selectedWine, setSelectedWine] = useState("all");

  const getMenuItems = (category) => {
    vegetarian === true
      ? setMenuList(Menu[category].filter((item) => item.vegetarian === true))
      : setMenuList(Menu[category]);
  };

  const getDrinkItems = (category) => {
    console.log(category);
    selectedWine === "all"
      ? setMenuList(Menu[category])
      : setMenuList(
          Menu[category].filter((item) => item.type === selectedWine)
        );
    console.log(menulist);
  };

  return (
    <div>
      <div className="pt-40 flex flex-row flex-wrap justify-around px-40">
        <ItemCard
          text="starters"
          // source={process.env.PUBLIC_URL + "./Images/chicken.jpeg"}
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
          setCategoryName={setCategoryName}
          getMenuItems={getMenuItems}
          getDrinkItems={getDrinkItems}
        />
        <ItemCard
          text="mains"
          // source={"https://mdbootstrap.com/img/new/standard/nature/182.jpg"}
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
          setCategoryName={setCategoryName}
          getMenuItems={getMenuItems}
          getDrinkItems={getDrinkItems}
        />
        <ItemCard
          text="desserts"
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
          setCategoryName={setCategoryName}
          getMenuItems={getMenuItems}
          getDrinkItems={getDrinkItems}
        />
        <ItemCard
          text="wines"
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
          setCategoryName={setCategoryName}
          getMenuItems={getMenuItems}
          getDrinkItems={getDrinkItems}
        />
      </div>
      <br />
      <hr className=" h-px dark:bg-black" />
      <div className="m-20">
        <div className=" h-full shadow-lg p-40 mx-auto">
          <ul className="flex flex-col space-y-10 ">
            {menulist &&
              menulist.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
