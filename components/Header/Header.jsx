import { storyblokEditable } from "@storyblok/react/rsc";
import "./HoverEffect.css";

const Header = ({ blok }) => (
  <div className="-28 mt-0" {...storyblokEditable(blok)}>
    {/* <h1 className=" text-4xl font-bold">{blok.Titel}</h1> */}

    <nav className="flex ml-24 mr-24 justify-between">
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
          <a href="/Home">Home</a>
        </li>
        <li className="flex">
          <a className="flex justify-center items-center" href="/Nieuws">
            Nieuws
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
          </a>
        </li>
        <li>
          <a href="/Nieuws">Interviews</a>
        </li>
        <li>
          <div className="hover-container">
            <a href="/Artikelen" className="hover-word">
              Artikelen
            </a>
            <div className="hover-line"></div>
          </div>
        </li>
        <li>
          <div className="hover-container">
            <a href="/Artikelen" className="hover-word">
              Evenementen
            </a>
            <div className="hover-line"></div>
          </div>
        </li>
      </ul>

      <div className="w-3/12">
        <div className="flex justify-end">
          <img
            className="mt-12"
            src={blok.zoek.filename}
            alt={blok.zoek.alt || "Zoek"}
          />

          <button className="text-white bg-rood px-4 py-1 mt-12 ml-6 font-semibold">
            Aboneer
          </button>

          <img
            className="mt-12 ml-6"
            src={blok.modus.filename}
            alt={blok.modus.alt || "Zoek"}
          />
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
