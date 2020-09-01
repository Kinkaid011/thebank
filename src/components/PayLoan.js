import React from 'react';
import { Fragment } from 'react';


const PayLoan = () => {
    return (
        <Fragment>
            <div className="payloan">
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
                    <h5>Select Payment Amount</h5>
                    <img src="/images/search.svg" alt="search icon"/>
                </div>

                 <div className="select-amount">
                     <p>Select an Amount</p>
                 </div>

                 <div className="payment-options">                  
                    <div className="minimum-payment">
                        <div className="payment-radio">
                            <input type="radio"/>
                        </div>
                        <div className="radio-title">
                            <p>Minimum Payment</p>
                            <span>$130.00</span>
                        </div>
                    </div>
                    <div className="today-payoff">
                        <div className="payment-radio">
                            <input type="radio"/>
                        </div>
                        <div className="radio-title">
                            <p>Minimum Payment</p>
                            <span>$130.00</span>
                        </div>
                    </div>
                    <div className="other-payment">
                        <div className="payment-radio">
                            <input type="radio"/>
                        </div>
                        <div className="radio-title">
                            <p>Minimum Payment</p>
                            <span>$130.00</span>
                        </div>
                    </div>
                 </div>
                 
                 <div className="pay-confirm">
                        <button id="confirm-btn">Continue</button>
                        <button id="cancel-btn">Cancel</button>
                </div>

            </div>
        </Fragment>
    )
}

export default PayLoan;
