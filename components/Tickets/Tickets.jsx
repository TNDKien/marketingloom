import { storyblokEditable } from "@storyblok/react/rsc";

const Tickets = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-row gap-12 p-6 px-24"
    >
      {/* Tickets Section */}
      <div className="flex flex-col gap-6 w-1/2">
        <h2 className="text-3xl font-bold text-red">Tickets</h2>
        {/* Ticket 1 */}
        <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
          {/* Naam */}
          <p className="text-lg font-bold text-black flex-1">Early Bird</p>

          {/* Prijs */}
          <p className="text-lg text-black flex-1 text-center">€ 295,-</p>

          {/* Knop */}
          <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
            <h1>Bestel Nu</h1>
          </button>
        </div>

        {/* Ticket 2 */}
        <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
          {/* Naam */}
          <p className="text-lg font-bold text-black flex-1">Regulier</p>

          {/* Prijs */}
          <p className="text-lg text-black flex-1 text-center">€ 345,-</p>

          {/* Knop */}
          <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
            <h1>Bestel Nu</h1>
          </button>
        </div>

        {/* Ticket 3 */}
        <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
          {/* Naam */}
          <p className="text-lg font-bold text-black flex-1">Groepskorting</p>

          {/* Prijs */}
          <p className="text-lg text-black flex-1 text-center">
            tot 15% korting
          </p>

          {/* Knop */}
          <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver">
            <h1>Bestel Nu</h1>
          </button>
        </div>
      </div>

      {/* Partner worden Section */}
      <div className="flex flex-col gap-4 w-1/2">
        <h2 className="text-3xl font-bold text-black">Partner worden?</h2>
        <p className="text-lg text-black">
          Als partner van The Marketing Loom, onze toonaangevende
          marketingnieuwswebsite, kun je jouw relevante kennis delen en een
          onuitwisbare indruk achterlaten op onze lezers en een breed publiek
          binnen de marketingwereld.
        </p>
        <ul className="text-lg text-black mt-8 space-y-4">
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span> Vergroot je bereik en
            naamsbekendheid
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span> Profileer je organisatie
            als thought leader met een kennissessie
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span> Ga in gesprek met
            professionals en beslissers
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span> Campagne via onze
            website, e-mail en social media
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
