"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import Looms from "../Looms/Looms";
import Header from "../Header/Header";
import Button from "../Button/Button";

const Evenement = ({ blok }) => {
  return (
    <article
      className="relative flex flex-col w-full justify-center items-center pt-4 lg:pt-8 font-sans overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Banner Section */}
      <section className="relative w-full h-64 sm:h-96 flex overflow-hidden">
        {/* Background Image */}
        <div className="absolute lg:right-24 top-0 lg:w-3/4 h-full z-0">
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt || "Background Image"}
            className="w-full h-full object-cover"
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
                    className="h-4 w-4 bg-white mask"
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
              {/* button */}
              <button className="group relative flex items-center text-sm font-medium font-sans text-white">
                <span className="relative z-10">Meld je nu aan!</span>
                <span className="ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-2 opacity-100 group-hover:opacity-0">
                  →
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden w-full px-4 text-black z-20">
        <div>
          <p className="mt-4 text-h3-mobile lg:text-lg">{blok.slogan}</p>
          {/* Date, Time, and Location */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-label-desktop font-light">
            <span className="flex items-center gap-2">
              <span
                className="h-4 w-4 bg-black mask"
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
          <button className="group relative flex items-center text-sm font-medium font-sans text-black mt-4">
            <span className="relative z-10">Meld je nu aan!</span>
            <span className="ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-2 opacity-100 group-hover:opacity-0">
              →
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-3/4"></span>
          </button>
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
            className="w-full"
            src={blok.intro_afbeelding.filename}
            alt={blok.intro_afbeelding.alt || "Intro Image"}
          />
        </div>
      </section>

      {/* Sprekers Editie 2025 Section */}
      <section className=" px-4 lg:px-24 py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Sprekers Editie 2025
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <article className="flex flex-col">
            <div className="relative w-full h-64 overflow-hidden mb-4">
              <img
                src="/lisasu.png"
                alt="Lisa Su"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="inline bg-red text-white text-sm font-semibold px-3 py-1 mb-2">
              Tech Innovation
            </div>
            <h3 className="text-lg font-semibold text-black leading-tight mb-1">
              Lisa Su
            </h3>
            <p className="text-sm text-silver font-medium mb-2">CEO van AMD</p>
            <p className="text-sm text-gray-700 mb-4">
              CEO van AMD en visionair op het gebied van high-performance
              computing. Ze gaat in op de impact van AI op marketingtechnologie
              en de toekomst van computing.
            </p>
            <a
              href="#"
              className="text-red text-sm font-semibold hover:underline"
            >
              Lees meer &rarr;
            </a>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col">
            <div className="relative w-full h-64 overflow-hidden mb-4">
              <img
                src="/jitsegroen.png"
                alt="Jitse Groen"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="inline-block bg-red text-white text-sm font-semibold px-3 py-1 mb-2">
              Digital Entrepreneurship
            </span>
            <h3 className="text-lg font-semibold text-black leading-tight mb-1">
              Jitse Groen
            </h3>
            <p className="text-sm text-silver font-medium mb-2">
              CEO van Just Eat Takeaway
            </p>
            <p className="text-sm text-gray-700 mb-4">
              CEO van Just Eat Takeaway.com en een toonaangevend
              tech-ondernemer. Hij bespreekt hoe digitale platforms en
              innovatieve strategieën hebben bijgedragen aan het succes ...
            </p>
            <a
              href="#"
              className="text-red text-sm font-semibold hover:underline"
            >
              Lees meer &rarr;
            </a>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col">
            <div className="relative w-full h-64 overflow-hidden mb-4">
              <img
                src="/marleenstikker.png"
                alt="Marleen Stikker"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="inline-block bg-red text-white text-sm font-semibold px-3 py-1 mb-2">
              Ethical Technology
            </span>
            <h3 className="text-lg font-semibold text-black leading-tight mb-1">
              Marleen Stikker
            </h3>
            <p className="text-sm text-silver font-medium mb-2">
              Oprichter van Waag Society
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Oprichter van Waag Society en voorvechter van ethische
              technologie. Ze benadrukt het belang van verantwoord gebruik van
              technologie en samenwerking tussen ...
            </p>
            <a
              href="#"
              className="text-red text-sm font-semibold hover:underline"
            >
              Lees meer &rarr;
            </a>
          </article>

          {/* Card 4 */}
          <article className="flex flex-col">
            <div className="relative w-full h-64 overflow-hidden mb-4">
              <img
                src="/borisveldhuijzen.png"
                alt="Boris Veldhuijzen van Zanten"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <span className="inline-block bg-red text-white text-sm font-semibold px-3 py-1 mb-2">
              European Tech Ecosystem
            </span>
            <h3 className="text-lg font-semibold text-black leading-tight mb-1">
              Boris Veldhuijzen van Zanten
            </h3>
            <p className="text-sm text-silver font-medium mb-2">
              CEO/co-founder van The Next Web
            </p>
            <p className="text-sm text-gray-700 mb-4">
              CEO en mede-oprichter van The Next Web en kenner van het Europese
              startupecosysteem. Hij deelt zijn visie op het bouwen van
              tech-gemeenschappen en trends in ...
            </p>
            <a
              href="#"
              className="text-red text-sm font-semibold hover:underline"
            >
              Lees meer &rarr;
            </a>
          </article>
        </div>

        {/* "Meer Sprekers" link */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center font-semibold text-red hover:underline"
          >
            Meer Sprekers &rarr;
          </a>
        </div>
      </section>

      {/* tickets */}
      <section
        {...storyblokEditable(blok)}
        className="flex flex-col lg:flex-row gap-12 p-6 lg:px-24"
      >
        {/* Tickets Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-red">Tickets</h2>{" "}
          {/* Ticket 1 */}
          <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
            <p className="text-base font-bold text-black flex-1">Early Bird</p>
            <p className="text-base text-black flex-1 text-center">€ 295,-</p>
            <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
              <h1 className="text-sm font-bold">Bestel Nu</h1>
            </button>
          </div>
          {/* Ticket 2 */}
          <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
            <p className="text-base font-bold text-black flex-1">Regulier</p>
            <p className="text-base text-black flex-1 text-center">€ 345,-</p>
            <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
              <h1 className="text-sm font-bold">Bestel Nu</h1>
            </button>
          </div>
          {/* Ticket 3 */}
          <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
            <p className="text-base font-bold text-black flex-1">
              Groepskorting
            </p>
            <p className="text-base text-black flex-1 text-center">
              tot 15% korting
            </p>
            <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
              <h1 className="text-sm font-bold">Bestel Nu</h1>
            </button>
          </div>
        </div>

        {/* Partner worden Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="text-h2-desktop font-bold text-black">
            Partner worden?
          </h2>
          <p className="text-lg text-black">
            Als partner van The Marketing Loom, onze toonaangevende
            marketingnieuwswebsite, kun je jouw relevante kennis delen en een
            onuitwisbare indruk achterlaten op onze lezers en een breed publiek
            binnen de marketingwereld.
          </p>
          <ul className="text-lg text-black mt-8 space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-red">&#10004;</span> Vergroot je bereik en
              naamsbekendheid
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red">&#10004;</span> Profileer je
              organisatie als thought leader met een kennissessie
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red">&#10004;</span> Ga in gesprek met
              professionals en beslissers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red">&#10004;</span> Campagne via onze
              website, e-mail en social media
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default Evenement;
