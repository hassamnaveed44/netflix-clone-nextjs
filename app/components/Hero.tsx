import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative h-[85vh] w-full bg-gradient-to-br from-[#1a1a1a] to-black flex items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-netflixBlack via-transparent to-black/40" />
      <div className="relative z-10 max-w-2xl px-4 md:px-16 text-center md:text-left mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlimited movies, TV shows and more</h1>
        <p className="text-lg md:text-2xl mb-4">Starts at $150. Cancel at any time.</p>
        <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
        <form className="flex flex-col md:flex-row gap-3 justify-center md:justify-start">
          <input
            type="email"
            placeholder="Email address"
            className="w-full md:w-96 px-4 py-3 rounded bg-black/60 border border-gray-500 outline-none"
          />
          <Link href="/signin">
            <Button className="text-xl px-8 py-3 whitespace-nowrap w-full md:w-auto flex items-center gap-2">
              Get Started &rarr;
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}