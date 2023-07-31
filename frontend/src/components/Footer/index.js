import React from "react";
import "./style.css";
export default function Footer() {
  return (
    <div>
      <div className="newsletter">
        <div className="container">
          <div className="text-center">
            <h6>Newsletter</h6>
            <h4>Subscribe To Our Newsletter</h4>
          </div>
          <form class="newsletter-form">
            <input
              type="text"
              class="input-newsletter"
              placeholder="Enter your email address"
              name="EMAIL"
              required=""
            />
            <button type="submit" class="btn learn-more-btn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-text">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h3>AboutUs</h3>
              <p>
                Halycon IQ is a unique provider of impactful digital products and services that help transform your business,
achieve your goals and establish a culture that people want to be a part of.{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3>Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Aboutus">About Us</a></li>
                <li><a href="/Services">Company</a></li>
                
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <h3> Links</h3>
              <ul>
                <li><a href="/">Career</a></li>
                <li><a href="/Contactus">Contact Us</a></li>
                <li><a href="/">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <h3>Address</h3>
              <ul>
                <li>Tempe, Arizona, USA</li>
                <li>+1234567890</li>
                <li>halyconiq@gmail.com</li>
                <li>+1234567890</li>
              </ul>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  );
}
