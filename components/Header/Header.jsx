import { storyblokEditable } from "@storyblok/react/rsc";

const Header = ({ blok }) => (
  <div className="bg-blue-600 h-28 mt-0" {...storyblokEditable(blok)}>
    {/* <h1 className=" text-4xl font-bold">{blok.Titel}</h1> */}

    <nav className="flex ml-24 mr-24 justify-between">
      <div>
        <a href="/">
          <img
            className=" mt-8 w- h-12 mt-8"
            src={blok.logo.filename}
            alt={blok.logo.alt || "Logo"}
          />
        </a>
      </div>
      <ul className="flex mt-12 w-6/12 justify-evenly text-wit">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Nieuws">Nieuws</a>
        </li>
        <li>
          <a href="/Nieuws">Intervieuws</a>
        </li>
        <li>
          <a href="/Artikelen">Artikelen</a>
        </li>
        <li>
          <a href="/Artikelen">Evenementen</a>
        </li>
      </ul>

      <img
        className="mt-12"
        src={blok.zoek.filename}
        alt={blok.zoek.alt || "Zoek"}
      />

      <button className="text-white bg-rood px-4 py-1 mt-12">Aboneer</button>

      <img
        className="mt-12"
        src={blok.modus.filename}
        alt={blok.modus.alt || "Zoek"}
      />
    </nav>
  </div>
);

export default Header;
