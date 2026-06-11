import React, { useState } from 'react';
import './App.css';

// Import assets from your asset folder
import bag1 from './assets/bag1.png';
import bag2 from './assets/bag2.png';
import bag3 from './assets/bag3.png';
import tagImage from './assets/tag.png';

function App() {
  // Array of your uploaded bag variations
  const productImages = [bag1, bag2, bag3];
  
  // State to track which bag is currently selected
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="landing-container">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="logo">Sixty-Seven Inc.</div>
        <nav>
          <a href="#shop" className="active">Shop</a>
          <a href="#about">Our Strategy</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Product Showcase Section */}
      <main className="product-section" id="shop">
        <div className="grid-container">
          
          {/* Left Column: Image Gallery Viewer */}
          <div className="image-gallery">
            <div className="main-stage">
              <img src={selectedImage} alt="Featured Daypack" className="main-product-img" />
            </div>
            {/* Thumbnails to let user click and swap colors */}
            <div className="thumbnail-row">
              {productImages.map((img, index) => (
                <button 
                  key={index} 
                  className={`thumb-btn ${selectedImage === img ? 'active-thumb' : ''}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`Variant ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product and Price Metadata */}
          <div className="product-details">
            <span className="badge">1st Place Demanded Daypack</span>
            <h1>The Ultimate Daypack</h1>
            <p className="price">$40.00</p>
            
            <p className="description">
              Crafted for kids, loved by parents. Our daypack combines durability with the '67' trend, resonnating with the next generation of students. Perfect for school, adventures, and everything in between.
            </p>

            {/* Visual Tag Feature Box */}
            <div className="tag-showcase">
              <h3>Signature Branding Tag</h3>
              <div className="tag-wrapper">
                <img src={tagImage} alt="Official Product Tag" className="tag-preview" />
                <div className="tag-meta">
                  <p><strong>Material Alignment:</strong> Verified Build</p>
                  <p><strong>Positioning:</strong> Fun & Great Value Certified</p>
                </div>
              </div>
            </div>

            <button className="buy-button">Add to School Cart</button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;