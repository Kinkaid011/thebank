import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";


const MakeTransfer = () => {
    return (
        <Fragment>
            <div className="transfer-money">
                <div className="carrier-info">
                    <div className="carrier-icon">
                        <img src="/images/carrier.svg" alt="att logo"/>
                    </div>
                    
                    <div className="network-icons">
                        <img src="/images/wifi-icon.svg" alt="wifi icon"/>
                        <img src="/images/battery-icon.svg" alt="battery icon"/>
                        <img src="/images/cell-bars.svg" alt="cell bars icon"/>
                    </div>
                </div>



                <div className="pay-title">
                    <Link to="/transfer"><img src="/images/back-button.svg" alt="back button"/></Link>
                    <h5>Make Transfer</h5>
                    <img src="/images/search.svg" alt="search icon"/>
                </div>
                

               <div className="transfer-options">
                    <div className="transfer-from">
                        <p>From:</p>
                        <span>Select Account</span>
                        <img src="/images/arrow-right.svg" alt="search icon"/>
                    </div>
                    <div className="transfer-from">
                        <p>To:</p>
                        <img src="/images/arrow-right.svg" alt="search icon"/>
                    </div>
                    <div className="transfer-from">
                        <p>Amount:</p>
                        <input type="text"/>
                    </div>
                    <div className="transfer-from">
                        <p>Date:</p>
                        <input type="date"/>
                    </div>
               </div>

               <div className="transfer-btns">
                        <button>Continue</button>
                        <button id="cancel-btn">Cancel</button>
                </div>

            </div>
        </Fragment>
    )
}

export default MakeTransfer
