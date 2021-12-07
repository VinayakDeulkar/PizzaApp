import React,{useRef} from 'react'
import { Navbar,Nav,Button,Container, Card, Form } from 'react-bootstrap'
import { Link,useHistory } from 'react-router-dom'
import { AddUser } from '../../config/myservice';
const regForEmail=RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) 
const regForPassword=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
const regForName=RegExp(/[A-Za-z ]/)
const regForNumber=RegExp(/[7-9]{1}[0-9]{9}/)
export default function Signu() {
    const Name = useRef('');
    const Email = useRef('');
    const MobileNumber = useRef('')
    const Address = useRef('')
    const Password = useRef('')
    const history=useHistory()
    const Adduser=async()=>{
        let Data={Name:Name.current.value,Email:Email.current.value,MobileNumber:MobileNumber.current.value,Address:Address.current.value,Password:Password.current.value}
        console.log(Data);
        await AddUser(Data)
        .then(res=>{
            console.log(res.data.err);
            if(res.data.err==0){
                history.push('/Login');
            }
        })
    }
    return (
        <div>
            <Navbar bg='light' expend='lg'>
                    <Container fluid>
                    <Navbar.Brand href='/'>
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
                {

                }
                <Card  bg='light' style={{ width: '100' }}>
                <Form className="p-5" >
                    <Form.Label><h2>Sign Up</h2></Form.Label>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" ref={Name}  placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" ref={Email} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" name="MobileNumber" ref={MobileNumber} placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control type="text" name="address" ref={Address} placeholder="Enter Street Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" ref={Password} placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" onClick={Adduser}>
                        Submit
                    </Button>
                </Form>
                </Card>
        </div>
    )
}
