import { storyblokEditable } from "@storyblok/react/rsc";

const Eyecatcher = ({ blok }) => (
  <div
    className="p-6 max-w-xl mx-auto font-standaard"
    {...storyblokEditable(blok)}
  >
    {/* Afbeelding */}
    <img
      src={blok.afbeelding.filename}
      alt={blok.afbeelding.alt}
      className="w-full h-auto rounded-t-md object-cover"
    />

    {/* Titel */}
    <h1 className="mt-4 text-2xl font-bold text-zwart">
      {blok.titel.split(" Merkzichtbaarheid")[0]}{" "}
      <span className="bg-rood text-white px-2 py-1 rounded-md">
        Merkzichtbaarheid
      </span>
      {blok.titel.split(" Merkzichtbaarheid")[1]}
    </h1>

    {/* Body */}
    <p className="mt-4 pr-8 text-zwart font-paragraaf leading-relaxed">
      {blok.body}
    </p>

    {/* Auteur, tijd en Call-to-action */}
    <div className="mt-4 flex items-center justify-between text-sm text-zwart">
      {/* Auteur en tijd */}
      <p>
        <span className="font-semibold">{blok.auteur}</span> • {blok.tijd}
      </p>

      {/* Call-to-action */}
      <a href="#" className="text-zwart font-medium hover:underline">
        {blok.cta} →
      </a>
    </div>
  </div>
);

export default Eyecatcher;
