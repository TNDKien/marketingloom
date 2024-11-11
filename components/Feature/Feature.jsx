import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Feature = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
