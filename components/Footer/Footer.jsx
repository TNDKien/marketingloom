import { storyblokEditable } from "@storyblok/react/rsc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ blok }) => (
  <div className="bg-black text-white text-paragraph font-medium p-8" {...storyblokEditable(blok)}>
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <img
          className="w-28"
          src={blok.logo.filename}
          alt={blok.logo.alt}
        />
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} size="xl" />
          </a>
          <a href="https://facebook.com" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} size="xl" />
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-red mb-4 pb-2 border-b border-white">Mijn TML</p>
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
          <p className="text-red mb-4 pb-2 border-b border-white">Categorieën</p>
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
          <p className="text-red mb-4 pb-2 border-b border-white">Algemeen</p>
          <ul className="space-y-2">
            <li>Algemene voorwaarden</li>
            <li>Cookies</li>
            <li>Copyright</li>
            <li>Responsible Disclosure</li>
          </ul>
        </div>
        <div>
          <p className="text-red mb-4 pb-2 border-b border-white">Over TML</p>
          <ul className="space-y-2">
            <li>TML Code</li>
            <li>Journalistiek jaarverslag</li>
            <li>Werken bij TML</li>
            <li>Colofon</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;