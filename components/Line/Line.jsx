import { storyblokEditable } from "@storyblok/react/rsc";

const Line = ({ blok }) => (
  <div className="py-6 relative w-full hidden sm:block" {...storyblokEditable(blok)}>
    <div className="px-24">
      <div className="w-full border-black border-b"></div>
    </div>
  </div>
);

export default Line;
