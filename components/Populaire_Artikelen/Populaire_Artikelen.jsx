import { storyblokEditable } from "@storyblok/react/rsc";

const Populaire_Artikelen = ({ blok }) => (
  <div className=" bg-blue-500 text-white" {...storyblokEditable(blok)}></div>
);

export default Populaire_Artikelen;
