export default function ImageGallery() {
  return (
    <div class='grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div class='grid gap-4'>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/Front.jpeg'}
            // src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/garlic.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/sticky.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
            alt=''
          />
        </div>
      </div>
      <div class='grid gap-4'>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/val.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/new.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/chicken.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
            alt=''
          />
        </div>
      </div>
      <div class='grid gap-4'>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/Front.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/elnap.jpg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/val.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
            alt=''
          />
        </div>
      </div>
      <div class='grid gap-4'>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/eventmen.jpg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/cheese.jpeg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            class='h-auto max-w-full rounded-lg'
            src={process.env.PUBLIC_URL + '/Images/afro2.jpg'}
            //src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
