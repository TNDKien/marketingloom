import { storyblokEditable } from "@storyblok/react/rsc";

const Artikel_Hero = ({ blok }) => (
  <div className="z-2" {...storyblokEditable(blok)}>
    <div className="bg-blue-500">{blok.titel}</div>
    <div className="bg-blue-500">{blok.inleiding}</div>
    <img
      className="z-1"
      src={blok.artikel_afbeelding.filename}
      alt={blok.artikel_afbeelding.alt || "Logo"}
    />
  </div>
);

export default Artikel_Hero;
