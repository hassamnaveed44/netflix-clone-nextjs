// components/FeatureSections.tsx
import Image from "next/image";
import { Download } from "lucide-react";

export default function FeatureSections() {
  return (
    <div className="bg-black text-white">
      {/* --- Section 1: Enjoy on your TV --- */}
      <section className="border-t-8 border-netflixDark py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Enjoy on your TV.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          <div className="flex-1 relative flex justify-center">
            {/* TV frame mockup */}
            <div className="relative w-full max-w-md">
              <div className="relative aspect-video rounded-md border-[10px] border-gray-700 bg-black overflow-hidden">
                <Image
                  src="/images/background/tv.png"
                  alt="Netflix on TV"
                  fill
                  className="object-cover"
                />
              </div>
              {/* TV stand */}
              <div className="mx-auto w-24 h-3 bg-gray-700 rounded-b-md" />
              <div className="mx-auto w-40 h-1.5 bg-gray-800 rounded-full -mt-0.5" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Download your shows to watch offline --- */}
      <section className="border-t-8 border-netflixDark py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Download your shows to watch offline.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
              Save your favorites easily and always have something to watch.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            {/* Phone frame mockup */}
            <div className="relative w-40 md:w-48 aspect-[9/18] rounded-2xl border-4 border-gray-700 bg-gray-900 overflow-hidden">
              <Image
                src="/images/background/1signup2.png"
                alt="Netflix mobile app"
                fill
                className="object-cover"
              />

              {/* Floating download card overlay */}
              <div className="absolute bottom-4 left-2 right-2 bg-gray-900/95 border border-gray-700 rounded-md px-2 py-2 flex items-center gap-2 shadow-lg">
                <div className="relative w-8 h-11 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src="/images/background/firstsign1.png"
                    alt="Stranger Things"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-medium flex-1 truncate">
                  Stranger Things
                </span>
                <Download size={16} className="text-netflixRed flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Watch everywhere --- */}
      <section className="border-t-8 border-netflixDark py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Watch everywhere.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          <div className="flex-1 relative flex justify-center items-center h-56 md:h-64">
            {/* Desktop monitor */}
            <div className="relative w-56 md:w-72 aspect-video rounded-md border-8 border-gray-700 bg-black overflow-hidden z-10">
              <Image
                src="/images/background/image 70.png"
                alt="Netflix on desktop"
                fill
                className="object-cover"
              />
            </div>

            {/* Phone overlapping bottom-left */}
            <div className="absolute left-2 md:left-8 bottom-0 w-16 md:w-20 aspect-[9/18] rounded-xl border-4 border-gray-700 bg-gray-900 overflow-hidden z-20 shadow-xl">
              <Image
                src="/images/landing/phone-screen-2.jpg"
                alt="Netflix on mobile"
                fill
                className="object-cover"
              />
            </div>

            {/* Poster card overlapping bottom-right */}
            <div className="absolute right-2 md:right-8 bottom-0 w-14 md:w-16 aspect-[2/3] rounded-md overflow-hidden z-20 shadow-xl border border-gray-700">
              <Image
                src="/images/landing/poster-card.jpg"
                alt="Featured title"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}