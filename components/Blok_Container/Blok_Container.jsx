import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Artikel_XS from "../Artikel_XS/Artikel_XS";

const Blok_Container = ({ blok }) => {
  console.log("Ontvangen blok:", blok);

  return (
    <div {...storyblokEditable(blok)} className="p-0 lg:px-24">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
        {(blok.componenten || blok.components)?.map((nestedBlok) => {
          console.log("Rendering component:", nestedBlok.component);

          if (nestedBlok.component.toLowerCase() === "artikel_xs") {
            return <Artikel_XS blok={nestedBlok} key={nestedBlok._uid} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Blok_Container;
