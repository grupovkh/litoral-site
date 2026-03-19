document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     SLIDER
  ========================= */
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");

  let current = 0;
  let interval;

  slides.forEach((_, i) => {
    const btn = document.createElement("button");
    if (i === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      showSlide(i);
      resetAuto();
    });

    dotsContainer.appendChild(btn);
  });

  const dots = dotsContainer.querySelectorAll("button");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function startAuto() {
    interval = setInterval(nextSlide, 7000);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  if (slides.length > 1) {
    startAuto();
  }

  /* =========================
     LOCALIZATION
  ========================= */
  const translations = {
    en: {
      "nav.projects": "Projects",
      "nav.coastal": "Coastal Development",
      "nav.services": "Services",
      "nav.contact": "Contact",

      "hero.title": "Coastal Design, Built Right",
      "hero.text":
        "We design and build high-value beachfront properties in El Salvador.<br>From concept to construction — full project management.",
      "hero.ctaProjects": "Explore Our Projects",
      "hero.ctaContact": "Schedule a Free Consultation",

      "projects.title": "Featured Projects",
      "projects.card1.type": "Completed Project",
      "projects.card1.title": "Beach Residence Remodel",
      "projects.card1.meta": "La Libertad Coast — 2024",
      "projects.card2.type": "Design Proposal",
      "projects.card2.title": "Pool & Outdoor Living Area",
      "projects.card2.meta": "Surf City Area — 2024",
      "projects.card3.type": "Design Proposal",
      "projects.card3.title": "Coastal Villa Concept",
      "projects.card3.meta": "El Zonte — Proposal",
      "projects.cta": "Explore Our Projects",

      "coastal.title": "Why Invest in El Salvador's Coast?",
      "coastal.text":
        "El Salvador’s Pacific coast is experiencing rapid development and international attention. We help investors navigate the entire process — from concept and design to construction and delivery. Whether you are building a home or a rental property with clear ROI, we help you take advantage of Surf City’s momentum.",
      "coastal.point1.title": "Surf City Momentum",
      "coastal.point1.text":
        "Build and position your project in one of the fastest-growing coastal markets in Central America.",
      "coastal.point2.title": "Premium Tourism & Living",
      "coastal.point2.text":
        "Design and build properties optimized for high-end rentals, second homes, boutique hospitality or long-term value.",
      "coastal.point3.title": "Turnkey Local Guidance",
      "coastal.point3.text":
        "We handle everything, from local conditions and permits, to execution and project delivery. We simplify development for local and remote international clients.",
      "coastal.cta": "Explore Investment Opportunities",

      "services.title": "Design & Construction Services",
      "services.card1.title": "Architectural Design",
      "services.card1.text":
        "Architecture designed for coastal conditions, lifestyle, climate, and long-term property value.",
      "services.card2.title": "End-to-end Design and Construction",
      "services.card2.text":
        "Integrated delivery from concept and ideas to successful execution with coordination, project management, clear finances and quality control.",
      "services.card3.title": "Project Management",
      "services.card3.text":
        "End-to-end project management ensuring timelines, budgets, and execution are controlled from start to finish.",
      "services.card4.title": "Turnkey Solutions",
      "services.card4.text":
        "End-to-end guidance for local and international clients who need reliable execution with a focus on design, quality and transparency.",
      "services.cta": "Schedule a Free Consultation",

      "footer.copy": "© Litoral — El Salvador"
    },

    es: {
      "nav.projects": "Proyectos",
      "nav.coastal": "Desarrollo Costero",
      "nav.services": "Servicios",
      "nav.contact": "Contacto",

      "hero.title": "Diseño Costero, Bien Construido",
      "hero.text":
        "Diseñamos y construimos propiedades frente al mar de alto valor en El Salvador.<br>Desde el concepto hasta la construcción — project management completo.",
      "hero.ctaProjects": "Explora Nuestros Proyectos",
      "hero.ctaContact": "Agenda una Consulta Gratuita",

      "projects.title": "Proyectos Destacados",
      "projects.card1.type": "Proyecto Ejecutado",
      "projects.card1.title": "Remodelación de Residencia de Playa",
      "projects.card1.meta": "Costa de La Libertad — 2024",
      "projects.card2.type": "Propuesta de Diseño",
      "projects.card2.title": "Piscina y Área Social Exterior",
      "projects.card2.meta": "Zona Surf City — 2024",
      "projects.card3.type": "Propuesta de Diseño",
      "projects.card3.title": "Concepto de Villa Costera",
      "projects.card3.meta": "El Zonte — Propuesta",
      "projects.cta": "Explora Nuestros Proyectos",

      "coastal.title": "¿Por Qué Invertir en la Costa de El Salvador?",
      "coastal.text":
        "La costa del Pacífico de El Salvador está viviendo un rápido desarrollo y atención internacional. Ayudamos a inversionistas a recorrer todo el proceso — desde el concepto y diseño hasta la construcción y entrega. Ya sea que estés construyendo una casa o una propiedad de renta con ROI claro, te ayudamos a aprovechar el impulso de Surf City.",
      "coastal.point1.title": "Impulso de Surf City",
      "coastal.point1.text":
        "Construye y posiciona tu proyecto en uno de los mercados costeros de mayor crecimiento en Centroamérica.",
      "coastal.point2.title": "Turismo y Vida Premium",
      "coastal.point2.text":
        "Diseñamos y construimos propiedades optimizadas para rentas de alto nivel, segundas residencias, hospitalidad boutique o valor a largo plazo.",
      "coastal.point3.title": "Acompañamiento Local Llave en Mano",
      "coastal.point3.text":
        "Nos encargamos de todo, desde condiciones locales y permisos hasta ejecución y entrega. Simplificamos el desarrollo para clientes locales e internacionales remotos.",
      "coastal.cta": "Explora Oportunidades de Inversión",

      "services.title": "Servicios de Diseño y Construcción",
      "services.card1.title": "Diseño Arquitectónico",
      "services.card1.text":
        "Arquitectura diseñada para condiciones costeras, estilo de vida, clima y valor a largo plazo de la propiedad.",
      "services.card2.title": "Diseño y Construcción Integral",
      "services.card2.text":
        "Entrega integral desde el concepto y las ideas hasta una ejecución exitosa con coordinación, project management, finanzas claras y control de calidad.",
      "services.card3.title": "Project Management",
      "services.card3.text":
        "Project management integral para asegurar que tiempos, presupuestos y ejecución estén controlados de principio a fin.",
      "services.card4.title": "Soluciones Llave en Mano",
      "services.card4.text":
        "Acompañamiento integral para clientes locales e internacionales que necesitan ejecución confiable con enfoque en diseño, calidad y transparencia.",
      "services.cta": "Agenda una Consulta Gratuita",

      "footer.copy": "© Litoral — El Salvador"
    }
  };

  const translatableNodes = document.querySelectorAll("[data-i18n]");
  const langToggle = document.getElementById("langToggle");
  const langOptions = document.querySelectorAll(".lang-option");

  function setLanguage(lang) {
    document.documentElement.lang = lang;

    translatableNodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = translations[lang][key];

      if (value) {
        if (value.includes("<br>")) {
          node.innerHTML = value;
        } else {
          node.textContent = value;
        }
      }
    });

    langOptions.forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.langChoice === lang);
    });

    localStorage.setItem("litoral-lang", lang);
  }

  langToggle.addEventListener("click", () => {
    const currentLang = document.documentElement.lang || "en";
    const nextLang = currentLang === "en" ? "es" : "en";
    setLanguage(nextLang);
  });

  const savedLang = localStorage.getItem("litoral-lang") || "en";
  setLanguage(savedLang);
});