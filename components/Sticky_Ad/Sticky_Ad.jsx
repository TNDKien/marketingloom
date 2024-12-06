import { storyblokEditable } from "@storyblok/react/rsc";

const Sticky_Ad = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    className="hidden md:flex justify-end sticky pr-24 top-24"
  >
    <img
      className="w-3/12"
      src={blok.ad.filename}
      alt={blok.ad.alt}
    />
  </div>
);

export default Sticky_Ad;