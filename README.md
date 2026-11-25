# Alex Mumina Ndolo — Portfolio Website

A personal portfolio website for frontend developer and Computer Science student Alex Mumina Ndolo. Built using **React** with **Vite** and modern CSS tokens (Ocean Palette). Fast, fully responsive (phone first), accessible, and lightweight with zero heavy UI libraries.

---

## 🚀 Tech Stack

- **Framework:** React 18
- **Bundler & Dev Server:** Vite 6
- **Styling:** Pure CSS with custom CSS variables (Ocean palette: Navy `#0b1320`, Teal `#00adb5`, Sky Blue `#38bdf8`)
- **Typography:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)
- **Deployment:** Vercel ready

---

## 📂 Folder Structure

```text
portfolio/
├── public/
│   ├── favicon.svg           # Custom SVG favicon
│   ├── og-image.png          # Open Graph social preview card
│   └── resume.html           # Printable resume page
├── src/
│   ├── components/           # Modular section components
│   │   ├── Navbar.jsx        # Sticky top header, theme toggle, mobile drawer
│   │   ├── Hero.jsx          # Intro section, CTAs & accent badges
│   │   ├── About.jsx         # Bio, portrait avatar, and quick stats
│   │   ├── Skills.jsx        # Categorized skills (no progress bars)
│   │   ├── Projects.jsx      # Filterable dynamic project cards grid
│   │   ├── ProjectCard.jsx   # Individual accessible project card
│   │   ├── Experience.jsx    # Education & training timeline
│   │   ├── Contact.jsx       # Contact details, copy email & validated form
│   │   └── Footer.jsx        # Dynamic year copyright & social links
│   ├── data/
│   │   ├── profile.js        # Personal details and contact metadata
│   │   ├── projects.js       # Central data file for all projects
│   │   ├── skills.js         # Grouped skill definitions
│   │   └── timeline.js       # Academic and training timeline
│   ├── App.jsx               # Root component with theme state & scroll spy
│   ├── index.css             # Ocean theme styling & responsive layout
│   └── main.jsx              # React DOM mounting
├── index.html                # HTML template with SEO & Open Graph meta tags
├── package.json              # Project dependencies & scripts
└── vite.config.js            # Vite configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or pnpm

### Installation & Run

1. Navigate to the project root:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ➕ How to Add a New Project

All project cards load directly from a single centralized data file: [`src/data/projects.js`](src/data/projects.js).

To add a new project, simply append an entry to the `projectsData` array:

```javascript
{
  id: 'my-new-project',
  title: 'My Project Name',
  badge: 'New', // optional badge (e.g. 'PWA', 'In Progress', 'Workflow')
  description: 'A 1-line description of what this project does and problems it solves.',
  tags: ['React', 'TypeScript', 'Tailwind'],
  liveUrl: 'https://myproject.vercel.app', // or null if in development
  githubUrl: 'https://github.com/alex-ships/my-project',
  featured: true,
  category: 'Web App'
}
```

The new card will immediately render in the responsive grid with accessible action links and badges.

---

## ♿ Accessibility & Performance

- **Semantic HTML5:** Native landmark tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Skip Link:** Accessible keyboard navigation jump to `#main-content`.
- **Contrast & Motion:** WCAG AA compliant contrast ratios and `@media (prefers-reduced-motion: reduce)` support.
- **Theme Preference:** Dark mode by default with persistence to `localStorage`.
