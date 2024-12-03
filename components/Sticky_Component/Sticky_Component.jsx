import { useEffect, useState, useRef } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sticky_Component = ({ blok }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [startScroll, setStartScroll] = useState(null); // Scrollpositie waarop sticky element de top bereikt
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;

      const stickyTop = stickyRef.current.getBoundingClientRect().top; // Afstand tot de top van het venster
      const scrollTop = window.scrollY; // Hoe ver de gebruiker gescrold is
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Totale hoogte van de pagina

      if (stickyTop <= 0) {
        // Stel startScroll in als dit nog niet gedaan is
        if (startScroll === null) {
          setStartScroll(scrollTop);
        }

        // Bereken het percentage vanaf het moment dat sticky bovenaan is
        const relativeScroll = scrollTop - startScroll;
        const relativeHeight = docHeight - startScroll;
        const scrollPosition = (relativeScroll / relativeHeight) * 100;

        setScrollPercent(Math.min(Math.max(scrollPosition, 0), 100)); // Zorg dat het tussen 0-100 blijft
      } else {
        setScrollPercent(0); // Reset als het element nog niet sticky is
        setStartScroll(null); // Reset de referentie
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [startScroll]);

  return (
    <div className="sticky top-0" ref={stickyRef} {...storyblokEditable(blok)}>
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