import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }) => (
  <div className="bg-black text-white text-paragraph font-medium p-8" {...storyblokEditable(blok)}>
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <p className="text-red mb-4">Mijn TML</p>
        <ul className="space-y-2">
          <li>Neem een abbonement</li>
          <li>Inloggen</li>
          <li>Account maken</li>
          <li>Mijn abonnementen</li>
          <li>Nieuwsbrieven</li>
          <li>Privacyvoorkeuren</li>
        </ul>
      </div>
      <div>
        <p className="text-red mb-4">Categorieën</p>
        <ul className="space-y-2">
          <li>Economie</li>
          <li>Politiek</li>
          <li>Bedrijfsleven</li>
          <li>Financiële Markten</li>
          <li>Tech & Innovatie</li>
          <li>Samenleving</li>
        </ul>
      </div>
      <div>
        <p className="text-red mb-4">Algemeen</p>
        <ul className="space-y-2">
          <li>Algemene voorwaarden</li>
          <li>Cookies</li>
          <li>Copyright</li>
          <li>Responsible Disclosure</li>
        </ul>
      </div>
      <div>
        <p className="text-red mb-4">Over TML</p>
        <ul className="space-y-2">
          <li>TML Code</li>
          <li>Journalistiek jaarverslag</li>
          <li>Werken bij TML</li>
          <li>Colofon</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;