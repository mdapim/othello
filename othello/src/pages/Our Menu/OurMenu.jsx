import ItemCard from "./ItemCard";

export default function OurMenu() {
  return (
    <div>
      {" "}
      <div className="pt-40 flex flex-row justify-around px-40">
        <ItemCard text="Starters" />
        <ItemCard text="Mains" />
        <ItemCard text="Desserts" />
      </div>
      <br />
      <hr className=" h-px dark:bg-black" />
    </div>
  );
}
