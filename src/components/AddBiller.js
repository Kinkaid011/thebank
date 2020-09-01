import React, { Fragment } from 'react';
import { Link } from "react-router-dom";


const AddBiller = () => {
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
                    <Link to="/bill"><img src="/images/back-button.svg" alt="back button"/></Link>
                    <h5>Add Biller</h5>
                    <Link to="/addcompany"><img src="/images/add-sign.svg" alt="add icon"/></Link>
                </div>

                <div className="addaccounts">
                    <span>To get started, Add an Account</span>
                    <span id="color-blue">NO THANKS, I'LL DO IT LATER</span>
                    <p>SPACE X MEMBER ACCOUNTS</p>
                    <span>Aflac</span>        
                    <span>Auto Club South</span>        
                    <span>Memphis Light Gas and Water</span>        
                    <span>Allstate Insurance</span>        
                    <span>American Electric Power</span>        
                    <span>Africa Inland Mission</span>        
                    <span>Alaska Student Loan Corporation</span>               
                    <span>Cigna Health</span>               
                    <span>U-verse Cable and Internet</span>               
                    <span>Loan Shark Health</span>               
                    <span>AAA Autosafe</span>               
                </div>
           </div>
        </Fragment>
    )
}

export default AddBiller
