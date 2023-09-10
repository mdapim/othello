/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import ListMeal from './ListMeal'

export default function SectionItem({ menuItem, menuList }) {
  return (
    <>
      {console.log('menu item is', menuItem)}
      <div
        className="bg-fixed h-36 md:h-72 md:w-full flex overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/main.jpeg`})`
        }}
      >
        <p className="text-5xl md:text-8xl text-white m-auto uppercase">
          {menuItem}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 px-6 justify-between m-auto md:grid-cols-2 md:px-28 md:py-14">
        {menuList.map(item => (
          <ListMeal
            title={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  )
}
// fix
SectionItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  menuList: PropTypes.string.isRequired
}
