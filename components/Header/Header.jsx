import { storyblokEditable } from "@storyblok/react/rsc";
import { useState } from "react"; //useState kijkt in welke staat het is
import "./HoverEffect.css";

const Header = ({ blok }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false); // Mobile menu
  const [isNewsMenuVisible, setIsNewsMenuVisible] = useState(false); // Nieuws submenu

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible((prev) => !prev); // Toggle mobiele menu
  };

  const toggleNewsMenu = () => {
    setIsNewsMenuVisible((prev) => !prev); // Toggle nieuws submenu
  };

  return (
    <div className="z-10 h-28 mt-0 " {...storyblokEditable(blok)}>
      {/* nav bar */}
      <nav className="flex ml-4 mr-4 justify-between pb-8 sm:ml-24 sm:mr-24">
        <div className="w-3/12">
          <a href="/">
            <img
              className="mt-8 h-12 mt-8 w-auto h-12"
              src={blok.logo.filename}
              alt={blok.logo.alt || "Logo"}
            />
          </a>
        </div>
        <ul className="flex flex-wrap mt-12 w-6/12 justify-between text-black text-p-large-desktop">
          <li className="hidden md:block">
            <div className="hover-container">
              <a href="/Home" className="hover:text-red">
                Home
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li className="flex hidden md:block">
            <button
              className="hover:text-red flex justify-center"
              onClick={toggleNewsMenu} // Toggle het menu bij klikken
            >
              Nieuws
              {/* SVG voor pijl die naar beneden wijst */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  isNewsMenuVisible ? "scale-y-[-1]" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M12 16.5a.75.75 0 01-.53-.22l-6-6a.75.75 0 111.06-1.06L12 14.94l5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-.53.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>

          <li className="hidden md:block">
            <div className="hover-container">
              <a href="/Interviews" className="hover:text-red">
                Interviews
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li className="hidden md:block">
            <div className="hover-container">
              <a href="/Artikelen" className="hover:text-red">
                Artikelen
              </a>
              <div className="hover-line"></div>
            </div>
          </li>
          <li className="hidden md:block">
            <div className="hover-container">
              <a href="/Artikelen" className="hover:text-red">
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
              className="mt-12 "
              src={blok.zoek.filename}
              alt={blok.zoek.alt || "Zoek"}
            />

            {/* Aboneer knop */}
            <button className=" hidden sm:block text-white bg-red px-4 py-1 mt-12 ml-6 text-label-desktop font-semibold">
              Aboneer
            </button>

            {/* Kleurmodus knop */}
            <img
              className="hidden sm:block mt-12 ml-6"
              src={blok.modus.filename}
              alt={blok.modus.alt || "Kleurmodus knop"}
            />

            {/* Hamburger menu komt tevoorschijnt als mobile device is */}
            <img
              className="block sm:hidden mt-12 ml-6"
              src={blok.menu.filename}
              alt={blok.menu.alt || "Hamburger menu"}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuVisible && (
        <div className="sm:hidden w-full bg-black text-white p-4 z-2">
          <ul className="flex flex-col">
            <li className=" font-sans  py-2">
              <a href="/Home">Home</a>
            </li>
            <li className="py-2">
              <button
                className="font-sans hover:text-red flex justify-center"
                onClick={toggleNewsMenu} // Toggle het menu bij klikken
              >
                Nieuws
                {/* SVG voor pijl die naar beneden wijst */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isNewsMenuVisible ? "scale-y-[-1]" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 16.5a.75.75 0 01-.53-.22l-6-6a.75.75 0 111.06-1.06L12 14.94l5.47-5.47a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-.53.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>

            {/* Uitklapmenu nieuws */}
            {isNewsMenuVisible && ( //wordt getoont als isMenuVisible true is
              <div className="sm:h-72 bg-black">
                <div className="sm:mx-24 mx-4 flex flex-col sm:flex-row justify-between z-3">
                  {/* Innovaties list */}
                  <ul className="font-sans text-info-mobile ">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a className="text-red ">Innovaties</a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a className="text-white hover:text-red">AI</a>
                    </li>
                    <li className="py-2">
                      <a className="text-white hover:text-red">AR & VR</a>
                    </li>
                    <li className="py-2">
                      <a className="text-white hover:text-red">
                        Tech Doorbraken
                      </a>
                    </li>
                    <li className="py-2">
                      <a className="text-white hover:text-red">
                        Mobiele Innovaties
                      </a>
                    </li>
                  </ul>

                  {/* Social Media */}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a className="text-red">Social Media</a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Content Creatie
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Platform Updates
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Influencer Marketing
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Social Advertising
                      </a>
                    </li>
                  </ul>

                  {/* Content & strategie*/}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a href="" className="text-red">
                          SEO
                        </a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Content Marketing
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Storytelling
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Copywriting
                      </a>
                    </li>
                  </ul>

                  {/* Data & Analytics */}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a href="" className="text-red">
                          Big data
                        </a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Web Analystics
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Performance Metrics
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Klantinzichten
                      </a>
                    </li>
                  </ul>

                  {/* Campagnes & Reclame */}
                  <ul className="">
                    <div className="hover-container">
                      <li className="mt-12 py-2">
                        <a href="" className="text-red">
                          Creative Concepten
                        </a>
                        <div className="hover-line"></div>
                      </li>
                    </div>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Succesverhalen
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Video & TV
                      </a>
                    </li>
                    <li className="py-2">
                      <a href="" className="text-white hover:text-red">
                        Buitenreclame
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <li className="py-2 font-sans ">
              <a href="/Interviews">Interviews</a>
            </li>
            <li className="py-2 font-sans ">
              <a href="/Artikelen">Artikelen</a>
            </li>
            <li className="py-2 font-sans ">
              <a href="/Artikelen">Evenementen</a>
            </li>
            <li className="py-2 font-sans">
              <a href="/Artikelen">Tip de redactie</a>
            </li>

            {/* Aboneer knop */}
            <div className="flex flex-row justify-between">
              <button className=" w-32 text-white bg-red px-2 py-1 font-semibold z-3">
                Aboneer
              </button>

              {/* Kleurmodus knop */}
              <img
                className=""
                src={blok.modus.filename}
                alt={blok.modus.alt || "Kleurmodus knop"}
              />
            </div>
          </ul>
        </div>
      )}
      {/* Uitklapmenu nieuws */}
      {isNewsMenuVisible && ( //wordt getoont als isMenuVisible true is
        <div className="hidden  sm:block sm:h-72 bg-black">
          <div className="sm:mx-24 mx-4 flex flex-col sm:flex-row justify-between z-3">
            {/* Innovaties list */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-red">Innovaties</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a className="text-white hover:text-red">AI</a>
              </li>
              <li className="py-2">
                <a className="text-white hover:text-red">AR & VR</a>
              </li>
              <li className="py-2">
                <a className="text-white hover:text-red">Tech Doorbraken</a>
              </li>
              <li className="py-2">
                <a className="text-white hover:text-red">Mobiele Innovaties</a>
              </li>
            </ul>

            {/* Social Media */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a className="text-red">Social Media</a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Content Creatie
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Platform Updates
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Influencer Marketing
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Social Advertising
                </a>
              </li>
            </ul>

            {/* Content & strategie*/}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a href="" className="text-red">
                    SEO
                  </a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Content Marketing
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Storytelling
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Copywriting
                </a>
              </li>
            </ul>

            {/* Data & Analytics */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a href="" className="text-red">
                    Big data
                  </a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Web Analystics
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Performance Metrics
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Klantinzichten
                </a>
              </li>
            </ul>

            {/* Campagnes & Reclame */}
            <ul className="">
              <div className="hover-container">
                <li className="mt-12 py-2">
                  <a href="" className="text-red">
                    Creative Concepten
                  </a>
                  <div className="hover-line"></div>
                </li>
              </div>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Succesverhalen
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Video & TV
                </a>
              </li>
              <li className="py-2">
                <a href="" className="text-white hover:text-red">
                  Buitenreclame
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
