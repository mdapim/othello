import React, { useState } from 'react';
import ItemCard from './ItemCard';
import SectionItem from './components/sectionItem';
import Menu from '../../Menu.json';
import Footer from '../Main/components/Footer/Footer';
import ListMeal from './components/ListMeal';
import ListItem from './listItems';

export default function OurMenu() {
  const [chosenItem, setChosenItem] = useState('Lunch');
  return (
    <div>
      {console.log(chosenItem)}
      <div
        class='mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex items-center justify-center'
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/table.jpeg'
          })`,
        }}
      >
        <p className='text-8xl uppercase'> Our Menu </p>
      </div>
      <div className='flex flex-row justify-center'>
        <p
          className='bg-yellow-400 p-4 flex-1 text-center text-white'
          onClick={() => {
            setChosenItem('Lunch');
          }}
        >
          Lunch
        </p>
        <p
          className='bg-blue-400 p-4 flex-1 text-center text-white'
          onClick={() => {
            setChosenItem('Dinner');
          }}
        >
          Dinner
        </p>
        <p
          className='bg-yellow-400 p-4 flex-1 text-center text-white '
          onClick={() => {
            setChosenItem('Desserts');
          }}
        >
          Dessert
        </p>
        <p
          className='bg-blue-400 p-4 flex-1 text-center text-white'
          onClick={() => {
            setChosenItem('Wine');
          }}
        >
          Wine
        </p>
      </div>
      <div className='pt-40 flex flex-row justify-around px-40'>
        <ItemCard
          text='Lunch'
          // source={process.env.PUBLIC_URL + "./Images/chicken.jpeg"}
          source={process.env.PUBLIC_URL + './Images/crab.jpeg'}
        />
        <ItemCard
          text='Dinner'
          // source={"https://mdbootstrap.com/img/new/standard/nature/182.jpg"}
          source={process.env.PUBLIC_URL + './Images/crab.jpeg'}
        />
        <ItemCard
          text='WineLst'
          source={process.env.PUBLIC_URL + './Images/crab.jpeg'}
        />
      </div>
      <br />
      <hr className=' h-px dark:bg-black' />
      <div className='m-20'>
        <div className=' h-full shadow-lg p-40 mx-auto w-screenfull'>
          <ul className='flex flex-col space-y-10 '>
            {/* {Menu[chosenItem].starters.map((item) => {
              return (
                <ListItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              );
            })} */}
            {chosenItem &&
              Object.keys(Menu[chosenItem]).map((item) => (
                <SectionItem
                  menuItem={item}
                  menuList={Menu[chosenItem][item]}
                />
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
