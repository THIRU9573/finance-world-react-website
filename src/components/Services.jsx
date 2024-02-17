import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var servicesData = [
  {
    id: 1,
    icon: "fas fa-wallet",
    title: "Stock Trading",
    description: "Learn about the ins and outs of stock trading, including strategies, market analysis, and risk management."
  },
  {
    id: 2,
    icon: 'fa-solid fa-piggy-bank',
    title: "Investment Banking",
    description: "Dive into the world of investment banking, where financial institutions help companies raise capital, conduct mergers and acquisitions, and provide strategic advice."
  },
  {
    id: 3,
    icon: "fas fa-sack-dollar",
    title: "Personal Finance",
    description: "Discover how to manage your finances effectively, including budgeting, saving, investing, and planning for retirement."
  },
  {
    id: 4,
    icon: "fas fa-chart-bar",
    title: "Financial Markets",
    description: "Explore the various financial markets, including stocks, bonds, commodities, and forex, and understand how they function and influence the global economy."
  },
  {
    id:5,
    icon: "fas fa-mobile-alt",
    title: "Fintech",
    description: "Stay updated on the latest developments in financial technology, such as digital payments, blockchain, robo-advisors, and peer-to-peer lending."
  },
  {
    id: 6,
    icon: "fas fa-shield-alt",
    title: "Risk Management",
    description: "Learn about the importance of risk management in finance, including identifying, assessing, and mitigating various types of financial risks to ensure business stability and growth."
  }
];



function Services() {
  return (
    <section id='services' className='block services-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>Our Services</h2>
          <div className='subtitle'>services we provide</div>
        </div>
      <Row>
        {
          servicesData.map(services => {
            return (
              <Col sm={4} className='holder' key={services.id}>
                <div className="icon">
                <i class={services.icon}></i>
                </div>
                <h3>{services.title} </h3>
                <p>{services.description} </p>
              </Col>
            )
          })
        }
        
      </Row>
    </Container>
    </section>
  )
}

export default Services
