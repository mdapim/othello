import Footer from '../Main/components/Footer/Footer';
import InputCard from '../Contact/InputCard';
import Form from '../Contact/Form';
export default function PrivateBookings() {
  const handleFormInput = () => {};
  return (
    <div>
      <div
        class='mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center'
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/table.jpg'
          })`,
        }}
      >
        <p className='text-8xl uppercase font-bold'> Private Bookings </p>
        <p className='text-2xl px-96'>
          Experience exclusivity at its finest with our private bookings at
          Othello Restaurant in Grimsby. Enjoy an intimate and luxurious dining
          experience tailored to your special occasion.
        </p>
      </div>
      <div className='p-10 m-auto grid grid-cols-2'>
        <img
          className=''
          src={process.env.PUBLIC_URL + '/Images/Afro2.jpg'}
          alt=''
        />
        <div className='py-20 m-auto px-32 space-y-6 flex flex-col items-center'>
          <h2 className='font-bold text-4xl uppercase '>The Aphrodite Suite</h2>
          <p>
            Elevate your event to new heights with our Aphrodite Suite at
            Othello Restaurant in Grimsby. Designed to accommodate large
            gatherings of 30+ people, this exclusive space offers an intimate
            and luxurious setting for your special occasion.
          </p>
          <p>
            From milestone celebrations to corporate events, the Aphrodite Suite
            provides a haven of refined elegance, where impeccable service and
            attention to detail are paramount.
          </p>
          <p>
            Our dedicated team will work closely with you to customize every
            aspect, from the menu to the ambiance, ensuring a truly
            unforgettable experience for you and your guests. Book the Aphrodite
            Suite today and make your event a resounding success.
          </p>
          <button className='relative border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer'>
            Enquire
          </button>
        </div>
      </div>
      <div className='p-10  m-auto grid grid-cols-2'>
        <div className='py-20 px-32 space-y-6 m-auto flex flex-col items-center'>
          <h2 className='font-bold text-4xl uppercase '>The Oasis Suite</h2>
          <p>
            Welcome to our family-friendly private room at Othello Restaurant in
            Grimsby, where you can enjoy an intimate gathering with your loved
            ones. With a curtain that comfortably accommodates a maximum of 8
            people, this cozy space offers the perfect setting for creating
            cherished memories.
          </p>
          <p>
            Whether it's a birthday celebration, a special family dinner, or a
            gathering with close friends, our attentive team is dedicated to
            ensuring a delightful experience for everyone. Indulge in our
            delectable menu options, specially crafted to please both young and
            adult palates.
          </p>
          <p>
            Experience warmth, togetherness, and exceptional dining in our
            family-themed private room. Book now and let the festivities begin!
          </p>
          <button className='relative border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer'>
            Enquire
          </button>
        </div>
        <img
          className=''
          src={process.env.PUBLIC_URL + '/Images/elnap.jpg'}
          alt=''
        />
      </div>

      <Footer />
    </div>
  );
}
