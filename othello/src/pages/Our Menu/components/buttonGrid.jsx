import ButtonCard from './buttonCard';
export default function ButtonGrid({ setItem }) {
  const testArr = [
    {
      title: 'Lunch',
      description:
        'Escape to the flavors of Greece during your lunch break. Explore our Greek-inspired lunch menu, brimming with authentic dishes crafted from the finest Mediterranean ingredients. Indulge in a culinary journey of tantalizing flavors and cultural richness. Click now to savor the taste of Greece',
      image: 'asp.jpeg',
    },
    {
      title: 'Dinner',
      description:
        'Embark on a captivating Mediterranean dinner experience. Immerse yourself in the vibrant flavors of Greece, with fresh, authentic ingredients and delectable creations. Click to explore our Greek-inspired dinner menu and experience a taste of culinary paradise!',
      image: 'steak.jpeg',
    },
    {
      title: 'Desserts',
      description:
        'Satisfy your sweet cravings with divine Greek desserts. Indulge in heavenly baklava, creamy loukoumades, and more. Explore our irresistible dessert menu and treat yourself to a taste of Greeces sweetest delights!',
      image: 'bac.jpeg',
    },
    {
      title: 'Wine',
      description:
        'Raise a glass to Greek traditions. Discover our curated selection of fine Greek wines, from crisp whites to robust reds. Explore our wine menu and experience the rich flavors that complement our authentic Greek cuisine',
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
