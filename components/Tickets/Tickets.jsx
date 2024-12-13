import { storyblokEditable } from "@storyblok/react/rsc";

const Tickets = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="flex flex-col lg:flex-row gap-12 p-6 lg:px-24"
    >
      {/* Tickets Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Titel */}
        <h2 className="text-h2-desktop font-bold text-red">Tickets</h2>

        {/* Ticket 1 */}
        <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
          {/* Naam */}
          <p className="h3-desktop font-bold text-black flex-1">Early Bird</p>

          {/* Prijs */}
          <p className="text-label-mobile text-black flex-1 text-center">
            € 295,-
          </p>

          {/* Knop */}
          <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver label-desktop">
            <h1 className="font-bold">Bestel Nu</h1>
          </button>
        </div>

        {/* Ticket 2 */}
        <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
          {/* Naam */}
          <p className="h3-desktop font-bold text-black flex-1">Regulier</p>

          {/* Prijs */}
          <p className="text-label-mobile text-black flex-1 text-center">
            € 345,-
          </p>

          {/* Knop */}
          <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver label-desktop">
            <h1 className="font-bold">Bestel Nu</h1>
          </button>
        </div>

        {/* Ticket 3 */}
        <div className="flex flex-row w-full gap-4 border-b-2 border-black items-center py-4">
          {/* Naam */}
          <p className="h3-desktop font-bold text-black flex-1">
            Groepskorting
          </p>

          {/* Prijs */}
          <p className="text-label-mobile text-black flex-1 text-center">
            tot 15% korting
          </p>

          {/* Knop */}
          <button className="bg-red text-white w-[106px] h-[34px] rounded hover:bg-silver label-desktop">
            <h1 className="font-bold">Bestel Nu</h1>
          </button>
        </div>
      </div>

      {/* Partner worden Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Titel */}
        <h2 className="text-h2-desktop font-bold text-red">Partner worden?</h2>

        {/* Beschrijving */}
        <p className="paragraph lg:p-large-desktop text-black">
          Als partner van The Marketing Loom, onze toonaangevende
          marketingnieuwswebsite, kun je jouw relevante kennis delen en een
          onuitwisbare indruk achterlaten op onze lezers en een breed publiek
          binnen de marketingwereld.
        </p>

        {/* Lijst */}
        <ul className="mt-8 space-y-4">
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span>
            <p className="info-mobile lg:paragraph text-black">
              Vergroot je bereik en naamsbekendheid
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span>
            <p className="info-mobile lg:paragraph text-black">
              Profileer je organisatie als thought leader met een kennissessie
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span>
            <p className="info-mobile lg:paragraph text-black">
              Ga in gesprek met professionals en beslissers
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red">&#10004;</span>
            <p className="info-mobile lg:paragraph text-black">
              Campagne via onze website, e-mail en social media
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
