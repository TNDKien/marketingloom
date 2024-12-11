import React, { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

// SVG Pijltje
const ArrowIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
  >
    <path
      fillRule="evenodd"
      d="M12 16a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L12 13.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0112 16z"
      clipRule="evenodd"
    />
  </svg>
);

const CollapsibleSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <p
        className="text-red mb-4 pb-2 border-b border-white cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ArrowIcon isOpen={isOpen} /> {/* Pijltje toegevoegd */}
      </p>
      {isOpen && (
        <ul className="font-light space-y-4">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const StaticSection = ({ title, items }) => (
  <div className="hidden md:block">
    <p className="text-red mb-4 pb-2 border-b border-white">{title}</p>
    <ul className="font-light space-y-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = ({ blok }) => (
  <div className="bg-black text-white text-paragraph font-medium p-8" {...storyblokEditable(blok)}>
    <div className="max-w-screen-xl mx-auto">
      {/* Mobile Header with Logo and Social Media */}
      <div className="flex justify-between items-end mb-8 sm:hidden">
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

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Over TML */}
        <CollapsibleSection
          title="Over TML"
          items={["TML Code", "Journalistiek jaarverslag", "Werken bij TML", "Colofon"]}
        />
        <StaticSection
          title="Over TML"
          items={["TML Code", "Journalistiek jaarverslag", "Werken bij TML", "Colofon"]}
        />

        {/* Algemeen */}
        <CollapsibleSection
          title="Algemeen"
          items={["Algemene voorwaarden", "Cookies", "Copyright", "Responsible Disclosure"]}
        />
        <StaticSection
          title="Algemeen"
          items={["Algemene voorwaarden", "Cookies", "Copyright", "Responsible Disclosure"]}
        />

        {/* Categorieën */}
        <CollapsibleSection
          title="Categorieën"
          items={[
            "Economie",
            "Politiek",
            "Bedrijfsleven",
            "Financiële Markten",
            "Tech & Innovatie",
            "Samenleving",
          ]}
        />
        <StaticSection
          title="Categorieën"
          items={[
            "Economie",
            "Politiek",
            "Bedrijfsleven",
            "Financiële Markten",
            "Tech & Innovatie",
            "Samenleving",
          ]}
        />

        {/* Mijn TML */}
        <CollapsibleSection
          title="Mijn TML"
          items={[
            "Neem een abbonement",
            "Inloggen",
            "Account maken",
            "Mijn abonnementen",
            "Nieuwsbrieven",
            "Privacyvoorkeuren",
          ]}
        />
        <StaticSection
          title="Mijn TML"
          items={[
            "Neem een abbonement",
            "Inloggen",
            "Account maken",
            "Mijn abonnementen",
            "Nieuwsbrieven",
            "Privacyvoorkeuren",
          ]}
        />

        {/* Static Section with Logo and Social Media */}
        <div className="hidden md:flex flex-col justify-between items-start h-full">
          <div>
            <img
              className="w-28"
              src={blok.logo.filename}
              alt={blok.logo.alt}
            />
            <p className="text-red mt-8">Meld je nu aan →</p>
          </div>
          <p className="mt-auto mb-2">Neem contact op</p>
          <div className="flex space-x-8">
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
      </div>
    </div>
  </div>
);

export default Footer;