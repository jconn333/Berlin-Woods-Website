function makeHeader(currentPage) {
  const links = [
    ["index.html", "Home"],
    ["treehouses.html", "Stays"],
    ["gallery.html", "Gallery"],
    ["location.html", "Location"],
    ["attractions.html", "Attractions"],
    ["collection.html", "Our Collection"],
    ["faq.html", "FAQ"],
    ["contact.html", "Contact"]
  ];

  const nav = links.map(([href, label]) => {
    const current = currentPage === href ? ' aria-current="page"' : "";
    return `<a href="${href}"${current}>${label}</a>`;
  }).join("");

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand brand-inline" href="index.html" aria-label="Berlin Woods home">
          <span class="brand-mark">Berlin Woods</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <nav id="primary-nav" class="nav-links" aria-label="Primary">
          ${nav}
          <a class="button" href="https://book.amishcountrylodging.com" target="_blank" rel="noreferrer">Book Now</a>
        </nav>
      </div>
    </header>
  `;
}

function makeFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <div class="brand-mark">Berlin Woods</div>
          <p>Unique stays in Berlin, Ohio with direct booking through Amish Country Lodging.</p>
        </div>
        <ul class="footer-links">
          <li><a href="treehouses.html">Stays</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="location.html">Location</a></li>
          <li><a href="attractions.html">Attractions</a></li>
          <li><a href="collection.html">Our Collection</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="tel:13308932100">Call (330) 893-2100</a></li>
        </ul>
        <div class="kicker">Berlin Woods | 5331 County Road 626, Millersburg, OH 44654</div>
      </div>
    </footer>
  `;
}

function renderUnits(containerId, limit) {
  const container = document.querySelector(containerId);
  if (!container) {
    return;
  }

  const list = containerId === "#featured-units"
    ? featuredUnitNames.map((name) => units.find((unit) => unit.name === name)).filter(Boolean)
    : (typeof limit === "number" ? units.slice(0, limit) : units);
  container.innerHTML = list.map((unit) => `
    <article class="unit-card">
      <img class="unit-card__image" src="${unit.image}" alt="${unit.name} at Berlin Woods">
      <div class="unit-card__body">
        <div class="kicker">${unit.type}</div>
        <h3>${unit.name}</h3>
        <div class="unit-card__meta">
          <span>${unit.guests}</span>
          <span>${unit.beds}</span>
        </div>
        <p>${unit.highlight}</p>
        <ul class="amenity-list">
          ${unit.amenities.slice(0, 4).map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="unit-actions">
          <a class="button" href="${unit.bookingUrl}" target="_blank" rel="noreferrer">Book ${unit.name}</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFaqs(containerId) {
  const container = document.querySelector(containerId);
  if (!container) {
    return;
  }

  container.innerHTML = faqs.map((item) => `
    <article class="faq-item">
      <h3>${item.question}</h3>
      <p>${item.answer}</p>
    </article>
  `).join("");
}

function renderGallery(containerId) {
  const container = document.querySelector(containerId);
  if (!container) {
    return;
  }

  const isGalleryPage = document.body.dataset.page === "gallery.html";

  container.innerHTML = galleryItems.map((item) => `
    <article class="gallery-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="gallery-card__body">
        <h3>${item.title}</h3>
        ${isGalleryPage ? "" : `<p>${item.copy}</p>`}
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "index.html";
  const headerMount = document.querySelector("[data-header]");
  const footerMount = document.querySelector("[data-footer]");

  if (headerMount) {
    headerMount.innerHTML = makeHeader(page);

    const toggle = headerMount.querySelector(".nav-toggle");
    const navList = headerMount.querySelector("#primary-nav");
    if (toggle && navList) {
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
        navList.classList.toggle("is-open", !open);
      });
    }
  }

  if (footerMount) {
    footerMount.innerHTML = makeFooter();
  }

  renderUnits("#featured-units", 6);
  renderUnits("#all-units");
  renderFaqs("#faq-list");
  renderGallery("#gallery-list");
});
