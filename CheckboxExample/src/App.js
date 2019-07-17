import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Login from './login/Logincomponent';
import roles from './routingConfig';
import Dashboard from './Dashboard/Dashboard';
import Profile from './Profile/Profile';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.routes = [{path:'/' , component:Login},{path:'/Dashboard' , component:Dashboard},{path:'/profile' , component:Profile}]
  }
  render(
  ){
    return(
      <Switch>
        {
          this.routes.map((item , key) => (
            <Route exact path={item.path} component = {item.component} key={key}></Route>
          ))
        } 
      </Switch>
    )
  }
}

export default App;
