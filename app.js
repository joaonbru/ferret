(function () {
  const main = document.getElementById("categories");
  const waBase = "https://wa.me/5554992623172?text=";

  function waLink(product) {
    const msg = `Olá! Tenho interesse na faca ${product.name}${product.variant ? " - " + product.variant : ""} (${product.ref}). Poderiam me passar mais informações?`;
    return waBase + encodeURIComponent(msg);
  }

  function ornamentSVG() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M6 6l3 3M18 18l-3-3M18 6l-3 3M6 18l3-3" stroke="#c8a05f" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="2.4" stroke="#c8a05f" stroke-width="1.4"/>
    </svg>`;
  }

  function renderCategory(cat) {
    const section = document.createElement("section");
    section.className = "category";
    section.id = cat.id;

    const galleryClass = cat.images.length > 1 ? "gallery" : "gallery single";
    const imagesHTML = cat.images
      .map(
        (img) => `
      <figure data-full="images/pages/${img}">
        <img src="images/pages/${img}" alt="Página do catálogo Ferret Cutelaria — ${cat.title}" loading="lazy">
        <span class="zoom-hint">ampliar</span>
      </figure>`
      )
      .join("");

    const productsHTML = cat.products
      .map(
        (p) => `
      <div class="product-card">
        <div class="pc-left">
          <div class="pc-name">${p.name}</div>
          <div class="pc-variant">${p.variant}</div>
          <div class="pc-ref">${p.ref}</div>
        </div>
        <div class="pc-right">
          <div class="pc-price">${p.price}</div>
          <a class="pc-wa" href="${waLink(p)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.4a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2 4.6 4.6 0 0 0 1 2.5 10.6 10.6 0 0 0 4 3.6c.6.2 1 .4 1.4.5a3.4 3.4 0 0 0 1.5.1 2.4 2.4 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c-.1-.1-.2-.2-.4-.3Z"/></svg>
            Consultar disponibilidade
          </a>
        </div>
      </div>`
      )
      .join("");

    section.innerHTML = `
      <div class="cat-head">
        <div class="cat-sub">${cat.sub}</div>
        <h2>${cat.title}</h2>
        ${ornamentSVGWrap()}
        <p>${cat.intro}</p>
      </div>
      <div class="cat-body">
        <div class="${galleryClass}">${imagesHTML}</div>
        <div class="product-list">${productsHTML}</div>
      </div>
    `;
    return section;
  }

  function ornamentSVGWrap() {
    return `<div class="ornament">${ornamentSVG()}</div>`;
  }

  CATALOG.forEach((cat) => main.appendChild(renderCategory(cat)));

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");

  document.addEventListener("click", (e) => {
    const fig = e.target.closest("[data-full]");
    if (fig) {
      lightboxImg.src = fig.getAttribute("data-full");
      lightboxImg.alt = fig.querySelector("img")?.alt || "";
      lightbox.classList.add("open");
    }
  });
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // Active nav highlight on scroll
  const navLinks = Array.from(document.querySelectorAll("#catNav a"));
  const sections = CATALOG.map((c) => document.getElementById(c.id));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((a) =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + id)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((s) => s && observer.observe(s));

  // Keep active nav link scrolled into view horizontally
  const catNav = document.getElementById("catNav");
  const navObserver = new MutationObserver(() => {
    const active = catNav.querySelector("a.active");
    if (active) {
      const { left, right } = active.getBoundingClientRect();
      const { left: cl, right: cr } = catNav.getBoundingClientRect();
      if (left < cl || right > cr) {
        active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  });
  navObserver.observe(catNav, { attributes: true, subtree: true, attributeFilter: ["class"] });
})();
