import Navigation from './components/Navigation';
import Footer from './components/Footer'
import Input from './components/Input'
import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navigation />
      <div className="introText">
        <h1>Nothing to Play?</h1>
        <h2>Let's see if that's true</h2>
      </div>
      <Input />
      <div className="howTo">
        <Link to="instructions">
          <p>How do I get my Steam ID?</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
