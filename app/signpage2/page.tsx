"use client";
import Link from "next/link";



import { useRouter } from "next/navigation";

export default function SignupStep2() {
  const router = useRouter();

  const handleNext = () => {
    // Navigate to the next step in the flow
    router.push("/signup/step-3");
  };

  const handleSignOut = () => {
    router.push("/signin");
  };

  const benefits = [
    "No commitments, cancel anytime.",
    "Everything on Netflix for one low price.",
    "No ads and no extra fees. Ever.",
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 md:px-16">
        <span className="text-2xl font-bold tracking-tight text-red-600 md:text-3xl">
          NETFLIX
        </span>
        <button
          type="button"
          onClick={handleSignOut}
          className="text-sm font-medium text-black hover:underline"
        >
          Sign Out
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-1 justify-center px-6 py-10 text-center md:px-0 md:py-16">
        <div className="w-full max-w-md">
          {/* Check icon */}
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <p className="text-sm text-gray-500">Step 2 of 3</p>
          <h1 className="mt-1 text-2xl font-medium text-gray-900 md:text-3xl">
            Choose your plan.
          </h1>

          {/* Benefits list */}
          <ul className="mt-4 space-y-2 text-left inline-block">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>

          {/* Next button */}
          <Link href="/signinpage3">
            <button className="mt-8 w-full rounded-sm bg-red-600 py-3 text-base font-medium text-white transition hover:bg-red-700">
              Next
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gray-100 px-6 py-8 text-gray-500 md:px-16">
        <p className="text-sm">
          Questions? Call{" "}
          <a href="tel:000-800-040-1843" className="hover:underline">
            000-800-040-1843
          </a>
        </p>

        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-xs md:grid-cols-4">
          <li>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Help Centre
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
          </li>
        </ul>

        <div className="mt-6">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-400 px-3 py-1.5 text-xs text-gray-600 hover:border-gray-600 hover:text-black"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
            </svg>
            English
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}