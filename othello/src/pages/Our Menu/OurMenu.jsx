import React, { useState } from 'react';
import ItemCard from './ItemCard';
import SectionItem from './components/sectionItem';
import Menu from '../../Menu.json';
import Footer from '../../components/Footer/Footer.jsx';
import ListMeal from './components/ListMeal';
import ListItem from './listItems';
import ButtonGrid from './components/buttonGrid';

export default function OurMenu() {
  const [chosenItem, setChosenItem] = useState('Lunch');
  return (
    <div>
      {console.log(chosenItem)}
      <div
        class='mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center'
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/crab.jpeg'
          })`,
        }}
      >
        <p className='text-8xl uppercase font-bold'> Our Menu </p>
        <p className='text-2xl px-96'>
          Indulge in culinary delights at Othello Restaurant in Grimsby. Explore
          our tantalizing menu, crafted with passion and featuring exquisite
          flavors that will leave you wanting more.
        </p>
      </div>
      <div className='m-24'>
        <ButtonGrid setItem={setChosenItem} />
      </div>

      <br />
      <hr className=' h-px dark:bg-black' />

      <ul className='flex flex-col space-y-10 '>
        {chosenItem &&
          Object.keys(Menu[chosenItem]).map((item) => (
            <SectionItem menuItem={item} menuList={Menu[chosenItem][item]} />
          ))}
      </ul>

      <Footer />
    </div>
  );
}
