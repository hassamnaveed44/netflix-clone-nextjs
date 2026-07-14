// components/FeatureSections.tsx
import Image from "next/image";
import { Download } from "lucide-react";

export default function FeatureSections() {
  return (
    <div className="bg-black text-white">
      {/* --- Section 1: Enjoy on your TV --- */}
      <section className="border-t-[6px] border-[#232323] py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Enjoy on your TV.
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-sm mx-auto md:mx-0">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>

          <div className="flex-1 relative flex justify-center">
            {/* TV frame mockup */}
            <div className="relative w-full max-w-[280px] md:max-w-sm">
              <div className="relative aspect-video rounded-sm border-[6px] border-gray-700 bg-black overflow-hidden">
                <Image
                  src="/images/background/tv.png"
                  alt="Netflix on TV"
                  fill
                  className="object-cover"
                />
              </div>
              {/* TV stand */}
              <div className="mx-auto w-16 h-2 bg-gray-700 rounded-b-sm" />
              <div className="mx-auto w-28 h-1 bg-gray-800 rounded-full -mt-0.5" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Download your shows to watch offline --- */}
      <section className="border-t-[6px] border-[#232323] py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Download your shows to watch offline.
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-sm mx-auto md:mx-0">
              Save your favorites easily and always have something to watch.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            {/* Phone frame mockup */}
            <div className="relative w-24 md:w-32 aspect-[9/18] rounded-xl border-2 border-gray-700 bg-gray-900 overflow-hidden">
              <Image
                src="/images/background/1signup2.png"
                alt="Netflix mobile app"
                fill
                className="object-cover"
              />

              {/* Floating download card overlay */}
              <div className="absolute bottom-2 left-1 right-1 bg-gray-900/95 border border-gray-700 rounded px-1 py-1 flex items-center gap-1 shadow-lg">
                <div className="relative w-4 h-6 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src="/images/background/firstsign1.png"
                    alt="Stranger Things"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[8px] font-medium flex-1 truncate">
                  Stranger Things
                </span>
                <Download size={10} className="text-netflixRed flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Watch everywhere --- */}
      <section className="border-t-[6px] border-[#232323] py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-4">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Watch everywhere.
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-sm mx-auto md:mx-0">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>

          <div className="flex-1 relative flex justify-center items-center h-32 md:h-40">
            {/* Desktop monitor */}
            <div className="relative w-40 md:w-52 aspect-video rounded-sm border-4 border-gray-700 bg-black overflow-hidden z-10">
              <Image
                src="/images/background/image 70.png"
                alt="Netflix on desktop"
                fill
                className="object-cover"
              />
            </div>

            {/* Phone overlapping bottom-left */}
            <div className="absolute left-0 md:left-4 bottom-0 w-10 md:w-12 aspect-[9/18] rounded-lg border-2 border-gray-700 bg-gray-900 overflow-hidden z-20 shadow-xl">
              <Image
                src="/images/landing/phone-screen-2.jpg"
                alt="Netflix on mobile"
                fill
                className="object-cover"
              />
            </div>

            {/* Poster card overlapping bottom-right */}
            <div className="absolute right-0 md:right-4 bottom-0 w-9 md:w-10 aspect-[2/3] rounded overflow-hidden z-20 shadow-xl border border-gray-700">
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

      {/* --- Section 4: Create profile for children --- */}
      <section className="border-t-[6px] border-[#232323] py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-4">
          <div className="flex-1 flex justify-center">
            {/* Kids illustration mockup */}
            <div className="relative w-40 md:w-52 aspect-square rounded-md overflow-hidden">
              <Image
                src="/images/background/image 70.png"
                alt="Create profile for children"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
              Create profile for children.
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-sm mx-auto md:mx-0">
              Send kids on adventures with their favorite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}