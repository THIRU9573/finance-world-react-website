import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';



import React from 'react'

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg'


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const worksData = [
    {
        id: 1,
        link: 'https://www.google.com',
        image:img1 ,
        title: 'Introduction to Financial Markets',
        subtitle: 'Understanding the basics of stocks, bonds, and commodities'
    },
    {
        id: 2,
        link: 'https://www.google.com',
        image: img2,
        title: 'Mastering Investment Strategies',
        subtitle: 'Learn how to build a diversified investment portfolio'
    },
    {
        id: 3,
        link: 'https://www.google.com',
        image: img3,
        title: 'Advanced Risk Management Techniques',
        subtitle: 'Mitigating financial risks and maximizing returns'
    },
    {
        id: 4,
        link: 'https://www.google.com',
        image: img4,
        title: 'Navigating the World of Cryptocurrency',
        subtitle: 'Understanding blockchain technology and digital currencies'
    },
    {
        id: 5,
        link: 'https://www.google.com',
        image: img5,
        title: 'Strategies for Financial Independence',
        subtitle: 'Building wealth and achieving financial freedom'
    },
    {
        id: 6,
        link: 'https://www.google.com',
        image: img6,
        title: 'Exploring the Future of Fintech',
        subtitle: 'Innovations in digital banking, payments, and investing'
    }
];


function Works() {
  return (
    <section id='works' className='block works-block'>
        <Container fluid>
            <div className="title-holder">
                <h2>Our Works</h2>
                <div className="subtitle">Our Awesome Work</div>
            </div>
            <Row className='portfoliolist'>
                {
                    worksData.map( works =>{
                        return (
                            <Col sm={4}  key={works.id}>
                                <div className="portfolio-wrapper">
                                    <a href={works.link}>
                                        <Image  src={works.image} />
                                        <div className="label text-center">
                                            <h3>{works.title}</h3>
                                            <p>{works.subtitle} </p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        )
                    })
                }                
            </Row>
            <Pagination>{items}</Pagination>
        </Container>
    </section>
  )
}

export default Works
