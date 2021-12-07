import React from 'react'
import { Navbar,Container, Nav, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function OrderConfirm() {
    return (
            <div>
                
                <Card className="m-5" bg='light' style={{ width: '100' }}>
                    <Card.Body className="m-3">
                        <Card.Title><h2>Order Confirmed!</h2></Card.Title>
                        <Card.Text className="mt-3">
                            Your order is Confirmed!
                        </Card.Text>
                        <Card.Footer className="mt-3">
                            <Link to="/Menu"><Button variant="dark" style={{ width: '97%' }} className="m-3" >Main Menu and Order</Button>{' '}</Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>
        </div>
        
    )
}
