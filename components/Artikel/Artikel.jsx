import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";

const Artikel = ({ blok }) => {
  return (
    <article className="flex flex-col justify-center items-center min-h-screen">
      <header className="container mx-auto m-8 max-w-[612px] text-center">
        <h1 className="text-h1-desktop mb-6">{blok.titel}</h1>
        <p className="mb-12">{blok.subtitel}</p>
      </header>
      <img src={blok.afbeelding.filename} alt={blok.afbeelding.alt} />
      <div className="flex justify-between w-full px-24 pt-6">
        <div className="flex flex-col">
          {blok.auteur || "Author"}
          {blok.datum || "Date"}
        </div>
        <label className="flex justify-center items-center gap-2" htmlFor="">
          <span className="text-xs">&#9679;</span>
          {blok.labels || "Label"}
        </label>
      </div>
      <section className="font-paragraaf prose max-w-[612px] mt-8 space-y-8 first-letter:font-standaard first-letter:text-4xl first-letter:font-bold first-letter:text-rood">
        {render(blok.content)}
      </section>
    </article>
  );
};
export default Artikel;
