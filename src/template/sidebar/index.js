import React from 'react';
import PropTypes from 'prop-types'
import { useLocation, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import navigationRoutes from '../navigation-routes';
import { SidebarState } from '../../context/context';

import logoMin from '../../assets/images/app.png';
import logoMax from '../../assets/images/app-max.png';



function Sidebar({history, state, setSidebarState}) {
    const location=useLocation();

    return (
        <div
            id="cl-sidebar"
            className={
                `cl-sidebar ${state === SidebarState.MAXIMIZE ? '' :
                    state === SidebarState.MINIMIZE ? 'cl-sidebar-minimize' :
                        'cl-sidebar-hidden'
                }`
            }
        >
            <div id="cl-sidebar-header" className="cl-sidebar-header">
                <img className='cl-sidebar-header-logo-min' src={logoMin} />
                <img className='cl-sidebar-header-logo-max' src={logoMax} />
            </div>



            <div className='cl-sidebar-body'>
            {
                navigationRoutes.map((nav, index)=>{
                    if(nav.icon){
                        return (
                            <div 
                                key={index} 
                                className={`cl-sidebar-route ${location.pathname==nav.to?'cl-sidebar-route-active':''}`}
                                onClick={()=>history.push(nav.to)}
                            >
                                <div className='cl-sidebar-route-icon'>
                                    <FontAwesomeIcon icon={nav.icon} size="lg" />
                                </div>
                                <div className='cl-sidebar-route-label'>
                                    {nav.name}
                                </div>
                            </div>
                        )
                    }

                    return (
                        <div key={index} className='cl-sidebar-route-section'>
                            {nav.name}
                        </div>
                    )
                })
            }
            </div>



            <div id="cl-sidebar-footer" className="cl-sidebar-footer">
                <div className="cl-sidebar-footer-content" />
                <div
                    id="cl-sidebar-control-btn"
                    className='cl-sidebar-control-btn'
                    onClick={() => {
                        setSidebarState(state === SidebarState.MAXIMIZE ? SidebarState.MINIMIZE : SidebarState.MAXIMIZE)
                    }}
                >
                    <FontAwesomeIcon
                        size="lg"
                        icon={
                            state === SidebarState.MAXIMIZE ?
                                faChevronLeft :
                                faChevronRight
                        }
                    />
                </div>
            </div>
        </div>
    )
}

Sidebar.propTypes={
    history:PropTypes.object,
    state:PropTypes.string,
    setSidebarState:PropTypes.func,
}

export default withRouter(React.memo(Sidebar));
