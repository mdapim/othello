import React from "react";
import ItemCard from "./ItemCard";
import ListItem from "./listItem";
import Menu from "../../Menu.json";

export default function OurMenu() {
  return (
    <div>
      {console.log(Menu)}
      <div className="pt-40 flex flex-row justify-around px-40">
        <ItemCard
          text="Starters"
          // source={process.env.PUBLIC_URL + "./Images/chicken.jpeg"}
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
        />
        <ItemCard
          text="Mains"
          // source={"https://mdbootstrap.com/img/new/standard/nature/182.jpg"}
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
        />
        <ItemCard
          text="Desserts"
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
        />
      </div>
      <br />
      <hr className=" h-px dark:bg-black" />
      <div className="m-20">
        <div className=" h-full shadow-lg p-40 mx-auto">
          <ul className="flex flex-col space-y-10 ">
            {Menu.mains.map((item) => {
              return (
                <ListItem
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
