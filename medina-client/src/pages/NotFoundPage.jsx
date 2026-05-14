import { Link } from 'react-router-dom'

import coffeeImg from '../assets/hero.png'

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden border-y-2 border-zinc-900 bg-zinc-50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-700/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-zinc-900/10 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Optional coffee-themed illustration */}
          <div className="mx-auto mb-6 grid place-items-center">
            <div
              className="relative h-28 w-28 rounded-3xl border-2 border-zinc-900/10 bg-zinc-50 shadow-sm"
              style={{ animation: 'bbx-pop 600ms ease both' }}
            >
              <img
                src={coffeeImg}
                alt="Coffee icon"
                className="h-full w-full rounded-3xl object-cover opacity-90"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-600/20 to-transparent" />
            </div>
          </div>

          {/* Large 404 */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
            Oops! Page not found.
          </p>

          <h1
            className="mt-4 text-5xl font-extrabold tracking-tight text-amber-900 sm:text-7xl"
            style={{ animation: 'bbx-fadeUp 700ms ease both' }}
          >
            404
          </h1>

          {/* Friendly message */}
          <h2 className="mt-3 text-xl font-semibold text-zinc-900 sm:text-2xl">
            The page you&apos;re looking for doesn&apos;t exist.
          </h2>

          {/* Short description text */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-amber-700">
            Maybe it wandered off between sips. Head back to Home and keep coding.
          </p>

          <div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            style={{ animation: 'bbx-fadeUp 820ms ease both 90ms' }}
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-900 px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-50 transition hover:bg-zinc-700 hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
            >
              Back Home
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <div className="h-px w-full bg-zinc-900/20" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Tip: try /about or /articles
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bbx-fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bbx-pop {
          0% { opacity: 0; transform: translateY(10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          h1, div[style] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

export default NotFoundPage

