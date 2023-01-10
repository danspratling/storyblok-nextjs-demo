import Link from "next/link";
import Image from "../Image";
import RichText from "../RichText";
import Socials from "../Socials";

export const Footer = ({ blok }) => {
  const { footer_logo, footer_description, footer_links } = blok;

  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container">
        <div className="my-8 flex flex-wrap justify-between gap-12 overflow-hidden lg:flex-row lg:flex-nowrap">
          <div>
            <div className="mb-8 block flex-wrap items-center md:flex md:flex-nowrap">
              <div className="relative mr-12">
                <Image
                  src={footer_logo.filename}
                  alt={footer_logo.alt}
                  width={131}
                  height={51}
                  className="mb-8"
                />
              </div>

              <RichText data={footer_description} className="w-80" />
            </div>
            <Socials className="flex justify-start gap-6" />
          </div>

          {footer_links && (
            <div className="flex gap-24">
              {footer_links.map((list, index) => (
                <div key={index}>
                  <p className="mb-4 font-semibold uppercase text-gray-400">
                    {list.title}&nbsp;
                  </p>
                  <ul className="mb-12 grid grid-cols-2 gap-x-12 gap-y-4 md:mb-0">
                    {list.link_list.map(({ _uid, link, label }) => (
                      <li key={_uid}>
                        <Link href={link.url}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
