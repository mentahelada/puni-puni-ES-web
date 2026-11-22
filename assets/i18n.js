// Idiomas de la web: es (por defecto), en, ja.
// - Bloques con data-l="es|en|ja": solo se ve el del idioma actual.
// - Elementos con data-i18n / data-i18n-html / data-i18n-ph / data-i18n-title / data-i18n-aria: se rellenan con el diccionario.
// - En JS: t("clave", {var: valor}).
(function () {
  const LANGS = ["es", "en", "ja"];
  const fromUrl = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const LANG = LANGS.includes(fromUrl) ? fromUrl : LANGS.includes(saved) ? saved : "es";
  if (fromUrl && LANGS.includes(fromUrl)) { try { localStorage.setItem("lang", fromUrl); } catch (e) {} }
  document.documentElement.lang = LANG;
  document.documentElement.dataset.lang = LANG;

  // [es, en, ja]
  const D = {
    // Menú y comunes
    "nav.home": ["Inicio", "Home", "ホーム"],
    "nav.yokai": ["Yokais", "Yo-kai", "妖怪"],
    "nav.watches": ["Relojes", "Watches", "ウォッチ"],
    "nav.events": ["Eventos", "Events", "イベント"],
    "nav.mechanics": ["Mecánicas", "Mechanics", "仕組み"],
    "nav.guides": ["Guías", "Guides", "攻略リンク"],
    "nav.builder": ["Team Builder", "Team Builder", "編成ツール"],
    "nav.menu": ["Menú", "Menu", "メニュー"],
    "nav.lang": ["Idioma", "Language", "言語"],
    "hp": ["PV", "HP", "HP"],
    "atk": ["ATQ", "ATK", "こうげき"],
    "lv": ["Nv.", "Lv.", "Lv."],
    "dupes": ["dupes", "dupes", "凸"],
    "footer.brand": ["Yo-kai Watch y Puni Puni son marcas de LEVEL-5. Web de fans sin ánimo de lucro.", "Yo-kai Watch and Puni Puni are trademarks of LEVEL-5. Non-profit fan site.", "妖怪ウォッチ・ぷにぷにはLEVEL-5の商標です。非営利のファンサイトです。"],
    "aff.team": ["todo el equipo", "the whole team", "チーム全員"],
    "aff.tribe": ["tribu", "tribe", "種族"],
    "aff.female": ["chicas", "girls", "女の子妖怪"],
    "aff.male": ["chicos", "boys", "男の子妖怪"],
    "aff.saga": ["saga", "series", "シリーズ"],
    "aff.rank": ["rango", "rank", "ランク"],
    "aff.ids": ["{n} yokais concretos", "{n} specific yo-kai", "特定の妖怪{n}体"],
    "pct.same": ["+{hp}% {HP} y {ATK}", "+{hp}% {HP} and {ATK}", "{HP}と{ATK}+{hp}%"],
    "pct.diff": ["+{hp}% {HP}, +{atk}% {ATK}", "+{hp}% {HP}, +{atk}% {ATK}", "{HP}+{hp}%、{ATK}+{atk}%"],

    // Team builder
    "tb.hero": ["Arma tu equipo y mira sus stats reales con dupes, relojes, center skills y unity.", "Build your team and see its real stats with dupes, watches, center skills and unity.", "凸・ウォッチ・センタースキル・結束を含めた本当のステータスを確認しよう。"],
    "tb.yourTeam": ["Tu equipo", "Your team", "あなたのチーム"],
    "tb.tribeBonus": ["Bonus de tribu", "Tribe bonus", "種族ボーナス"],
    "tb.tribeBonusHint": ["(efecto de tribu + unity)", "(tribe effect + unity)", "（種族効果＋結束）"],
    "tb.watch": ["Reloj", "Watch", "ウォッチ"],
    "tb.noWatch": ["Sin reloj", "No watch", "ウォッチなし"],
    "tb.noWatchSel": ["Ningún reloj seleccionado.", "No watch selected.", "ウォッチが選択されていません。"],
    "tb.dragHint": ["Arrastra un yokai de la colección a uno de los 5 huecos, o arrastra entre huecos para reordenar. El nivel se fija solo según su rango.", "Drag a yo-kai from the collection into one of the 5 slots, or drag between slots to reorder. The level is set automatically by rank.", "コレクションから5つの枠に妖怪をドラッグ、枠同士をドラッグで並び替え。レベルはランクで自動的に決まります。"],
    "tb.reset": ["Vaciar", "Clear", "クリア"],
    "tb.saved": ["Equipos guardados", "Saved teams", "保存したチーム"],
    "tb.teamName": ["Nombre del equipo...", "Team name...", "チーム名..."],
    "tb.save": ["Guardar equipo", "Save team", "チームを保存"],
    "tb.selected": ["Yokais elegidos", "Selected yo-kai", "選んだ妖怪"],
    "tb.collection": ["Colección", "Collection", "コレクション"],
    "tb.collectionHint": ["Arrastra un yokai al equipo (o haz clic) para añadirlo.", "Drag a yo-kai onto the team (or click it) to add it.", "妖怪をチームにドラッグ（またはクリック）して追加。"],
    "tb.tribe": ["Tribu", "Tribe", "種族"],
    "tb.allTribes": ["Todas las tribus", "All tribes", "すべての種族"],
    "tb.rank": ["Rango", "Rank", "ランク"],
    "tb.allRanks": ["Todos los rangos", "All ranks", "すべてのランク"],
    "tb.miniAria": ["Tu equipo (barra rápida)", "Your team (quick bar)", "チーム（クイックバー）"],
    "tb.goTeam": ["Ir a tu equipo", "Go to your team", "チームへ移動"],
    "tb.miniTeam": ["Equipo", "Team", "チーム"],
    "tb.madeBy": ["Hecho por:", "Made by:", "制作:"],
    "tb.credits": ["Créditos:", "Credits:", "協力:"],
    "tb.center": ["★ Centro", "★ Center", "★ センター"],
    "tb.notActive": [" — no activo", " — not active", " — 未発動"],
    "tb.position": ["Posición {n}", "Position {n}", "{n}番目"],
    "tb.levelLocked": ["Nivel fijado por el rango", "Level set by rank", "レベルはランクで固定"],
    "tb.dupesLabel": ["Dupes (0-10)", "Dupes (0-10)", "凸 (0-10)"],
    "tb.emptyTeam": ["Arrastra aquí un yokai de la colección.", "Drag a yo-kai here from the collection.", "ここにコレクションから妖怪をドラッグ。"],
    "tb.totalHp": ["PV total del equipo", "Team total HP", "チーム合計HP"],
    "tb.totalAtk": ["ATQ total del equipo", "Team total ATK", "チーム合計こうげき"],
    "tb.emptySlot": ["Hueco libre {n}", "Empty slot {n}", "空き枠 {n}"],
    "tb.remove": ["Quitar a {name}", "Remove {name}", "{name}を外す"],
    "tb.noTribeBonus": ["Sin bonus de tribu", "No tribe bonus", "種族ボーナスなし"],
    "tb.noTribeBonusHint": ["Pon 2 o más yokais de la misma tribu para conseguir bonus de tribu.", "Put 2 or more yo-kai of the same tribe to get a tribe bonus.", "同じ種族を2体以上入れると種族ボーナスが付きます。"],
    "tb.noMatch": ["Ningún yokai coincide con el filtro.", "No yo-kai match this filter.", "条件に合う妖怪がいません。"],
    "tb.with10": ["Con 10 dupes", "With 10 dupes", "10凸時"],
    "tb.load": ["Cargar", "Load", "読み込む"],
    "tb.delete": ["Borrar", "Delete", "削除"],
    "tb.noSaved": ["Aún no hay equipos guardados. Arma uno y guárdalo arriba.", "No saved teams yet. Build a team and save it above.", "保存したチームはまだありません。"],
    "tb.whoCenter": ["el yokai del centro", "the center yo-kai", "センターの妖怪"],
    "tb.whoCenterIf": ["el yokai del centro (si es {who})", "the center yo-kai (if {who})", "センターの妖怪（{who}の場合）"],
    "tb.clockFor": ["{label}: {pct} para {who}.", "{label}: {pct} for {who}.", "{label}：{who}の{pct}。"],
    "tb.clockOpt": ["{label} ({pct} para {who})", "{label} ({pct} for {who})", "{label}（{who}：{pct}）"],
    "tb.centerSkill": ["Center skill: {pct} a {who}", "Center skill: {pct} to {who}", "センタースキル：{who}の{pct}"],
    "tb.unity": ["Unity: +{p}% {HP}/{ATK} a los {tribe} (necesita 2+ {tribe})", "Unity: +{p}% {HP}/{ATK} to {tribe} (needs 2+ {tribe})", "結束：{tribe}の{HP}/{ATK}+{p}%（{tribe}2体以上で発動）"],
    "tb.femUnity": ["Unity femenino: {pct} a las chicas (necesita 2+ chicas)", "Female unity: {pct} to girls (needs 2+ girls)", "女の子結束：女の子妖怪の{pct}（女の子2体以上で発動）"],
    "tb.effect": ["Efecto de tribu +{p}% ({n} {tribe})", "Tribe effect +{p}% ({n} {tribe})", "種族効果+{p}%（{tribe}{n}体）"],
    "tb.sagaUnity": ["Unity de saga {saga}: {pct} a los de {saga} (necesita 2+)", "{saga} unity: {pct} to {saga} yo-kai (needs 2+)", "{saga}結束：{saga}の妖怪の{pct}（2体以上で発動）"],
    "tb.sagaUnityTip": ["Unity de saga: {pct} a los yokais de {saga}", "Series unity: {pct} to {saga} yo-kai", "シリーズ結束：{saga}の妖怪の{pct}"],
    "tb.unityNeeds": ["Unity +{p}% (necesita 2+)", "Unity +{p}% (needs 2+)", "結束+{p}%（2体以上で発動）"],
  };

  function t(key, vars) {
    const i = LANGS.indexOf(LANG);
    const row = D[key];
    const s = row ? (row[i] ?? row[0]) : key;
    const v = Object.assign({ HP: D.hp[i], ATK: D.atk[i] }, vars || {});
    return s.replace(/\{(\w+)\}/g, (m, k) => (v[k] !== undefined ? v[k] : m));
  }
  // Añadir textos desde cada página: addI18n({clave: [es, en, ja]})
  function addI18n(obj) { Object.assign(D, obj); }

  function apply(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    (root || document).querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    (root || document).querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    (root || document).querySelectorAll("[data-i18n-title]").forEach(el => { el.title = t(el.dataset.i18nTitle); });
    (root || document).querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  }

  // Selector de idioma en el menú
  function addSwitcher() {
    const nav = document.querySelector(".site-nav");
    if (!nav || nav.querySelector(".lang-switch")) return;
    const sel = document.createElement("select");
    sel.className = "lang-switch";
    sel.setAttribute("aria-label", t("nav.lang"));
    [["es", "ES · Español"], ["en", "EN · English"], ["ja", "JA · 日本語"]].forEach(([v, l]) => sel.add(new Option(l, v, false, v === LANG)));
    sel.addEventListener("change", () => {
      try { localStorage.setItem("lang", sel.value); } catch (e) {}
      const u = new URL(location.href); u.searchParams.delete("lang"); location.href = u.toString();
    });
    const links = nav.querySelector(".nav-links");
    nav.insertBefore(sel, links ? links.nextSibling : null);
  }

  window.LANG = LANG;
  window.t = t;
  window.addI18n = addI18n;
  window.applyI18n = apply;
  document.addEventListener("DOMContentLoaded", () => { apply(); addSwitcher(); });
})();
