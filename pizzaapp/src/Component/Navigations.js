import React from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import Login from './LoginPage/Login'
import Menu from './Menu/Menu'
import Signu from './SignUp/Signu'
import NotFound from './NotFound'
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import Payment from './Menu/Payment'
import OrderConfirm from './Menu/OrderConfirm'

export default function Navigations() {
    // const requireLogin = (to, from, next) => {
    //     if (to.meta.auth) {
    //       if (localStorage.getItem('userlog')) {
    //         next();
    //       }
    //       next.redirect('/Login');
    //     } else {
    //       next();
    //     }
    //   };
    return (
        <div>
            <Router>
            {/* <GuardProvider guards={[requireLogin]} loading={Menu} error={NotFound}> */}
                <Switch>
                    <Route  path='/' exact component={HomePage}/>
                    <Route path='/Login' exact component={Login}/>
                    <Route path='/Register' exact component={Signu}/>
                    <Route path='/Menu' exact component={Menu} meta={{auth:true}}/>
                    {/* <Route path='/Payment' exact component={Payment}/> */}
                    {/* <Route path='/OrderConfirm' exact component={OrderConfirm}/> */}
                    {/* <Route path='*' component={NotFound}/> */}
                </Switch>
            {/* </GuardProvider> */}
            </Router>
        </div>
    )
}
