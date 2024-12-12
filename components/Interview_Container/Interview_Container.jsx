import { storyblokEditable } from "@storyblok/react/rsc";

const Interview_Container = ({ blok }) => (
  <div className=" bg-blue-500 text-white" {...storyblokEditable(blok)}>
    <h1 className=" text-4xl font-bold">{blok.Titel}</h1>
    <img
      className="w-1/2"
      src={blok.Afbeelding.filename}
      alt={blok.Afbeelding.alt}
    />
  </div>
);

export default Interview_Container;