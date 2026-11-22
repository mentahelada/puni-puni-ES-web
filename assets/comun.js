// Utilidades compartidas por todas las páginas (sin pisar las funciones del team builder).
// Usa el idioma de assets/i18n.js (window.LANG / window.t) si está cargado.
window.PP = (function () {
  const L = window.LANG || "es";
  const tt = (k, v) => (window.t ? window.t(k, v) : k);

  // Nombres de tribu por idioma (los datos usan los nombres en inglés)
  const TRIBES = {
    es: { brave: "Valiente", mysterious: "Misterioso", tough: "Robusto", charming: "Encantador", heartful: "Amable", shady: "Siniestro", eerie: "Tétrico", slippery: "Escurridizo", enma: "Enma" },
    en: { brave: "Brave", mysterious: "Mysterious", tough: "Tough", charming: "Charming", heartful: "Heartful", shady: "Shady", eerie: "Eerie", slippery: "Slippery", enma: "Enma" },
    ja: { brave: "イサマシ", mysterious: "フシギ", tough: "ゴーケツ", charming: "プリチー", heartful: "ポカポカ", shady: "ウスラカゲ", eerie: "ブキミー", slippery: "ニョロロン", enma: "エンマ" },
  };
  const PLURAL = {
    es: { brave: "Valientes", mysterious: "Misteriosos", tough: "Robustos", charming: "Encantadores", heartful: "Amables", shady: "Siniestros", eerie: "Tétricos", slippery: "Escurridizos", enma: "Enma" },
    en: { brave: "Brave yo-kai", mysterious: "Mysterious yo-kai", tough: "Tough yo-kai", charming: "Charming yo-kai", heartful: "Heartful yo-kai", shady: "Shady yo-kai", eerie: "Eerie yo-kai", slippery: "Slippery yo-kai", enma: "Enma yo-kai" },
    ja: { brave: "イサマシ族", mysterious: "フシギ族", tough: "ゴーケツ族", charming: "プリチー族", heartful: "ポカポカ族", shady: "ウスラカゲ族", eerie: "ブキミー族", slippery: "ニョロロン族", enma: "エンマ族" },
  };
  const TRIBE_ES = TRIBES[L] || TRIBES.es;          // (nombre histórico: nombres en el idioma actual)
  const TRIBE_ES_PLURAL = PLURAL[L] || PLURAL.es;
  const TRIBE_ORDER = ["brave", "mysterious", "tough", "charming", "heartful", "shady", "eerie", "slippery", "enma"];
  const RANK_LEVEL = { "UZ": 90, "UZ+": 100, "UZ++": 110 };
  const TRIBE_EFFECT = { 1: 0, 2: 10, 3: 20, 4: 25, 5: 30 };
  const LOCALE = { es: "es-ES", en: "en-US", ja: "ja-JP" }[L] || "es-ES";

  const key = s => String(s || "").trim().toLowerCase();
  const tribeEs = t => TRIBE_ES[key(t)] || t || "";
  const tribeEsPlural = t => TRIBE_ES_PLURAL[key(t)] || t || "";
  const rankKey = r => key(r).replace(/\+/g, "p");
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
  const fmt = n => Number(n || 0).toLocaleString(LOCALE);
  const statsAt = (c, dupes) => ({ hp: Math.round(c.hp0 * (1 + 0.02 * dupes)), atk: Math.round(c.atk0 * (1 + 0.02 * dupes)) });
  const genderSymbol = g => key(g) === "female" ? "♀" : key(g) === "male" ? "♂" : "";

  // A quién afecta un bonus: "tribu Valiente", "chicas", "saga Hololive", "todo el equipo"
  function describeAffects(a) {
    if (!a || typeof a !== "object") return tt("aff.team");
    const parts = [];
    const sp = L === "ja" ? "" : " ";
    if (a.tribes?.length) parts.push(L === "ja" ? a.tribes.map(tribeEs).join("/") + tt("aff.tribe") : tt("aff.tribe") + sp + a.tribes.map(tribeEs).join("/"));
    if (a.genders?.length) parts.push(a.genders.map(g => key(g) === "female" ? tt("aff.female") : tt("aff.male")).join("/"));
    if (a.sagas?.length) parts.push(L === "ja" ? a.sagas.join("/") + tt("aff.saga") : tt("aff.saga") + sp + a.sagas.join("/"));
    if (a.ranks?.length) parts.push(tt("aff.rank") + sp + a.ranks.join("/"));
    if (a.ids?.length) parts.push(tt("aff.ids", { n: a.ids.length }));
    return parts.length ? parts.join(L === "ja" ? "・" : ", ") : tt("aff.team");
  }
  const pct = (hp, atk) => hp === atk ? tt("pct.same", { hp }) : tt("pct.diff", { hp, atk });

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

  return { LANG: L, TRIBE_ES, TRIBE_ES_PLURAL, TRIBE_ORDER, RANK_LEVEL, TRIBE_EFFECT, key, tribeEs, tribeEsPlural, rankKey, esc, fmt, statsAt, genderSymbol, describeAffects, pct, floatingPunis };
})();
