'use client'

import { render } from "storyblok-rich-text-react-renderer";
import { storyblokEditable } from "@storyblok/react/rsc";
import Looms from "../Looms/Looms";
import Sticky_Component from "@components/Sticky_Component/Sticky_Component";

const Artikel = ({ blok }) => {
  // Function to render labels with appropriate separators
  const renderLabels = (labels) => {
    if (!labels || labels.length === 0) return null;

    return labels.map((label, index) => {
      const isLast = index === labels.length - 1;
      const separator = labels.length === 2 ? " • " : ", ";

      // Add separator except for the last label
      return (
        <span key={index}>
          {label}
          {!isLast && <span className="text-black">{separator}</span>}
        </span>
      );
    });
  };

  return (
    <article
      className="relative flex flex-col justify-center items-center pt-4 lg:pt-8 font-sans"
      {...storyblokEditable(blok)}
    >
      {/* Header Section */}
      <header className="container px-4 lg:px-0 max-w-[800px] text-center">
        <h1 className="lg:text-3xl text-2xl mb-6 font-semibold text-black">
          {blok.titel}
        </h1>
        <p className="pb-8 text-lg font-light text-black">{blok.subtitel}</p>
      </header>
      {/* Main Image */}
      <div className="w-full flex justify-center">
        <img
          className="w-full h-auto max-h-[800px] object-cover"
          src={blok.afbeelding.filename}
          alt={blok.afbeelding.alt}
        />
      </div>
      {/* Metadata Section */}
      <div className="flex items-start flex-col sm:flex-row sm:justify-between w-full p-4 pb-8 lg:px-24 text-sm gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-gray-900">
            {blok.auteur || "Auteur"}
          </span>
          <span>{blok.datum || "Publicatie Datum"}</span>
        </div>
        <div className="flex items-end gap-2 sm:ml-0 ml-auto">
          <span className="text-red font-medium sm:font-semibold">
            {renderLabels(blok.labels || ["Label"])}
          </span>
        </div>
      </div>
      {/* Article Content */}
      <div className="min-w-full sticky top-0 -mb-[415px]">
      <Sticky_Component />
      </div>
      <section className="font-serif max-w-[612px] mt-8 px-4 space-y-12 first-letter:font-sans first-letter:text-4xl first-letter:font-bold first-letter:text-red">
        {render(blok.content)}
      </section>
    </article>
  );
};

export default Artikel;
