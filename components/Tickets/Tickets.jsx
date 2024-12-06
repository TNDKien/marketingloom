import { storyblokEditable } from "@storyblok/react/rsc";

const Tickets = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex flex-col gap-6 p-4">
      {/* Ticket 1 */}
      <div className="flex flex-row items-center gap-4">
        <p className="text-lg font-bold text-black">
          {blok.ticketname || "Geen naam gevonden"}
        </p>
        <p className="text-lg text-gray-700">
          {blok.ticketprice || "Geen prijs gevonden"}
        </p>
        <button className="bg-red-500 text-white bg-red px-4 py-2 rounded">
          {blok.ticketbutton || "Geen knop"}
        </button>
      </div>
    </div>
  );
};

export default Tickets;
