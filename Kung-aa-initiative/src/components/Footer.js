import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiFacebook />,
    href: "https://facebook.com/kungaainitiative",
    label: "Facebook",
  },
  {
    icon: <FiInstagram />,
    href: "https://instagram.com/kungaainitiative",
    label: "Instagram",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/kungaainitiative",
    label: "Twitter / X",
  },
  {
    icon: <FiLinkedin />,
    href: "https://linkedin.com/company/kungaainitiative",
    label: "LinkedIn",
  },
  {
    icon: <FiYoutube />,
    href: "https://youtube.com/@kungaainitiative",
    label: "YouTube",
  },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="KUNG'AA Initiative logo" />
            <h3>KUNG&apos;AA Initiative</h3>
          </div>

          <p className="footer-tagline">
            Turning Disability Into Possibility.
          </p>

          <p>
            Empowering vulnerable and differently abled individuals through
            advocacy, education, mentorship, health support and community
            development.
          </p>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`KUNG'AA Initiative on ${social.label}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} onClick={scrollToTop}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get In Touch</h3>

          <ul className="footer-contact">
            <li>
              <FiMapPin />
              <span>Kasarani, Nairobi County, Kenya</span>
            </li>

            <li>
              <FiPhone />
              <a href="tel:+254715364734">+254 715 364 734</a>
            </li>

            <li>
              <FiMail />
              <a href="mailto:kungaainitiative@gmail.com">
                kungaainitiative@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} KUNG&apos;AA Initiative. All Rights Reserved.</span>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;