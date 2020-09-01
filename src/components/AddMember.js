import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";




const AddMember = () => {
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
                    <Link to="/transfer"><img src="/images/back-button.svg" alt="back button"/></Link>
                    <h5>Add Member</h5>
                    <Link to="/selectaccount"><img src="/images/add-sign.svg" alt="add icon"/></Link>
                </div>

                <div className="addaccounts">
                    <p>EXTERNAL FINANCIAL INSTITUTIONS</p>
                    <span>To get started, Add an Account</span>
                    <p>SPACE X MEMBER ACCOUNTS</p>
                    <span>John Wall - 6876</span>        
                    <span>Bradley Beal - 9258</span>        
                    <span>Chicken Joe - 3548</span>        
                    <span>Mike Wazouski - 1596</span>        
                    <span>Naruto Uzumaki - 3573</span>        
                    <span>Liu Kang - 1591</span>        
                    <span>Billie Bob - 8523</span>               
                </div>
           </div>
        </Fragment>
    )
}

export default AddMember;
