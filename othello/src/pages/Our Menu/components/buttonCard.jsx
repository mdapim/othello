export default function ButtonCard({ title, description, image, setItem }) {
  return (
    <div
      class='grid grid-cols-2 bg-black h-64 rounded w-full shadow md:grid hover:bg-gray-900 hover:cursor-pointer'
      onClick={() => {
        setItem(title);
      }}
    >
      <img
        className='object-cover w-full h-64 md:w-96 md:rounded-none md:rounded-l'
        src={process.env.PUBLIC_URL + `/Images/${image}`}
        alt=''
      />
      <div class='p-4 leading-normal m-auto'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p class=' font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
