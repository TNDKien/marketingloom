import { useEffect, useState, useRef } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sticky_Component = ({ blok }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [startScroll, setStartScroll] = useState(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;

      const stickyTop = stickyRef.current.getBoundingClientRect().top;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (stickyTop <= 0) {
        if (startScroll === null) {
          setStartScroll(scrollTop);
        }

        const relativeScroll = scrollTop - startScroll;
        const relativeHeight = docHeight - startScroll;
        const scrollPosition = (relativeScroll / relativeHeight) * 100;

        setScrollPercent(Math.min(Math.max(scrollPosition, 0), 100));
      } else {
        setScrollPercent(0);
        setStartScroll(null);
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
        <div className="relative flex items-center justify-center w-16 h-16 pr-6 pb-6">
        <svg
  className="absolute w-10 h-10"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    className="text-silver"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    cx="10"
    cy="10"
    r="8"
  />
  <circle
    className="text-red"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    fill="none"
    cx="10"
    cy="10"
    r="8"
    strokeDasharray="50"
    strokeDashoffset={`${50 - scrollPercent / 2}`}
  />
</svg>
        </div>
      </div>
    </div>
  );
};

export default Sticky_Component;