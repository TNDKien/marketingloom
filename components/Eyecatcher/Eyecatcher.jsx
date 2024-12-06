import { storyblokEditable } from "@storyblok/react/rsc";

const Eyecatcher = ({ blok }) => (
  <div
    className="relative w-full sm:w-3/6 sm:px-0 sm:py-4 mx-left font-sans text-black"
    {...storyblokEditable(blok)}
  >
    {/* Afbeelding */}
    <div className="relative">
      <img
        src={blok.afbeelding.filename}
        alt={blok.afbeelding.alt}
        className="min-w-full h-[350px] object-cover mx-auto"
      />

      {/* Titel op mobiele apparaten linksonder met gradient background */}
      <h1 className="absolute bottom-0 left-0 px-4 py-2 w-full pr-1/4 text-h3-desktop font-medium text-white sm:hidden bg-gradient-to-t from-black to-transparent">
        {blok.titel}
      </h1>
    </div>

    {/* Titel voor grotere schermen */}
    <h1 className="hidden px-4 sm:px-0 mt-4 text-h1-mobile font-semibold text-black sm:block sm:text-h2-desktop">
      {blok.titel.split(" Merkzichtbaarheid")[0]}{" "}
      <span className="bg-red text-white px-2 py-1 rounded-md">
        Merkzichtbaarheid
      </span>
      {blok.titel.split(" Merkzichtbaarheid")[1]}
    </h1>

    {/* Body */}
    <p className="px-4 sm:px-0 mt-4 pr-8 text-paragraph font-serif leading-relaxed line-clamp-5 sm:line-clamp-none">
      {blok.body}
    </p>

    {/* Auteur, tijd en Call-to-action voor grotere schermen */}
    <div className="text-silver mt-4 flex items-center justify-between text-sm hidden sm:flex sm:absolute sm:bottom-0 sm:left-0 sm right-0 sm:px-4">
      {/* Auteur en tijd */}
      <p>
        <span className="text-label-desktop text-black font-semibold">{blok.auteur}</span> • {blok.tijd}
      </p>

      {/* Call-to-action */}
      <a href="#" className="text-black text-label-desktop font-medium hover:underline">
        {blok.cta} →
      </a>
    </div>

    {/* Call-to-action voor mobiele apparaten */}
    <div className="sm:hidden mt-4 flex justify-end px-4">
      <a
        href="#"
        className="text-black text-label-desktop font-medium hover:underline"
      >
        {blok.cta} →
      </a>
    </div>
  </div>
);

export default Eyecatcher;