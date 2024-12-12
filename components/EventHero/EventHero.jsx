import { storyblokEditable } from "@storyblok/react/rsc";

const EventHero = ({ blok }) => (
  <div
    className="flex flex-col gap-12 items-centerlg:px-24"
    {...storyblokEditable(blok)}
  >
    <header className="flex flex-col gap-6 px-4  text-center">
      <h1 className=" text-4xl font-bold">{blok.titel}</h1>
      <p>{blok.subtitel}</p>
    </header>

    <img
      className="w-full"
      src={blok.afbeelding.filename}
      alt={blok.afbeelding.alt}
    />
  </div>
);

export default EventHero;
