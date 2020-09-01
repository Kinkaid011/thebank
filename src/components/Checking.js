import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";

const Checking = () => {
    return (
        <Fragment>
           <div className="checking">
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

                <div className="checking-title">
                    <Link to="/accounts"><img src="/images/back-button.svg" alt="back button"/></Link>
                    <h5>Checking - 1231</h5>
                    <img src="/images/search.svg" alt="search icon"/>
                </div>

                <div className="checking-amount">
                    <div className="balance-wrapper">
                        <span>Available Balance</span>
                        <h1>$850</h1>
                    </div>
                    <div className="show-more">
                        <p>SHOW MORE DETAILS</p>
                        <img src="/images/show-arrow.svg" alt="down arrow"/>
                    </div>

                    <div className="show-details">
                        <div className="detail">
                            <p>Current Balance</p>
                            <span>$956.00</span>
                        </div>
                        <div className="detail">
                            <p>Average Daily Balance</p>
                            <span>$789.00</span>
                        </div>
                        <div id="checking-spacer" className="detail">
                            <p>Last Statement Balance</p>
                            <span>$780.00</span>
                        </div>
                        <div className="detail">
                            <p>Routing Number</p>
                            <span>456789456</span>
                        </div>
                        <div id="checking-spacer" className="detail">
                            <p>Account Number</p>
                            <span>1234 <span id="checking-link">SHOW</span></span>
                        </div>
                        <div className="detail">
                            <p>Checking</p>
                            <span id="checking-link">Change</span>
                        </div>
                        <div className="detail">
                            <p>Joint Owner</p>
                            <span id="checking-link">ADD</span>
                        </div>
                        <div id="checking-spacer" className="detail">
                            <p>Direct Deposit Form</p>
                            <span id="checking-link">CREATE</span>
                        </div>
                        <div className="comparison-detail">
                            <p>Current vs Available Balance</p>
                            <img src="/images/question.svg" alt="question mark icon"/>
                        </div>
                    </div>
                </div>

                

                <div className="checking-actions">
                    <div className="option-header">
                        <div className="checking-option">
                            <img src="/images/card-icon.svg" alt="search icon"/>
                            <span>Manage Card</span>
                        </div>
                        <div className="checking-option">
                            <img src="/images/deposit-history.svg" alt="search icon"/>
                            <span>Statements</span>
                        </div>
                        <div className="checking-option">
                            <img src="/images/send-money.svg" alt="search icon"/>
                            <span>Send Money</span>
                        </div>
                    </div>

                    <div className="schedule-header">
                        <img src="/images/calendar-clock.svg" alt="search icon"/>
                        <div className="checking-transactions">
                            <p>Schduled Transactions</p>  
                            <span>View scheduled payments, transfers, deposits</span>
                        </div>
                    </div>
                </div>

                <div className="search-checking">
                    <input type="search" placeholder="keyword, amount, or mm/dd/yyyy"/>
                    <img src="/images/calendar.svg" alt="calendar icon"/>
                    <img id="search" src="/images/searchgray.svg" alt="search icon"/>
                </div>

                <div className="last-transaction">
                    <h3>Pending</h3>
                    <div className="pending">
                        <div className="pending-title">
                            <p>POS Debit - Visa Check Card 3213</p>
                            <p>NIKE Seattle WAUS</p>
                        </div>
                        <div className="pending-amount">
                            <span>-$150.00</span>
                        </div>
                    </div>
                    <div className="pending">
                        <div className="pending-title">
                            <p>POS Debit - Visa Check Card 3213</p>
                            <p>Apple Seattle WAUS</p>
                        </div>
                        <div className="pending-amount">
                            <span>-$180.00</span>
                        </div>
                    </div>
                    <div className="pending">
                        <div className="pending-title">
                            <p>POS Debit - Visa Check Card 3213</p>
                            <p>Exxon Seattle WAUS</p>
                        </div>
                        <div className="pending-amount">
                            <span>-$30.00</span>
                        </div>
                    </div>
                    <div className="pending">
                        <div className="pending-title">
                            <p>POS Debit - Visa Check Card 3213</p>
                            <p>Walmart Seattle WAUS</p>
                        </div>
                        <div className="pending-amount">
                            <span>-$53.00</span>
                        </div>
                    </div>
                    <div className="pending">
                        <div className="pending-title">
                            <p>POS Debit - Visa Check Card 3213</p>
                            <p>Starbucks Seattle WAUS</p>
                        </div>
                        <div className="pending-amount">
                            <span>-$15.00</span>
                        </div>
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
       </Fragment>
    )
}

export default Checking
