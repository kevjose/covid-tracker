import React, { useContext } from 'react';
import { DrawerContext } from '../contexts/drawer';

const menus = [
  {
    id: 1,
    pathname: 'https://github.com/kevjose/covid-tracker',
    title: 'Github',
  },
];

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
          <div className="flex cursor-pointer" onClick={hideMenu}>
            <span className="sr-only">C-19 Tracker</span>
            <code>C-19 Tracker</code>
          </div>

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
              href={menu.pathname}
              target="_blank"
              rel="noreferrer"
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
