import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "254715364734";
const WHATSAPP_MESSAGE =
  "Hello KUNG'AA Initiative, I'd like to know more about your programs.";

function Contact() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <>
      <section className="page-header">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you, whether it's a question, a partnership
          idea or a program you'd like to support.
        </p>
      </section>

      <section className="contact-wrapper">
        <div className="contact-info">
          <span className="eyebrow">Get In Touch</span>

          <h2>Reach Out Any Time</h2>

          <p className="contact-info-lead">
            Our team is based in Kasarani and happy to answer questions,
            welcome volunteers or talk through a partnership.
          </p>

          <ul className="contact-details-list">
            <li>
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div>
                <h3>Location</h3>
                <p>Kasarani, Nairobi County, Kenya</p>
              </div>
            </li>

            <li>
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+254715364734">+254 715 364 734</a>
                </p>
              </div>
            </li>

            <li>
              <div className="contact-icon">
                <FiMail />
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:kungaainitiative@gmail.com">
                    kungaainitiative@gmail.com
                  </a>
                </p>
              </div>
            </li>

            <li>
              <div className="contact-icon">
                <FiClock />
              </div>
              <div>
                <h3>Office Hours</h3>
                <p>Monday – Friday, 8:00 AM – 5:00 PM</p>
              </div>
            </li>
          </ul>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn whatsapp-btn"
          >
            <FaWhatsapp />
            <span style={{ marginLeft: "8px" }}>Chat On WhatsApp</span>
          </a>
        </div>

        <div className="contact-form">
          <h2>Send Us A Message</h2>

          <form>
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;