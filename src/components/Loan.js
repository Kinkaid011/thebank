import React, { Fragment } from 'react';
import { Route, Link } from "react-router-dom";
import PayLoan from './PayLoan';



const Loan = () => {

    


    return (
        <Fragment>

        
           <div className="loan">
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

                <div className="loan-title">
                    <Link to="/accounts"><img src="/images/back-button.svg" alt="back button"/></Link>
                    <h5>Consolidation - 7897</h5>
                    <img src="/images/search.svg" alt="search icon"/>
                </div>

                <div className="loan-amount">
                    <div className="balance-wrapper">
                        <span>Current Balance</span>
                        <h1>$5,000</h1>
                    </div>
                    <div className="show-more">
                        <p>SHOW MORE DETAILS</p>
                        <img src="/images/show-arrow.svg" alt="down arrow"/>
                    </div>
                </div>

                <div className="loan-actions">
                    <div className="pay-loan">
                        <p>Minimum payment of <span>$130.00</span> due on 10/15/2020</p>  
                        
                        <Link to="/pay"><button>Make Payment</button></Link>
                    </div>
                </div>

                <div className="search-payment">
                    <input type="search" placeholder="keyword, amount, or mm/dd/yyyy"/>
                    <img src="/images/calendar.svg" alt="calendar icon"/>
                    <img id="search" src="/images/searchgray.svg" alt="search icon"/>
                </div>

                <div className="last-payment">
                    <h3>Sept 15</h3>
                    <div className="payment-recieved">
                        <p>Payment Recieved</p>
                        <span>-$150.00</span>
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
           </div>
            
            <Route path="/pay">               
                <PayLoan />                                      
            </Route>            
    </Fragment>
    )
}

export default Loan;
