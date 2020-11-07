import React, { useContext } from 'react';
import { DrawerContext } from '../../contexts/drawer';

import DrawerMenu from './views/menus';
import DrawerSlider from './views/slider';

export const Slider = () => {
  const { state, dispatch }: any = useContext(DrawerContext);

  const handleClose = () => {
    dispatch({
      type: 'OPEN_SLIDER',
      payload: {
        slider: false,
      },
    });
  };

  return (
    <React.Fragment>
      {state?.slider === true ? (
        <div className="overlay" role="button" onClick={handleClose} />
      ) : null}
      <div
        className={`drawer drawer-slider ${
          state?.slider === true ? 'open' : ''
        }`}
      >
        <DrawerSlider />
      </div>
    </React.Fragment>
  );
};

export const Drawer = () => {
  const { state, dispatch }: any = useContext(DrawerContext);
  const handleClose = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: false,
      },
    });
  };
  return (
    <React.Fragment>
      {state.menu && (
        <div
          className="overlay overlay-menu"
          role="button"
          onClick={handleClose}
        />
      )}
      <div className={`drawer drawer-menu ${state.menu ? 'open' : ''}`}>
        <DrawerMenu />
      </div>
    </React.Fragment>
  );
};
