import React from 'react'

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/Front.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/garlic.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/sticky.jpeg`}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/val.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/new.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/chicken.jpeg`}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/Front.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/elnap.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/val.jpeg`}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/eventmen.jpg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/cheese.jpeg`}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={`${process.env.PUBLIC_URL}/Images/afro2.jpg`}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
