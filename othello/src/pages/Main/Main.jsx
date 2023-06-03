import React, { useEffect, useState } from 'react';
import InfoPanel from './components/InfoPanel/InfoPanel';
import Featured from './components/Featured/Featured';
import Footer from '../../components/Footer/Footer.jsx';
import Comments from './components/Comments/Comments';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const [data, setData] = useState(undefined);

  //   const fetchReviews = async () => {
  //     const apiResponse = await fetch(`
  // https://api.content.tripadvisor.com/api/v1/location/1943770/details`);
  //     const apiResponseJson = await apiResponse.json();
  //     console.log("response -> ", apiResponseJson);
  //   };

  //   useEffect(() => {
  //     fetchReviews();
  //   }, []);

  return (
    <div className='frame'>
      <div
        class='bg-fixed h-screen w-full flex'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/main.jpeg'
          })`,
        }}
      >
        <div className='text-center text-white m-auto pt-20'>
          <img
            className='w-20 h-20 invert block m-auto'
            src={process.env.PUBLIC_URL + '/Images/logot.png'}
            alt='logo'
          />
          <p className='text-2xl uppercase'>Welcome to</p>
          <p className='text-2xl uppercase'>the</p>
          <p className='text-8xl'>Othello</p>
          <p className='text-2xl px-72 pt-10 w-screenfull'>
            Home of Authentic Greek Cuisine where you can experience the taste
            and traditions of Greece in every bite. We are proud to serve
            authentic Greek cuisine that is made with fresh ingredients, classic
            recipes, and a touch of our own family secrets.
          </p>
          <br />
          <br />
          <button
            onClick={() => {
              navigate('/OurMenu');
            }}
            className='relative h-12 w-44 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-black'
          >
            {' '}
            Try Now{' '}
          </button>
        </div>
      </div>
      <br />
      <br />
      <InfoPanel />
      <br />
      <Comments />
      <Featured />
      <Footer />
    </div>
  );
}
