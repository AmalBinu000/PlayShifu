import React, { useRef, useState } from 'react';
import {
  FaStar, FaShare, FaChevronLeft, FaChevronRight,
   FaFacebook, FaInstagram,
  FaYoutube, FaLinkedin, FaWhatsapp, FaLock, FaTruck,
  FaUndo, FaShieldAlt,  FaPlay, FaPause
} from 'react-icons/fa';
import './App.css';
import {
  productImages,
  product,
  aboutImages,
  relatedProducts,
  boxContents,
  appGames,
  deviceCompatibility,
  productDetails,
  companyStats,
  footerLinks,
  paymentMethods,
  featuresBarItems,
  navigationItems,
  socialMediaLinks,
} from './seed';
import Navbar from './components/Navbar'

function PlayShifuProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const reelVideoRefs = useRef([]);
  const [playingReelIndex, setPlayingReelIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleReelVideo = (index) => {
    const video = reelVideoRefs.current[index];
  
    if (!video) return;
    
    if (playingReelIndex === index) {
      
      video.pause();
      setPlayingReelIndex(null);
    } else {
      
      if (playingReelIndex !== null && reelVideoRefs.current[playingReelIndex]) {
        reelVideoRefs.current[playingReelIndex].pause();
      }
      
      video.play()
        .then(() => {
          setPlayingReelIndex(index);
        })
        .catch(error => {
          console.error("Error playing video:", error);
        });
    }
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className="playshifu-container">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="marquee">
          <span>Never-before offers - Upto 25% OFF!</span>
          <span>Never-before offers - Upto 25% OFF!</span>
          <span>Never-before offers - Upto 25% OFF!</span>
          <span>Never-before offers - Upto 25% OFF!</span>
        </div>
      </div>
      <Navbar/>

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="/">Home</a><span>/</span>
        <a href="/shop">Shop</a><span>/</span>
        <span className="current">{productDetails.name}</span>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Product Section */}
        <div className="product-section">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img src={productImages[activeImage] || "/placeholder.svg"} alt={productDetails.name} />
              <button className="share-btn"><FaShare /></button>
            </div>
            <div className="thumbnails">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className={`thumbnail ${i === activeImage ? 'active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img || "/placeholder.svg"} alt={`Thumbnail ${i}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1 className="product-title">{productDetails.name}</h1>
            <p className="product-subtitle">{productDetails.subtitle}</p>
            <div className="product-tags">
              {productDetails.tags.map((tag, i) => (
                <span key={i} className={`tag ${tag.type}`}>{tag.text}</span>
              ))}
            </div>
            <div className="product-price">
              <span className="current-price">₹{productDetails.price}</span>
              <span className="original-price">₹{productDetails.originalPrice}</span>
            </div>
            <div className="product-features">
              {productDetails.features.map((f, i) => (
                <div key={i} className="feature-item"><p>{f}</p></div>
              ))}
            </div>
            <button 
              className="add-to-cart-btn" 
              onClick={() => alert("Item added to cart!")}>
              Add To Cart
            </button>
            <div className="product-benefits">
              {productDetails.benefits.map((b, i) => (
                <div key={i} className="benefit">
                  <div className="benefit-icon">
                    {b.icon === "truck" ? <FaTruck /> :
                     b.icon === "shield" ? <FaShieldAlt /> :
                     b.icon === "undo" ? <FaUndo /> : b.icon}
                  </div>
                  <span className="benefit-text">{b.text}</span>
                </div>
              ))}
            </div>
            <p className="device-note">
              Device required. Not included with the toy.<br />
              Check your device compatibility below.
            </p>
          </div>
        </div>

        {/* Product Guide */}
        <div className="product-guide">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fproduct%2Fproduct-manual%2Fproduct-manual-d.webp&w=3840&q=75"
            alt="Product Guide"
            className="product-guide-img"
          />
        </div>

        {/* Reels Section - Updated */}
        {product.reelvideos && product.reelvideos.length > 0 && (
          <section className="reel-section">
            <h2 className="section-title">Watch it in Action</h2>
            
            <div className="reel-gallery">
              {product.reelvideos.map((videoUrl, i) => (
                <div key={i} className="reel-item">
                  <video
                    ref={(el) => {reelVideoRefs.current[i] = el}}
                    src={videoUrl}
                    className={`reel-video ${i === playingReelIndex ? 'playing' : ''}`}
                    muted
                    preload="metadata"
                    onClick={(e) => {
                      // Prevent the click from reaching the button
                      e.stopPropagation();
                      toggleReelVideo(i);
                    }}
                  />
                  <button 
                    className="play-btn"
                    onClick={() => toggleReelVideo(i)}
                  >
                    {i === playingReelIndex ? (
                      <>
                        <FaPause className="btn-icon" /> Pause
                      </>
                    ) : (
                      <>
                        <FaPlay className="btn-icon" /> Play
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        <div className="about-section">
          <h2 className="section-title centered">About {productDetails.name}</h2>
          <div className="about-images">
            {aboutImages.map((item, i) => (
              <div key={i} className="about-image-card">
                <div className="about-image">
                  <img src={item.img || "/placeholder.svg"} alt={item.title} />
                </div>
                <h3 className="about-image-title">{item.title}</h3>
                <p className="about-image-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* In the Box */}
        <h2 className="box-heading">In the box</h2>
        <div className="box-contents">
          {boxContents.map((item) => (
            <div key={item.id} className="box-item">
              <div className="box-icon">
                <img src={item.img} alt={item.title} />
              </div>
              <span className="box-title">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Free In-App Games */}
        <div className="app-games">
          <h2 className="section-title centered">Free In-App Games</h2>
          <p className="section-subtitle">To play, download the complimentary Plugo app</p>
          <div className="games-slider">
            <button className="slider-btn prev" onClick={scrollLeft}>
              <FaChevronLeft />
            </button>
            <div className="games-container" ref={containerRef}>
              {appGames.map((game) => (
                <div key={game.id} className="game-card">
                  <div className="game-icon">
                    <img src={game.image} alt={game.title} />
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn next" onClick={scrollRight}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Device Compatibility */}
        <div className="device-compatibility">
          <h2 className="section-title centered">Device Compatibility</h2>
          <div className="devices-container">
            {deviceCompatibility.map((device) => (
              <div key={device.id} className="device-card">
                <div className="device-header">
                  <div className="device-icon">
                    <img src={device.img} alt={device.title} />
                  </div>
                  <h3 className="device-title">{device.title}</h3>
                </div>
                <ul className="device-details">
                  {device.details.map((detail, j) => (
                    <li key={j} className="device-detail">
                      <span className="detail-bullet">•</span><span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h2 className="section-title centered">Parents Also Bought</h2>
          <div className="products-slider">
            <button className="slider-btn prev"><FaChevronLeft /></button>
            <div className="products-container">
              {relatedProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                    {product.tag && <div className="product-tag">{product.tag}</div>}
                    {product.discount && <div className="product-discount">{product.discount}</div>}
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className={star <= product.rating ? 'star-filled' : 'star-empty'} />
                      ))}
                      <span className="review-count">({product.reviews})</span>
                    </div>
                    <div className="product-pricing">
                      <span className="current-price">₹{product.price}</span>
                      <span className="original-price">₹{product.originalPrice}</span>
                    </div>
                    <button className="product-add-btn" onClick={() => alert("Item added to cart!")}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn next"><FaChevronRight /></button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="stats-section">
            {companyStats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Shop</h3>
              <ul className="footer-list">
                {footerLinks.shop.map((l, i) => (
                  <li key={i}><a href="/">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">More</h3>
              <ul className="footer-list">
                {footerLinks.more.map((l, i) => (
                  <li key={i}><a href="/">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-list">
                {footerLinks.support.map((l, i) => (
                  <li key={i}><a href="/">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Join our community</h3>
              <p className="footer-text">
                Get notified of new launches, product updates, contests, and more exciting news!
              </p>
              <a href="/" className="whatsapp-btn">
                <FaWhatsapp /> Join our WhatsApp Community
              </a>
              <div className="social-icons">
                {socialMediaLinks.map((social, i) => (
                  <a key={i} href={social.url} className="social-icon">
                    {social.platform === "facebook" ? <FaFacebook /> :
                    social.platform === "linkedin" ? <FaLinkedin /> :
                    social.platform === "instagram" ? <FaInstagram /> :
                    social.platform === "youtube" ? <FaYoutube /> : null}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">© 2023 PlayShifu.com</div>
            <div className="payment-methods">
              {paymentMethods.map((method, i) => (
                <img
                  key={i}
                  src={method.image || "/placeholder.svg"}
                  alt={method.name}
                  className="payment-icon"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>

      
      {/* Features Bar */}
      <div className="features-bar">
        {featuresBarItems.map((item, i) => (
          <div key={i} className="feature-item">
            {item.icon === "truck" ? <FaTruck className="feature-icon" /> :
             item.icon === "undo" ? <FaUndo className="feature-icon" /> :
             item.icon === "shield" ? <FaShieldAlt className="feature-icon" /> :
             item.icon === "lock" ? <FaLock className="feature-icon" /> : null}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Chat Button */}
      <a href="https://api.whatsapp.com/send?phone=917899644400&text=" target="_blank" rel="noopener noreferrer" className="chat-button">
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default PlayShifuProductPage;