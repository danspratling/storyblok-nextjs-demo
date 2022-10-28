import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
// import { Disclosure } from '@headlessui/react'
// import { linkResolver } from '../../utils/linkResolver'
// import { useTheme } from "next-themes";
import { Button } from '../Button'
import {
  XIcon,
  Bars3,
  // SunIcon,
  // MoonIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'

export const Header = ({
  logo,
  // logoDark,
  nav,
  buttons,
  // primaryLink,
  // primaryLinkLabel,
}) => {
  // const { theme, setTheme } = useTheme();

  return (
    <header>
      {/* <Disclosure as='nav'>
        {({ open }) => ( */}
      <div className='container'>
        <div className='relative flex items-center justify-between h-20'>
          <div className='flex items-center justify-center md:flex-1 sm:items-stretch sm:justify-between'>
            {/* Main Logo */}
            <div className='w-48'>
              <Link href='/' className='flex items-center flex-shrink-0'>
                <a>
                  {/* {theme === "dark" ? (
                    <Image {...logoDark} className="w-auto h-8 darklogo" />
                  ) : ( */}
                  <Image
                    src={logo.filename}
                    alt={logo.alt}
                    loading='eager'
                    className='w-auto h-10'
                    width='131'
                    height='51'
                  />
                  {/* )} */}
                  <span className='sr-only'>Home</span>
                </a>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className='items-center hidden md:flex gap-8'>
              {nav.map((item, index) => (
                <NavLink key={index} link={item.link} subnav={item.nav_links}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className='hidden md:block'>
              <Button link='/contact' style='primary'>
                Let's work together{' '}
              </Button>
            </div>

            {/* <ToggleDarkModeButton theme={theme} setTheme={setTheme} /> */}
          </div>

          <div className='flex items-center sm:hidden'>
            {/* Mobile menu button*/}
            {/* <Disclosure.Button className='inline-flex items-center justify-center p-2'>
                  <span className='block w-6 h-6' aria-hidden='true'>
                    {open ? <XIcon /> : <Bars3 />}
                  </span>
                  <span className='sr-only'>{open ? 'Open' : 'Close'} main menu</span>
                </Disclosure.Button> */}
          </div>
        </div>

        {/* Mobile Nav */}
        {/* <Disclosure.Panel className='pt-2 pb-3 sm:hidden gap-2 grid'> */}
        {/* {nav.map((item, index) => (
                <Disclosure.Button key={index} as={NavLink} {...item} />
              ))} */}
        {/* <Link
                href={primaryLink}
                className={`btn ${btnStyle} text-[1rem]`}
              >
                {primaryLinkLabel}
              </Link> */}
        {/* </Disclosure.Panel> */}
      </div>
      {/* )} */}
      {/* </Disclosure> */}
    </header>
  )
}

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
  const { pathname } = useRouter()
  const isCurrent = pathname === link

  return (
    <Link
      href={link.url}
      className={clsx(isCurrent ? 'underline' : 'no-underline')}
      aria-current={isCurrent ? 'page' : undefined}
    >
      <a>{children}</a>
    </Link>
  )
}
