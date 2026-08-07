import { Link } from "react-router-dom";
import {
  FiHeart,
  FiActivity,
  FiUsers,
  FiMessageCircle,
  FiCompass,
  FiBookOpen,
  FiTrendingUp,
  FiTool,
  FiLifeBuoy,
} from "react-icons/fi";

const programs = [
  {
    icon: <FiHeart />,
    tag: "Advocacy",
    title: "Disability Advocacy",
    description:
      "Promoting awareness, inclusion, rights and equal opportunities for persons living with disabilities.",
  },
  {
    icon: <FiActivity />,
    tag: "Health",
    title: "Health & Nutrition Education",
    description:
      "Improving health outcomes through nutrition awareness and community health education programs.",
  },
  {
    icon: <FiCompass />,
    tag: "Mentorship",
    title: "Mentorship Programs",
    description:
      "Providing guidance, encouragement and life skills development for vulnerable individuals.",
  },
  {
    icon: <FiMessageCircle />,
    tag: "Wellbeing",
    title: "Counselling Support",
    description:
      "Helping individuals overcome emotional and social challenges in a safe, supportive space.",
  },
  {
    icon: <FiUsers />,
    tag: "Community",
    title: "Community Outreach",
    description:
      "Connecting with communities to address challenges and create opportunities for growth.",
  },
  {
    icon: <FiBookOpen />,
    tag: "Education",
    title: "Educational Support",
    description:
      "Encouraging access to education and supporting learning initiatives for young people.",
  },
  {
    icon: <FiTrendingUp />,
    tag: "Livelihoods",
    title: "Economic Empowerment",
    description:
      "Supporting income-generating activities, skills training and self-reliance.",
  },
  {
    icon: <FiTool />,
    tag: "Training",
    title: "Capacity Building",
    description:
      "Equipping communities and caregivers with knowledge and practical skills.",
  },
  {
    icon: <FiLifeBuoy />,
    tag: "Relief",
    title: "Humanitarian Support",
    description:
      "Responding to emergencies and supporting vulnerable households in times of need.",
  },
];

function Programs() {
  return (
    <div className="page-container">

      <section className="page-header">
        <h1>Our Programs & Initiatives</h1>

        <p>
          Nine focus areas working together to build a
          more inclusive, empowered and dignified life
          for every person we serve.
        </p>
      </section>

      <section className="programs-intro">
        <div className="section-title">
          <h2>What We Run</h2>

          <p>
            Every initiative below is designed and delivered
            with the people we serve, not just for them —
            from advocacy and health to mentorship,
            education and economic empowerment.
          </p>
        </div>
      </section>

      <section className="programs-grid">
        {programs.map((program) => (
          <div className="program-card" key={program.title}>
            <div className="program-icon">{program.icon}</div>

            <span className="program-tag">{program.tag}</span>

            <h3>{program.title}</h3>

            <p>{program.description}</p>
          </div>
        ))}
      </section>

      <section className="partner-band">
        <div>
          <h2>Want to support one of these programs?</h2>
          <p>
            Whether through volunteering, partnership or
            a donation, your support helps us reach more
            people who need it most.
          </p>
        </div>

        <Link to="/contact" className="btn">
          Get Involved
        </Link>
      </section>

    </div>
  );
}

export default Programs;
