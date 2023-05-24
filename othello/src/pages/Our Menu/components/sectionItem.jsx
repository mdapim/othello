import ListMeal from './ListMeal';
export default function SectionItem({ menuItem, menuList }) {
  return (
    <>
      <div
        class='bg-fixed h-72 w-full flex'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/main.jpeg'
          })`,
        }}
      >
        {' '}
        <p className='text-8xl text-white m-auto uppercase'> {menuItem} </p>
      </div>
      <div className='grid grid-cols-2 gap-6 justify-between w-screenfull m-auto px-28 py-14'>
        {menuList.map((item) => (
          <ListMeal
            title={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}
