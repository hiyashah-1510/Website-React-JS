import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>

        <div className="newsletter-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>

        <p>To get the latest news from us please subscribe your email.</p>
      </div>

      <div className="divider"></div>
      <div className="footer-links">
        <div className="column">
          <h3>CUSTOM LINKS</h3>
          <ul>
            <li>Privacy policy</li>
            <li>Order status</li>
            <li>Returns & exchanges</li>
            <li>Size guide</li>
            <li>Cart</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="column">
          <h3>PRODUCTS</h3>
          <ul>
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
            <li>Stores</li>
          </ul>
        </div>

        <div className="column">
          <h3>OUR COMPANY</h3>
          <ul>
            <li>Delivery</li>
            <li>Legal notice</li>
            <li>About us</li>
            <li>Secure payment</li>
            <li>Contact us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="column">
          <h3>YOUR ACCOUNT</h3>
          <ul>
            <li>Personal info</li>
            <li>Orders</li>
            <li>Credit slips</li>
            <li>Addresses</li>
            <li>Stores</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        © 2025 Made with ❤️ by You <span>HasThemes</span>
      </div>
    </footer>
  );
}

export default Footer;