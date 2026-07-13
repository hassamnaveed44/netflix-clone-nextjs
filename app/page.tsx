import Link from "next/link";
import Hero from "@/app/components/Hero";
import FeatureSections from "@/app/components/FeatureSections";
import Footer from "@/app/components/Footer";
import FAQItem from "@/app/components/FAQItem";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from a low monthly price to a higher one. No extra costs, no contracts.",
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.",
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-black">
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <Image
          src="/images/movies/Netflix-Brand-logo.png"
          alt="Netflix"
          width={120}
          height={32}
          className="flex-shrink-0"
        />

        <div className="flex items-center gap-1.5 md:gap-4">
          <button className="flex items-center gap-1 text-xs md:text-sm text-white border border-gray-500 rounded px-2 py-1">
            English
            <ChevronDown size={14} />
          </button>

          <Link href="/signin">
            <button className="bg-red-600 hover:bg-red-700 px-3 md:px-4 py-1.5 rounded text-xs md:text-sm font-semibold transition-colors text-white">
              Sign In
            </button>
          </Link>
        </div>
      </nav>

      <Hero />
      <FeatureSections />

      <section className="px-4 md:px-16 py-12 border-t-8 border-gray-800 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-white">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-2 mb-12">
          {faqs.map((f, index) => (
            <FAQItem key={index} question={f.q} answer={f.a} />
          ))}
        </div>

        <p className="text-center text-white text-lg mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow px-4 py-3 md:py-4 rounded border border-gray-500 bg-black/40 text-white outline-none focus:border-white"
          />
          <Link href="/signin">
            <button className="bg-red-600 hover:bg-red-700 text-white text-base md:text-lg px-6 py-3 md:py-4 font-semibold rounded whitespace-nowrap transition-colors">
              Get Started &gt;
            </button>
          </Link>
        </form>
      </section>

      <Footer />
    </main>
  );
}