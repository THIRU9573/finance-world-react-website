import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


import img1 from '../assets/images/img1.jpg';



function About() {
    const Wealth = 60;
    const Investment = 50;
    const Financial_Health_Bar= 80;
  return (
    <section id='about' className='blobk about-blobk'>
        <Container fluid>
            <div className="title-holder">
                <h2>About Us</h2>
                <div className="subtitle">learn more about us</div>
            </div>
            <Row>
                <Col sm={6}>
                    <Image src={img1} />
                </Col>
                <Col sm={6}>
                    <p>Certainly:
                        The finance world encompasses managing money, investing, and risk management. Recent trends include fintech innovation, sustainable finance, and digital transformation. Challenges like regulatory compliance and cybersecurity persist. Financial inclusion remains a global concern. Looking ahead, continued innovation, adaptability, and sustainability will shape the finance landscape. Understanding these dynamics is vital for navigating the complexities of the modern financial world.
                    </p>
                    <div className="progress-block">
                        <h4>Wealth Meter</h4>
                        <ProgressBar now={Wealth} label={`${Wealth}%`} />
                    </div>
                    <div className="progress-block">
                        <h4>Investment Gauge</h4>
                        <ProgressBar now={Investment} label={`${Investment}%`} />
                    </div>
                    <div className="progress-block">
                        <h4>Financial Health Bar</h4>
                        <ProgressBar now={Financial_Health_Bar} label={`${Financial_Health_Bar}%`} />
                    </div>
                </Col>

            </Row>
        </Container>

    </section>
  )
}

export default About
