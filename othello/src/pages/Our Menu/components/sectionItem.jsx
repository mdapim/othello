import React from 'react'
import PropTypes from 'prop-types'
import ListMeal from './ListMeal'

export default function SectionItem({ menuItem, menuList }) {
  return (
    <>
      <div
        className="bg-fixed h-36 md:h-72 md:w-full flex overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/main.jpeg`})`
        }}
      >
        <h3 className="text-5xl md:text-8xl text-white m-auto uppercase">
          {menuItem}
        </h3>
      </div>
      <div className="grid gap-6 grid-cols-1 px-6 justify-between  md:grid-cols-2 md:px-28 md:py-14">
        {menuList.map(item => (
          <ListMeal
            key={item.name}
            title={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  )
}

SectionItem.propTypes = {
  menuItem: PropTypes.string.isRequired,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
