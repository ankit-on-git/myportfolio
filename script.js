const TECH = [
  ["C", "c", "5C6BC0"], ["C++", "cplusplus", "00599C"], ["JavaScript", "javascript", "F7DF1E"],
  ["HTML5", "html5", "E34F26"], ["Python", "python", "3776AB"], ["Vercel", "vercel", "FFFFFF"],
  ["MySQL", "mysql", "4479A1"], ["MongoDB", "mongodb", "47A248"], ["Postgres", "postgresql", "4169E1"],
  ["Canva", "canva", "00C4CC"], ["GitHub", "github", "EEEEEE"], ["GitLab", "gitlab", "FC6D26"],
  ["Selenium", "selenium", "43B02A"], ["Arduino", "arduino", "00979D"],
];

const PROJECTS = [
  {
    title: "Password Generator",
    description: "A web app that generates secure random passwords with a clean, card-style UI, plus a downloadable access slip.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    image: "images/password-generator.png",
    live: "https://pass-generator1.vercel.app/",
    github: "https://github.com/ankit-on-git/password-generator.git",
  },
  {
    title: "Modern Calculator",
    description: "A modern scientific + standard calculator with math functions, currency, temperature, area, EMI/loan, and PPP conversion tools built into a sidebar-based UI.",
    tags: ["JavaScript", "UI", "Tools"],
    image: "images/modern-calculator.png",
    live: "https://modern-calculex.vercel.app/",
    github: "https://github.com/ankit-on-git/Modern-Calculator.git",
  },
];

// Add a new certificate by appending an object here.
const CERTIFICATES = [
  { title: "Infosys Springboard Certificate", issuer: "Infosys", image: "images/cert-infosys.png", url: "https://drive.google.com/file/d/1-ou-RyaQ1I8MIxrEx1PrqD-AgpUQI2R-/view" },
  { title: "Python", issuer: "HackerRank", image: "images/cert-hackerrank.png", url: "https://www.hackerrank.com/certificates/iframe/0a0cf4c877e8" },
  { title: "Digital Transformation with Google Cloud", issuer: "Google Cloud · SimpliLearn", image: "images/cert-googlecloud.png", url: "https://www.simplilearn.com/digital-transformation-with-google-cloud-course-skillup" },
  { title: "Hackathon", issuer: "Participation Certificate", image: "images/cert-hackathon.png", url: "https://drive.google.com/file/d/1NphrGo85oVo8HURp_nq7Ncw1nKhhHMrC/view" },
];

document.getElementById("pills").innerHTML = TECH.map(
  ([name, slug, color]) =>
    `<span class="pill"><img src="https://cdn.simpleicons.org/${slug}/${color}" alt="${name} logo" loading="lazy" />${name}</span>`
).join("");

document.getElementById("projectCards").innerHTML = PROJECTS.map(
  (p) => `<article class="card">
    <img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />
    <div class="card-body">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="btn-row">
        <a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a class="btn btn-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </article>`
).join("");

document.getElementById("certCards").innerHTML = CERTIFICATES.map(
  (c) => `<a class="cert" href="${c.url}" target="_blank" rel="noopener noreferrer">
    <div class="cert-img"><img src="${c.image}" alt="${c.issuer} certificate" loading="lazy" /></div>
    <h3>${c.title}</h3>
    <p class="issuer">${c.issuer}</p>
    <span class="view">View ↗</span>
  </a>`
).join("");

document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.textContent = navLinks.classList.contains("open") ? "Close" : "Menu";
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "Menu";
  })
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.querySelectorAll("a").forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
["about", "stack", "projects", "certificates", "contact"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});
