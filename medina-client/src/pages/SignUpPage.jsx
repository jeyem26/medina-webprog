import { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthCard from '../components/auth/AuthCard';
import AuthInput from '../components/auth/AuthInput';

const UserIcon = () => (

  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
      stroke="#18181B"
      strokeWidth="2"
    />
    <path
      d="M4 20C4.8 16.8 8.1 14.5 12 14.5C15.9 14.5 19.2 16.8 20 20"
      stroke="#18181B"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6.5C4 5.67157 4.67157 5 5.5 5H18.5C19.3284 5 20 5.67157 20 6.5V17.5C20 18.3284 19.3284 19 18.5 19H5.5C4.67157 19 4 18.3284 4 17.5V6.5Z"
      stroke="#18181B"
      strokeWidth="2"
    />
    <path d="M5.5 7L12 12L18.5 7" stroke="#18181B" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 11V8.5C7 6.01472 9.01472 4 11.5 4C13.9853 4 16 6.01472 16 8.5V11"
      stroke="#18181B"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M6.5 11H16.5C17.3284 11 18 11.6716 18 12.5V18.5C18 19.3284 17.3284 20 16.5 20H6.5C5.67157 20 5 19.3284 5 18.5V12.5C5 11.6716 5.67157 11 6.5 11Z"
      stroke="#18181B"
      strokeWidth="2"
    />
  </svg>
);

const SignUpPage = () => {
  const [form] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <div className="relative flex w-full items-center justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="absolute inset-0 -z-10 opacity-55">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.20),transparent_55%),radial-gradient(circle_at_bottom,rgba(24,24,27,0.10),transparent_50%)]" />
      </div>

      <div className="w-full max-w-md">
        <AuthCard subtitle="Create Account" title="Start your coffee journey">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <AuthInput
              label="Full Name"
              type="text"
              name="fullName"
              placeholder="John Doe"
              autoComplete="name"
              icon={<UserIcon />}
            />

            <AuthInput
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              icon={<MailIcon />}
            />

            <AuthInput
              label="Password"
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
              icon={<LockIcon />}
            />

            <AuthInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              autoComplete="new-password"
              icon={<LockIcon />}
            />

            <div className="mt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-zinc-900 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-50 shadow-sm transition hover:bg-zinc-700 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700/50"
              >
                Create Account
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-zinc-600">
              Already have an account?{' '}
              <Link to="/signin" className="font-bold text-amber-700 hover:text-amber-800 transition">
                Sign in
              </Link>
            </p>

            <div className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Validation-ready structure (demo)
            </div>
          </form>

          {/* Placeholder for future validation logic */}
          <div className="sr-only" aria-hidden="true">
            {JSON.stringify(form)}
          </div>
        </AuthCard>
      </div>
    </div>
  );
};

export default SignUpPage;

