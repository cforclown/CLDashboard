import React from 'react'

function Loader() {
    return (
        <div className="cl-spinner-container">
            <div className="cl-spinner-box">
                <div className="cl-spinner-border-1">
                    <div className="cl-spinner-core"></div>
                </div>
                <div className="cl-spinner-border-2">
                    <div className="cl-spinner-core"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
