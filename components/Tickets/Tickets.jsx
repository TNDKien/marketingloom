import { storyblokEditable } from "@storyblok/react/rsc";

const Tickets = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="flex flex-col gap-6 p-6">
      <h2 className="text-3xl font-bold text-black">Tickets</h2>
      {/* Ticket 1 */}
      <div className="flex flex-row w-[33.125rem] g ap-4 border-b-2 border-black items-center py-4">
        {/* Naam */}
        <p className="text-lg font-bold text-black flex-1">Early Bird</p>

        {/* Prijs */}
        <p className="text-lg text-black flex-1 text-center">€ 295,-</p>

        {/* Knop */}
        <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
          <h1>Bestel Nu</h1>
        </button>
      </div>

      {/* Ticket 2*/}
      <div className="flex flex-row w-[33.125rem] g ap-4 border-b-2 border-black items-center py-4">
        {/* Naam */}
        <p className="text-lg font-bold text-black flex-1">Regulier</p>

        {/* Prijs */}
        <p className="text-lg text-black flex-1 text-center">€ 345,-</p>

        {/* Knop */}
        <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
          <h1>Bestel Nu</h1>
        </button>
      </div>

      {/* Ticket 3*/}
      <div className="flex flex-row w-[33.125rem] g ap-4 border-b-2 border-black items-center py-4">
        {/* Naam */}
        <p className="text-lg font-bold text-black flex-1">Groepskorting</p>

        {/* Prijs */}
        <p className="text-lg text-black flex-1 text-center">tot 15% korting</p>

        {/* Knop */}
        <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
          <h1>Bestel Nu</h1>
        </button>
      </div>
    </div>
  );
};

export default Tickets;
