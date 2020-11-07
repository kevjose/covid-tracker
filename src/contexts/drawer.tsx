import React, { useReducer, createContext } from 'react';
export const DrawerContext = createContext<{
  state?: any;
  dispatch?: React.Dispatch<any>;
}>({});

const INITIAL_STATE = {
  menu: false,
  slider: false,
  regionDetail: null,
};

type ActionType =
  | { type: 'OPEN_MENU'; payload: any }
  | { type: 'OPEN_SLIDER'; payload: any }
  | { type: 'SET_REGION_DETAIL'; payload: any };

type StateType = typeof INITIAL_STATE;

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        menu: action.payload.menu,
      };
    case 'OPEN_SLIDER':
      return {
        ...state,
        slider: action.payload.slider,
      };
    case 'SET_REGION_DETAIL':
      return {
        ...state,
        regionDetail: action.payload.regionDetail,
      };
    default:
      return state;
  }
}

type DrawerProviderProps = {
  children: React.ReactNode;
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
