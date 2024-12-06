import { storyblokEditable } from "@storyblok/react/rsc";

const Eyecatcher = ({ blok }) => (
  <div
    className="p-6 w-full sm:w-6/12 mx-left font-sans text-black"
    {...storyblokEditable(blok)}
  >
    {/* Afbeelding */}
    <img
      src={blok.afbeelding.filename}
      alt={blok.afbeelding.alt}
      className="min-w-full h-[240px] rounded-t-md object-cover mx-auto"
    />

    {/* Titel */}
    <h1 className="mt-4 text-h1-mobile font-semibold text-black sm:text-h2-desktop">
      {blok.titel.split(" Merkzichtbaarheid")[0]}{" "}
      <span className="bg-red text-white px-2 py-1 rounded-md">
        Merkzichtbaarheid
      </span>
      {blok.titel.split(" Merkzichtbaarheid")[1]}
    </h1>

    {/* Body */}
    <p className="mt-4 pr-8 text-paragraph font-serif leading-relaxed line-clamp-5 sm:line-clamp-none">
      {blok.body}
    </p>

    {/* Auteur, tijd en Call-to-action */}
    <div className="mt-4 flex items-center justify-between text-sm hidden sm:flex">
      {/* Auteur en tijd */}
      <p>
        <span className="text-label-desktop font-semibold">{blok.auteur}</span> • {blok.tijd}
      </p>

      {/* Call-to-action */}
      <a href="#" className="text-label-desktop font-medium hover:underline">
        {blok.cta} →
      </a>
    </div>
  </div>
);

export default Eyecatcher;

//m.snoeren@student.fontys.nl
