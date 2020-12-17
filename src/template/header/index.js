import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAlignJustify
} from '@fortawesome/free-solid-svg-icons'

function Header({history, onTogglerClick, onThemeChange}) {
    return (
        <div id='cl-header' className='cl-header'>
            <div className='cl-header-left'>
                <div className='cl-toggler-btn' onClick={onTogglerClick}>
                    <FontAwesomeIcon icon={faAlignJustify} size="lg" />
                </div>
                <div className='cl-toggler-btn' onClick={()=>history.push('/')}>
                    Dashboard
                </div>
            </div>
            
            <div className='cl-header-center'/>

            <div className='cl-header-right'>
                <h3 style={{marginRight:'12px'}}>Light Theme</h3>
                <label className="switch">
                    <input type="checkbox" onChange={(e)=>onThemeChange(e.target.checked)} />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

Header.propTypes={
    history:PropTypes.object,
    onTogglerClick:PropTypes.func,
    onThemeChange:PropTypes.func,
}

export default withRouter(Header);
