import { storyblokEditable } from "@storyblok/react/rsc";

const Nieuwsbrief = ({ blok }) => {
  return (
    <div className="flex w-full bg-silver bg-opacity-10" {...storyblokEditable(blok)}>


  {/* Linkerkant */}
  
<div className="flex-1 relative flex items-center justify-left">
  {/* Afbeelding */}
  <img 
    src={blok.leftimage.filename} 
    alt={blok.leftimage.alt} 
    className="w-auto h-48 object-cover"
  />
  
  {/* Tekst die over de afbeelding komt */}
  <div className="absolute text-xl text-white font-serif p-5">
    {blok.tekstlinks}
  </div>
</div>



  {/* Rechterkant */}
  <div className="flex-[2] items-center justify-center p-6 text-black">
    <h2 className="text-h2-desktop font-semibold mb-4 items-center justify-center">{blok.titel}</h2>
    <div className="flex space-x-4 mb-4 items-center justify-center">
      <label className="flex items-center space-x-2">
                <span>{blok.checkbox1label}</span>
        <input type="checkbox" className="form-checkbox" />
      </label>
      <label className="flex items-center space-x-2">
                <span>{blok.checkbox2label}</span>
        <input type="checkbox" className="form-checkbox" />
      </label>
    </div>
    <div className="flex text-label-desktop">
<input 
  type="email" 
  className="border-[0.5px] border-silver p-2 w-full" 
  placeholder={blok.inputPlaceholder} 
/>

      <button className="bg-red text-white p-2">
        {blok.buttontekst}
      </button>
    </div>
  </div>
</div>

  );
};

export default Nieuwsbrief;

