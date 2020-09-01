import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";


const SelectAccount = () => {
    return (
        <Fragment>
        <div className="addmember">
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
                <Link to="/addmember"><img src="/images/back-button.svg" alt="back button"/></Link>
                <h5>Select Account Type</h5>
                <img src="/images/add-sign.svg" alt="add icon"/>
            </div>

            <div className="addaccounts">
                <Link to="/confirm" id="color-dark" style={{ textDecoration: 'none'}}>
                    <p>EXTERNAL FINANCIAL INSTITUTIONS</p>
                    <p>SPACE X Business / Association</p>            
                    <p>SPACE X MEMBER ACCOUNTS</p>
                </Link>            
            </div>
       </div>
    </Fragment>
    )
}

export default SelectAccount;
