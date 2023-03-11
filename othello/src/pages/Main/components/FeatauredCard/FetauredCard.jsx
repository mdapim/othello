export default function FeaturedCard({ item }) {
  return (
    <div class="w-64 shadow-2xl border text-black">
      <img
        class=" object-cover h-52"
        src={process.env.PUBLIC_URL + `/Images/${item}.jpeg`}
        alt=""
      />
      <hr className="w-16 shadow shadow-black border-transparent mx-auto mt-4" />
      <div class="p-1">
        <h5 class="mb-2 text-l text-center font-bold tracking-tight">
          Chicken a la creme
        </h5>
        <p class="font-normal text-center">£9.99</p>
      </div>
    </div>
  );
}
