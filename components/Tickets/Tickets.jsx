import { storyblokEditable } from "@storyblok/react/rsc";

const Tickets = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex flex-col gap-6 p-6">
      {/* Ticket 1 */}
      <div className="flex flex-row w-[33.125rem] gap-4 border-b-2 border-black items-center py-4">
        {/* Naam */}
        <p className="text-lg font-bold text-black flex-1">
          {blok.ticketname || "Geen naam gevonden"}
        </p>

        {/* Prijs */}
        <p className="text-lg text-black flex-1 text-center">
          {blok.ticketprice || "Geen prijs gevonden"}
        </p>

        {/* Knop */}
        <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-black">
          {blok.ticketbutton || "Geen knop"}
        </button>
      </div>
    </div>
  );
};

export default Tickets;
