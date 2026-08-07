import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>

      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src="/logo.png"
          alt="KUNG'AA Initiative logo"
        />
        <h2>KUNG&apos;AA INITIATIVE</h2>
      </Link>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          </li>
        ))}

        <li className="nav-cta-item">
          <Link to="/contact" className="btn nav-cta" onClick={closeMenu}>
            Get Involved
          </Link>
        </li>
      </ul>

      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

    </nav>
  );
}

export default Navbar;
