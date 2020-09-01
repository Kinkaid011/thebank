import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";

const Transfer = () => {
    return (
       <Fragment>
           <div className="transfer">
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

                <div className="transfer-title">
                    <p></p>
                    <h5>Transfer</h5>
                    <p></p>
                </div>

                <div className="transfer-actions">
                    <Link to="/addmember" style={{ textDecoration: 'none'}}>
                        <div className="view-deposits">
                            <img src="/images/deposit-history.svg" alt="search icon"/>
                            <p>VIEW/ADD ACCOUNTS</p>
                        </div>
                    </Link>
                    
                    <Link to="/maketransfer" style={{ textDecoration: 'none'}}>
                        <div className="make-transfer">
                            <img src="/images/whitetransfer.svg" alt="search icon"/>
                            <p>MAKE</p>
                            <p>TRANSFER</p>
                        </div>
                    </Link>
                </div>

                <div className="scheduled-title">
                    <p>SCHEDULED TRANSFERS</p>
                </div>

                <div className="scheduled-transfer">
                    <p>You currently don't have any scheduled transfers</p>
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

export default Transfer
