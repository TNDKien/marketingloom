import { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sticky_Component = ({ blok }) => {
  // State voor de scrollindicator
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    // Functie die de scrollpositie bijhoudt
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Hoe ver we gescrold zijn
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Totale hoogte van de pagina
      const scrollPosition = (scrollTop / docHeight) * 100; // Percentage van scrollen
      setScrollPercent(scrollPosition); // Stel het percentage in
    };

    // Voeg een event listener toe voor scroll
    window.addEventListener("scroll", handleScroll);

    // Verwijder de event listener bij unmounten
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div className="sticky top-0" {...storyblokEditable(blok)}>
        <div className="p-10">
          <a href="https://twitter.com" className="my-4 flex items-center justify-center w-10 h-10 bg-red text-white rounded-full">
            <FontAwesomeIcon icon={faTwitter} size="L" />
          </a>
          <a href="https://facebook.com" className="my-4 flex items-center justify-center w-10 h-10 bg-red text-white rounded-full">
            <FontAwesomeIcon icon={faFacebookF} size="L" />
          </a>
          <a href="https://linkedin.com" className="my-4 flex items-center justify-center w-10 h-10 bg-red text-white rounded-full">
            <FontAwesomeIcon icon={faLinkedinIn} size="L" />
          </a>
          <a href="https://instagram.com" className="my-4 flex items-center justify-center w-10 h-10 bg-red text-white rounded-full">
            <FontAwesomeIcon icon={faInstagram} size="L" />
          </a>
          <a href="https://whatsapp.com" className="my-4 flex items-center justify-center w-10 h-10 bg-red text-white rounded-full">
            <FontAwesomeIcon icon={faWhatsapp} size="L" />
          </a>
          <div
          className="w-10 h-10 bg-white rounded-full"
          style={{
            background: `conic-gradient(#E94560 ${scrollPercent}%, #e5e7eb ${scrollPercent}%)`,
          }}
        />
        </div>
  </div>
);
};

export default Sticky_Component;
