import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";




const Bill = () => {
    return (
        <Fragment>
            <div className="bills">
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

                <div className="bill-title">
                    <p></p>
                    <h5>Bills</h5>
                    <p></p>
                </div>

                <div className="bill-actions">
                    <Link to="/addbiller" className="view-deposits" style={{ textDecoration: 'none'}}>
                        <img src="/images/deposit-history.svg" alt="search icon"/>
                        <p>VIEW/ADD BILLER</p>
                    </Link>
                    <div className="make-payment">
                        <img src="/images/security-card.svg" alt="search icon"/>
                        <p>MAKE</p>
                        <p>PAYMENT</p>
                    </div>
                </div>

                <div className="current-title">
                    <p>CURRENT BILLS</p>
                </div>

                <div className="current-bills">
                    <p>To get started with bill pay</p>
                    <span>ADD A BILLER</span>
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

        </Fragment>
    )
}

export default Bill;
