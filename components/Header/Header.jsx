import { storyblokEditable } from "@storyblok/react/rsc";

const Header = ({ blok }) => (
  <div className=" bg-blue-500 text-white" {...storyblokEditable(blok)}>
    {/* <h1 className=" text-4xl font-bold">{blok.Titel}</h1> */}

    <div className="bg-blue-600 h-28">
      .
      <a href="/">
        <img
          className="w-48 h-12 ml-24"
          src={blok.logo.filename}
          alt={blok.logo.alt || "Logo"}
        />
      </a>
    </div>
  </div>
);

export default Header;
