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

      "hero.eyebrow": "Premium coastal architecture & development",
      "hero.title": "Architecture for coastal living.",
      "hero.text":
        "Design, development, and construction for premium beachfront and investment properties in El Salvador.",
      "hero.ctaProjects": "View Projects",
      "hero.ctaContact": "Start Your Project",

      "projects.kicker": "Selected work",
      "projects.title": "Featured Projects",
      "projects.intro":
        "A curated selection of built work, remodels, pools, and coastal design studies.",
      "projects.card1.type": "Built Work",
      "projects.card1.title": "Beach Residence Remodel",
      "projects.card1.meta": "La Libertad Coast — 2024",
      "projects.card2.type": "Built Work",
      "projects.card2.title": "Pool & Outdoor Living Area",
      "projects.card2.meta": "Surf City Area — 2024",
      "projects.card3.type": "Concept Study",
      "projects.card3.title": "Coastal Villa Concept",
      "projects.card3.meta": "El Zonte — Proposal",
      "projects.cta": "View All Projects",

      "coastal.kicker": "Why now",
      "coastal.title": "Why Invest on the Coast?",
      "coastal.text":
        "El Salvador’s Pacific coast is experiencing rapid development and international attention. We help investors navigate the process from concept and design to construction and delivery.",
      "coastal.point1.title": "Surf City Momentum",
      "coastal.point1.text":
        "Position your project in one of the country’s fastest-growing coastal corridors.",
      "coastal.point2.title": "Premium Tourism & Living",
      "coastal.point2.text":
        "Design for high-end rentals, second homes, boutique hospitality, and long-term value.",
      "coastal.point3.title": "Turnkey Local Guidance",
      "coastal.point3.text":
        "From local conditions to execution, we simplify development for remote and international clients.",
      "coastal.cta": "Learn More",

      "services.kicker": "What we do",
      "services.title": "Our Services",
      "services.intro":
        "Design-led services for premium coastal properties and investment-driven projects.",
      "services.card1.title": "Architectural Design",
      "services.card1.text":
        "Architecture tailored to coastal context, lifestyle, climate, and long-term property value.",
      "services.card2.title": "Design & Build",
      "services.card2.text":
        "Integrated project delivery from concept to execution with clear coordination and quality control.",
      "services.card3.title": "Project Development",
      "services.card3.text":
        "Strategic support for investment-minded clients seeking premium residential or hospitality opportunities.",
      "services.card4.title": "Turnkey Solutions",
      "services.card4.text":
        "End-to-end guidance for remote buyers and international clients who need reliable local execution.",
      "services.cta": "Start Your Project",

      "footer.copy": "© Litoral — El Salvador"
    },

    es: {
      "nav.projects": "Proyectos",
      "nav.coastal": "Desarrollo Costero",
      "nav.services": "Servicios",
      "nav.contact": "Contacto",

      "hero.eyebrow": "Arquitectura y desarrollo costero premium",
      "hero.title": "Arquitectura para vivir la costa.",
      "hero.text":
        "Diseño, desarrollo y construcción para propiedades frente al mar e inversiones premium en El Salvador.",
      "hero.ctaProjects": "Ver Proyectos",
      "hero.ctaContact": "Inicia Tu Proyecto",

      "projects.kicker": "Trabajo seleccionado",
      "projects.title": "Proyectos Destacados",
      "projects.intro":
        "Una selección curada de obra construida, remodelaciones, piscinas y estudios de diseño costero.",
      "projects.card1.type": "Obra Construida",
      "projects.card1.title": "Remodelación de Residencia de Playa",
      "projects.card1.meta": "Costa de La Libertad — 2024",
      "projects.card2.type": "Obra Construida",
      "projects.card2.title": "Piscina y Área Social Exterior",
      "projects.card2.meta": "Zona Surf City — 2024",
      "projects.card3.type": "Estudio Conceptual",
      "projects.card3.title": "Concepto de Villa Costera",
      "projects.card3.meta": "El Zonte — Propuesta",
      "projects.cta": "Ver Todos Los Proyectos",

      "coastal.kicker": "Por qué ahora",
      "coastal.title": "¿Por qué invertir en la costa?",
      "coastal.text":
        "La costa del Pacífico de El Salvador está viviendo un rápido desarrollo y atención internacional. Ayudamos a inversionistas a recorrer el proceso desde la idea y el diseño hasta la construcción y entrega.",
      "coastal.point1.title": "Impulso de Surf City",
      "coastal.point1.text":
        "Ubica tu proyecto en uno de los corredores costeros de mayor crecimiento del país.",
      "coastal.point2.title": "Turismo y Vida Premium",
      "coastal.point2.text":
        "Diseño para alquileres de alto nivel, segundas residencias, hospitalidad boutique y valor a largo plazo.",
      "coastal.point3.title": "Guía Local Llave en Mano",
      "coastal.point3.text":
        "Desde las condiciones locales hasta la ejecución, simplificamos el desarrollo para clientes remotos e internacionales.",
      "coastal.cta": "Saber Más",

      "services.kicker": "Qué hacemos",
      "services.title": "Nuestros Servicios",
      "services.intro":
        "Servicios liderados por diseño para propiedades costeras premium y proyectos orientados a inversión.",
      "services.card1.title": "Diseño Arquitectónico",
      "services.card1.text":
        "Arquitectura adaptada al contexto costero, estilo de vida, clima y valor futuro de la propiedad.",
      "services.card2.title": "Diseño y Construcción",
      "services.card2.text":
        "Entrega integral del proyecto desde el concepto hasta la ejecución con coordinación clara y control de calidad.",
      "services.card3.title": "Desarrollo de Proyectos",
      "services.card3.text":
        "Apoyo estratégico para clientes inversionistas en oportunidades residenciales y de hospitalidad premium.",
      "services.card4.title": "Soluciones Llave en Mano",
      "services.card4.text":
        "Acompañamiento completo para compradores remotos y clientes internacionales que necesitan ejecución local confiable.",
      "services.cta": "Inicia Tu Proyecto",

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
      if (translations[lang][key]) {
        node.textContent = translations[lang][key];
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