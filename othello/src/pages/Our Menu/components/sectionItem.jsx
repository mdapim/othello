import ListMeal from './ListMeal';
export default function SectionItem({ menuItem, menuList }) {
  return (
    <>
      <h1 className='text-4xl uppercase text-center'> {menuItem} </h1>
      <div className='grid grid-cols-2 gap-4 justify-bewtween'>
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
