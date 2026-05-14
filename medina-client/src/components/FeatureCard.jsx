import Button from './Button';

const FeatureCard = ({ imageSrc, imageAlt, title, description, buttonTo, buttonVariant = 'primary' }) => {
  return (
    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
      <div className="overflow-hidden rounded-[1.25rem] h-[200px]">
        <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-amber-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-amber-700">{description}</p>
      <Button className="mt-4" to={buttonTo} variant={buttonVariant}>
        Order Now
      </Button>
    </article>
  );
};

export default FeatureCard;

