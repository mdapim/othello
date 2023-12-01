/* eslint-disable */
import React from 'react'
import './gallery.css'

const imageList = [
  '/Images/Front.jpeg',
  '/Images/garlic.jpeg',
  '/Images/sticky.jpeg',
  '/Images/val.jpeg',
  '/Images/new.jpeg',
  '/Images/chicken.jpeg',
  '/Images/Front.jpeg',
  '/Images/elnap.jpg',
  '/Images/val.jpeg',
  '/Images/eventmen.jpg',
  '/Images/cheese.jpeg',
  '/Images/afro2.jpg'
]

export default function ImageGallery2() {
  return (
    <div className="tcontainer tmx-auto tpx-4">
      <div className={'grid grid-cols-2 gap-4 tmt-10' + ' md:grid-cols-4'}>
        {imageList.map((i, index) => {
          return (
            <div
              key={index}
              className={
                'tbg-cover h-[250px]' + ' md:h-[300px] ' + ' xl:h-[500px]'
              }
              style={{
                backgroundImage: `url(
              ${process.env.PUBLIC_URL}${i}`
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
