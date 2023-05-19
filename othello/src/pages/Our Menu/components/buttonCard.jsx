export default function ButtonCard({ title, description, image }) {
  return (
    <a
      href='https://www.mypage.com'
      class='flex flex-col bg-gray-900 h-64 rounded w-full shadow md:flex-row hover:bg-gray-100'
    >
      <img
        className='object-none w-full rounded-t-lg h-auto md:w-96 md:rounded-none md:rounded-l'
        src={process.env.PUBLIC_URL + `/Images/${image}`}
        alt=''
      />
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {title}
        </h5>
        <p class=' font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </a>
  );
}
