import { useNavigate } from 'react-router-dom';

export default function FeaturedCard({ image, title, description, price }) {
  const navigate = useNavigate();
  return (
    <div
      class='w-80 h-[480px] shadow-md border text-black hover:cursor-pointer'
      onClick={() => {
        navigate('/OurMenu');
      }}
    >
      <img
        class=' object-cover w-full '
        src={process.env.PUBLIC_URL + `/Images/${image}.jpeg`}
        alt=''
      />
      <hr className='w-16 shadow shadow-black border-transparent mx-auto mt-8' />
      <div class='p-4 '>
        <h5 class='mb-2 text-2xl text-center font-bold tracking-tight'>
          {title}
        </h5>
        <p class='font-normal text-lg text-center'>{description}</p>
      </div>
    </div>
  );
}
