import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import {
  faTwitter,
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const ShareIcons = () => {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ShareButton icon={faTwitter} as={TwitterShareButton} color="#1DA1F2" />
      <ShareButton icon={faFacebook} as={FacebookShareButton} color="#1877F2" />

      <ShareButton
        icon={faFacebookMessenger}
        as={FacebookMessengerShareButton}
        color="#0283fe"
      />

      <ShareButton icon={faLinkedin} as={LinkedinShareButton} color="#0A66C2" />

      <ShareButton icon={faReddit} as={RedditShareButton} color="#FF4500" />

      <CopyLinkButton />
    </div>
  );
};

export default ShareIcons;

const ShareButton = ({ icon, as, color, ...rest }) => {
  const CustomComponent = as;
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return (
    <CustomComponent url={window.location.href} className="group" {...rest}>
      <span className="inline-flex rounded-lg bg-gray-100 p-3 transition duration-200 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
        <FontAwesomeIcon
          icon={icon}
          className="h-6 w-6 rounded-full"
          style={{ color }}
        />
      </span>
    </CustomComponent>
  );
};

const CopyLinkButton = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  if (linkCopied) {
    setTimeout(() => setLinkCopied(false), 3000);
    return (
      <button className="inline-flex gap-2 rounded-lg bg-gray-100 p-3 transition duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        Link Copied
        <CheckIcon className="h-6 w-6" />
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        navigator?.clipboard
          ?.writeText(window?.location?.href)
          .then(() => setLinkCopied(true))
      }
      className="inline-flex gap-2 rounded-lg bg-gray-100 p-3 transition duration-200 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      Copy Link
      <DocumentDuplicateIcon className="h-6 w-6" />
    </button>
  );
};
