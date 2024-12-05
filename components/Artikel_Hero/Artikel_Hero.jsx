import { storyblokEditable } from "@storyblok/react/rsc";

const Artikel_Hero = ({ blok }) => (
  <div className="z-2 mx-24" {...storyblokEditable(blok)}>
    <div className="font-sans text-h1-desktop text-center pt-6">
      {blok.titel}
    </div>
    <div className="text-p-large-desktop font-regular text-center mt-8">
      {blok.inleiding}
    </div>
    <div className="flex mt-6">
      <div>
        <img
          className="z-1"
          src={blok.artikel_afbeelding.filename}
          alt={blok.artikel_afbeelding.alt || "Logo"}
        />
      </div>
      <div className="ml-8">
        <div className="w-fit text-p-large-desktop font-regular text-white bg-red px-4 py-1 ">
          {blok.categorie}
        </div>
        <div className="text-h3-desktop font-semibold mt-4">{blok.kopje}</div>
        <div className="text-label-desktop text-regular mt-2 text-silver">
          {blok.kopje_inleiding}
        </div>
        <div className="text-p-large-desktop font-serif mt-6">{blok.tekst}</div>

        <div className="flex justify-between text-red width-2 mt-6">
          <div className="text-label-desktop font-regular mt-8">
            {blok.datum}
          </div>
          <div className="text-label-desktop font-regular mt-8">
            {blok.leestijd}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Artikel_Hero;
