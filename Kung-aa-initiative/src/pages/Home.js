import { Link } from "react-router-dom";
import {
  FiShield,
  FiCheckSquare,
  FiUsers,
  FiSmile,
  FiHeart,
  FiLink,
  FiEye,
  FiUserCheck,
  FiZap,
} from "react-icons/fi";

const values = [
  {
    icon: <FiShield />,
    title: "Integrity",
    description:
      "We do what is right for the people we serve, staying honest and consistent in every program we run.",
  },
  {
    icon: <FiCheckSquare />,
    title: "Accountability",
    description:
      "We take ownership of our work and use every resource entrusted to us responsibly and wisely.",
  },
  {
    icon: <FiUsers />,
    title: "Inclusivity",
    description:
      "We build spaces where every person, regardless of ability, is welcomed, heard and valued.",
  },
  {
    icon: <FiSmile />,
    title: "Respect",
    description:
      "We honor each individual's dignity, choices and voice in everything we do together.",
  },
  {
    icon: <FiHeart />,
    title: "Compassion",
    description:
      "We lead with empathy, meeting people where they are with patience and understanding.",
  },
  {
    icon: <FiLink />,
    title: "Teamwork",
    description:
      "We know lasting change happens together, alongside families, communities and partners.",
  },
  {
    icon: <FiEye />,
    title: "Transparency",
    description:
      "We stay open about our work, our impact and how the support we receive is used.",
  },
  {
    icon: <FiUserCheck />,
    title: "Equality",
    description:
      "We champion equal opportunity and access for every person we work with, without exception.",
  },
  {
    icon: <FiZap />,
    title: "Empowerment",
    description:
      "We equip individuals with the tools, skills and confidence to shape their own futures.",
  },
];

function Home() {
  return (
    <>

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <span className="hero-eyebrow">
              Community-Based Organization · Nairobi, Kenya
            </span>

            <h1>
              Turning Disability Into Possibility
            </h1>

            <p>
              KUNG'AA Initiative walks alongside vulnerable
              and differently abled individuals in Kasarani
              and beyond, opening doors to health, education,
              mentorship and a fair chance to thrive.
            </p>

            <div className="hero-buttons">

              <Link
                to="/about"
                className="btn"
              >
                Learn More
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-title">

          <span className="eyebrow">Our Story</span>

          <h2>Who We Are</h2>

          <p>
            KUNG'AA Initiative is a grassroots organization
            working shoulder to shoulder with families,
            caregivers and local partners in Nairobi County.
            We believe disability should never stand in the
            way of dignity, opportunity or belonging, so our
            programs meet people exactly where they are and
            help them move forward on their own terms.
          </p>

        </div>

      </section>

      <section className="mission-vision">

        <div className="card mission-card">

          <h2>Our Vision</h2>

          <p>
            A society where every vulnerable and differently
            abled person is seen, included and given a real
            chance to reach their full potential, not despite
            their circumstances, but alongside them.
          </p>

        </div>

        <div className="card mission-card">

          <h2>Our Mission</h2>

          <p>
            We empower vulnerable persons and differently
            abled individuals through advocacy, education,
            health and nutrition support, mentorship, community
            development and social empowerment, delivered with
            care and consistency.
          </p>

        </div>

      </section>

      <section className="statistics">

        <div className="stat-card">

          <h2>9+</h2>

          <p>
            Programs & Initiatives
          </p>

        </div>

        <div className="stat-card">

          <h2>100%</h2>

          <p>
            Community Focused
          </p>

        </div>

        <div className="stat-card">

          <h2>24/7</h2>

          <p>
            Commitment To Service
          </p>

        </div>

      </section>

      <section className="section bg-cream">

        <div className="section-title">

          <span className="eyebrow">What We Stand For</span>

          <h2>Our Core Values</h2>

          <p>
            These are the principles that shape how we
            show up, every program, every partnership
            and every conversation.
          </p>

        </div>

        <div className="values-grid">

          {values.map((value) => (
            <div className="card value-card" key={value.title}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}

        </div>

      </section>

      <section className="section">

        <div className="section-title">

          <span className="eyebrow">Gallery</span>

          <h2>Our Impact In Photos</h2>

          <p>
            A glimpse into the programs, people and
            everyday moments that make up life at
            KUNG'AA Initiative.
          </p>

        </div>

      </section>

      <section className="gallery-grid">

        <div className="gallery-item tall">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80"
            alt="Community members meeting together outdoors"
          />
          <span className="gallery-caption">Community Outreach</span>
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80"
            alt="Volunteers working together on a group activity"
          />
          <span className="gallery-caption">Mentorship</span>
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=700&q=80"
            alt="Children participating in a learning session"
          />
          <span className="gallery-caption">Educational Support</span>
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1576765607924-8ac54cff2ac6?auto=format&fit=crop&w=700&q=80"
            alt="Health worker attending to a community member"
          />
          <span className="gallery-caption">Health & Nutrition</span>
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=700&q=80"
            alt="Group of people smiling together at a community event"
          />
          <span className="gallery-caption">Community Empowerment</span>
        </div>

      </section>

      <section className="cta-section">

        <div className="cta-box">

          <h2>
            Join Us In Making A Difference
          </h2>

          <p>
            Whether you volunteer your time, share your
            skills or lend your support, you help us turn
            possibility into everyday reality for someone
            who needs it.
          </p>

          <Link
            to="/contact"
            className="btn"
          >
            Get Involved
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;
