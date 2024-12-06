import { storyblokEditable } from "@storyblok/react/rsc";

const Mobile_Ad = ({ blok }) => (
  <div className="sm:hidden px-4 py-4" {...storyblokEditable(blok)}>
    <img
      className="w-full"
      src={blok.ad.filename}
      alt={blok.ad.alt}
    />
  </div>
);

export default Mobile_Ad;
