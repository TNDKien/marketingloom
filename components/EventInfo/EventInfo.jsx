import { storyblokEditable } from "@storyblok/react/rsc";

const EventInfo = ({ blok }) => (
  <section
    className="flex flex-col lg:flex-row w-full px-4 lg:px-24 gap-6 my-4 lg:my-8"
    {...storyblokEditable(blok)}
  >
    {/* Partner Section */}
    <article className="w-full lg:w-1/2 flex flex-col gap-4">
      <h3 className="text-h3-desktop">Partner worden?</h3>
      <div className="flex gap-4">
        <img
          src={blok.partner.filename}
          alt={blok.partner.alt}
          className="w-16 h-16 rounded-full object-cover"
        />
        <ul>
          <li className="font-bold">Eric Varela</li>
          <li>Accountmanager sponsorships</li>
          <li>
            <a
              href="mailto:marketing@marketingloom.com"
              className="text-blue-500 hover:underline"
            >
              marketing@marketingloom.com
            </a>
          </li>
          <li>+31 6 12 34 56 78</li>
        </ul>
      </div>
      <p className="hidden lg:block">
        Als partner van onze events deel je relevante kennis en krijg je de kans
        om een onuitwisbare indruk op deelnemers achter te laten. Uiteraard
        helpen wij je graag met het bepalen van de juiste benadering en
        invulling van jouw activatie op het event. Eric denkt graag met je mee
        over sponsormogelijkheden, bellen of mailen mag altijd! Nieuwsgierig
        naar de mogelijkheden? 
        <a href="#" className="text-red-500 hover:underline">
          Download dan de Partner eventkit.
        </a>
      </p>
    </article>

    {/* Events Section */}
    <article className="w-full lg:w-1/2 flex flex-col gap-4">
      <h3 className="text-h3-desktop">Meer weten over onze events?</h3>
      <div className="flex gap-4">
        <img
          src={blok.events.filename}
          alt={blok.events.alt}
          className="w-16 h-16 rounded-full object-cover"
        />
        <ul>
          <li className="font-bold">Laila Witjens</li>
          <li>Eventmanager</li>
          <li>
            <a
              href="mailto:events@marketingloom.com"
              className="text-blue-500 hover:underline"
            >
              events@marketingloom.com
            </a>
          </li>
          <li>+31 6 12 34 56 78</li>
        </ul>
      </div>
      <div>
        <img
          className="w-full h-auto object-cover rounded-md"
          src={blok.advertentie.filename}
          alt={blok.advertentie.alt}
        />
        <span className="flex justify-center text-sm text-gray-500 mt-2">
          Geen advertenties meer zien? Klik{" "}
          <a href="#" className="text-blue-500 hover:underline">
            hier
          </a>{" "}
          voor meer info
        </span>
      </div>
    </article>
  </section>
);

export default EventInfo;
