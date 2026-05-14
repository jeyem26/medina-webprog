import Button from '../components/Button';
import ArticleCard from '../components/ArticleCard';
import articleContent from '../data/article-content';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 shadow-sm sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">Code & Coffee Journal</p>

          <h1 className="max-w-xl text-3xl font-bold leading-tight text-amber-900 sm:text-4xl">
            Coffee Tips for Developers
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-amber-700 sm:text-base">
            Expert guides, origin stories, brewing techniques, and tasting notes from our coffee masters.
          </p>

          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">Featured Reads</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-900">Coffee Knowledge Hub</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {articleContent.map((article, idx) => (
            <div
              key={article.id}
              className="h-full"
              style={{ animation: 'bbx-cardIn 650ms ease both', animationDelay: `${idx * 40}ms` }}
            >
              <ArticleCard
                imageSrc={article.imageSrc}
                imageAlt={article.imageAlt}
                tag={article.tag}
                title={article.title}
                description={article.description}
                buttonTo="/about"
              />
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes bbx-cardIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ArticlePage;


