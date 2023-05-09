import Footer from '../Main/components/Footer/Footer';
export default function About() {
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
        <p className='text-8xl uppercase'>About Us </p>
      </div>
      <div className='flex'>
        <div className='flex-1 m-auto space-y-10'>
          <p>
            Welcome to Othello Restaurant, a family-owned and operated
            restaurant located in the heart of Grimsby. We pride ourselves on
            serving delicious, authentic Mediterranean cuisine in a warm and
            inviting atmosphere.
          </p>
          <p>
            Our menu features a wide range of dishes inspired by the rich
            culinary traditions of the Mediterranean. From our famous lamb chops
            and thai scallops to our mouthwatering pasta dishes and fresh
            seafood, we have something to satisfy every palate. We use only the
            freshest ingredients and traditional cooking methods to create our
            dishes, ensuring that every meal is bursting with flavor.
          </p>
          <p>
            At Othello Restaurant, we believe that dining out should be an
            experience that engages all the senses. That's why we've carefully
            designed our restaurant to create an ambiance that is both elegant
            and comfortable. Whether you're celebrating a special occasion or
            just looking for a relaxing night out, we are committed to providing
            you with exceptional service and an unforgettable dining experience.
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
        <div className='flex-1'>
          <img
            src={process.env.PUBLIC_URL + '/Images/main.jpeg'}
            alt='Othello front'
            height='400'
            width='400'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
