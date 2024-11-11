import { storyblokEditable } from "@storyblok/react/rsc";

/* gebruik dit om rich text te renderen
import { render } from "storyblok-rich-text-react-renderer";
<div>{render(blok.NAAM_VAN_RICH_TEXT_FIELD)}</div> */

/* gebruik dit om een boolean te renderen
const NAAM_VARIABEL = blok.NAAM_BOOLEAN_FIELD ? "VARIABEL_1" : "VARIABEL_2";
schrijf vervolgens de classname als volgt: className={`${NAAM_VARIABEL}`} */

/* gebruik dit om een link te renderen
<a href={`/${blok.button_ref.story?.url}`} rel="noopener noreferrer">
  {blok.NAAM_FIELD}
</a>; */

/* gebruik dit om Blocks te renderen
import Component1 from "../Component1/Component1";
import Component2 from "../Component2/Component2";
{
  blok.components &&
    blok.components.map((nestedBlok) => {
      // Plaats hier de logica voor het matchen van componenten
      if (nestedBlok.component === "component1") {
        return <Component1 blok={nestedBlok} key={nestedBlok._uid} />;
      } else if (nestedBlok.component === "component2") {
        return <Component2 blok={nestedBlok} key={nestedBlok._uid} />;
      // Voeg andere componenten toe met de juiste voorwaarde

      return null; // Als er geen match is, renderen we het niet
    });
} */

const Template = ({ blok }) => (
  <div className=" bg-blue-500 text-white" {...storyblokEditable(blok)}>
    <h1 className=" text-4xl font-bold">{blok.Titel}</h1>
    <img
      className="w-1/2"
      src={blok.Afbeelding.filename}
      alt={blok.Afbeelding.alt}
    />
  </div>
);

export default Template;
