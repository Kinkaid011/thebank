import React from 'react';
import { Fragment } from 'react';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <Fragment>
            <div className="login">
               <div className="login-title">
                    <img id="loginlogo" src="/images/logo.svg" alt="att logo"/>
                    <span>Space X</span>
               </div>
               <div className="carrier-info">
                    <div className="carrier-icon">
                        <img src="/images/carrier.svg" alt="att logo"/>
                    </div>
                    
                    <div className="network-icons">
                        <img src="/images/wifi-icon.svg" alt="wifi icon"/>
                        <img src="/images/battery-icon.svg" alt="battery icon"/>
                        <img src="/images/cell-bars.svg" alt="network bars"/>
                    </div>
               </div>
                <h1>Welcome</h1>
                <img id="welcome" src="/images/welcome.svg" alt="bottom border"/>

                <form action="">
                    <label id="user" for="username">Enter Username</label>
                    <input id="username" type="text"/>
                    <label id="pw" for="password">Enter Password</label>
                    <input id="password" type="text"/>
                    <label id="remember-me" for="remember">Remember me</label>
                    <input type="radio" id="remember"/>
                    <Link to="/accounts" style={{ textDecoration: 'none'}}><button>Sign in</button></Link>
                    <p>Forgot username or password?</p>
                </form>
            </div>

        </Fragment>
    )
}

export default Login
