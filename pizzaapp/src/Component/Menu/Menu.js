import React,{useEffect} from 'react'
import { Navbar,Container,Nav,Button } from 'react-bootstrap'
import {BrowserRouter as Router,Route,Switch,useHistory,Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Cart from './Cart'
import Product from './Product'
import Profile from './Profile'
import { GetCart } from '../../config/myservice'
import Payment from './Payment'
import OrderConfirm from './OrderConfirm'
import jwt_decode from 'jwt-decode'
export default function Menu() {
    const myCart=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem('_token')){
            let token=localStorage.getItem('_token');
            let decode=jwt_decode(token);
            console.log(decode.uid[0].email);
            let data={email:decode.uid[0].email}
            GetCart(data)
            .then(res=>{
                dispatch({type:"getcart",payload:res.data.cartdata})
            })
        }
        
    }, [])
    const Logout=()=>{
        localStorage.clear()
        history.push('/')
    }
    return (
        <div>
            <Router>
            <Navbar bg='light' expend='lg'>
                    <Container fluid>
                    <Navbar.Brand >
                        <img
                            src="Image/pizzalogo.png"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Pizza logo"
                        />
                    </Navbar.Brand>
                    <Nav>
                    <Nav.Item className="mt-2"><Link to='/Menu' className=" nav-link">Menu</Link></Nav.Item>
                    <Nav.Item className="mt-2"><Link to='/Cart' className=" nav-link">Cart {myCart.length}</Link></Nav.Item>
                    <Nav.Item className="mt-2"><Link to='/Profile' className=" nav-link">Profile</Link></Nav.Item>
                        <Button variant="outline-secondary" className="m-2" onClick={Logout}>LogOut</Button>
                    </Nav>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path='/Menu' exact component={Product}/>
                    <Route path='/Cart' exact component={Cart}/>
                    <Route path='/Profile' exact component={Profile}/>
                    <Route path='/Payment' exact component={Payment}/>
                    <Route path='/OrderConfirm' exact component={OrderConfirm}/>
                </Switch>
                </Router>
        </div>
    )
}
