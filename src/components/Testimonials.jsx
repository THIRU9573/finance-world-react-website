import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'


const testimonialsData = [
    {
        id: 1,
        name: "John Smith",
        description: "Working with the finance team has been a game-changer for our company. Their strategic insights and meticulous financial planning have propelled our growth to new heights.",
        designation: "CEO, XYZ Corporation"
    },
    {
        id: 2,
        name: "Emily Johnson",
        description: "I couldn't be happier with the financial advice I received from this team. They guided me through complex investment decisions with clarity and expertise, helping me secure my financial future.",
        designation: "Individual Investor"
    },
    {
        id: 3,
        name: "Sarah Patel",
        description: "As a small business owner, navigating the financial landscape can be daunting. The finance team not only provided me with sound financial strategies but also empowered me with the knowledge to make informed decisions.",
        designation: "Founder, ABC Enterprises"
    },
    {
        id: 4,
        name: "Michael Brown",
        description: "I've worked with many financial controllers in my career, but none compare to the dedication and professionalism of this team. They go above and beyond to ensure our financial operations run smoothly.",
        designation: "Director of Finance, XYZ Corporation"
    }
];


function Testimonials() {
  return (
    <section id='testimonials' className="testimonials-block">
        <Container fluid>
            <div className="title-holder">
                <h2>Client Testimonials</h2>
                <div className="subtitle">what clients says about us</div>
            </div>
            <Carousel controls={false}>
                {
                    testimonialsData.map(testimonials => {
                        return (
                            <Carousel.Item  key={testimonials.id}>
                                <blockquote>
                                    <p>{testimonials.description}</p>
                                    <cite>
                                        <span className="name">{testimonials.name} </span>
                                        <span className="designation">{testimonials.designation} </span>
                                    </cite>
                                </blockquote>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>


        </Container>

    </section>
  )
}

export default Testimonials
