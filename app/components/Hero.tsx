import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    /* Ensure the parent container is 'relative' and has a defined height. 
       'overflow-hidden' prevents any background elements from spilling out. 
    */
    <div className="relative h-[85vh] w-full bg-black overflow-hidden">
      
      {/* Background Image Layer: Positioned absolutely to fill the container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background/banner_landing.jpg')" }}
      />
      
      {/* Dark Overlay Layer: Sits on top of the image only */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Layer: 'relative' keeps it on top of the background layers */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-white">
        
        {/* Shaded Box: Wrap content here to get the look from the screenshot */}
        <div className="bg-black/40 backdrop-blur-[1px] p-8 md:p-12 rounded-md max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-bold">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="mb-6 text-lg">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Form: Ensure width is contained */}
          <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-4 py-3 md:py-4 rounded border border-gray-500 bg-black/40 text-white outline-none focus:border-white"
            />
            <Link href="/signin">
              <Button className="bg-red-600 hover:bg-red-700 text-lg md:text-xl px-6 py-3 md:py-4 font-semibold flex items-center justify-center gap-2 whitespace-nowrap">
                Get Started &gt;
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}