import "./InfoPanel.css";
import "../../../../Fonts/Font.css";
import PromotionCard from "./PromotionCard";

const promotionCards = [
  {
    code: "\u2605",
    title: "Quality Atmosphere",
    description:
      "A pleasant and comfortable atmosphere without unwanted disturbances",
  },
  {
    code: "\u2766",
    title: "Fresh Food",
    description:
      "High-quality food that sits at par with the standards of the restaurant",
  },
  {
    code: "\u2764",
    title: "Excellent Service",
    description:
      "Quick service at all fronts: from being seated to receiving the cheque & everything in between",
  },
  {
    code: "\u2600",
    title: "Warm Welcome",
    description:
      "Kind & cordial treatment by the restaurant staff throughout your dining experience",
  },
  {
    code: "\u2746",
    title: "Seasonal Menus",
    description:
      "Don't miss out on this limited-time opportunity to savor the best of the season",
  },
];

export default function InfoPanel() {
  return (
    <div
      className="flex flex-wrap flex-row m-auto h-screen w-10/12 relative overflow-hidden"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${
      //     process.env.PUBLIC_URL + "/Images/sketch.jpeg"
      //   })`,
      // }}
    >
      <img
        src={process.env.PUBLIC_URL + "/Images/sketch.jpeg"}
        alt="op"
        className="opacity-30 absolute top-0 left-0 w-screen h-auto z-0" //inset-x-80 inset-y-24
      />
      <div
        className="infoPanel-container infoPanel-text pacific text-center align-self-center m-auto z-10"
        id="test"
      >
        {" "}
        <h1 className="uppercase text-3xl">What we offer</h1>
        <br />
        <span className="flex flex-row text-justify space-x-14">
          <p className="flex-1">
            Welcome to our Greek restaurant, where you can experience the
            authentic flavors and hospitality of Greece. From the sun-kissed
            islands to the mountainous regions of the mainland, Greek cuisine is
            a celebration of fresh, wholesome ingredients, herbs, and spices
            that create a symphony of flavors and aromas. Our restaurant brings
            this culinary experience to your doorstep, offering a wide range of
            dishes that showcase the diversity of Greek cuisine.
          </p>
          <p className="flex-1">
            Whether you're a fan of baklava, moussaka, or tzatziki, our menu is
            designed to tantalize your taste buds and transport you to the Greek
            countryside. So come and join us on a culinary journey through
            Greece, and let us share our love of food, culture, and hospitality
            with you.
          </p>
        </span>
        <br />
        <span className="flex flex-row flex-wrap space-x-32 text-justify">
          {promotionCards.map((item, index) => (
            <PromotionCard key={index} Details={item} />
          ))}
        </span>
      </div>
      <img
        className="image-container m-auto z-10"
        src={process.env.PUBLIC_URL + "/Images/drinks.jpeg"}
        alt="mine"
      />
    </div>
  );
}
