import React from 'react';
import PhoneNumber from './components/PhoneNumber';
import Otp from './components/Otp';
import Success from './components/Success';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/K7wnDfQ34tyenxNti3uDSXhSvyMjoV/phone" component={PhoneNumber}/>
          <Route exact path="/ZHo9svXEp9kNAVK2gIUfvculO/otp" component={Otp}/>
          <Route exact path="/success" component={Success}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    )
  }

}

export default App;
