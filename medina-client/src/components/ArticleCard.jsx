import Button from './Button';

const ArticleCard = ({ imageSrc, imageAlt, tag, title, description, buttonTo }) => {
  return (
    <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
      <div className="group overflow-hidden rounded-[1.5rem] bg-[#f5f1e8]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1">
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">{tag}</p>
        <h3 className="mt-2 text-lg font-semibold text-amber-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-amber-700">{description}</p>
      </div>
      <div className="mt-auto pt-4">
        <Button className="mt-4" to={buttonTo}>
          Read More
        </Button>
      </div>
    </article>
  );
};

export default ArticleCard;

