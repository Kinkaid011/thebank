import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";



const Help = () => {
    return (
        <Fragment>
            <div className="help">
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

                <div className="help-title">
                    <h5>Help</h5>
                </div>

                <div className="help-menu">
                    <div className="help-item">
                        <img src="/images/document.svg" alt="document icon"/>
                        <span>Routing Number: 456789456</span>
                    </div>
                    <div className="help-item">
                        <img src="/images/profile-icon.svg" alt="profile icon"/>
                        <span>Chat with Agent</span>
                    </div>
                    <div className="help-item">
                        <img src="/images/security.svg" alt="sheild Icon"/>
                        <span>Security: <span id="check">No Issues Detected</span></span>
                    </div>
                    <div className="help-item">
                        <img src="/images/map-marker.svg" alt="map marker icon"/>
                        <span>Mail Address: 888 Heavens Hwy</span>
                    </div>
                    <div className="help-item">
                        <img src="/images/phone.svg" alt="phone icon"/>
                        <span>Contact Us: 999-999-9999</span>
                    </div>
                    <div className="help-item">
                        <img src="/images/info-icon.svg" alt="info icon"/>
                        <span id="info-item">About the App</span>
                    </div>
                </div>

                <div className="bottom-nav">
                    <div className="piggy-bank">
                        <img src="/images/piggy-bank.svg" alt="piggy bank icon"/>
                        <p>Accounts</p>
                    </div>
                    <div className="transfer-arrow">
                        <img src="/images/transfer.svg" alt="transfer arrows icon"/>
                        <p>Transfers</p>
                    </div>
                    <div className="deposit-camera">
                        <img src="/images/deposit.svg" alt="camera icon"/>
                        <p>Deposits</p>
                    </div>
                    <div className="bill-mail">
                        <img src="/images/bills.svg" alt="envelope with mail icon"/>
                        <p>Bill Pay</p>
                    </div>
                    <div className="more-dots">
                        <img src="/images/more.svg" alt="three dots icon"/>
                        <p>More</p>
                    </div>
                </div> 
            </div>

           

            <div className="bottom-nav">
                <div className="piggy-bank">
                    <Link to="/accounts" style={{ textDecoration: 'none'}}>
                        <img src="/images/piggy-bank.svg" alt="piggy bank icon"/>
                        <p>Accounts</p>
                    </Link>     
                </div>
                <div className="transfer-arrow">
                    <Link to="/transfer" style={{ textDecoration: 'none'}}>
                        <img src="/images/transfer.svg" alt="transfer arrows icon"/>
                        <p>Transfers</p>
                    </Link>
                </div>
                <div className="deposit-camera">
                    <Link to="/deposit" style={{ textDecoration: 'none'}}>
                        <img src="/images/deposit.svg" alt="camera icon"/>
                        <p>Deposits</p>
                    </Link>
                </div>
                <div className="bill-mail">
                    <Link to="/bill" style={{ textDecoration: 'none'}}>
                        <img src="/images/bills.svg" alt="envelope with mail icon"/>
                        <p>Bill Pay</p>
                    </Link>
                </div>
                <div className="more-dots">
                    <Link to="/help" style={{ textDecoration: 'none'}}>
                        <img src="/images/more.svg" alt="three dots icon"/>
                        <p>More</p>                        
                    </Link>
                </div>
            </div>

        </Fragment>
    )
}

export default Help;
