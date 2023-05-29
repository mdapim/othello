import ButtonCard from './buttonCard';
export default function ButtonGrid({ setItem }) {
  const testArr = [
    {
      title: 'Lunch',
      description:
        'Explore our Greek-inspired lunch menu, brimming with authentic dishes crafted from the finest Mediterranean ingredients. Click now to savor the taste of Greece',
      image: 'asp.jpeg',
    },
    {
      title: 'Dinner',
      description:
        'Embark on a captivating Mediterranean dinner experience. Immerse yourself in the vibrant flavors of Greece, with fresh, authentic ingredients and delectable creations.',
      image: 'steak.jpeg',
    },
    {
      title: 'Desserts',
      description:
        ' Explore our irresistible dessert menu and indulge in heavenly baklava, creamy baileys mouse, and more.',
      image: 'bac.jpeg',
    },
    {
      title: 'Wine',
      description:
        'Raise a glass to Greek traditions. Explore our wine menu and experience the rich flavors that complement our authentic Greek cuisine',
      image: 'drinks.jpeg',
    },
  ];
  return (
    //justify-items-stretch
    <div className='grid grid-cols-2 gap-2'>
      {testArr.map((item) => (
        <ButtonCard
          title={item.title}
          description={item.description}
          image={item.image}
          setItem={setItem}
        />
      ))}
    </div>
  );
}
