import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const Button = ({ blok }) => (

  <div
    className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4"
    {...storyblokEditable(blok)}
  >
    <button className="group relative flex items-center text-sm font-bold font-sans text-black">
      <span className="relative z-10">{blok.tekst || "Lees Meer"}</span>
      <span className="ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-2 opacity-100 group-hover:opacity-0">
        →
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-3/4"></span>
    </button>
  </div>
);

export default Button;
