// Utilidades compartidas por todas las páginas (sin pisar las funciones del team builder).
window.PP = (function () {
  // Nombres de tribu en español (los datos usan los nombres en inglés)
  const TRIBE_ES = {
    brave: "Valiente", mysterious: "Misterioso", tough: "Robusto", charming: "Encantador",
    heartful: "Amable", shady: "Siniestro", eerie: "Tétrico", slippery: "Escurridizo", enma: "Enma"
  };
  const TRIBE_ES_PLURAL = {
    brave: "Valientes", mysterious: "Misteriosos", tough: "Robustos", charming: "Encantadores",
    heartful: "Amables", shady: "Siniestros", eerie: "Tétricos", slippery: "Escurridizos", enma: "Enma"
  };
  const TRIBE_ORDER =["brave", "mysterious", "tough", "charming", "heartful", "shady", "eerie", "slippery", "enma"];
  const RANK_LEVEL = { "UZ": 90, "UZ+": 100, "UZ++": 110 };
  const TRIBE_EFFECT = { 1: 0, 2: 10, 3: 20, 4: 25, 5: 30 };

  const key = s => String(s || "").trim().toLowerCase();
  const tribeEs = t => TRIBE_ES[key(t)] || t || "";
  const tribeEsPlural = t => TRIBE_ES_PLURAL[key(t)] || t || "";
  const rankKey = r => key(r).replace(/\+/g, "p");
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
  const fmt = n => Number(n || 0).toLocaleString("es-ES");
  const statsAt = (c, dupes) => ({ hp: Math.round(c.hp0 * (1 + 0.02 * dupes)), atk: Math.round(c.atk0 * (1 + 0.02 * dupes)) });
  const genderSymbol = g => key(g) === "female" ? "♀" : key(g) === "male" ? "♂" : "";

  // "a los Valientes", "a las chicas", "a la saga Hololive", "a todo el equipo"
  function describeAffects(a) {
    if (!a || typeof a !== "object") return "todo el equipo";
    const parts = [];
    if (a.tribes?.length) parts.push("tribu " + a.tribes.map(tribeEs).join("/"));
    if (a.genders?.length) parts.push(a.genders.map(g => key(g) === "female" ? "chicas" : "chicos").join("/"));
    if (a.sagas?.length) parts.push("saga " + a.sagas.join("/"));
    if (a.ranks?.length) parts.push("rango " + a.ranks.join("/"));
    if (a.ids?.length) parts.push(a.ids.length + " yokais concretos");
    return parts.length ? parts.join(", ") : "todo el equipo";
  }
  const pct = (hp, atk) => hp === atk ? `+${hp}% PV y ATQ` : `+${hp}% PV, +${atk}% ATQ`;

  // Punis flotando en una cabecera (elige al azar de la colección)
  function floatingPunis(boxId, count, spots) {
    const box = document.getElementById(boxId);
    if (!box || typeof characters === "undefined") return;
    const pool = characters.filter(c => c.image).sort(() => Math.random() - 0.5);
    const n = window.innerWidth < 600 ? Math.ceil(count / 2) : count;
    pool.slice(0, n).forEach((c, i) => {
      const img = document.createElement("img");
      img.className = "hero-puni"; img.src = c.image; img.alt = "";
      const [x, y] = spots[i % spots.length];
      img.style.left = x + "%"; img.style.top = y + "%";
      img.style.setProperty("--s", (50 + Math.random() * 40).toFixed(0) + "px");
      img.style.setProperty("--d", (5 + Math.random() * 4).toFixed(1) + "s");
      img.style.setProperty("--delay", (-Math.random() * 5).toFixed(1) + "s");
      box.appendChild(img);
    });
  }

  // Menú común: marca la página actual
  function markNav() {
    const here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-nav a[href]").forEach(a => {
      if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page");
    });
    const toggle = document.querySelector(".site-nav .nav-toggle");
    if (toggle) toggle.addEventListener("click", () => document.querySelector(".site-nav").classList.toggle("open"));
  }
  document.addEventListener("DOMContentLoaded", markNav);

  return { TRIBE_ES, TRIBE_ES_PLURAL, TRIBE_ORDER, RANK_LEVEL, TRIBE_EFFECT, key, tribeEs, tribeEsPlural, rankKey, esc, fmt, statsAt, genderSymbol, describeAffects, pct, floatingPunis };
})();
