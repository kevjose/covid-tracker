import React, { useContext } from 'react';

// import ActiveLink from 'components/active-link';
import { DrawerContext } from '../../../contexts/drawer';
// import CloseIcon from 'assets/icons/close';

// import {
//   Facebook,
//   Twitter,
//   Youtube,
//   Github,
//   Instagram,
//   Linkedin,
// } from 'assets/icons/social-icons';

const menus = [
  {
    id: 1,
    pathname: '/faq',
    title: 'FAQ',
  },
  {
    id: 2,
    pathname: '/terms',
    title: 'Terms & Conditions',
  },
  {
    id: 3,
    pathname: '/login',
    title: 'Login',
  },
];

// const social = [
//   {
//     id: 0,
//     link: '/',
//     icon: <Facebook />,
//     className: 'facebook',
//     title: 'facebook',
//   },
//   {
//     id: 1,
//     link: '/',
//     icon: <Twitter />,
//     className: 'twitter',
//     title: 'twitter',
//   },
//   {
//     id: 2,
//     link: '/',
//     icon: <Youtube />,
//     className: 'youtube',
//     title: 'youtube',
//   },
//   {
//     id: 3,
//     link: '/',
//     icon: <Github />,
//     className: 'github',
//     title: 'github',
//   },
//   {
//     id: 4,
//     link: '/',
//     icon: <Instagram />,
//     className: 'instagram',
//     title: 'instagram',
//   },
//   {
//     id: 5,
//     link: '/',
//     icon: <Linkedin />,
//     className: 'linkedin',
//     title: 'linkedin',
//   },
// ];

export default function DrawerMenu() {
  const { dispatch }: any = useContext(DrawerContext);
  const hideMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: false,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-90px bg-gray-100 flex justify-start items-center relative px-30px flex-shrink-0">
          <a className="flex" onClick={hideMenu} href="/">
            <span className="sr-only">C-19 Tracker</span>
            <code>C-19 Tracker</code>
          </a>

          <button
            className="w-30px h-30px flex items-center justify-center text-gray-500 absolute right-25px focus:outline-none"
            onClick={hideMenu}
            aria-label="close"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col py-60px pb-40px lg:pb-60px">
          {menus.map((menu, index) => (
            <a
              className="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
              onClick={hideMenu}
              key={index}
              href="/"
            >
              {menu.title}
            </a>
          ))}
        </div>

        {/* <div className="flex items-center justify-start border-t border-gray-300 bg-gray-100 h-12 px-30px flex-shrink-0 lg:hidden"> */}
        {/* {social.map((item, index) => (
            <a
              href={item.link}
              className={`social ${item.className}`}
              target="_blank"
              key={index}
            >
              <span className="sr-only">{item.title}</span>
              {item.icon}
            </a>
          ))} */}
        {/* </div> */}
      </div>
    </>
  );
}
