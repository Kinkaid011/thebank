
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loading  from './components/Loading';
import Login from './components/Login';
import Accounts from './components/Accounts';
import Transfer from './components/Transfer';
import Deposit from './components/Deposit';
import Bill from './components/Bill';
import Help from './components/Help';
import Loan from './components/Loan';
import Checking from './components/Checking';
import Savings from './components/Savings';
import PayLoan from './components/PayLoan';
import MakeTransfer from './components/MakeTransfer';
import AddMember from './components/AddMember';
import SelectAccount from './components/SelectAccount';
import ConfirmMember from './components/ConfirmMember';
import ConfirmAccount from './components/ConfirmAccount';
import AddBiller from './components/AddBiller';
import AddCompany from './components/AddCompany';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="https://kinkaid011.github.io/thebank/" component= { Loading }></Route> 
          <Route path="/login" component= { Login }></Route> 
          <Route path="/accounts" component= { Accounts }></Route> 
          <Route path="/transfer" component= { Transfer }></Route> 
          <Route path="/deposit" component= { Deposit }></Route> 
          <Route path="/bill" component= { Bill }></Route> 
          <Route path="/help" component= { Help }></Route> 
          <Route path="/loan" component= { Loan }></Route> 
          <Route path="/checking" component= { Checking }></Route> 
          <Route path="/savings" component= { Savings }></Route> 
          <Route path="/pay" component= { PayLoan }></Route> 
          <Route path="/maketransfer" component= { MakeTransfer }></Route> 
          <Route path="/addmember" component= { AddMember }></Route> 
          <Route path="/selectaccount" component= { SelectAccount }></Route> 
          <Route path="/confirm" component= { ConfirmMember }></Route> 
          <Route path="/confirmaccount" component= { ConfirmAccount }></Route> 
          <Route path="/addbiller" component= { AddBiller }></Route> 
          <Route path="/addcompany" component= { AddCompany }></Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
