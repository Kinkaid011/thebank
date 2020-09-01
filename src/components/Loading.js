import React from 'react';
import { Fragment } from 'react';


const Loading = () => {
    return (
        <Fragment>
            <div className="loading">
               <img id="logo" src="/images/logo.svg" alt="att logo"/>
               <h1>Space X</h1>
               <div className="carrier-info">
                    <div className="carrier-icon">
                        <img src="/images/carrier.svg" alt="att logo"/>
                    </div>
                    
                    <div className="network-icons">
                        <img src="/images/wifi-icon.svg" alt="att logo"/>
                        <img src="/images/battery-icon.svg" alt="att logo"/>
                        <img src="/images/cell-bars.svg" alt="att logo"/>
                    </div>
               </div>
               
            </div>
        </Fragment>
    )
}

export default Loading

