import React,{useEffect,useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import { useHistory } from 'react-router'
import {useSelector,useDispatch} from 'react-redux'
import { DELETEPIZZA,DeleteUsercart,GetCart, PLACEORDER } from '../../config/myservice'
import jwt_decode from 'jwt-decode'
export default function Cart() {
    const myCart=useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const [total, settotal] = useState('')
    const history=useHistory()
    useEffect(() => {
        let maxtotal=0
        myCart.forEach(element => {
                maxtotal+=element.quantity*parseInt(element.price)
            });
            settotal(maxtotal)
        }, [myCart])
        
        const DeletePizza=(element)=>{
            DELETEPIZZA(element)
            .then(res=>{
                if(localStorage.getItem('_token')){
                    let token=localStorage.getItem('_token');
                    let decode=jwt_decode(token);
                let data={email:decode.uid[0].email}
                console.log(data);
                GetCart(data)
                .then(res=>{
                    console.log(res.data);
                    dispatch({type:"getcart",payload:res.data.cartdata})
                })
                }
            })
        }
        const placeorder=()=>{
            let data=[]
            if(localStorage.getItem('_token')){
                let token=localStorage.getItem('_token');
                let decode=jwt_decode(token);
                    let user=decode.uid[0].email
                    myCart.forEach(element => {
                        data.push(element.pizza_name)
                        });
                    let order={user:user,pizza:data,cost:total}
                    PLACEORDER(order)
                    .then(res=>{
                        if(localStorage.getItem('_token')){
                            let token=localStorage.getItem('_token');
                            let decode=jwt_decode(token);
                            let user={email:decode.uid[0].email}
                            DeleteUsercart(user)
                            .then(res=>{
                                GetCart(data)
                                .then(res=>{
                                    console.log(res.data);
                                    dispatch({type:"getcart",payload:res.data.cartdata})
                                    history.push('/Payment')
                                })
                                
                            })
                        }
                    })
        }
        }
    return (
        
        <div>
            <div className=" bg-light p-4 m-5">
                    <h2>Shopping Cart</h2>
                        <Table>
                            <tbody>
                        {
                            myCart && myCart.map((element)=>
                            <tr key={element._id}>
                                
                                <td width='250px'><img height="150px" width='150px' src={`Image/${element.pizza_image}`} /></td>
                                <td width='250px'>{element.pizza_name}</td>
                                <td width='250px'>Rs.{element.price*element.quantity} </td>
                                <td width='250px'>{element.quantity}</td>
                                <td><Button variant="dark" onClick={()=>DeletePizza(element)}>Delete</Button></td>
                                
                            </tr>
                            )

                        }
                        <tr>
                            <td colSpan='5' className="text-center">Total : {total} </td>
                        </tr>
                        </tbody>
                        </Table>
                        
                        <Button variant="dark" className="float-right" onClick={placeorder}>Place Order</Button>
                </div>
        </div>
    )
}
