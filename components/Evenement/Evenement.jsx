import { storyblokEditable } from "@storyblok/react/rsc";
import Looms from "../Looms/Looms";

const Evenement = ({ blok }) => {
  return (
    <article
      className="relative flex flex-col w-full justify-center items-center pt-4 lg:pt-8 font-sans overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Background Looms */}
      <Looms />

      {/* Banner Section */}
      <section className="relative w-full h-64 sm:h-96 flex overflow-hidden">
        {/* Background Image */}
        <div className="absolute lg:right-24 top-0 lg:w-3/4 h-full z-0">
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt || "Background Image"}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Red Banner and Content */}
        <div className="absolute lg:left-24 top-0 lg:w-7/12 w-10/12 h-full z-10 flex items-center overflow-hidden">
          {/* SVG Banner */}
          <img
            src="/Banner.svg"
            alt="Red Banner"
            className="absolute -left-12 sm:left-0 w-full h-full object-cover"
          />

          {/* Text Content */}
          <div className="relative px-8 lg:px-6 text-white z-20 max-w-[60%]">
            <h1 className="text-2xl lg:text-4xl font-semibold sm:font-bold">
              {blok.titel}
            </h1>
            <div className="hidden lg:block">
              <p className="mt-4 text-base lg:text-lg">{blok.slogan}</p>
              {/* Date, Time, and Location */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-label-desktop font-light">
                <span className="flex items-center gap-2">
                  <span
                    className="h-4 w-4 bg-white mask "
                    style={{
                      WebkitMaskImage: "url(/Date.svg)",
                      maskImage: "url(/Date.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                    }}
                  ></span>
                  {blok.datum}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className="h-4 w-4 bg-white mask"
                    style={{
                      WebkitMaskImage: "url(/Time.svg)",
                      maskImage: "url(/Time.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                    }}
                  ></span>
                  {blok.tijden}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className="h-4 w-4 bg-white mask"
                    style={{
                      WebkitMaskImage: "url(/Location.svg)",
                      maskImage: "url(/Location.svg)",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                    }}
                  ></span>
                  {blok.locatie}
                </span>
              </div>
              <a href="">Meld je nu aan!</a>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden w-full px-4 text-black z-20">
        <div className="">
          <p className="mt-4 text-h3-mobile lg:text-lg">{blok.slogan}</p>
          {/* Date, Time, and Location */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-label-desktop font-light">
            <span className="flex items-center gap-2">
              <span
                className="h-4 w-4 bg-black mask "
                style={{
                  WebkitMaskImage: "url(/Date.svg)",
                  maskImage: "url(/Date.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              ></span>
              {blok.datum}
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-4 w-4 bg-black mask"
                style={{
                  WebkitMaskImage: "url(/Time.svg)",
                  maskImage: "url(/Time.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              ></span>
              {blok.tijden}
            </span>
            <span className="flex items-center gap-2">
              <span
                className="h-4 w-4 bg-black mask"
                style={{
                  WebkitMaskImage: "url(/Location.svg)",
                  maskImage: "url(/Location.svg)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              ></span>
              {blok.locatie}
            </span>
          </div>
          <a href="">Meld je nu aan!</a>
        </div>
      </div>

      {/* Event Info Section */}
      <section className="flex flex-col lg:flex-row w-full py-8 px-4 lg:px-24">
        {/* Introductory Text */}
        <div className="flex flex-col items-start justify-between w-full lg:w-1/2 py-4 lg:py-8 lg:pr-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl font-semibold text-black">
              {blok.intro_kopje}
            </h3>
            <p className="font-serif text-base text-gray-700">
              {blok.intro_tekst}
            </p>
          </div>
          <button className="mt-6 px-6 py-2 text-white font-semibold bg-red">
            Reserveer je ticket!
          </button>
        </div>

        {/* Introductory Image */}
        <div className="w-full lg:w-1/2 py-6 flex justify-center">
          <img
            className="max-w-full h-auto object-contain"
            src={blok.intro_afbeelding.filename}
            alt={blok.intro_afbeelding.alt || "Intro Image"}
          />
        </div>
      </section>
    </article>
  );
};

export default Evenement;
