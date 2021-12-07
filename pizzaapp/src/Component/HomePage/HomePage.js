import React from 'react'
import { Navbar,Container, Nav, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <div>
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
                        <Link to='/Register'><Button variant="outline-secondary" className="m-2">Sign Up</Button></Link>
                        <Link to='/Login'><Button variant="outline-secondary" className="m-2">Login</Button></Link>
                    </Nav>
                    </Container>
                </Navbar>
                <Card className="m-5" bg='light' style={{ width: '100' }}>
                    <Card.Body className="m-3">
                        <Card.Title><h2>Pizza Delivery</h2></Card.Title>
                        <Card.Text className="mt-3">Welcome to pizza delivery service.This is the place when you may chose the most delicious pizza you like from wide variety of options!
                        </Card.Text>
                        <Card.Footer className="mt-3">
                            <Card.Text className="m-3">
                                We're performing delivery free of charge in case if order is igher than 20$
                            </Card.Text>
                            <Link to="/Login"><Button variant="dark" style={{ width: '97%' }} className="m-3" >Sign in and Order</Button>{' '}</Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>
        </div>
    )
}
