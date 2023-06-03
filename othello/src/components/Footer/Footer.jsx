import { SocialIcon } from 'react-social-icons';
import SocialIcons from './SocialIcons';

const OpeningHours = () => {
  return (
    <div className='text-justify m-auto'>
      <p className='text-4xl my-8'>Hours</p>
      <p> Monday - Saturday</p>
      <p> 12pm - 2pm</p>
      <p> 6pm - 10pm</p>

      <p className='underline mt-4'> Enquire Now </p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className='text-justify m-auto'>
      <p className='text-4xl my-8'>Contact</p>
      <p>25 Bethlehem St, Grimsby</p>
      <p>DN31 1JN</p>

      <p className='underline mt-4'>01472 356704</p>
      <p className='underline'>othellogrimsby@gmail.com</p>
      <p></p>
    </div>
  );
};

export default function Footer() {
  return (
    <div className='h-96 bg-black text-white'>
      <div className='w-screenfull grid grid-cols-3 m-auto '>
        <ContactInfo />
        <div className='m-auto'>
          <img
            width={200}
            className='ml-4 mt-20'
            src={process.env.PUBLIC_URL + 'Images/otello2.png'}
            alt='logo'
          />
          <div className='mt-6 space-x-1 text-center'>
            <SocialIcons imageURL={'https://twitter.com/jaketrent'} />
            <SocialIcons
              imageURL={'https://www.facebook.com/othellorestaurantgrimsby/'}
            />
            <SocialIcons imageURL={'mailto:othellogrimsby@gmail.com'} />
          </div>
        </div>
        <OpeningHours />
      </div>
      <p className=' mt-16 text-center text-white mt-5'>
        Copyright © 2023 Othello Restaurant GY. All rights reserved.
      </p>
    </div>
  );
}
//  <div className='h-96 bg-black flex-col'>
//    <div className='flex flex-row justify-between p-6 space-x-1 text-white px-50 pt-6 w-screenfull m-auto'>
//      <div className='text-center flex-1'>
//        <p className='font-bold text-xl'> About </p>
//        <p>25 Bethlehem St, Grimsby</p>
//        <p>DN31 1JN</p>
//      </div>
//      <div className='text-center flex-1'>
//        <p className='font-bold text-xl'> Contact </p>
//        <div className='space-x-2 mt-4'>
//          <SocialIcons imageURL={'https://twitter.com/jaketrent'} />
//          <SocialIcons
//            imageURL={'https://www.facebook.com/othellorestaurantgrimsby/'}
//          />
//          <SocialIcons imageURL={'mailto:othellogrimsby@gmail.com'} />
//        </div>
//        <p className='mt-2'>01472 356704</p>
//      </div>
//      <div className='text-center flex-1'>
//        <p className='font-bold text-xl'> Hours </p>
//        <p> Mon - Sat: </p>
//        <p> 12pm - 2pm</p>
//        <p> 6pm - 10pm</p>
//      </div>
//    </div>
//    <hr className='bg-white border-[0.01em] opacity-40' />
//    <p className='text-center text-white mt-5'>
//      Copyright © 2023 Othello Restaurant GY. All rights reserved.
//    </p>
//  </div>;
