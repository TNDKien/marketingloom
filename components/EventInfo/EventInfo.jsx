import { storyblokEditable } from "@storyblok/react/rsc";

const Event_Info = ({ blok }) => (
  <section className="flex w-full px-24 gap-6">
    <article className="w-1/2 flex flex-col gap-4">
      <h3 className="text-h3-desktop">Partner worden?</h3>
      <div className="flex gap-4">
        <img src={blok.partner.filename} alt={blok.partner.alt} />
        <ul>
          <li>Eric Varela</li>
          <li>Accountmanager sponsorships</li>
          <li>marketing@marketingloom.com</li>
          <li>+31 6 12 34 56 78</li>
        </ul>
      </div>
      <p>
        Als partner van onze events deel je relevante kennis en krijg je de kans
        om een onuitwisbare indruk op deelnemers achter te laten. Uiteraard
        helpen wij je graag met het bepalen van de juiste benadering en
        invulling van jouw activatie op het event. Eric denkt graag met je mee
        over sponsormogelijkheden, bellen of mailen mag altijd! Nieuwsgierig
        naar de mogelijkheden? Download dan de Partner eventkit.
      </p>
    </article>
    <article className="w-1/2 flex flex-col gap-4">
      <h3 className="text-h3-desktop">Meer weten over onze events?</h3>
      <div className="flex gap-4">
        <img src={blok.events.filename} alt={blok.events.alt} />
        <ul>
          <li>Laila Witjens</li>
          <li>Eventmanager</li>
          <li>events@marketingloom.com</li>
          <li>+31 6 12 34 56 78</li>
        </ul>
      </div>
      <div>
        <img
          className="w-full h-auto object-cover"
          src={blok.advertentie.filename}
          alt={blok.advertentie.alt}
        />
        <span className="flex justify-center">
          Geen advertenties meer zien? Klik hier voor meer info
        </span>
      </div>
    </article>
  </section>
);

export default Event_Info;
