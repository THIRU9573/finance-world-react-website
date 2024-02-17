import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react'

const financeData = [
  {
    id: 1,
    plan: 'Basic',
    price: '₹999/month',
    features: ['Basic financial analysis', 'Budgeting tools', '2 bank account connections', 'Monthly financial reports'],
    link: 'https://www.example.com/starter'
  },
  {
    id: 2,
    plan: 'Standard',
    price: '₹1999/month',
    features: ['Advanced financial modeling', 'Expense tracking', '5 bank account connections', 'Quarterly tax optimization'],
    link: 'https://www.example.com/standard'
  },
  {
    id: 3,
    plan: 'Premium',
    price: '₹2999/month',
    features: ['Comprehensive portfolio management', 'Real-time market data integration', 'Unlimited bank account connections', 'Yearly financial audits'],
    link: 'https://www.example.com/premium'
  }
];


function Pricing() {
  return (
    <section id='pricing' className="pricing-block">
        <Container fluid>
            <div className="title-holder">
                <h2>Pricing & Plans</h2>
                <div className="subtitle">check our pricing and plans</div>
            </div>
            <Row>
              {
                financeData.map(finance => {
                  return (
                  <Col sm={4} key={finance.id}>
                    <div className="heading">
                      <h3>{finance.plan}</h3>
                      <span className="price">{finance.price}</span>
                    </div>
                    <div className="content">
                          <ListGroup>
                            {
                              finance.features.map((features, index) => {
                                return (
                                  <ListGroup.Item key={index}>{features}</ListGroup.Item>

                                )
                              })
                            }
                          </ListGroup>
                    </div>
                    <div className="btn-holder">
                      <a href={finance.link} className='btn btn-primary'>Order Now</a>
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

export default Pricing
