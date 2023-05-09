export default function ListMeal({ title, description, price }) {
  return (
    <span className='flex'>
      <span className='flex flex-col  space-y-2'>
        <h1 className='font-bold text-xl'> {title} </h1>
        <p> {description}</p>
      </span>
      <p className='font-bold m-auto'> {price} </p>
    </span>
  );
}
