import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuwsbrief = ({ blok }) => (
  <div
    className="text-black flex flex-col md:flex-row items-center p-6 rounded-md"
    {...storyblokEditable(blok)}
  >
    {/* Linker sectie met label */}
<div className="flex-shrink-0 rounded-l-lg text-center p-4">
  {blok.image && (
    <img
      src={blok.image.filename}
      alt={blok.image.alt || "Label Image"}
      className="mx-auto mb-2 w-12 h-12"
    />
  )}
  <h2 className="text-lg font-semibold">{blok.Label}</h2>
</div>

    {/* Rechter sectie met titel en formulier */}
    <div className="flex-grow px-6">
      <h2 className="text-2xl font-bold mb-4">{blok.Titel}</h2>
      <p className="mb-4">{blok.Subtitel}</p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex items-center gap-2">
          <label>
            <input type="checkbox" className="mr-2" />
            Dagelijkse nieuwsbrief
          </label>
          <label>
            <input type="checkbox" className="mr-2" />
            Wekelijkse nieuwsbrief
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="E-mailadres"
            className="p-2  bg-gray-700 text-white focus:outline-none"
          />
          <button className="bg-red text-white px-4 py-2 rounded-md">
            Inschrijven
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Nieuwsbrief;
