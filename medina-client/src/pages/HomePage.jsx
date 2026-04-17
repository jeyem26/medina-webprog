import Button from '../components/Button';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.png';


const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO SECTION */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
              Welcome to Code & Coffee
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-amber-900 sm:text-4xl">
              Brew Better Code with Premium Coffee
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-amber-700 sm:text-base">
              Premium single-origin coffee for developers and creators. Fuel your coding sessions with exceptional brews roasted fresh daily.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="relative w-full h-[280px] rounded-[1.25rem] overflow-hidden shadow-xl">
              <img 
                src={img1} 
                alt="Premium coffee for developers - Code & Coffee hero" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-amber-900/10" />
            </div>
          </div>

        </div>
      </section>

      {/* KPI SECTION */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
            Code & Coffee
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-900">
            Crafted for Creators
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-amber-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Coffee Blends
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-amber-900">50K+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Cups Served
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-amber-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Branches
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-amber-900">4.9⭐</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
              Reviews
            </p>
          </div>

        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Cards
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple wireframe cards
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          {/* CARD 1 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] h-[200px]">
              <img
                src={img2}
                alt="Espresso"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-amber-900">
              Espresso
            </h3>
            <p className="mt-3 text-sm leading-6 text-amber-700">
              Intense, bold flavor with rich crema. Single shot of premium dark roast.
            </p>
            <Button className="mt-4" variant="primary">
              Order Now
            </Button>
          </article>

          {/* CARD 2 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] h-[200px]">
              <img
                src={img3}
                alt="Cappuccino"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-amber-900">
              Cappuccino
            </h3>
            <p className="mt-3 text-sm leading-6 text-amber-700">
              Velvety espresso with steamed milk and thick foam. Perfect balance.
            </p>
            <Button className="mt-4" variant="primary">
              Order Now
            </Button>
          </article>

          {/* CARD 3 */}
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="relative overflow-hidden rounded-[1.25rem] h-[200px]">
              <img
                src={img4}
                alt="Iced Latte"
                className="w-full h-full object-cover brightness-90 contrast-110 saturate-110 sepia-[0.15]"
              />
              <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-amber-900">
              Latte
            </h3>
            <p className="mt-3 text-sm leading-6 text-amber-700">
              Smooth espresso blended with steamed milk. Creamy texture, perfect for any time.
            </p>
            <Button className="mt-4" variant="primary">
              Order Now
            </Button>
          </article>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
