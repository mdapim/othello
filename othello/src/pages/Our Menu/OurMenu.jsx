import React, {useState} from "react";
import ItemCard from "./ItemCard";
import ListItem from "./listItem";
import Menu from "../../Menu.json";

export default function OurMenu() {
  const [chosenItem, setChosenItem] = useState()
  return (
    <div>
      {console.log(Menu)}
      <div className="flex flex-row mt-36 justify-center">
                  <p className="bg-yellow-400 p-4 flex-1 text-center text-white">Lunch</p>
                  <p className="bg-blue-400 p-4 flex-1 text-center text-white">Dinner</p>
                  <p className="bg-yellow-400 p-4 flex-1 text-center text-white">Dessert</p>
                  <p className="bg-blue-400 p-4 flex-1 text-center text-white">Wine</p>
      </div>
      {/* <div className="pt-40 flex flex-row justify-around px-40">
        <ItemCard
          text="Lunch"
          // source={process.env.PUBLIC_URL + "./Images/chicken.jpeg"}
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
        />
        <ItemCard
          text="Dinner"
          // source={"https://mdbootstrap.com/img/new/standard/nature/182.jpg"}
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
        />
        <ItemCard
          text="WineLst"
          source={process.env.PUBLIC_URL + "./Images/crab.jpeg"}
        />
      </div> */}
      <br />
      <hr className=" h-px dark:bg-black" />
      <div className="m-20">
        <div className=" h-full shadow-lg p-40 mx-auto">
          <ul className="flex flex-col space-y-10 ">
            {/* {Menu.mains.map((item) => {
              return (
                <ListItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              );
            })} */}
          </ul>
        </div>
      </div>
    </div>
  );
}
