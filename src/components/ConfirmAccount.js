import React, { Fragment } from 'react';


const ConfirmAccount = () => {
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
                            <input type="radio"/>
                        </div>

                        <div className="member-email">
                            <p>By Account Number</p>
                            <span>Checking, Savings, Consumer Loans</span>
                        </div>
                    </div>
                    <div className="account-result">
                        <p>First Name</p>
                        <input type="text"/>    
                    </div>
                    <div className="account-result">
                        <p>Last Name</p>
                        <input type="text"/>    
                    </div>
                    <div className="account-result">
                        <p>Account Number</p>
                        <input type="text" placeholder="Member's Account Number"/>    
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

export default ConfirmAccount;
