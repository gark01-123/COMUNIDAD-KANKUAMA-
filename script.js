document.documentElement.classList.add("js-enabled");

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const header = $(".site-header");
const progress = $("#reading-progress");
const menuButton = $(".menu-toggle");
const nav = $(".main-nav");

function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${scrollable > 0 ? (scrollY / scrollable) * 100 : 0}%`;
  header.classList.toggle("scrolled", scrollY > 40);
}

addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú de navegación");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
    return;
  }
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Cerrar menú de navegación");
  nav.classList.add("open");
  document.body.classList.add("menu-open");
  $(".main-nav a")?.focus();
});

$$(".main-nav a").forEach(link => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

$$(".reveal").forEach(element => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$(".main-nav a").forEach(link => {
      link.classList.toggle("active", link.hash === `#${entry.target.id}`);
    });
  });
}, { rootMargin: "-35% 0px -60% 0px" });

$$("main section[id]").forEach(section => sectionObserver.observe(section));

function enableArrowNavigation(buttons, activate) {
  buttons.forEach((button, index) => {
    button.addEventListener("keydown", event => {
      let nextIndex = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % buttons.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = buttons.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      buttons[nextIndex].focus();
      activate(buttons[nextIndex]);
    });
  });
}

const timelineTabs = $$(".timeline-dot");

function activateTimeline(button) {
  timelineTabs.forEach(item => {
    item.classList.remove("active");
    item.setAttribute("aria-selected", "false");
    item.tabIndex = -1;
  });
  button.classList.add("active");
  button.setAttribute("aria-selected", "true");
  button.tabIndex = 0;
  $("#timeline-year").textContent = button.dataset.year;
  $("#timeline-text").textContent = button.dataset.text;
  $("#timeline-panel").setAttribute("aria-labelledby", button.id);
}

timelineTabs.forEach(button => button.addEventListener("click", () => activateTimeline(button)));
enableArrowNavigation(timelineTabs, activateTimeline);

$$(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    $$(".chip").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-pressed", "true");
    const filter = chip.dataset.filter;
    $$(".actor-node").forEach(node => {
      node.classList.toggle("hidden", filter !== "all" && node.dataset.type !== filter);
    });
  });
});

const actorNodes = $$(".actor-node");
actorNodes.forEach(node => {
  node.setAttribute("aria-pressed", "false");
  node.setAttribute("aria-label", `${node.textContent.trim().replace(/\s+/g, " ")}. Influencia ${node.dataset.level}. ${node.dataset.power}.`);
  node.addEventListener("click", () => {
    actorNodes.forEach(item => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });
    node.classList.add("selected");
    node.setAttribute("aria-pressed", "true");
    $("#actor-detail").innerHTML = `
      <span>Influencia ${node.dataset.level}</span>
      <strong>${node.dataset.power}</strong>
      <p>${node.dataset.relation}</p>`;
  });
});

const stories = [
  {
    kicker: "Bogotá · Memoria en tránsito",
    title: "La lideresa desplazada",
    quote: "“Llegué con una bolsa de ropa. Lo demás lo traje por dentro.”",
    text: "En la ciudad aprendió otros mapas: rutas de buses, oficinas y filas. Convirtió esa experiencia en orientación para familias recién llegadas y en una voz colectiva para exigir atención con enfoque indígena."
  },
  {
    kicker: "Comunidad · Saber intergeneracional",
    title: "La guardiana de la memoria",
    quote: "“Mientras una niña recuerde cómo se teje, el camino no se cierra.”",
    text: "Reúne a jóvenes alrededor de la palabra, el alimento y la mochila. Cada encuentro recupera un gesto que la violencia quiso interrumpir y demuestra que la cultura también se protege al practicarla y compartirla."
  },
  {
    kicker: "Sierra Nevada · Acción colectiva",
    title: "La defensora del territorio",
    quote: "“No defendemos un paisaje: defendemos la posibilidad de seguir siendo.”",
    text: "Aprendió a interpretar documentos, participar en asambleas y dialogar con instituciones. Su liderazgo enlaza el mandato ancestral con herramientas jurídicas para proteger el agua, los sitios sagrados y la autonomía."
  }
];

const storyTabs = $$(".report-tabs button");

function activateStory(button) {
  const index = Number(button.dataset.story);
  const story = stories[index];
  storyTabs.forEach(item => {
    item.setAttribute("aria-selected", "false");
    item.tabIndex = -1;
  });
  button.setAttribute("aria-selected", "true");
  button.tabIndex = 0;
  $("#report-kicker").textContent = story.kicker;
  $("#report-title").textContent = story.title;
  $("#report-quote").textContent = story.quote;
  $("#report-text").textContent = story.text;
  $("#report-view").setAttribute("aria-labelledby", button.id);
  const portrait = $(".report-portrait");
  portrait.className = `report-portrait story-${index}`;
  portrait.setAttribute("aria-label", `Retrato editorial simbólico del relato ${story.title}`);
  $("span", portrait).textContent = `0${index + 1}`;
}

storyTabs.forEach(button => button.addEventListener("click", () => activateStory(button)));
enableArrowNavigation(storyTabs, activateStory);

const conceptTabs = $$(".concept-node");

function activateConcept(button) {
  conceptTabs.forEach(item => {
    item.classList.remove("active");
    item.setAttribute("aria-selected", "false");
    item.tabIndex = -1;
  });
  button.classList.add("active");
  button.setAttribute("aria-selected", "true");
  button.tabIndex = 0;
  const index = conceptTabs.indexOf(button) + 1;
  $("#concept-label").textContent = `${String(index).padStart(2, "0")} · Relación conceptual`;
  $("#concept-title").textContent = button.dataset.concept;
  $("#concept-copy").textContent = button.dataset.copy;
  $("#concept-panel").setAttribute("aria-labelledby", button.id);
}

conceptTabs.forEach(button => button.addEventListener("click", () => activateConcept(button)));
enableArrowNavigation(conceptTabs, activateConcept);

const lightbox = $("#lightbox");
$$(".gallery-item[data-caption]").forEach(item => {
  item.addEventListener("click", () => {
    const source = $("img", item);
    $("img", lightbox).src = source.src;
    $("img", lightbox).alt = source.alt;
    $("p", lightbox).textContent = item.dataset.caption;
    lightbox.showModal();
  });
});
$(".lightbox-close", lightbox).addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});

function revealReference(id, moveFocus = false) {
  const target = document.querySelector(id);
  if (!target) return;
  const group = target.closest("details");
  if (group) group.open = true;
  if (moveFocus) {
    target.tabIndex = -1;
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
      target.focus({ preventScroll: true });
    });
  }
}

document.addEventListener("click", event => {
  const citation = event.target.closest('a[href^="#ref-r"]');
  if (!citation) return;
  event.preventDefault();
  const id = citation.getAttribute("href");
  history.pushState(null, "", id);
  revealReference(id, true);
});

window.addEventListener("hashchange", () => {
  if (location.hash.startsWith("#ref-r")) revealReference(location.hash);
});

if (location.hash.startsWith("#ref-r")) revealReference(location.hash);

$("#year").textContent = new Date().getFullYear();
