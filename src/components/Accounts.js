import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";



const Accounts = () => {
    return (
        <Fragment>
            <div className="account">
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

                <h5>Accounts</h5>
               

                <div className="account-banner">
                    <p>Mandatory Face Coverings at Branches, Updated Branch Hours and COVID 19 Support Information</p>
                </div> 

                <div className="scheduled-transactions">
                    <h3>Scheduled Transactions</h3>
                    <p>View scheduled payments, transfers, deposits</p>
                </div>
                           
                <div className="checking-savings">
                    <span>CHECKING AND SAVINGS</span>
                    <div className="total-cash">
                        <p>Total Cash</p>
                        <h3>$1,500</h3>
                    </div>
                </div>

            
               
                    <Link to="/checking" className="account-checking" style={{ textDecoration: 'none'}}>
                        <div className="total-cash">
                            <h3>Checking - 1231</h3>
                            <p>Available Balance</p>
                        </div> 
                        <span>$850</span>                       
                    </Link>
                    
               
                

            
                
                    <Link to="/savings" className="account-savings" style={{ textDecoration: 'none'}}>
                        <div className="total-cash">
                            <h3>Savings - 4564</h3>
                            <p>Available Balance</p>
                        </div>
                        <span>$650</span>
                    </Link>
                    
                
                   

                <div className="loans-and-credit">
                    <span>LOANS AND CREDIT</span>
                    <div className="total-cash">
                        <p>Total Cash</p>
                        <h3>$5,000</h3>
                    </div>
                </div> 

                
                
                    <Link to="/loan" className="account-consolidation" id="color-dark" style={{ textDecoration: 'none'}}>
                        <div className="total-cash">
                            <h3>Consolidation - 7897</h3>
                            <p>Current Balance</p>
                        </div>
                        <span>$5,000</span>
                    </Link>
                    
                 
                 

                <div className="account-edit-view">
                    <p>Balances may reflect transactions that haven't yet posted to your account</p>
                    <img src="/images/bluesecurity.svg" alt="shield icon"/>
                    <span>Check your security health</span>
                </div> 

                <div className="bottom-nav">
                    <div className="piggy-bank">
                            <img src="/images/piggy-bank.svg" alt="piggy bank icon"/>
                            <p>Accounts</p>
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
        </Fragment>
    )
}

export default Accounts;
