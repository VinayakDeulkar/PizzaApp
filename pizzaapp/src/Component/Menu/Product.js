import React,{useEffect,useState} from 'react'
import { Navbar,Container,Nav,Button, Row, Col, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AddCart, AddQuantity, getMenu } from '../../config/myservice'
import { useDispatch,useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
export default function Product() {
    const [MenuData, setMenuData] = useState('')
    const [UserEmail, setUserEmail] = useState()
    const myCart=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    const history=useHistory()
    useEffect(() => {
        if(localStorage.getItem('_token')){
            let token=localStorage.getItem('_token');
            let decode=jwt_decode(token);
        setUserEmail(decode.uid[0].email)
        console.log(decode.uid[0].email);
        
        getMenu()
        .then(res=>{
            if(res.data.err==0){
            setMenuData(res.data.pizzaMenu)
            }
        })
        }
    }, [myCart])
    const ADDCART=(element)=>{
        let data={...element,quantity:1,user:UserEmail}
        console.log(data);
        if(myCart.find(ele=>ele.pizza_id==data.pizza_id)){
            console.log(data.pizza_id);
            myCart.forEach(element => {
                if(element.pizza_id==data.pizza_id){
                    element.quantity=element.quantity+1;
                }
            });
            dispatch({type:"addquantity",payload:myCart})
            let id={pizzaid:data.pizza_id};
            AddQuantity(id)
        }
        else{
            dispatch({type:"addcart",payload:data})
            AddCart(data)
        }
    }
    return (
        <div>
            <div className=" bg-light p-4 ">
                    <h2>Menu</h2>
                    <Row>
                        {
                            MenuData && MenuData.map((element)=>
                            <Col lg={3}  key={element._id}>
                                <Card style={{ width: '18rem' ,height:'25rem' }} >
                                    <Card.Img variant="top" height="200px" src={`Image/${element.pizza_image}`} />
                                    <Card.Body className="ml-3">
                                        <Card.Title>{element.pizza_name}</Card.Title>
                                        <Card.Text>
                                            <b>Topping:</b>
                                         {element.toppings}
                                         <br/>
                                        <label>RS.{element.price}</label>
                                        </Card.Text>
                                        <Button variant="dark" onClick={()=>ADDCART(element)}  >Add to cart</Button>
                                    </Card.Body>
                                    </Card>
                            </Col>
                            )
                        }
                        
                    </Row>
                </div>
        </div>
    )
}
