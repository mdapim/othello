import FeaturedCard from "../FeatauredCard/FetauredCard";
export default function Featured() {
  return (
    <div
      className="h-screen/2 w-100% p-10 flex"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${
      //     process.env.PUBLIC_URL + "/Images/table.jpeg"
      //   })`,
      // }}
    >
      <div className="m-auto">
        <h1 className="text-center t-40 text-7xl text-black">
          {" "}
          Popular Dishes
        </h1>
        <h3 className="text-white text-xl text-center">
          {" "}
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------{" "}
        </h3>
        <br />
        <div className="flex flex-row flex-wrap justify-center space-x-10">
          <FeaturedCard item="crab" />
          <FeaturedCard item="sea" />
          <FeaturedCard item="garlic" />
          <FeaturedCard item="pan" />
        </div>
        <br />
        <h3 className="text-black text-xl text-center">
          {" "}
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------{" "}
        </h3>
      </div>
    </div>
  );
}
