import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


const ConfirmMember = () => {
    return (
        <Fragment>
            <div className="confirm">
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
                    <img src="/images/back-button.svg" alt="back button"/>
                    <h5>Add Member</h5>
                    <img src="/images/search.svg" alt="search icon"/>
                </div>

                <div className="member-options">
                    <div className="member-info">
                        <div className="radio-btn">
                            <input type="radio"/>
                        </div>

                        <div className="member-email">
                            <p>By Email</p>
                            <span>Checking, Savings</span>
                        </div>
                    </div>
                    <div className="member-info">
                        <div className="radio-btn">
                        <Link to="/confirmaccount" style={{ textDecoration: 'none'}}><input type="radio"/></Link>  
                        </div>

                        <div className="member-email">
                            <p>By Account Number</p>
                            <span>Checking, Savings, Consumer Loans</span>
                        </div>
                    </div>
                    <div className="email-result">
                        <p>Email</p>
                        <input type="text" placeholder="Member's Email Address"/>    
                    </div>
                </div>

                <div className="member-btns">
                    <button>Continue</button>
                    <button id="cancel-btn">Cancel</button>
                </div>
            </div>
        </Fragment>
    )
}

export default ConfirmMember;
