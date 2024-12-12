import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Artikel_XS from "../Artikel_XS/Artikel_XS";
import Sidebar from "../Sidebar/Sidebar";
import Eyecatcher from "../Eyecatcher/Eyecatcher";
import Vertical_Ad from "../Vertical_Ad/Vertical_Ad";

const Blok_Container = ({ blok }) => {
  console.log("Ontvangen blok:", blok);

  return (
    <div {...storyblokEditable(blok)} className="p-0 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:gap-y-8 lg:items-stretch">
        {(blok.componenten || blok.components)?.map((nestedBlok) => {
          console.log("Rendering component:", nestedBlok.component);

          if (nestedBlok.component.toLowerCase() === "artikel_xs") {
            return <Artikel_XS blok={nestedBlok} key={nestedBlok._uid} />;
          } else if (nestedBlok.component.toLowerCase() === "sidebar") {
            return <Sidebar blok={nestedBlok} key={nestedBlok._uid} />;
          } else if (nestedBlok.component.toLowerCase() === "eyecatcher") {
            return <Eyecatcher blok={nestedBlok} key={nestedBlok._uid} />;
          } else if (nestedBlok.component.toLowerCase() === "vertical_ad") {
            return <Vertical_Ad blok={nestedBlok} key={nestedBlok._uid} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Blok_Container;
