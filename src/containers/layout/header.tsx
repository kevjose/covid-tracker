import React, { useContext } from 'react';
import { DrawerContext } from '../../contexts/drawer';

const Header: React.FC = () => {
  const { dispatch }: any = useContext(DrawerContext);
  const showMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: true,
      },
    });
  };
  return (
    <header className="flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-20 z-20 lg:shadow-header pr-20px md:pr-30px lg:pr-40px">
      <button
        aria-label="Menu"
        className="menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px"
        onClick={showMenu}
      >
        <span className="menuIcon">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </span>
      </button>

      <div
        className="mr-10 flex  xs:w-1/2 lg:w-1/6 cursor-pointer"
        onClick={showMenu}
      >
        <span className="sr-only">C-19 Tracker</span>
        <code>C-19 Tracker</code>
      </div>
    </header>
  );
};

export default Header;
