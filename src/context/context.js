import React from 'react'

export const Themes={
    DARK:'dark',
    LIGHT:'light',
}
export const SidebarState={
    MAXIMIZE:'max',
    MINIMIZE:'min',
    HIDDEN:'hidden',
}

export const GlobalState={
    layout:{
        sidebarState:SidebarState.MAXIMIZE,
        themeState:Themes.DARK,
    },
    session:null,
};

const Context=React.createContext();

export const ContextProvider=Context.Provider;
export const ContextConsumer=Context.Consumer;

export default Context;