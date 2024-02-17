import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';



const blogData = [
    {
        id: 1,
        image: blog1,
        time: '2024-02-17',
        title: 'Understanding Investment Diversification',
        description: ' Learn about investment diversification and how to minimize risk while maximizing returns.',
        link: 'https://example.com/investment-diversification'
    },
    {
        id: 2,
        image: blog2,
        time: '2024-02-10',
        title: 'Navigating Tax Season',
        description: 'Explore essential tax strategies and deductions to optimize your small business finances during tax season.',
        link: 'https://example.com/small-business-tax-tips'
    },
    {
        id: 3,
        image: blog3,
        time: '2024-02-03',
        title: 'Introduction to Cryptocurrency',
        description: 'Discover the basics of cryptocurrencies, blockchain technology, and how to get started with investing in digital assets.',
        link: 'https://example.com/cryptocurrency-beginners-guide'
    }
];


function Blog() {
  return (
    <section id='blog' className=" block blog-block">
        <Container fluid>
            <div className="title-holder">
                <h2>Latest from blog</h2>
                <div className="subtitle">get our latest news from blog</div>
            </div>
            <Row>
                {
                    blogData.map(blog => {
                        return (
                            <Col sm={4} key={blog.id}>
                                <div className="holder">
                                    <Card>
                                        <Card.Img variant='top' src={blog.image} alt='image' />
                                        <Card.Body>
                                            <time>{blog.time}</time>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>
                                            {blog.description}
                                            </Card.Text>
                                            <a href={blog.link} className='btn btn-primary'>Read more</a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>

    </section>
  )
}

export default Blog
