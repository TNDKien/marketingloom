import { storyblokEditable } from "@storyblok/react/rsc";

const Vertical_Ad = ({ blok }) => (
  <div
    {...storyblokEditable(blok)}
    className="pl-6 w-1/6 py-4 hidden sm:block max-w-full h-full flex"
  >
    <img
      className="w-full h-full object-cover max-w-full"
      src={blok.Ad.filename}
      alt={blok.Ad.alt}
    />
  </div>
);

export default Vertical_Ad;