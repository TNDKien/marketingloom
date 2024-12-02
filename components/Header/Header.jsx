import { storyblokEditable } from "@storyblok/react/rsc";
import "./HoverEffect.css";
import { useState } from "react"; //useState kijkt in welke staat het is

const Header = ({ blok }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State om menu te tonen

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev); // Wissel tussen tonen en verbergen
  };

  return (
    <div className="-28 mt-0" {...storyblokEditable(blok)}>
      {/* nav bar */}
      <nav className="flex ml-24 mr-24 justify-between pb-8">
        <div className="w-3/12">
          <a href="/">
            <img
              className=" mt-8 h-12 mt-8"
              src={blok.logo.filename}
              alt={blok.logo.alt || "Logo"}
            />
          </a>
        </div>
        <ul className="flex mt-12 w-6/12 justify-between text-zwart text-xl">
          <li>
            <div className="hover-container">
              <a href="/Home" className="hover:text-rood">
                Home
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li className="flex">
            <button
              className="hover:text-rood flex justify-center items-center "
              onClick={toggleMenu} // Toggle het menu bij klikken
            >
              Nieuws
              {/* SVG voor pijl die naar beneden wijst */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 16.5a.75.75 0 01-.53-.22l-6-6a.75.75 0 111.06-1.06L12 14.94l5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-.53.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li>
            <div className="hover-container">
              <a href="/Interviews" className="hover:text-rood">
                Interviews
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li>
            <div className="hover-container">
              <a href="/Artikelen" className="hover:text-rood">
                Artikelen
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li>
            <div className="hover-container">
              <a href="/Artikelen" className="hover:text-rood">
                Evenementen
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
        </ul>

        {/* Zoek afbeelding */}
        <div className="w-3/12">
          <div className="flex justify-end">
            <img
              className="mt-12"
              src={blok.zoek.filename}
              alt={blok.zoek.alt || "Zoek"}
            />

            {/* Aboneer knop */}
            <button className="text-white bg-rood px-4 py-1 mt-12 ml-6 font-semibold">
              Aboneer
            </button>

            {/* Kleurmodus knop */}
            <img
              className="mt-12 ml-6"
              src={blok.modus.filename}
              alt={blok.modus.alt || "Kleurmodus knop"}
            />
          </div>
        </div>
      </nav>

      {/* Uitklapmenu */}
      {isMenuVisible && ( //wordt getoont als isMenuVisible true is
        <div className="h-72 bg-zwart">
          <div className="ml-24 mr-24 flex flex-row justify-between">
            {/* Innovaties list */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-rood">Innovaties</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-wit hover:text-rood">AI</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">AR & VR</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Tech Doorbraken</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Mobiele Innovaties</a>
              </li>
            </ul>

            {/* Social Media */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-rood">Social Media</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Content Creatie</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Platform Updates</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Influencer Marketing</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Social Advertising</a>
              </li>
            </ul>

            {/* Content & strategie*/}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-rood">SEO</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Content Marketing</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Storytelling</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Copywriting</a>
              </li>
            </ul>

            {/* Data & Analytics */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-rood">Big data</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Web Analystics</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Performance Metrics</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Klantinzichten</a>
              </li>
            </ul>

            {/* Campagnes & Reclame */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-rood">Creative Concepten</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Succesverhalen</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Video & TV</a>
              </li>
              <li className="py-2">
                <a className="text-wit hover:text-rood">Buitenreclame</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
