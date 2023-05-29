export default function PromotionCard(props) {
  const { Details } = props;
  return (
    <div className='w-32 text-lg'>
      <p>{Details.code}</p>
      <h3> {Details.title}</h3>
      <p className='text-sm'>{Details.description}</p>
    </div>
  );
}
