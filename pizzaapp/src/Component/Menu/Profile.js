import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import { GetORder } from '../../config/myservice'
import jwt_decode from 'jwt-decode'

export default function Profile() {
    const [userdata, setuserdata] = useState('')
    const [order, setorder] = useState('')
    useEffect(() => {
        if(localStorage.getItem('_token')){
            let token=localStorage.getItem('_token');
            let decode=jwt_decode(token);
            let user={email:decode.uid[0].email}
        GetORder(user)
        .then(res=>{
            setorder(res.data.odata)
        })
        setuserdata(decode.uid)
    }
    }, [])
    return (
        <div>
            <Row>
                <Col lg={3}/>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text><h2>User Profile</h2></Card.Text>
                            
                            {
                                userdata && userdata.map((element)=>
                                    <table key={element._id}>
                                        <tbody>
                                        <tr>
                                            <td width="200px" >Name:</td>
                                            <td width="200px">{element.user_name}</td>
                                        </tr>
                                        <tr>
                                            <td width="200px">Email:</td>
                                            <td width="200px">{element.email}</td>
                                        </tr>
                                        <tr>
                                            <td width="200px">Address:</td>
                                            <td width="200px">{element.streetAddress}</td>
                                        </tr> 
                                        <tr>
                                            <td width="200px">Mobile Number:</td>
                                            <td width="200px">{element.mobilenumber}</td>
                                        </tr>
                                        </tbody>
                                </table> 
                                )
                            }
                            
                            
                        </Card.Body>
                    </Card>
                    <h2 className="mt-5">Previous Order</h2>
                    <Table striped bordered hover className="mt-5" >
                            <thead>
                                <tr>
                                    <th>Order pizza</th>
                                    <th>Cost</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    order && order.map((element)=>
                                    <tr>
                                        <td width="300px">{element.pizza_name}</td>
                                        <td width="300px">{element.cost}</td>
                                    </tr>
                                        )
                                }
                            </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
