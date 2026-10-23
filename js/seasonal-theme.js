(() => {
  "use strict";

  // AURA OS Seasonal Theme — automatically follows the computer's local month.
  // September–November: autumn/Halloween; December–February: winter/New Year;
  // March–May: spring/nature; June–August: summer/beach.
  const month = new Date().getMonth() + 1;
  let season;

  if (month >= 9 && month <= 11) {
    season = {
      id: "autumn",
      name: "Осень • Хэллоуин",
      emoji: "🎃",
      accent: "#ff784f",
      accentHover: "#ff946f",
      accentText: "#1b100c",
      accentSoft: "rgba(255,120,79,.14)",
      border: "rgba(255,120,79,.34)",
      glow: "rgba(255,120,79,.14)",
      backdrop: "radial-gradient(ellipse at 85% 0%, rgba(120,55,24,.17), transparent 38%)",
      particles: ["🍂", "✦", "🎃", "🍁"],
      particleOpacity: ".14"
    };
  } else if (month === 12 || month <= 2) {
    season = {
      id: "winter",
      name: "Зима • Новый год",
      emoji: "❄️",
      accent: "#80bfff",
      accentHover: "#a2d1ff",
      accentText: "#101927",
      accentSoft: "rgba(128,191,255,.14)",
      border: "rgba(128,191,255,.32)",
      glow: "rgba(128,191,255,.13)",
      backdrop: "radial-gradient(ellipse at 85% 0%, rgba(38,83,145,.20), transparent 40%)",
      particles: ["❄", "✦", "✧", "❅"],
      particleOpacity: ".18"
    };
  } else if (month >= 3 && month <= 5) {
    season = {
      id: "spring",
      name: "Весна • Природа",
      emoji: "🌿",
      accent: "#7ed69a",
      accentHover: "#a0e9b5",
      accentText: "#102017",
      accentSoft: "rgba(126,214,154,.14)",
      border: "rgba(126,214,154,.30)",
      glow: "rgba(126,214,154,.12)",
      backdrop: "radial-gradient(ellipse at 85% 0%, rgba(35,105,63,.18), transparent 40%)",
      particles: ["✿", "❋", "🌿", "✦"],
      particleOpacity: ".14"
    };
  } else {
    season = {
      id: "summer",
      name: "Лето • Море и солнце",
      emoji: "☀️",
      accent: "#45d6cf",
      accentHover: "#75e7df",
      accentText: "#082321",
      accentSoft: "rgba(69,214,207,.14)",
      border: "rgba(69,214,207,.32)",
      glow: "rgba(69,214,207,.13)",
      backdrop: "radial-gradient(ellipse at 85% 0%, rgba(20,125,140,.20), transparent 40%)",
      particles: ["☀", "✦", "≈", "✧"],
      particleOpacity: ".14"
    };
  }

  document.documentElement.dataset.auraSeason = season.id;
  document.documentElement.style.setProperty("--aura-season-accent", season.accent);
  document.documentElement.style.setProperty("--aura-season-accent-hover", season.accentHover);
  document.documentElement.style.setProperty("--aura-season-accent-text", season.accentText);
  document.documentElement.style.setProperty("--aura-season-accent-soft", season.accentSoft);
  document.documentElement.style.setProperty("--aura-season-border", season.border);
  document.documentElement.style.setProperty("--aura-season-glow", season.glow);
  document.documentElement.style.setProperty("--aura-season-particle-opacity", season.particleOpacity);

  const style = document.createElement("style");
  style.id = "aura-seasonal-theme-style";
  style.textContent = `
    :root {
      --aura-season-accent: ${season.accent};
      --aura-season-accent-hover: ${season.accentHover};
      --aura-season-accent-text: ${season.accentText};
      --aura-season-accent-soft: ${season.accentSoft};
      --aura-season-border: ${season.border};
      --aura-season-glow: ${season.glow};
    }

    body {
      background-image: ${season.backdrop};
      background-attachment: fixed;
    }

    /* Seasonal color applies to current and future common controls. */
    button, input[type="submit"], input[type="button"], .button, .btn,
    a.button, a.btn, [role="button"] {
      transition: background-color .2s ease, color .2s ease, border-color .2s ease,
                  box-shadow .2s ease, transform .2s ease;
    }

    button[type="submit"], input[type="submit"],
    .primary-button, .btn-primary, .button-primary,
    .task-form button, #task-form button,
    .project-form button[type="submit"],
    a.button-primary, a.btn-primary {
      background-color: var(--aura-season-accent) !important;
      border-color: var(--aura-season-accent) !important;
      color: var(--aura-season-accent-text) !important;
    }

    button[type="submit"]:hover, input[type="submit"]:hover,
    .primary-button:hover, .btn-primary:hover, .button-primary:hover,
    .task-form button:hover, #task-form button:hover {
      background-color: var(--aura-season-accent-hover) !important;
      border-color: var(--aura-season-accent-hover) !important;
      box-shadow: 0 0 22px var(--aura-season-glow);
      transform: translateY(-1px);
    }

    button:not([type="submit"]):not(.no-season),
    .secondary-button, .btn-secondary {
      border-color: var(--aura-season-border);
    }

    input:focus, textarea:focus, select:focus {
      outline: none;
      border-color: var(--aura-season-accent) !important;
      box-shadow: 0 0 0 3px var(--aura-season-accent-soft) !important;
    }

    input[type="checkbox"], input[type="radio"] {
      accent-color: var(--aura-season-accent);
    }

    a:hover, .nav-link.active, .active > a {
      color: var(--aura-season-accent);
    }

    .progress-bar, .progress-fill, .progress-track > span,
    progress::-webkit-progress-value {
      background-color: var(--aura-season-accent);
    }

    .card, .project-card, .task-item, .stat-card, .dashboard-card {
      border-color: var(--aura-season-border);
    }

    .seasonal-theme-chip {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      width: fit-content;
      max-width: 100%;
      margin: 0 0 14px;
      padding: 6px 10px;
      border: 1px solid var(--aura-season-border);
      border-radius: 999px;
      background: var(--aura-season-accent-soft);
      color: var(--aura-season-accent);
      font-size: 11px;
      letter-spacing: .04em;
    }

    .seasonal-theme-chip .seasonal-spark {
      display: inline-block;
      animation: aura-season-glow 3s ease-in-out infinite;
    }

    .seasonal-decor {
      position: fixed;
      z-index: 0;
      right: 18px;
      bottom: 14px;
      pointer-events: none;
      user-select: none;
      color: var(--aura-season-accent);
      opacity: var(--aura-season-particle-opacity);
      font-size: 21px;
      letter-spacing: 8px;
    }

    @keyframes aura-season-glow {
      0%, 100% { opacity: .7; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.08); }
    }

    @media (prefers-reduced-motion: reduce) {
      .seasonal-theme-chip .seasonal-spark { animation: none; }
      button, input[type="submit"], .button, .btn { transition: none; }
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  function getSeasonStart(monthIndex, year) {
    // Meteorological seasons: spring Mar 1, summer Jun 1, autumn Sep 1, winter Dec 1.
    // Return the next upcoming seasonal boundary in local time.
    const starts = [
      { month: 2, day: 1, id: "spring", name: "весны", emoji: "🌿" },
      { month: 5, day: 1, id: "summer", name: "лета", emoji: "☀️" },
      { month: 8, day: 1, id: "autumn", name: "осени", emoji: "🍂" },
      { month: 11, day: 1, id: "winter", name: "зимы", emoji: "❄️" }
    ];
    const now = new Date();
    const candidates = [];
    for (let y = year; y <= year + 1; y++) {
      for (const item of starts) {
        const date = new Date(y, item.month, item.day, 0, 0, 0, 0);
        if (date > now) candidates.push({ ...item, date });
      }
    }
    candidates.sort((a, b) => a.date - b.date);
    return candidates[0];
  }

  function daysUntil(date) {
    const today = new Date();
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const targetMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return Math.max(0, Math.ceil((targetMidnight - todayMidnight) / 86400000));
  }

  function addCountdown() {
    if (document.querySelector(".aura-season-countdown")) return;
    const now = new Date();
    const next = getSeasonStart(now.getMonth(), now.getFullYear());
    if (!next) return;

    const bar = document.createElement("section");
    bar.className = "aura-season-countdown";
    bar.setAttribute("aria-label", "Календарь смены сезонов");
    const days = daysUntil(next.date);
    const dayWord = (n) => {
      const n10 = n % 10, n100 = n % 100;
      if (n10 === 1 && n100 !== 11) return "день";
      if (n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14)) return "дня";
      return "дней";
    };
    bar.innerHTML = `
      <div class="aura-season-countdown-head">
        <span class="aura-season-countdown-title">Календарь сезонов</span>
        <span class="aura-season-countdown-current">${season.emoji} Сейчас: ${season.name}</span>
      </div>
      <div class="aura-season-countdown-grid">
        <div class="aura-season-countdown-item ${next.id === "winter" ? "is-next" : ""}">
          <span class="aura-season-countdown-emoji">❄️</span>
          <span class="aura-season-countdown-label">До зимы</span>
          <strong>${countdownTo("winter", now)} <small>${dayWord(countdownTo("winter", now))}</small></strong>
        </div>
        <div class="aura-season-countdown-item ${next.id === "spring" ? "is-next" : ""}">
          <span class="aura-season-countdown-emoji">🌿</span>
          <span class="aura-season-countdown-label">До весны</span>
          <strong>${countdownTo("spring", now)} <small>${dayWord(countdownTo("spring", now))}</small></strong>
        </div>
        <div class="aura-season-countdown-item ${next.id === "summer" ? "is-next" : ""}">
          <span class="aura-season-countdown-emoji">☀️</span>
          <span class="aura-season-countdown-label">До лета</span>
          <strong>${countdownTo("summer", now)} <small>${dayWord(countdownTo("summer", now))}</small></strong>
        </div>
        <div class="aura-season-countdown-item ${next.id === "autumn" ? "is-next" : ""}">
          <span class="aura-season-countdown-emoji">🍂</span>
          <span class="aura-season-countdown-label">До осени</span>
          <strong>${countdownTo("autumn", now)} <small>${dayWord(countdownTo("autumn", now))}</small></strong>
        </div>
      </div>`;
    const main = document.querySelector("main") ||
      document.querySelector(".main-content") ||
      document.querySelector(".content") ||
      document.querySelector(".dashboard") ||
      document.querySelector("#app");
    if (main) main.insertBefore(bar, main.firstChild);
    else {
      bar.style.position = "relative";
      bar.style.margin = "16px";
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }

  function countdownTo(id, now) {
    const targetMonths = { winter: 11, spring: 2, summer: 5, autumn: 8 };
    let year = now.getFullYear();
    let date = new Date(year, targetMonths[id], 1);
    if (date <= new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
      date = new Date(year + 1, targetMonths[id], 1);
    }
    return daysUntil(date);
  }

  function addSeasonDetails() {
    if (!document.body) return;
    addCountdown();
    if (document.querySelector(".seasonal-theme-chip")) return;

    const chip = document.createElement("div");
    chip.className = "seasonal-theme-chip";
    chip.setAttribute("aria-label", "Сезонное оформление AURA OS");
    chip.innerHTML = `<span class="seasonal-spark" aria-hidden="true">${season.emoji}</span><span>AURA OS · ${season.name}</span>`;

    const main = document.querySelector("main") ||
      document.querySelector(".main-content") ||
      document.querySelector(".content") ||
      document.querySelector(".dashboard") ||
      document.querySelector("#app");

    if (main) {
      main.insertBefore(chip, main.firstChild);
    } else {
      chip.style.position = "fixed";
      chip.style.top = "12px";
      chip.style.right = "14px";
      chip.style.zIndex = "1000";
      document.body.appendChild(chip);
    }

    const decor = document.createElement("div");
    decor.className = "seasonal-decor";
    decor.setAttribute("aria-hidden", "true");
    decor.textContent = season.particles.join("  ");
    document.body.appendChild(decor);

    // Seasonal themed items gently drift across the background; no libraries required.
    const fallingItems = {
      autumn: ["🍂", "🍁", "🎃", "🍄"],
      winter: ["❄️", "❅", "✨", "🎄"],
      spring: ["🌸", "🌷", "🌿", "🦋"],
      summer: ["☀️", "🐚", "🌴", "🌊"]
    }[season.id] || [season.emoji, "✦"];
    const field = document.createElement("div");
    field.className = "seasonal-decor";
    field.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 13; i++) {
      const item = document.createElement("span");
      item.className = "seasonal-float";
      item.textContent = fallingItems[i % fallingItems.length];
      item.style.setProperty("--left", (4 + ((i * 37) % 92)) + "%");
      item.style.setProperty("--delay", (-((i * 1.7) % 19)) + "s");
      item.style.setProperty("--duration", (15 + (i % 7) * 2) + "s");
      item.style.setProperty("--size", (15 + (i % 4) * 5) + "px");
      item.style.setProperty("--opacity", (0.25 + (i % 4) * 0.09).toFixed(2));
      item.style.setProperty("--drift", ((i % 2 ? 1 : -1) * (12 + (i % 5) * 8)) + "px");
      field.appendChild(item);
    }
    document.body.appendChild(field);

    const corner = document.createElement("div");
    corner.className = "seasonal-decor-static";
    corner.setAttribute("aria-hidden", "true");
    corner.textContent = fallingItems.slice(0, 3).join("  ");
    document.body.appendChild(corner);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addSeasonDetails, { once: true });
  } else {
    addSeasonDetails();
  }
})(); 
