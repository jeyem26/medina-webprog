import { Link } from 'react-router-dom'

const SocialIcon = ({ label, href, children }) => {
  return (
    <a
      aria-label={label}
      href={href}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-50 text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-100"
    >
      <span className="transition group-hover:opacity-90">{children}</span>
    </a>
  )
}

const Footer = () => {
  return (
    <footer className="relative mt-10 border-t-2 border-zinc-900 bg-[#f8f6f0]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-40 w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-600/15 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-[36px] w-[36px]">
                <div className="absolute bottom-0 left-0 h-[28px] w-[28px] rounded-2xl bg-gradient-to-tl from-amber-800 to-amber-600 shadow-sm" />
                <div className="absolute -right-2 bottom-0 h-[14px] w-[14px] rounded-full bg-amber-700/70 blur-[1px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-[0.12em] leading-none text-slate-900">
                  COFFEE &amp; CODE
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700">
                  Brew better code
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-7 text-amber-700">
              Premium single-origin coffee and developer-friendly stories—built to fuel focus sessions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialIcon label="Twitter" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-zinc-900"
                >
                  <path
                    d="M19.7 7.3c.01.17.01.35.01.52C19.71 14.5 15.18 20 7.2 20c-2.28 0-4.4-.67-6.2-1.83.32.04.63.05.96.05 1.9 0 3.65-.65 5.03-1.74a3.94 3.94 0 0 1-3.68-2.74c.24.04.5.07.76.07.36 0 .73-.05 1.07-.14A3.93 3.93 0 0 1 1.6 9.97v-.05c.53.3 1.14.49 1.79.52A3.92 3.92 0 0 1 2.5 5.25a11.15 11.15 0 0 0 8.1 4.11 4.42 4.42 0 0 1-.1-.91 3.93 3.93 0 0 1 6.8-2.69A7.7 7.7 0 0 0 20.7 5.6a3.92 3.92 0 0 1-1.1 2.1 7.87 7.87 0 0 0 1.2-.31Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="GitHub" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-zinc-900"
                >
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.11-1.48-1.11-1.48-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.04 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.33.1-2.77 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.07c.84 0 1.68.12 2.47.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.44.2 2.51.1 2.77.64.72 1.03 1.64 1.03 2.76 0 3.91-2.34 4.78-4.58 5.04.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49 3.96-1.37 6.83-5.2 6.83-9.73C22 6.58 17.52 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="Instagram" href="#">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-zinc-900"
                >
                  <path
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.6-2.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Links + Contact */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Quick Links</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link className="text-sm text-amber-800 transition hover:text-amber-900 hover:underline" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-amber-800 transition hover:text-amber-900 hover:underline" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-amber-800 transition hover:text-amber-900 hover:underline"
                    to="/articles"
                  >
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    className="text-sm text-amber-800 transition hover:text-amber-900 hover:underline"
                    href="#"
                  >
                    hello@codecoffee.dev
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-800 transition hover:text-amber-900 hover:underline"
                    href="#"
                  >
                    Mon–Fri · 9am–6pm
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-800 transition hover:text-amber-900 hover:underline"
                    href="#"
                  >
                    Remote-friendly
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Newsletter</p>
            <p className="mt-3 text-sm leading-7 text-amber-700">
              Get weekly brewing tips and code-inspired articles. No spam—just good beans.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border-2 border-zinc-900 bg-zinc-50 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-700"
              />
              <button
                type="button"
                onClick={() => {
                  window.location.assign('/404')
                }}
                className="rounded-full bg-zinc-900 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-50 transition hover:bg-zinc-700 hover:-translate-y-[1px]"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              © {new Date().getFullYear()} Code &amp; Coffee. All rights reserved.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t-2 border-zinc-900/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Brewed with care. Built with code.</p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Cheers ☕️</p>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          footer a { will-change: transform; }
        }
      `}</style>
    </footer>
  )
}

export default Footer

