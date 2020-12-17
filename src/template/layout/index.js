import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Header from '../header';
import Sidebar from '../sidebar';
import Content from '../content';
import Footer from '../footer';

import GlobalContext, { Themes, SidebarState } from '../../context/context';



function Layout(props) {
    const [globalState, setGlobalState]=useContext(GlobalContext);

    function onSidebarStateChange(newSidebarState){
        setGlobalState({
            ...globalState, 
            layout:{
                ...globalState.layout,
                sidebarState:newSidebarState,
            }
        })
    }
    function onTogglerClick(){
        if(globalState.layout.sidebarState===SidebarState.HIDDEN){
            setGlobalState({
                ...globalState, 
                layout:{
                    ...globalState.layout,
                    sidebarState:SidebarState.MAXIMIZE,
                }
            })
        }
        else{
            setGlobalState({
                ...globalState, 
                layout:{
                    ...globalState.layout,
                    sidebarState:SidebarState.HIDDEN,
                }
            })
        }
    }
    function onThemeChange(isDarkMode){
        setGlobalState({
            ...globalState, 
            layout:{
                ...globalState.layout,
                themeState:isDarkMode?Themes.LIGHT:Themes.DARK
            }
        })
    }

    return (
            <div id='cl-layout' className={`${globalState.layout.themeState===Themes.DARK?'cl-dark-theme':'cl-light-theme'} cl-layout`}>
                <Sidebar state={globalState.layout.sidebarState} setSidebarState={onSidebarStateChange} />

                <div className='cl-layout-wrapper'>
                    <Header onTogglerClick={onTogglerClick} onThemeChange={onThemeChange} />
                    <div className='cl-content-wrapper'>
                        <Content />
                        <Footer />
                    </div>
                </div>
            </div>
    )
}

Layout.propTypes={
    history:PropTypes.object,
}

export default Layout
