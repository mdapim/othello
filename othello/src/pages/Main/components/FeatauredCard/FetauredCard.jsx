export default function FeaturedCard({ item }) {
  return (
    <div class='w-80 h-auto shadow-lg border text-black'>
      <img
        class=' object-cover w-full '
        src={process.env.PUBLIC_URL + `/Images/${item}.jpeg`}
        alt=''
      />
      <hr className='w-16 shadow shadow-black border-transparent mx-auto mt-8' />
      <div class='p-4 '>
        <h5 class='mb-2 text-2xl text-center font-bold tracking-tight'>
          Chicken a la creme
        </h5>
        <p class='font-normal text-lg text-center'>£9.99</p>
      </div>
    </div>
  );
}
