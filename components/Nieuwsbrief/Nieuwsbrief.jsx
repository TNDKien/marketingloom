import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuwsbrief = ({ blok }) => {
  return (
    <div className="flex w-full bg-slate-400" {...storyblokEditable(blok)}>
  {/* Linkerkant */}
<div className="flex-1 bg-cover bg-center text-wit relative flex items-center justify-center" style={{ backgroundImage: `url(${blok.leftimage.filename})` }}>
  {/* Tekst die over de afbeelding komt */}
  <div className="absolute text-xl">{blok.tekstlinks}</div>
</div>


  {/* Rechterkant */}
  <div className="flex-1 p-6 text-wit">
    <h2 className="text-2xl font-semibold mb-4 text-wit">{blok.titel}</h2>
    <div className="flex space-x-4 mb-4">
      <label className="flex items-center space-x-2">
                <span>{blok.checkbox1label}</span>
        <input type="checkbox" className="form-checkbox" />
      </label>
      <label className="flex items-center space-x-2">
                <span>{blok.checkbox2label}</span>
        <input type="checkbox" className="form-checkbox" />
      </label>
    </div>
    <div className="flex space-x-4">
      <input 
        type="email" 
        className="border p-2 w-full" 
        placeholder={blok.inputPlaceholder} 
      />
      <button className="bg-rood text-wit p-2">
        {blok.buttontekst}
      </button>
    </div>
  </div>
</div>

  );
};

export default Nieuwsbrief;

