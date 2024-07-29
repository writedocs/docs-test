import React, { useEffect } from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useLocation } from 'react-router-dom';
// import Translate, { translate } from '@docusaurus/Translate';

import './homepage.css';
import '../css/api.css';
import '../css/callouts.css';
import '../css/sidebar.css';
import '../css/navbar.css';
import '../css/pagination.css';
import '../css/searchbar.css';

const cardsContent = [
  {
    title: 'Get Started',
    description: 'Learn how Deets can help you with tokenization, PCI compliance, and merchant onboarding.',
    imageClass: 'image1',
    link: '/getting-started/what-is-deets',
    // size: 'large'
  },
  {
    title: 'Integration',
    description: 'Check out how to integrate Deets into your solution following just a few steps.',
    imageClass: 'image2',
    link: '/integration/create-a-token',
    // size: 'small'
  },
  {
    title: 'Create a Payment',
    description: 'Discover how to create card payments using Deets\' solutions.',
    imageClass: 'image3',
    link: '/integration/create-a-payment',
    size: 'small'
  },
  {
    title: 'API Reference',
    description: 'Explore all Deets API endpoints that you can use to manage payments.',
    imageClass: 'image4',
    link: '/api-reference/authorization/create-api-key',
    size: 'large'
  }
];

const HomepageHeader = () => (
  <header className="hero">
    <div className="header_container">
      <div className="header_content">
        <div className="hero_title">
          <h1>deets Documentation</h1>
        </div>
        <div className="hero_content">
          <p>
            Explore our guides and examples to integrate deets in order to overcome challenges in legacy payment systems, including regulatory compliance and merchant onboarding.
          </p>
          {/* <div className="btn_container">
            <a className="hero_btn1" href="docs">Get Started</a>
          </div> */}
        </div>
      </div>
    </div>
  </header>
);

const Card = ({ card, size }) => (
  <div className={`card ${size}`} onClick={() => window.location = card.link}>
    <div className={`card_image ${card.imageClass}`}></div>
    <div className="card_text">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  </div>
);

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const mainWrapper = document.querySelector('.main-wrapper');
    const homeBtn = document.querySelector('.home_btn');
    if (location.pathname === '/') {
      mainWrapper.classList.add('home-main-wrapper');
      homeBtn.classList.add('highlight_home')
    } else {
      mainWrapper.classList.remove('home-main-wrapper');
      homeBtn.classList.remove('highlight_home')
    }
  }, [location.pathname]);

  return (
    <Layout
      description="">
      <HomepageHeader />
      <main>
        <div className="main_container">
          <section className="card_container card_container1">
            {cardsContent.slice(0, 2).map(card => (
              <Card key={card.title} card={card} size={`${card.size}_card`} />
            ))}
          </section>
          <section className="card_container card_container2">
            {cardsContent.slice(2).map(card => (
              <Card key={card.title} card={card} size={`${card.size}_card`} />
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
