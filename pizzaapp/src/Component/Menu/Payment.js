import React,{useRef} from 'react'
import { Card, Col, Form, Row,Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function Payment() {
    const regForCard=RegExp(/[0-9]{16}/)
    const cardno = useRef('')
    const history=useHistory()
    const pay=()=>{
        if(cardno.current.value!=''){
            regForCard.test(cardno.current.value)?history.push('/OrderConfirm'):alert('Enter valid card Number')
        }
        else{
            alert('enter card no')
        }
    }
    return (
        <div>
            <Row className="mt-5">
                <Col lg={3}></Col>
                <Col lg={6}>
                    <Card >
                        
                        <Form className="p-3">
                        <h2>Payment</h2>
                        <Form.Group>
                            <Form.Label>Enter 16 digit card number</Form.Label>
                                <Form.Control type="text" name="cardno" ref={cardno} />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Button variant="dark" onClick={pay}>pay</Button>
                        </Form.Group>
                    </Form>
                    </Card>
                </Col>
            </Row>
            
        </div>
    )
}
