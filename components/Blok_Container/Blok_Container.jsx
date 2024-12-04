import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Artikel_XS from "../Artikel_XS/Artikel_XS";

const Blok_Container = ({ blok }) => {
  console.log("Ontvangen blok:", blok);

  return (
    <div {...storyblokEditable(blok)} className="p-0 lg:px-32">
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:gap-y-8">
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
