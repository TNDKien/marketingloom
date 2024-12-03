import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";

const Evenement = ({ blok }) => {
  // Function to render labels with appropriate separators

  return (
    <article
      className="relative flex flex-col justify-center items-center pt-4 lg:pt-8 font-sans"
      {...storyblokEditable(blok)}
    ></article>
  );
};

export default Evenement;
