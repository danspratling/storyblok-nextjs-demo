import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalContext";

const Socials = (props) => {
  const context = useContext(GlobalContext);
  if (!context) return null;

  const { socials } = context;

  return (
    <div {...props}>
      {Object.entries(socials).map(([key, link], index) => {
        return (
          <Link
            key={index}
            href={link.url}
            className="mx-4 transition duration-200"
            aria-label={key}
          >
            <FontAwesomeIcon
              icon={mapSocialIcon[key]}
              className="fill-current"
              size="lg"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

const mapSocialIcon = {
  twitter: faTwitter,
  linkedin: faLinkedinIn,
  instagram: faInstagram,
  facebook: faFacebookF,
  github: faGithub,
  dribbble: faDribbble,
};
