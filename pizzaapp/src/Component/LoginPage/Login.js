import React, { useRef} from 'react'
import { Navbar,Nav,Button,Container, Card, Form } from 'react-bootstrap'
import { Link ,useHistory} from 'react-router-dom'
import { Checkuser } from '../../config/myservice'
export default function Login() {
    const Email = useRef('')
    const Password=useRef('')
    const history=useHistory()
    const CheckUser=()=>{
        let Data={Email:Email.current.value,Password:Password.current.value}
        Checkuser(Data)
        .then(res=>{
            console.log(res.data.userdata);
            if(res.data.err==0){
                localStorage.setItem("_token",res.data.token)
                history.push('/Menu');
            }
            else{
                alert('user Not found');
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
                <Card className="mt-5" bg='light' style={{ width: '100' }}>
                <Form className="p-5">
                    <Form.Label><h2>Login</h2></Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" ref={Email } placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" ref={Password} placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" onClick={CheckUser}>
                        Submit
                    </Button>
                </Form>
                </Card>
        </div>
    )
}
