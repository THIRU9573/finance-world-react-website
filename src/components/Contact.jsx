import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function Contact() {
  return (
    <section id='contact' className=" block contact-block">
        <Container fluid>
            <div className="title-holder">
                <h2>Conatct Us</h2>
                <div className="subtitle">get connected with us</div>
            </div>
            <Form className='contact-form'>
                <Row>
                    <Col sm={4}>
                        <Form.Control type='text' placeholder="Enetr your name" />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type='email' placeholder="Enter your Email" />
                    </Col>
                    <Col sm={4}>
                        <Form.Control type='tel' placeholder="Enter your Contact" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                    </Col>
                </Row>
                <div className="btn-holder">
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
      
        </Container>
    </section>
  )
}

export default Contact
