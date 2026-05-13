/* =========================
   NAVBAR CHANGE ON SCROLL
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =========================
   REVEAL ON SCROLL
========================= */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((item) => revealObserver.observe(item));

/* =========================
   SKILL BAR ANIMATION
========================= */
const fills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fills.forEach((bar) => skillObserver.observe(bar));

/* =========================
   PORTFOLIO FILTER
========================= */
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";

        setTimeout(() => {
          card.style.display = "none";
        }, 250);
      }
    });
  });
});

/* =========================
   LIGHTBOX POPUP
========================= */
const body = document.body;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    const category = card.querySelector("p").textContent;
    const imgSrc = card.querySelector("img").src;

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="close-btn">&times;</span>
        <img src="${imgSrc}" alt="">
        <h3>${title}</h3>
        <p>${category}</p>
      </div>
    `;

    body.appendChild(lightbox);
    body.style.overflow = "hidden";

    // close lightbox
    lightbox.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("lightbox") ||
        e.target.classList.contains("close-btn")
      ) {
        lightbox.remove();
        body.style.overflow = "auto";
      }
    });
  });
});

/* =========================
   CONTACT FORM VALIDATION
========================= */
const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach((field) => {
    if (field.value.trim() === "") {
      field.style.borderColor = "#EF4444";
      valid = false;
    } else {
      field.style.borderColor = "#14B8A6";
    }
  });

  if (valid) {
    alert("Pesan berhasil dikirim!");
    form.reset();

    inputs.forEach((field) => {
      field.style.borderColor = "#334155";
    });
  }
});

/* =========================
   SCROLL TO TOP BUTTON
========================= */
const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
