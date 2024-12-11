import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuwsbrief = ({ blok }) => {
  return (
    <div
      className="flex flex-col md:flex-row w-full bg-silver bg-opacity-10 font-sans"
      {...storyblokEditable(blok)}
    >
      {/* Linkerkant */}
      <div className="flex-1 relative">
        {/* Afbeelding */}
        <img
          src={blok.leftimage.filename}
          alt={blok.leftimage.alt || "Afbeelding"}
          className="w-full h-48 md:h-auto object-cover"
        />

        {/* Tekst die over de afbeelding komt */}
        <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 text-xl text-white text-center">
          {blok.tekstlinks}
        </div>
      </div>

      {/* Rechterkant */}
      <div className="flex-[3] p-6 text-black flex flex-col justify-center items-center">
        <h2 className="text-lg md:text-2xl font-semibold mb-4 text-center">
          {blok.titel}
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>{blok.checkbox1label}</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>{blok.checkbox2label}</span>
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-2/3">
          <input
            type="email"
            className="border border-silver p-2 flex-grow rounded-md"
            placeholder={blok.inputplaceholder}
          />

          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            {blok.buttontekst}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nieuwsbrief;
