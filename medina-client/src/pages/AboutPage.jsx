import Button from '../components/Button';
import aboutImg from '../assets/images/img5.jpg';
import topleft from '../assets/images/topleft.jpg';
import topright from '../assets/images/topright.jpg';
import bottomleft from '../assets/images/bottomleft.jpg';
import bottomright from '../assets/images/bottomright.jpg';

const AboutPage = () => {
  return (
    <section className="flex w-full flex-col gap-6">

      {/* TOP SECTION */}
      <div className="rounded-2xl border-2 border-zinc-100 bg-zinc-50 px-4 py-6 sm:px-6">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 py-10">
            <div className="rounded-[2.5rem] overflow-hidden border border-zinc-200 bg-[#f5f1e8] shadow-sm h-[420px]">
              <img
                src={aboutImg}
                alt="Coffee shop interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Our Story
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-amber-900">
              Code & Coffee – Where Developers Brew Ideas
            </h1>

            <p className="mt-4 max-w-lg text-base leading-7 text-amber-700">
              Premium coffee shop for the developer community. Sustainable single-origin beans, cozy atmosphere for late-night coding and collaboration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>

        </div>
      </div>

      <section className="border-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Our Process
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-amber-900">
              From Bean to Brew
            </h2>

            <div className="mt-6 space-y-4">

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-amber-900">
                  Developer Blends
                </h3>
                <p className="mt-3 text-sm leading-6 text-amber-700">
                  Ethically sourced single-origin beans perfect for long coding sessions. Roasted fresh to fuel creativity.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-amber-900">
                  Expert Roasting
                </h3>
                <p className="mt-3 text-sm leading-6 text-amber-700">
                  Slow-roasted at low temperatures to preserve flavor profiles. Air-cooled and rested for optimal taste.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-amber-900">
                  Master Baristas
                </h3>
                <p className="mt-3 text-sm leading-6 text-amber-700">
                  Trained experts perfecting every pour-over, espresso shot, and latte art signature.
                </p>
              </article>

            </div>
          </div>

  
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Code Lounge Gallery
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <>
                <div className="group overflow-hidden rounded-[2rem] bg-[#f5f1e8]">
                  <img
                    src={topleft}
                    alt="Code Lounge"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-[2rem] bg-[#f5f1e8]">
                  <img
                    src={topright}
                    alt="Code Lounge"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-[2rem] bg-[#f5f1e8]">
                  <img
                    src={bottomleft}
                    alt="Code Lounge"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="group overflow-hidden rounded-[2rem] bg-[#f5f1e8]">
                  <img
                    src={bottomright}
                    alt="Code Lounge"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </>

            </div>

            <Button className="mt-5">Visit Roastery</Button>
          </div>

        </div>
      </section>

    </section>
  );
};

export default AboutPage;
