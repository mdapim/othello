export default function ListMeal({ title, description, price }) {
  return (
    <span className='grid grid-cols-3 gap-0'>
      <span className='col-span-2'>
        <h1 className='font-bold text-xl'> {title} </h1>
        <p> {description}</p>
      </span>
      <p className='font-bold m-auto col-span-1'> {price} </p>
    </span>
  );
}
