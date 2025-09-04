import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">🌿 Paradise Nursery</h1>
      <p className="about-us-description">Welcome to Paradise Nursery, where green meets serenity!</p>
      <p className="about-us-content">At Paradise Nursery, we are passionate about bringing nature closer to you...</p>
      <p className="about-us-content">Our team of experts is dedicated to ensuring that each plant meets our strict standards...</p>
      <p className="about-us-content">Join us in our mission to create a greener, healthier world...</p>
      <button className="get-started-button" onClick={() => navigate('/products')}>
        Get Started
      </button>
    </div>
  );
}

export default AboutUs;
