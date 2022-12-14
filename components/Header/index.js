import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";
import Image from "../Image";
// import { useTheme } from "next-themes";
import Button from "../Button";
import clsx from "clsx";

export const Header = ({ blok }) => {
  const { header_logo, header_nav, header_buttons } = blok;

  // const { theme, setTheme } = useTheme();
  const editable = storyblokEditable(blok);
  const mobileNavOpen = useState(false);
  const toggleMobileNav = () => {
    mobileNavOpen.value = !mobileNavOpen.value;
  };

  return (
    <header {...editable}>
      <div className="container">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-between md:flex-1">
            {/* Main Logo */}
            <div className="w-48">
              <Link href="/">
                <a {...editable} className="flex flex-shrink-0 items-center">
                  <Image
                    src={header_logo.filename}
                    alt={header_logo.alt}
                    width={131}
                    height={51}
                    priority
                    className="h-10 w-auto"
                  />
                  <span className="sr-only">Home</span>
                </a>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden items-center gap-8 md:flex">
              {header_nav.map((item, index) => (
                <NavLink
                  {...editable}
                  key={index}
                  link={item.link}
                  subnav={item.nav_links}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="hidden md:block">
              {header_buttons.map((button, index) => (
                <Button
                  {...editable}
                  key={index}
                  link={button.link}
                  style={button.style}
                >
                  {button.label}
                </Button>
              ))}
            </div>

            {/* <ToggleDarkModeButton theme={theme} setTheme={setTheme} /> */}
          </div>

          <div className="flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              className="inline-flex items-center justify-center p-2"
              onClick={toggleMobileNav}
            >
              <span className="block h-6 w-6" aria-hidden="true">
                {/* {mobileNavOpen ? <XIcon /> : <Bars3 />} */}
              </span>
              <span className="sr-only">
                {mobileNavOpen ? "Open" : "Close"} main menu
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="grid gap-2 pt-2 pb-3 sm:hidden">
          {header_nav.map((item, index) => (
            <NavLink key={index} link={item.link} subnav={item.nav_links}>
              {item.label}
            </NavLink>
          ))}
          {header_buttons.map((button, index) => (
            <Button key={index} link={button.link} style={button.style}>
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

// const ToggleDarkModeButton = ({ theme, setTheme }) => {
//   if (theme === "dark") {
//     return (
//       <button
//         className="m-4 w-6 h-6 text-gray-100"
//         onClick={() => setTheme("light")}
//       >
//         <SunIcon fill="currentColor" />
//       </button>
//     );
//   } else {
//     return (
//       <button
//         className="m-4 w-6 h-6 text-gray-800"
//         onClick={() => setTheme("dark")}
//       >
//         <MoonIcon fill="currentColor" />
//       </button>
//     );
//   }
// };

const NavLink = ({ link, children }) => {
  const { pathname } = useRouter();
  const url = link?.story?.url || link?.url;
  const isCurrent = pathname === url;

  if (!url) return null;

  return (
    <Link href={`/${url}`}>
      <a
        className={clsx(isCurrent ? "underline" : "no-underline")}
        aria-current={isCurrent ? "page" : undefined}
      >
        {children}
      </a>
    </Link>
  );
};
