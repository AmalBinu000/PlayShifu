import React from 'react';
import { FaBars, FaSearch, FaUser, FaShoppingCart, FaChevronDown } from 'react-icons/fa';
import './Navbar.css'

const navigationItems = [
  {
    text: 'Shop by Category',
    hasDropdown: true,
    dropdown: [
      { text: 'Problem Solving Toys', href: 'https://www.playshifu.com/shop/category/problem-solving-toys' },
      { text: 'Animals & Dinos Toys', href: 'https://www.playshifu.com/shop/category/animals-and-dinos-toys' },
      { text: ' Orboot', href: 'https://www.playshifu.com/shop/category/orboot-globe-toy' },
    ],
  },
  {
    text: 'Shop by Age',
    hasDropdown: true,
    dropdown: [
      { text: 'Ages 4-6', href: 'https://www.playshifu.com/shop/agerange/educational-toys-4-6-years' },
      { text: 'Ages 6-8', href: 'https://www.playshifu.com/shop/agerange/educational-toys-6-8-years' },
      { text: 'Ages 8-10', href: 'https://www.playshifu.com/shop/agerange/educational-toys-8-10-years' },
    ],
  },
  {
    text: 'More',
    hasDropdown: true,
    dropdown: [
      { text: 'Blog', href: 'https://www.playshifu.com/blog' },
      { text: 'Contact Us', href: 'https://www.playshifu.com/contact-us' },
      { text: 'About Us', href: 'https://www.playshifu.com/about-us' },
    ],
  },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo hover-link">PlayShifu</a>
          <div className="offer-badge hover-link">Up To 25% Off</div>

          <nav className="main-nav">
            {navigationItems.map((item, index) => (
              <div className="nav-item-wrapper" key={index}>
                <a href="#" className="nav-item hover-link">
                  {item.text}
                  {item.hasDropdown && <FaChevronDown className="icon-small" />}
                </a>
                {item.hasDropdown && (
                  <div className="dropdown">
                    {item.dropdown.map((dropItem, idx) => (
                      <a href={dropItem.href} key={idx} className="dropdown-item hover-link">
                        {dropItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="header-right">
          <a href="/menu" className="icon-btn hover-link"><FaBars /></a>
          <a href="/search" className="icon-btn hover-link"><FaSearch /></a>
          <a href="/profile" className="icon-btn hover-link"><FaUser /></a>
          <a href="/cart" className="icon-btn hover-link">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
}
