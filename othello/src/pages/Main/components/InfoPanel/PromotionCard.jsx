export default function PromotionCard(props) {
  const { Details } = props;
  return (
    <div className="w-32">
      <p>{Details.code}</p>
      <h3> {Details.title}</h3>
      <p className="text-xs">{Details.description}</p>
    </div>
  );
}
