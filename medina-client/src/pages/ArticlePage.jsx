import Button from '../components/Button';
import art1 from '../assets/images/art1.jpg';
import art2 from '../assets/images/art2.jpg';
import art3 from '../assets/images/art3.jpg';
import art4 from '../assets/images/art4.jpg';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
            Code & Coffee Journal
          </p>
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
            Featured Reads
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-900">
            Coffee Knowledge Hub
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="group overflow-hidden rounded-[1.5rem] bg-[#f5f1e8]">
              <img
                src={art1}
                alt="Coffee article"
                className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                Brew Guide
              </p>
              <h3 className="mt-2 text-lg font-semibold text-amber-900">
                Brew While You Code: Espresso Basics
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-700">
                Perfect espresso for focus sessions. Quick extraction for debugging breaks without losing momentum.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button className="mt-4">Read More</Button>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="group overflow-hidden rounded-[1.5rem] bg-[#f5f1e8]">
              <img
                src={art2}
                alt="Coffee article"
                className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                Origin Story
              </p>
              <h3 className="mt-2 text-lg font-semibold text-amber-900">
                Ethiopian Yirgacheffe Tasting Notes
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-700">
                Floral jasmine, bright citrus, silky mouthfeel. Perfect for morning standups and pair programming.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button>Read More</Button>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="group overflow-hidden rounded-[1.5rem] bg-[#f5f1e8]">
              <img
                src={art3}
                alt="Coffee article"
                className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                Brew Guide
              </p>
              <h3 className="mt-2 text-lg font-semibold text-amber-900">
                V60 for Code Reviews
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-700">
                Mindful pour-over timing matches thoughtful code review pace. Clarity in every cup and commit.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button className="mt-4">Read More</Button>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="group overflow-hidden rounded-[1.5rem] bg-[#f5f1e8]">
              <img
                src={art4}
                alt="Coffee article"
                className="w-full h-[200px] object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                Coding Pairings
              </p>
              <h3 className="mt-2 text-lg font-semibold text-amber-900">
                Coffee & Code Pairings
              </h3>
              <p className="mt-3 text-sm leading-6 text-amber-700">
                Espresso + React debugging, Latte + API design, Pour-over + Architecture discussions.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <Button className="mt-4">Read More</Button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
