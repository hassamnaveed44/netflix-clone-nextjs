import Link from "next/link";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import FAQItem from "@/app/components/FAQItem";
import Image from "next/image";

const faqs = [
  {
    q: "What is Netflix?",
    a: "Netflix is a streaming service offering award-winning TV shows, movies, and more.",
  },
  {
    q: "How much does Netflix cost?",
    a: "Watch on your phone, tablet, laptop, and TV starting at a low monthly price.",
  },
  {
    q: "Where can I watch?",
    a: "Watch anywhere, anytime, on an unlimited number of devices.",
  },
  {
    q: "How do I cancel?",
    a: "Netflix is flexible. There are no contracts and you can cancel online anytime.",
  },
];

export default function LandingPage() {
  return (
    <main>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-4 bg-gradient-to-b from-black/80 to-transparent">
        <Image
          src="/images/movies/Netflix-Brand-logo.png"
          alt="Netflix"
          width={120}
          height={32}
        />
        <Link href="/signin">
          <button className="bg-netflixRed px-4 py-1.5 rounded text-sm font-medium">
            Sign In
          </button>
        </Link>
      </nav>
      <Hero />
      <section className="px-4 md:px-16 py-12 border-t-8 border-gray-800">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-1">
          {faqs.map((f) => (
            <FAQItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
