// Icons helper object providing inline SVG strings
const Icons = {
  powerbi: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>`,
  sql: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  python: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 6 4.5 6 4.5V8h6v2H4.5S2 9.5 2 15s2.5 5.5 2.5 5.5H8V17a3 3 0 0 1 3-3h6a3 3 0 0 0 3-3V4.5S20 2 14.5 2H12z"/><path d="M12 22c5.52 0 6-2.5 6-2.5V16h-6v-2h7.5s2.5.5 2.5-5-2.5-5.5-2.5-5.5H16V7a3 3 0 0 1-3 3H7a3 3 0 0 0-3 3v6.5S4 22 9.5 22H12z"/><circle cx="9" cy="5.5" r="0.75" fill="currentColor"/><circle cx="15" cy="18.5" r="0.75" fill="currentColor"/></svg>`,
  excel: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="17"/><line x1="16" y1="13" x2="8" y2="17"/></svg>`,
  code: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  users: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  award: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 4H6v7a6 6 0 0 0 12 0V4z"/></svg>`,
  scroll: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  download: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  funnel: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  building: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>`,
  location: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  pie: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  gallery: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
};


// Small helpers
const esc = (v) =>
  String(v == null ? "" : v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const hasLink = (url) => !!url && url !== "#";

const Components = {
  // Navigation
  renderNavigation(data) {
    const navItems = [
      { label: "HOME", href: "#home" },
      { label: "ABOUT", href: "#about" },
      { label: "EDUCATION", href: "#education" },
      { label: "EXPERIENCE", href: "#experience" },
      { label: "PROJECTS", href: "#projects" },
      { label: "CERTIFICATIONS", href: "#certifications" },
      { label: "EXTRA-CURRICULAR", href: "#extracurricular" },
      { label: "CONTACT", href: "#contact" }
    ];

    const linksHtml = navItems
      .map(
        item => `
      <li class="nav-item">
        <a href="${item.href}" class="nav-link">${item.label}</a>
      </li>`
      )
      .join("");

    return `
      <header class="site-header" id="siteHeader">
        <div class="scroll-progress-container" aria-hidden="true">
          <div class="scroll-progress-bar" id="scrollProgressBar"></div>
        </div>
        <div class="nav-container">
          <a href="#home" class="brand-logo" aria-label="${esc(data.personal.name)} Portfolio">
            <span class="monogram">${esc(data.personal.monogram)}</span>
            <div class="brand-text">
              <span class="brand-name">${esc(data.personal.name)}</span>
              <span class="blinking-tag">${esc(data.personal.badgeLabel || "PORTFOLIO")}</span>
            </div>
          </a>

          <nav class="desktop-nav" aria-label="Main Navigation">
            <ul class="nav-list">
              ${linksHtml}
            </ul>
          </nav>

          <div class="nav-actions">
            <a href="#contact" class="btn btn-outline btn-sm nav-cta">Let's Talk</a>
            <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle navigation menu" aria-expanded="false">
              <span class="hamburger-bar"></span>
              <span class="hamburger-bar"></span>
              <span class="hamburger-bar"></span>
            </button>
          </div>
        </div>

        <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer-header">
            <div class="brand-text">
              <span class="monogram">${esc(data.personal.monogram)}</span>
              <span class="brand-name">${esc(data.personal.name)}</span>
            </div>
            <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close menu">
              ${Icons.close}
            </button>
          </div>
          <nav class="mobile-nav" aria-label="Mobile Navigation">
            <ul class="mobile-nav-list">
              ${linksHtml}
            </ul>
          </nav>
          <div class="mobile-drawer-footer">
            <a href="#contact" class="btn btn-primary btn-block mobile-cta">Connect with Me</a>
          </div>
        </div>
        <div class="mobile-backdrop" id="mobileBackdrop"></div>
      </header>
    `;
  },

  // Hero Section (with profile photo)
  renderHero(data) {
    const p = data.personal;
    const statsHtml = p.heroStats
      .map(
        stat => `
      <div class="hero-stat-card">
        <div class="stat-number-wrapper">
          <span class="stat-number count-up" data-target="${stat.value}">${stat.value}</span>
          <span class="stat-suffix">${esc(stat.suffix)}</span>
        </div>
        <div class="stat-label">${esc(stat.label)}</div>
      </div>`
      )
      .join("");

    const badgePositions = ["badge-powerbi", "badge-sql", "badge-python", "badge-excel"];
    const floatingHtml = (p.floatingSkills || [])
      .slice(0, 4)
      .map(
        (s, i) => `
      <div class="floating-badge ${badgePositions[i]}" data-float="${i + 1}">
        <span class="badge-icon">${Icons[s.type] || Icons.chart}</span>
        <span class="badge-title">${esc(s.name).toUpperCase()}</span>
      </div>`
      )
      .join("");

    // If the photo fails to load, fall back to the monogram so the card never looks broken.
    const photoHtml = `
      <img src="${esc(p.profilePhoto)}" alt="${esc(p.name)} - Profile Photo" class="hero-profile-image"
           onerror="this.onerror=null; this.parentElement.classList.add('photo-missing'); this.remove();" />
      <span class="profile-fallback-initials" aria-hidden="true">${esc(p.monogram)}</span>`;

    return `
      <section class="hero-section section-padding" id="home">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-eyebrow">
              <span class="terminal-dot"></span>
              <span class="eyebrow-text">HELLO, I'M</span>
            </div>
            <h1 class="hero-title hero-title-bold">${esc(p.name)}</h1>
            <div class="hero-headline">
              <span class="headline-text">${esc(p.role)}</span>
            </div>
            <p class="hero-description">${esc(data.about.subtitle)}</p>

            <div class="hero-cta-group">
              <a href="#projects" class="btn btn-primary">
                <span>View Projects</span>
                ${Icons.arrowRight}
              </a>
              <a href="#experience" class="btn btn-outline">
                <span>My Experience</span>
              </a>
            </div>

            <div class="hero-stats-row">
              ${statsHtml}
            </div>
          </div>

          <div class="hero-visual">
            <div class="profile-card-wrapper">
              <div class="profile-executive-card">
                <div class="card-inner-glow"></div>
                <div class="profile-avatar profile-avatar-photo">
                  ${photoHtml}
                </div>
                <div class="profile-meta">
                  <h3 class="profile-name">${esc(p.name)}</h3>
                  <div class="profile-badge">MBA BUSINESS ANALYTICS</div>
                  <div class="profile-subtag">OPERATIONS &amp; SUPPLY CHAIN</div>
                </div>
                <div class="profile-divider"></div>
                <div class="profile-quick-details">
                  <div class="detail-row">
                    <span class="detail-label">CORE FOCUS:</span>
                    <span class="detail-val">Ops • Supply Chain • Analytics</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">STRENGTH:</span>
                    <span class="detail-val">Warehouse &amp; Logistics</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">STATUS:</span>
                    <span class="detail-val status-active">Open for Opportunities</span>
                  </div>
                </div>
              </div>
              ${floatingHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Marquee
  renderMarquee(data) {
    const items = data.personal.marqueeItems || [];
    const marqueeContent = items
      .map(item => `<span class="marquee-item"><span class="marquee-text">${esc(item)}</span><span class="marquee-bullet">•</span></span>`)
      .join(" ");

    return `
      <section class="marquee-section" id="marquee-section" aria-label="Skills & Expertise Marquee">
        <div class="marquee-track-wrapper">
          <div class="marquee-track" aria-hidden="true">
            <div class="marquee-group">${marqueeContent}</div>
            <div class="marquee-group">${marqueeContent}</div>
            <div class="marquee-group">${marqueeContent}</div>
            <div class="marquee-group">${marqueeContent}</div>
          </div>
        </div>
      </section>
    `;
  },

  // About Section
  renderAbout(data) {
    const categoriesHtml = data.skills.categories
      .map(
        cat => `
      <div class="skill-category-card">
        <div class="category-header">
          <span class="category-icon">${Icons[cat.icon] || Icons.code}</span>
          <h4 class="category-title">${esc(cat.title)}</h4>
        </div>
        <div class="skill-chips-container">
          ${cat.items.map(item => `<span class="skill-chip">${esc(item)}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");

    const paragraphs = data.about.summary
      .split(/\n\s*\n/)
      .map(t => `<p class="narrative-body">${esc(t.trim())}</p>`)
      .join("");

    return `
      <section class="about-section section-padding" id="about">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${esc(data.about.tag)}</span>
            <h2 class="section-title">${esc(data.about.heading)}</h2>
            <p class="section-subtitle">${esc(data.about.subtitle)}</p>
          </div>

          <div class="about-grid">
            <div class="about-narrative-card">
              <h3 class="narrative-heading">Operations Mindset Meets Data-Driven Decisions</h3>
              ${paragraphs}

              <div class="about-highlights-list">
                ${data.about.highlights
                  .map(
                    h => `
                  <div class="highlight-item">
                    <span class="highlight-bullet">${Icons.check}</span>
                    <span class="highlight-text">${esc(h)}</span>
                  </div>`
                  )
                  .join("")}
              </div>

              <div class="about-footer-cta">
                <a href="#contact" class="btn btn-outline btn-sm">
                  <span>Get in Touch</span>
                  ${Icons.arrowRight}
                </a>
              </div>
            </div>

            <div class="about-skills-wrapper">
              ${categoriesHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Education Section
  renderEducation(data) {
    const timelineItems = data.education
      .map((edu, index) => {
        const highlights = (edu.highlights || []).length
          ? `<ul class="edu-highlights">${edu.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>`
          : "";
        return `
      <div class="timeline-item" tabindex="0" data-education-index="${index}">
        <div class="timeline-marker">
          <span class="marker-dot"></span>
          <span class="marker-line"></span>
        </div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div class="timeline-degree-row">
              <h3 class="timeline-degree">${esc(edu.degree)}</h3>
              <span class="timeline-badge">${esc(edu.duration)}</span>
            </div>
            <div class="timeline-institution">${esc(edu.institution)} &bull; <span class="timeline-loc">${esc(edu.location)}</span></div>
          </div>
          <p class="timeline-details">${esc(edu.details)}</p>
          ${highlights}
        </div>
      </div>`;
      })
      .join("");

    return `
      <section class="education-section section-padding" id="education">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">02. ACADEMIC BACKGROUND</span>
            <h2 class="section-title">Education</h2>
            <p class="section-subtitle">A strong academic base, now being built into specialised Business Analytics and Supply Chain expertise.</p>
          </div>

          <div class="education-timeline">
            ${timelineItems}
          </div>
        </div>
      </section>
    `;
  },

  // Experience Section: internships + leadership as cards
  renderExperience(data) {
    const cardHtml = (exp, idx) => `
      <article class="exp-card ${exp.type === "Leadership" ? "exp-card-leadership" : ""}">
        <div class="exp-card-top">
          <span class="exp-type-badge">${esc(exp.type)}</span>
          <span class="exp-duration">${Icons.calendar}<span>${esc(exp.duration)}</span></span>
        </div>
        <h3 class="exp-role">${esc(exp.role)}</h3>
        <div class="exp-company">${esc(exp.company)}</div>
        <div class="exp-location">${Icons.mapPin}<span>${esc(exp.location)}</span></div>
        <p class="exp-description">${esc(exp.description)}</p>
        <ul class="exp-bullets">
          ${exp.bullets
            .map(
              b => `
            <li class="exp-bullet">
              <span class="exp-bullet-icon">${Icons.check}</span>
              <span>${esc(b)}</span>
            </li>`
            )
            .join("")}
        </ul>
      </article>`;

    const internships = data.experience.filter(e => e.type === "Internship");
    const leadership = data.experience.filter(e => e.type !== "Internship");

    return `
      <section class="experience-section section-padding" id="experience">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">03. EXPERIENCE</span>
            <h2 class="section-title">Work Experience</h2>
            <p class="section-subtitle">Hands-on internships in warehouse and e-commerce operations, plus leadership roles in college societies.</p>
          </div>

          <h3 class="exp-group-title">INTERNSHIPS</h3>
          <div class="exp-grid">
            ${internships.map(cardHtml).join("")}
          </div>

          <h3 class="exp-group-title">LEADERSHIP ROLES</h3>
          <div class="exp-grid">
            ${leadership.map(cardHtml).join("")}
          </div>
        </div>
      </section>
    `;
  },

  // Internship Projects
  renderInternshipProjects(data) {
    const items = data.internshipProjects || [];
    const iconFor = ["tool", "users", "chart"];

    const cardsHtml = items
      .map(
        (p, i) => `
      <div class="intern-grid-card" data-project-id="${esc(p.id)}">
        <div class="intern-grid-card-top">
          <div class="intern-proj-number-badge">${esc(p.id)}</div>
          <div class="intern-proj-icon-container" aria-hidden="true">${Icons[iconFor[i % iconFor.length]]}</div>
        </div>
        <h3 class="intern-grid-card-title">${esc(p.title)}</h3>
        <div class="intern-grid-card-company">${esc(p.company)}</div>
        <p class="intern-grid-card-desc">${esc(p.description)}</p>
        <div class="intern-grid-card-impact">
          <h4 class="intern-impact-heading">KEY IMPACT</h4>
          <ul class="intern-impact-list">
            ${p.impact
              .map(
                item => `
              <li class="intern-proj-impact-item">
                <span class="intern-proj-impact-dot">•</span>
                <span class="intern-proj-impact-text">${esc(item)}</span>
              </li>`
              )
              .join("")}
          </ul>
        </div>
      </div>`
      )
      .join("");

    return `
      <section class="internship-projects-section section-padding" id="internship-projects">
        <div class="container">
          <div class="intern-projects-header-wrap">
            <div class="intern-projects-header-left">
              <span class="section-tag">04. WORK HIGHLIGHTS</span>
              <h2 class="intern-projects-main-heading">KEY WORK AREAS</h2>
              <p class="intern-projects-subtext">The main responsibilities I took ownership of during internships and as Operations Head of a college club.</p>
            </div>
          </div>
          <div class="intern-projects-3plus2-grid">
            <div class="intern-grid-row intern-grid-row-1">${cardsHtml}</div>
          </div>
        </div>
      </section>
    `;
  },

  // Photo gallery is optional: renders nothing unless data.photoGallery.images is filled in
  renderPhotoGallery(data) {
    const g = data.photoGallery;
    if (!g || !g.images || !g.images.length) return "";
    const images = g.images;
    const cardsHtml = images
      .map(
        (img, idx) => `
        <div class="gallery-card ${idx === 0 ? "active center-card" : idx === 1 ? "right-card" : idx === images.length - 1 ? "left-card" : "hidden-card"}" data-gallery-index="${idx}" role="group" aria-label="Photo ${idx + 1} of ${images.length}">
          <div class="gallery-card-inner">
            <img src="${esc(img.src)}" alt="${esc(img.alt || "Portfolio moment " + (idx + 1))}" class="gallery-card-img" loading="lazy" />
            ${img.alt ? `<div class="gallery-card-caption"><p>${esc(img.alt)}</p></div>` : ""}
          </div>
        </div>`
      )
      .join("");

    return `
      <section class="photo-gallery-section section-padding" id="photo-gallery" aria-label="Photo Gallery">
        <div class="container">
          <div class="section-header text-center photo-gallery-header">
            <span class="section-tag">${esc(g.tag || "PHOTO GALLERY")}</span>
            <h2 class="section-title">${esc(g.heading || "PHOTO GALLERY")}</h2>
            <p class="section-subtitle">${esc(g.subtitle || "")}</p>
          </div>
          <div class="photo-gallery-carousel-wrapper">
            <button class="gallery-nav-btn gallery-prev-btn" id="galleryPrevBtn" aria-label="Previous photo">
              <span class="nav-btn-icon">${Icons.chevronLeft}</span><span class="nav-btn-label">&larr; PREVIOUS</span>
            </button>
            <div class="gallery-stage" id="galleryStage" tabindex="0" aria-roledescription="carousel" aria-label="Photo carousel">
              <div class="gallery-cards-container" id="galleryCardsContainer">${cardsHtml}</div>
            </div>
            <button class="gallery-nav-btn gallery-next-btn" id="galleryNextBtn" aria-label="Next photo">
              <span class="nav-btn-label">NEXT &rarr;</span><span class="nav-btn-icon">${Icons.chevronRight}</span>
            </button>
          </div>
          <div class="gallery-mobile-controls">
            <button class="btn btn-outline btn-sm gallery-mobile-btn" id="galleryMobilePrev" aria-label="Previous photo">${Icons.chevronLeft} <span>PREVIOUS</span></button>
            <span class="gallery-counter-badge" id="galleryCounter">1 / ${images.length}</span>
            <button class="btn btn-outline btn-sm gallery-mobile-btn" id="galleryMobileNext" aria-label="Next photo"><span>NEXT</span> ${Icons.chevronRight}</button>
          </div>
        </div>
      </section>
    `;
  },

  // Projects carousel (one project at a time)
  renderFeaturedProjects(data) {
    const projects = data.projects;
    const total = projects.length;

    const slidesHtml = projects
      .map((proj, index) => {
        const n = String(index + 1).padStart(2, "0");
        const t = String(total).padStart(2, "0");
        return `
        <div class="carousel-slide" data-index="${index}">
          <div class="project-featured-card single-project-card">
            <div class="proj-top-bar">
              <div class="proj-category-pill">${esc(proj.category)}</div>
              <div class="proj-index-tag">PROJECT ${n} / ${t}</div>
            </div>

            <h3 class="proj-main-title">${esc(proj.title)}</h3>
            <p class="proj-intro">${esc(proj.description)}</p>

            <div class="proj-description-block">
              <ul class="proj-bullet-list">
                ${proj.highlights
                  .map(
                    b => `
                  <li class="proj-bullet-item">
                    <span class="proj-bullet-icon">${Icons.check}</span>
                    <span class="proj-bullet-text">${esc(b)}</span>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>

            <div class="proj-card-footer">
              <div class="proj-tools-group">
                <span class="tools-inline-label">Skills:</span>
                ${proj.tools.map(t => `<span class="tool-badge">${esc(t)}</span>`).join("")}
              </div>
              <div class="proj-actions-group">
                ${
                  hasLink(proj.link)
                    ? `<a href="${esc(proj.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><span>View Project</span>${Icons.arrowUpRight}</a>`
                    : `<a href="#contact" class="btn btn-outline btn-sm"><span>Discuss This Project</span></a>`
                }
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    const dotsHtml = projects
      .map(
        (_, i) => `<button class="carousel-dot ${i === 0 ? "active" : ""}" data-slide-to="${i}" aria-label="Go to project ${i + 1}"></button>`
      )
      .join("");

    return `
      <section class="featured-projects-section section-padding" id="projects">
        <div class="container">
          <div class="section-header-flex">
            <div class="section-header-left">
              <span class="section-tag">05. PROJECTS</span>
              <h2 class="section-title">Featured Projects</h2>
              <p class="section-subtitle">Practical work in warehouse operations, seller coordination and event logistics.</p>
            </div>
            <div class="carousel-controls-desktop">
              <button class="carousel-btn prev-btn" id="carouselPrev" aria-label="Previous project">${Icons.chevronLeft}</button>
              <button class="carousel-btn next-btn" id="carouselNext" aria-label="Next project">${Icons.chevronRight}</button>
            </div>
          </div>

          <div class="featured-carousel-wrapper">
            <div class="carousel-container" id="projectsCarouselContainer">
              <div class="carousel-track" id="projectsCarouselTrack">${slidesHtml}</div>
            </div>
            <div class="carousel-bottom-nav">
              <div class="carousel-dots-wrapper" id="carouselDots">${dotsHtml}</div>
              <div class="carousel-controls-mobile">
                <button class="carousel-btn prev-btn-mobile" id="carouselPrevMobile" aria-label="Previous project">${Icons.chevronLeft}</button>
                <button class="carousel-btn next-btn-mobile" id="carouselNextMobile" aria-label="Next project">${Icons.chevronRight}</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Certifications with certificate images (click to enlarge)
  renderCertifications(data) {
    const showImages = !!(data.settings && data.settings.showCertificateImages);
    const certsHtml = data.certifications
      .map(
        c => `
      <div class="cert-card">
        ${showImages ? `<button class="cert-thumb cert-image-btn" type="button"
                data-cert-title="${esc(c.name)}" data-cert-issuer="${esc(c.issuer)}" data-cert-year="${esc(c.year)}"
                data-cert-image="${esc(c.image || "")}" aria-label="View ${esc(c.name)} certificate">
          <img src="${esc(c.image || "")}" alt="${esc(c.name)} certificate" loading="lazy"
               onerror="this.onerror=null; this.parentElement.classList.add('cert-thumb-empty'); this.remove();" />
          <span class="cert-thumb-placeholder" aria-hidden="true">${Icons.award}<small>Certificate image</small></span>
          <span class="cert-thumb-zoom" aria-hidden="true">VIEW CERTIFICATE</span>
        </button>` : ""}

        <div class="cert-card-top">
          <div class="cert-badge-wrap">
            <span class="cert-icon">${Icons.award}</span>
            <span class="cert-issuer-badge">${esc(c.issuer)}</span>
          </div>
          <span class="cert-date">${esc(c.year)}</span>
        </div>

        <h3 class="cert-title">${esc(c.name)}</h3>
        ${c.credential ? `<div class="cert-footer"><span class="cert-id-tag">ID: ${esc(c.credential)}</span></div>` : ""}
      </div>`
      )
      .join("");

    return `
      <section class="certifications-section section-padding" id="certifications">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">06. CREDENTIALS</span>
            <h2 class="section-title">Certifications</h2>
            <p class="section-subtitle">Certifications from HP Foundation across warehouse management, leadership, agile and digital skills.</p>
          </div>
          <div class="certifications-grid">${certsHtml}</div>
        </div>
      </section>
    `;
  },

  // Extra-curricular
  renderActivities(data) {
    const cards = data.extracurricular
      .map(
        (a, i) => `
      <div class="achievement-card">
        <div class="ach-top-row">
          <span class="ach-number">${String(i + 1).padStart(2, "0")}</span>
          <span class="ach-icon">${Icons[i === 2 ? "trophy" : "users"]}</span>
          <div class="ach-title-block">
            <h4 class="ach-title">${esc(a.title)}</h4>
            <div class="ach-result-badge">${esc(a.role)}</div>
          </div>
        </div>
        <p class="ach-desc">${esc(a.description)}</p>
      </div>`
      )
      .join("");

    return `
      <section class="extracurricular-section section-padding" id="extracurricular">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">07. INITIATIVE &amp; IMPACT</span>
            <h2 class="section-title">Extra-Curricular</h2>
            <p class="section-subtitle">Leadership, event operations and teamwork beyond the classroom.</p>
          </div>
          <div class="achievements-grid">${cards}</div>
        </div>
      </section>
    `;
  },

  // Contact
  renderContact(data) {
    const c = data.contact;
    const cards = [
      { icon: "mail", label: "EMAIL", value: c.email, href: `mailto:${c.email}` },
      { icon: "phone", label: "PHONE", value: c.phone, href: `tel:${c.phone.replace(/[^+\d]/g, "")}` },
      { icon: "linkedin", label: "LINKEDIN", value: "ansh-jain-25a2aa290", href: c.linkedin },
      { icon: "mapPin", label: "LOCATION", value: c.location, href: "#contact" }
    ];

    const cardsHtml = cards
      .map(
        x => `
      <a href="${esc(x.href)}" ${x.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="contact-method-card" aria-label="${esc(x.label)}: ${esc(x.value)}">
        <div class="contact-icon-box">${Icons[x.icon]}</div>
        <div class="contact-method-info">
          <span class="contact-method-label">${x.label}</span>
          <span class="contact-method-value">${esc(x.value)}</span>
        </div>
        <span class="contact-link-arrow">${Icons.arrowUpRight}</span>
      </a>`
      )
      .join("");

    return `
      <section class="contact-section section-padding" id="contact">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tag">08. GET IN TOUCH</span>
            <h2 class="section-title">${esc(c.heading)}</h2>
            <p class="section-subtitle">${esc(c.subtitle)}</p>
          </div>

          <div class="contact-inquiries-wrapper">
            <h3 class="direct-inquiries-heading">DIRECT INQUIRIES</h3>
            <div class="contact-cards-grid">${cardsHtml}</div>
            <div class="resume-download-row">
              <a href="${esc(data.personal.resumeUrl)}" download="Ansh_Jain_Resume.pdf" class="btn btn-primary resume-download-btn" id="contactDownloadResumeBtn" aria-label="Download Ansh Jain Resume PDF">
                <span>DOWNLOAD RESUME</span>
                ${Icons.download}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Footer
  renderFooter(data) {
    const p = data.personal;
    const year = new Date().getFullYear();
    const githubLink = hasLink(p.github)
      ? `<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub Profile">${Icons.github}<span>GitHub</span></a>`
      : "";
    return `
      <footer class="site-footer">
        <div class="container footer-content">
          <div class="footer-top-row">
            <div class="footer-brand">
              <span class="footer-monogram">${esc(p.monogram)}</span>
              <div class="footer-name-wrap">
                <span class="footer-name">${esc(p.name)}</span>
                <span class="footer-role">${esc(p.role)}</span>
              </div>
            </div>
            <div class="footer-social-links">
              <a href="${esc(p.linkedin)}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn Profile">${Icons.linkedin}<span>LinkedIn</span></a>
              ${githubLink}
              <a href="mailto:${esc(p.email)}" class="footer-social-link" aria-label="Direct Email">${Icons.mail}<span>Email</span></a>
            </div>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-bottom-row">
            <p class="footer-copyright">&copy; ${year} ${esc(p.name)}. ALL RIGHTS RESERVED.</p>
            <button class="back-to-top-btn" id="backToTopBtn" aria-label="Back to top">
              <span>BACK TO TOP</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
          </div>
        </div>
      </footer>
    `;
  },

  // Certificate image modal + toast container
  renderModalsAndToasts(data) {
    const showImages = !!(data && data.settings && data.settings.showCertificateImages);
    const certModal = !showImages ? "" : `
      <div class="modal-backdrop modal-backdrop-pdf" id="certImageModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="certImageTitle">
        <div class="modal-dialog modal-dialog-image">
          <div class="modal-header">
            <div class="modal-title-wrap">
              <span class="modal-tag" id="certImageIssuer">CERTIFICATE</span>
              <h3 class="modal-title" id="certImageTitle">Certificate</h3>
            </div>
            <button class="modal-close-btn" data-close-modal aria-label="Close certificate">${Icons.close}</button>
          </div>
          <div class="modal-body modal-body-image">
            <img id="certImageFull" src="" alt="" class="cert-full-image" />
            <p id="certImageMissing" class="cert-image-missing" hidden>Certificate image not found. Check the file path in js/data.js.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline btn-sm" data-close-modal>Close</button>
            <a href="" download id="certImageDownload" class="btn btn-primary btn-sm">${Icons.download}<span>DOWNLOAD</span></a>
          </div>
        </div>
      </div>
    `;
    return `${certModal}
      <div class="toast-container" id="toastContainer" aria-live="polite"></div>
    `;
  }
};
