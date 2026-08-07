import React from "react";
import { Link } from "react-router-dom";
import {
  FiEye,
  FiTarget,
  FiMapPin,
  FiLayers,
  FiUsers,
} from "react-icons/fi";

const approach = [
  {
    icon: <FiMapPin />,
    title: "Rooted In Community",
    description:
      "We're based right in Kasarani, working alongside the families and caregivers who understand these needs best.",
  },
  {
    icon: <FiLayers />,
    title: "Holistic Support",
    description:
      "From health to education to livelihoods, we look at the whole person, not just one need at a time.",
  },
  {
    icon: <FiUsers />,
    title: "Walking Together",
    description:
      "Progress isn't something we hand over. It's something we build side by side with the people we serve.",
  },
];

function About() {
  return (
    <>
      <section className="page-header">
        <h1>About KUNG'AA Initiative</h1>

        <p>
          Creating opportunities, empowering lives, and promoting inclusion for
          all.
        </p>
      </section>

      <section className="about-banner">
        <div className="about-banner-media">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
            alt="Community members collaborating at a KUNG'AA Initiative session"
          />

          <div className="about-banner-badge">
            <h3>9+</h3>
            <p>Active Programs</p>
          </div>
        </div>

        <div className="about-banner-text">
          <span className="eyebrow">Our Story</span>

          <h2>Our Background</h2>

          <p>
            KUNG'AA Initiative is a community-based organization operating under
            the theme <strong>"Turning Disability Into Possibility."</strong> We
            promote inclusion, dignity, empowerment and equal opportunities for
            persons living with disabilities and other vulnerable members of
            society.
          </p>

          <p>
            Based in Kasarani, Nairobi County, we work hand in hand with
            families, caregivers and local partners to design programs that
            respond to real, everyday needs—not assumptions about what people
            should want.
          </p>

          <p>
            We believe every individual deserves the opportunity to live with
            dignity, access quality services, participate fully in society, and
            realize their full potential regardless of disability or social
            background.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="eyebrow">Vision & Mission</span>
          <h2>What Drives Our Work</h2>
        </div>
      </section>

      <section className="content-section">
        <div className="card">
          <div className="content-icon">
            <FiEye />
          </div>

          <h2>Our Vision</h2>

          <p>
            A society where every vulnerable and differently abled person is
            seen, included and given a real chance to reach their full
            potential—not despite their circumstances, but alongside them.
          </p>
        </div>

        <div className="card">
          <div className="content-icon">
            <FiTarget />
          </div>

          <h2>Our Mission</h2>

          <p>
            We empower vulnerable persons and differently abled individuals
            through advocacy, education, health and nutrition support,
            mentorship, community development and social empowerment, delivered
            with care and consistency.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="section-title">
          <span className="eyebrow">Our Approach</span>

          <h2>How We Work</h2>

          <p>
            Three simple ideas guide the way we design and deliver every
            program.
          </p>
        </div>

        <div className="programs-grid">
          {approach.map((item) => (
            <div className="program-card" key={item.title}>
              <div className="program-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="section-title">
          <span className="eyebrow">What We Stand For</span>

          <h2>Our Core Values</h2>

          <p>
            The principles guiding every program we run and every life we touch.
          </p>
        </div>

        <div className="values-chip-grid">
          <span className="value-chip">Integrity</span>
          <span className="value-chip">Accountability</span>
          <span className="value-chip">Inclusivity</span>
          <span className="value-chip">Respect</span>
          <span className="value-chip">Compassion</span>
          <span className="value-chip">Teamwork</span>
          <span className="value-chip">Transparency</span>
          <span className="value-chip">Equality</span>
          <span className="value-chip">Service To Humanity</span>
          <span className="value-chip">Empowerment</span>
        </div>
      </section>
            <section className="section bg-cream">
        <div className="section-title">
          <span className="eyebrow">Leadership</span>

          <h2>Meet Our Leadership Team</h2>

          <p>
            KUNG'AA Initiative is guided by a passionate and experienced team
            committed to advancing inclusion, empowering communities, and
            ensuring that every program delivers meaningful and lasting impact.
          </p>
        </div>

        <div className="leadership-grid">
          <div className="leader-card">
            <div className="leader-image">AW</div>

            <h3>Anne Wangari Maina</h3>

            <span>Chairperson</span>

            <p>
              Provides strategic leadership and overall organizational
              oversight, ensuring the initiative remains focused on its mission
              and long-term vision.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-image">VW</div>

            <h3>Valentine Masicha Wafula</h3>

            <span>Vice Chairperson</span>

            <p>
              Supports organizational leadership, governance, and the successful
              implementation of programs and strategic initiatives.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-image">LI</div>

            <h3>Leonard Otieno Isaboke</h3>

            <span>Secretary</span>

            <p>
              Oversees organizational communication, records management,
              compliance, and administrative coordination.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-image">MI</div>

            <h3>Mercy Ithanya</h3>

            <span>Assistant Secretary</span>

            <p>
              Supports documentation, organizational planning, and coordination
              of meetings and administrative activities.
            </p>
          </div>

          <div className="leader-card">
            <div className="leader-image">DC</div>

            <h3>Dennis Kipngeno Chirchir</h3>

            <span>Treasurer</span>

            <p>
              Oversees financial planning, accountability, budgeting, and
              responsible stewardship of the organization's resources.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Be Part Of The Possibility</h2>

          <p>
            Whether you volunteer your time, share your skills, partner with us
            or support our programs, you become part of a movement that is
            transforming lives and turning disability into possibility.
          </p>

          <Link to="/contact" className="btn">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;