import Footer from '../../components/Footer/Footer.jsx';
import ImageGallery from './ImageGallery';
export default function About() {
  return (
    <div>
      <div
        class='mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col items-center space-y-10 justify-center'
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/table.jpeg'
          })`,
        }}
      >
        <p className='text-8xl font-bold uppercase'>About Us </p>
        <p className='text-2xl px-96'>
          Exquisite cuisine, impeccable service, and elegant ambiance. Join us
          at Othello Restaurant in Grimsby for an unforgettable dining
          experience that delights all the senses.{' '}
        </p>
      </div>
      <div className='flex-col justify-between justify-center items-center'>
        <div className='flex-1'>
          <div>
            <img
              className='m-auto mt-20'
              src={process.env.PUBLIC_URL + '/Images/Place/FrontBlack.jpg'}
              alt='Othello front'
            />
          </div>
        </div>
        <hr className='w-[600px] border-[0.5px] border-gray-400 m-auto mt-8' />
        <div className='flex-1 m-auto space-y-10'>
          <div className='p-8 px-96 space-y-6 text-center'>
            {' '}
            <p>
              Welcome to Othello Restaurant, a family-owned and operated
              restaurant located in the heart of Grimsby. We pride ourselves on
              serving delicious, authentic Mediterranean cuisine in a warm and
              inviting atmosphere.
            </p>
            <p>
              Our menu features a wide range of dishes inspired by the rich
              culinary traditions of the Mediterranean. From our famous lamb
              chops and thai scallops to our mouthwatering pasta dishes and
              fresh seafood, we have something to satisfy every palate. We use
              only the freshest ingredients and traditional cooking methods to
              create our dishes, ensuring that every meal is bursting with
              flavor.
            </p>
            <p>
              At Othello Restaurant, we believe that dining out should be an
              experience that engages all the senses. That's why we've carefully
              designed our restaurant to create an ambiance that is both elegant
              and comfortable. Whether you're celebrating a special occasion or
              just looking for a relaxing night out, we are committed to
              providing you with exceptional service and an unforgettable dining
              experience.
            </p>
            <p>
              We also offer catering services for your next event or gathering.
              Our experienced chefs will work with you to create a custom menu
              that perfectly fits your needs and budget. From intimate dinner
              parties to large corporate events, we have the expertise and
              resources to make your event a success.
            </p>
            <p>
              Thank you for considering Othello Restaurant for your next dining
              experience. We look forward to serving you soon!
            </p>
          </div>
        </div>
      </div>
      <hr className=' border-gray-400 m-auto mt-8' />
      <div className='w-screenfull py-10 m-auto'>
        <ImageGallery />
      </div>

      <Footer />
    </div>
  );
}
