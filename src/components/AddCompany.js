import React, { Fragment } from 'react'

const AddCompany = () => {
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
                        <p id="color-gray">Add Biller</p>
                    </div>
                    
                    <div className="account-result">
                        <p>Nickname</p>
                        <input type="text"/>    
                    </div>
                    <div className="account-result">
                        <p>Account Number</p>
                        <input type="number" placeholder="Account Number"/>    
                    </div>
                    <div className="account-result">
                        <p>Verify Number</p>
                        <input type="number" placeholder="Verify Account Number"/>    
                    </div>
                    <div className="account-result">
                        <p>Billing Zip Code</p>
                        <input type="number" placeholder="zip code"/>    
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

export default AddCompany;
