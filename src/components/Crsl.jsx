import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Importing images
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';

var heroData = [
  {
    id: 1,
    image: hero1,
    title: 'The perfect design for your website',
    description: 'Embark on a journey towards financial freedom with our comprehensive resources and expert advice',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: hero2,
    title: 'Mastering Your Finances: A Comprehensive Guide',
    description: 'Learn how to take control of your finances and achieve your financial goals with our step-by-step guide.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: hero3,
    title: 'Invest Wisely: Strategies for Success',
    description: 'Discover proven investment strategies and tips from industry experts to maximize your returns and minimize risks.',
    link: 'https://www.twitter.com'
  },
];

function Crsl() {
  return (
    <section id='home' className='hero-block'>
      <Carousel>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <img className='d-block w-100' src={hero.image} alt={'Slide ' + hero.id} />
            <Carousel.Caption>
              <h3>{hero.title}</h3>
              <p>{hero.description}</p>
              <a className='btn btn-primary' href={hero.link}>Learn More</a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Crsl;
