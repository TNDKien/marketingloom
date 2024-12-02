import { storyblokEditable } from "@storyblok/react/rsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp, faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sticky_Component = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
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
        </div>
  </div>
);

export default Sticky_Component;
