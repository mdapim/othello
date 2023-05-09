import Footer from '../Main/components/Footer/Footer';
export default function PrivateBookings() {
  return (
    <div>
      <div
        class='mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex items-center justify-center'
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/table.jpeg'
          })`,
        }}
      >
        <p className='text-8xl uppercase'> Private Bookings </p>
      </div>
      <img src={process.env.PUBLIC_URL + '/Images/main.jpeg'} alt='' />
      <Footer />
    </div>
  );
}
