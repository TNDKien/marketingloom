import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuws_Teaser = ({ blok }) => (
  <div className="py-8" {...storyblokEditable(blok)}>
    <div className="pl-16 w-8/12">
      {/* Flex-container met gelijke hoogte voor beide kolommen */}
      <div className="flex gap-4 pb-6 items-stretch">
        {/* Afbeelding container */}
        <div className="w-2/5 flex-shrink-0">
          <img
            src={blok.afbeelding.filename}
            alt={blok.afbeelding.alt}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Tekst container */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-p-large-desktop font-semibold text-black pb-2">
              {blok.titel}
            </h2>
            <p className="text-paragraph font-serif text-black line-clamp-5">{blok.body}</p>
          </div>
          <div className="border-red border-t mt-6 flex items-center justify-between text-label-desktop text-black">
            <span className="flex gap-1 pt-3 font-semibold">
              {blok.auteur} <span className="text-silver font-normal pl-2">{blok.tijd}</span>
            </span>
            <a href="#" className="pt-3 font-semibold hover:underline">
              Lees meer →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nieuws_Teaser;