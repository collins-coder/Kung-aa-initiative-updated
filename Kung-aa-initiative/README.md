# KUNG'AA Initiative — Website

> **Turning Disability Into Possibility.**

The official website for **KUNG'AA Initiative**, a community-based organization in
Kasarani, Nairobi County, Kenya, promoting inclusion, dignity, empowerment and
equal opportunities for persons living with disabilities and other vulnerable
members of society.

Live sections include Home, About, **Programs & Initiatives**, Leadership and
Contact, built as a fast, mobile-friendly single-page application.

---

## ✨ What's in this build

This version of the site was upgraded for a more professional, donor-ready
presentation:

- **Consistent "Programs & Initiatives" naming** — replaces the generic
  "Services" label used previously, with each program given its own icon and
  category tag.
- **Applied brand typography** — Poppins for headings and Inter for body
  copy are now actually wired into the stylesheet (previously linked but
  unused).
- **Photography added where it matters** — an "Impact In Photos" gallery on
  the Home page and a banner image on the About page, using free-to-use,
  royalty-free imagery relevant to community, health and education work.
- **Refined visual details** — an amber accent color, icon badges on program
  cards, a partner/get-involved call-to-action band, and small layout
  polish across sections.
- **Cleaner codebase** — consistent class names (`program-card`,
  `programs-grid`, etc.) so the "Programs" naming is used end-to-end, not
  just in the navigation.

The `/services` route still works and redirects to the Programs page, so any
existing bookmarks or shared links are not broken.

---

## 🖼️ Photography note

Images used in the gallery and About banner are sourced from
[Unsplash](https://unsplash.com) under its free-to-use license, as
representative/stock photography. **Swap these for real photos of your team,
beneficiaries and events as soon as you have them** — real photography will
always be more powerful than stock imagery for a cause-driven site. Look for
the `<img src="https://images.unsplash.com/...">` tags in `src/pages/Home.js`
and `src/pages/About.js` to replace them.

---

## 🛠️ Tech stack

- [React 19](https://react.dev/) (via [Create React App](https://github.com/facebook/create-react-app))
- [React Router v7](https://reactrouter.com/) for client-side routing
- [react-icons](https://react-icons.github.io/react-icons/) for iconography
- [@emailjs/browser](https://www.emailjs.com/) for the contact form (wiring optional)
- Plain CSS with CSS custom properties (no framework) for full design control

---

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm start
# App runs at http://localhost:3000

# 3. Build for production
npm run build
# Outputs an optimized build to /build
```

### Deploying

The `/build` folder produced by `npm run build` is a static site and can be
deployed to any static host — Netlify, Vercel, GitHub Pages, or a standard
web server.

---

## 📁 Project structure

```
src/
├── components/
│   ├── Navbar.js        # Sticky nav with mobile menu
│   └── Footer.js         # Footer with contact + quick links
├── pages/
│   ├── Home.js            # Hero, mission/vision, stats, values, gallery, CTA
│   ├── About.js           # Background, banner image, vision, mission, values
│   ├── Programs.js       # The 9 programs & initiatives, icons, partner CTA
│   ├── Leadership.js      # Leadership team cards
│   └── Contact.js         # Contact details + message form
├── App.js                 # Route definitions
├── App.css                # All component & page styling, design tokens
└── index.css               # Global resets
```

---

## 📬 Contact

- **Location:** Kasarani, Nairobi County, Kenya
- **Phone:** +254 715 364 734
- **Email:** kungaainitiative@gmail.com

---

© KUNG'AA Initiative. All Rights Reserved.
