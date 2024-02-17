import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import team5 from '../assets/images/team5.jpg';
import team6 from '../assets/images/team6.jpg';
import team7 from '../assets/images/team7.jpg';
import team8 from '../assets/images/team8.jpg';



const teamsData = [
    {
      id: 1,
      image: team1,
      fbLink: "https://www.facebook.com/finance_member1",
      twitterLink: "https://www.twitter.com/finance_member1",
      linkedinLink: "https://www.linkedin.com/in/finance_member1",
      name: "Emily Johnson",
      designation: "Financial Analyst",
      description: "Emily is a detail-oriented financial analyst with expertise in financial modeling and forecasting. She holds a degree in Finance from a top university and has a strong track record of optimizing financial performance."
    },
    {
      id: 2,
      image: team2,
      fbLink: "https://www.facebook.com/finance_member2",
      twitterLink: "https://www.twitter.com/finance_member2",
      linkedinLink: "https://www.linkedin.com/in/finance_member2",
      name: "David Smith",
      designation: "Senior Accountant",
      description: "David is a seasoned senior accountant with over a decade of experience in financial reporting and analysis. He is highly skilled in GAAP compliance and has a proven ability to streamline accounting processes."
    },
    {
      "id": 3,
      image: team3,
      fbLink: "https://www.facebook.com/finance_member3",
      twitterLink: "https://www.twitter.com/finance_member3",
      linkedinLink: "https://www.linkedin.com/in/finance_member3",
      name: "Sarah Patel",
      designation: "Finance Manager",
      description: "Sarah is a results-driven finance manager with expertise in budgeting and strategic financial planning. She has a track record of implementing cost-saving initiatives and driving profitability."
    },
    {
      id: 4,
      image: team4,
      fbLink: "https://www.facebook.com/finance_member4",
      twitterLink: "https://www.twitter.com/finance_member4",
      linkedinLink: "https://www.linkedin.com/in/finance_member4",
      name: "Michael Brown",
      designation: "Financial Controller",
      description: "Michael is a dedicated financial controller with extensive experience in managing financial operations and ensuring regulatory compliance. He excels in developing internal controls and risk management strategies."
    },
    {
      id: 5,
      image: team5,
      fbLink: "https://www.facebook.com/finance_member5",
      twitterLink: "https://www.twitter.com/finance_member5",
      linkedinLink: "https://www.linkedin.com/in/finance_member5",
      name: "Jennifer Lee",
      designation: "Investment Analyst",
      description: "Jennifer is a dynamic investment analyst with a strong background in equity research and portfolio management. She possesses excellent analytical skills and a deep understanding of financial markets."
    },
    {
      id: 6,
      image: team6,
      fbLink: "https://www.facebook.com/finance_member6",
      twitterLink: "https://www.twitter.com/finance_member6",
      linkedinLink: "https://www.linkedin.com/in/finance_member6",
      name: "Kevin Thompson",
      designation: "Financial Planner",
      description: "Kevin is a certified financial planner with a passion for helping clients achieve their financial goals. He has comprehensive knowledge of investment strategies and retirement planning."
    },
    {
      id: 7,
      image: team7,
      fbLink: "https://www.facebook.com/finance_member7",
      twitterLink: "https://www.twitter.com/finance_member7",
      linkedinLink: "https://www.linkedin.com/in/finance_member7",
      name: "Amanda Wilson",
      designation: "Tax Consultant",
      description: "Amanda is a highly skilled tax consultant with expertise in tax planning and compliance. She stays updated on the latest tax laws and regulations to provide clients with effective tax strategies."
    },
    {
      id: 8,
      image: team8,
      fbLink: "https://www.facebook.com/finance_member8",
      twitterLink: "https://www.twitter.com/finance_member8",
      linkedinLink: "https://www.linkedin.com/in/finance_member8",
      name: "Daniel Garcia",
      designation: "Financial Risk Analyst",
      description: "Daniel is a detail-oriented financial risk analyst with a focus on identifying and mitigating financial risks. He has a strong background in quantitative analysis and risk modeling."
    }
  ]
  

function Teams() {
  return (
    <section id='teams' className='block teams-block'>
        <Container fluid>
            <div className="title-holder">
                <h2>Our Team</h2>
                <div className="subtitle">some of our export</div>
            </div>
            <Row>
                {
                    teamsData.map(teams => {
                        return (
                            <Col sm={3} key={teams.id}>
                                <div className="image">
                                    <Image src={teams.image}  alt='Image'/>
                                    <div className="overlay">
                                        <div className="socials">
                                            <ul>
                                                <li>
                                                    <a href={teams.fbLink}>
                                                        <i class="fa-brands fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={teams.twitterLink}>
                                                        <i class="fa-brands fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={teams.linkedinLink}>
                                                        <i class="fa-brands fa-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                                <div className="content">
                                    <h3>{teams.name}</h3>
                                    <span className="designation">{teams.designation} </span>
                                    <p>{teams.description} </p>
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

export default Teams
