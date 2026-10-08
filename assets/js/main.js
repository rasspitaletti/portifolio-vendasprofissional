(() => {
'use strict';

/* =========================================================
   3) UTILITÁRIOS
   ========================================================= */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const pad = n => String(n).padStart(2, '0');
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const hostOf = url => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
const hasGSAP = typeof window.gsap !== 'undefined';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const animate = hasGSAP && !reduceMotion;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
const ARROW_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.4"/></svg>';

$$('[data-config]').forEach(el => { const v = CONFIG[el.dataset.config]; if (v) el.textContent = v; });
$('#year').textContent = CONFIG.year;
if (CONFIG.instagram) { const ig = $('#igHeader'); ig.href = CONFIG.instagram; ig.hidden = false; }

/* =========================================================
   4) WHATSAPP
   ========================================================= */
function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message || CONFIG.whatsappMessage);
  const num = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
  return num ? `https://wa.me/${num}?text=${text}` : `https://wa.me/?text=${text}`;
}
function openWhatsApp(message) { window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer'); }
function bindWhatsApp(root = document) {
  $$('[data-whatsapp]', root).forEach(el => {
    if (el.tagName === 'A') { el.href = buildWhatsAppUrl(el.dataset.whatsapp); el.target = '_blank'; el.rel = 'noopener noreferrer'; }
    el.addEventListener('click', e => { e.preventDefault(); openWhatsApp(el.dataset.whatsapp); });
  });
}

/* =========================================================
   5) CONTEÚDO ESTÁTICO
   ========================================================= */
function formatPhone(n) {
  const d = String(n).replace(/\D/g, '');
  const m = d.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : '+' + d;
}
function renderStatic() {
  $('#servicesList').innerHTML = services.map((s, i) => `
    <li class="service"><span class="service-num">${pad(i + 1)}</span><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p><span class="service-arrow" aria-hidden="true">${ARROW_SVG}</span></li>`).join('');

  $('#whyList').innerHTML = reasons.map((r, i) => `
    <li class="why-item"><span class="n">${pad(i + 1)}</span><div><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></div></li>`).join('') + `
    <li class="why-item cta-cell"><span class="n">→</span><div><h3>Vamos tirar sua ideia do papel?</h3><p><a href="#contato" class="link-u">Fale comigo sobre o seu projeto</a></p></div></li>`;

  const channels = [{ label: 'WhatsApp', value: CONFIG.whatsappNumber ? formatPhone(CONFIG.whatsappNumber) : 'Iniciar conversa', href: buildWhatsAppUrl(), wa: true }];
  if (CONFIG.instagram) channels.push({ label: 'Instagram', value: '@' + CONFIG.instagram.replace(/\/+$/, '').split('/').pop().replace('@', ''), href: CONFIG.instagram });
  if (CONFIG.email) channels.push({ label: 'E-mail', value: CONFIG.email, href: 'mailto:' + CONFIG.email });
  $('#channels').innerHTML = channels.map(c => `
    <li><a class="channel" href="${esc(c.href)}" ${c.wa ? 'data-whatsapp' : ''} ${c.href.startsWith('mailto:') ? '' : 'target="_blank" rel="noopener noreferrer"'} data-cursor="Abrir">
      <span class="c-label">${esc(c.label)}</span><span class="c-value">${esc(c.value)}</span><span class="service-arrow" aria-hidden="true">${ARROW_SVG}</span>
    </a></li>`).join('');
}

/* =========================================================
   6) PRÉVIAS (mock gerado / screenshot / iframe)
   ========================================================= */
function themeStyle(p) {
  const t = p.theme || {};
  return `--m-bg:${t.bg};--m-fg:${t.fg};--m-ac:${t.accent};--m-btn:${t.button || t.accent};--m-btnfg:${t.buttonText || t.bg};--m-tint:${t.heroTint || '#1e120c'};--m-line:${(t.fg || '#000') + '26'}`;
}
function mockHero(p, lazy) {
  const m = p.mock || {};
  const im = (src, extra = '') => src ? `<img src="${esc(src)}" alt="" ${lazy ? 'loading="lazy"' : ''} decoding="async" onerror="this.remove()" ${extra}>` : '';
  return `
  <div class="mock mock--hero ${p.theme?.display === 'sans' ? 'sans' : ''}" style="${themeStyle(p)}" aria-hidden="true">
    <div class="mh-top ${p.theme?.heroDark ? 'mh-dark' : ''}">
      <div class="m-media">${im(p.image)}</div>
      <div class="m-nav">
        <span class="mh-logo"><b>${esc(m.logoTop || p.name)}</b>${m.logoSub ? `<small>${esc(m.logoSub)}</small>` : ''}</span>
        <span class="m-links">${(m.nav || []).map(n => `<span>${esc(n)}</span>`).join('')}</span>
        <span class="m-pill">${esc(m.pill || m.cta)}</span>
      </div>
      <div class="mh-copy">
        <div class="m-kicker">${esc(m.kicker)}</div>
        <div class="m-h">${esc(m.headline)} ${m.headlineEm ? `<em>${esc(m.headlineEm)}</em>` : ''}</div>
        <div class="m-p">${esc(m.text)}</div>
        <div class="m-btns"><span class="m-btn">${esc(m.cta)}</span>${m.cta2 ? `<span class="m-btn ghost">${esc(m.cta2)}</span>` : ''}</div>
      </div>
      ${m.aside ? `<div class="mh-aside"><small>${esc(m.aside[0])}</small><span>${esc(m.aside[1])}</span></div>` : ''}
    </div>
    ${m.photos ? `<div class="mh-sec">
      <div class="mh-sec-title">${esc(m.sectionTitle || '')}</div>
      <div class="mh-photos">${m.photos.map(ph => `<div class="mh-photo"><div>${im(ph[1])}</div><b>${esc(ph[0])}</b></div>`).join('')}</div>
    </div>` : ''}
  </div>`;
}
function mockDesktop(p, lazy) {
  const m = p.mock || {};
  if (m.layout === 'hero') return mockHero(p, lazy);
  const img = p.image ? `<img src="${esc(p.image)}" alt="" ${lazy ? 'loading="lazy"' : ''} decoding="async" onerror="this.remove()">` : '';
  return `
  <div class="mock ${m.layout === 'full' ? 'mock--full' : ''} ${p.theme?.display === 'serif' ? 'serif' : ''}" style="${themeStyle(p)}" aria-hidden="true">
    <div class="m-nav"><span class="m-logo">${esc(p.name)}</span><span class="m-links">${(m.nav || []).map(n => `<span>${esc(n)}</span>`).join('')}</span><span class="m-pill">${esc(m.cta)}</span></div>
    <div class="m-hero">
      <div class="m-copy">
        <div class="m-kicker">${esc(m.kicker)}</div>
        <div class="m-h">${esc(m.headline)}</div>
        <div class="m-p">${esc(m.text)}</div>
        <div class="m-btns"><span class="m-btn">${esc(m.cta)}</span><span class="m-btn ghost">Saiba mais</span></div>
      </div>
      <div class="m-media">${img}</div>
    </div>
    <div class="m-cards">${(m.cards || []).map(c => `<div class="m-card"><b>${esc(c[0])}</b><span>${esc(c[1])}</span></div>`).join('')}</div>
  </div>`;
}
/* Print automático do site publicado (serviço gratuito mShots). Se falhar, a prévia gerada aparece por baixo. */
function autoShot(url) { return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1600&h=1000`; }
function shotOf(p) { return p.screenshot || (p.autoScreenshot && p.url ? autoShot(p.url) : ''); }
function previewHTML(p, lazy) {
  const shot = shotOf(p);
  if (shot) return `<div class="sc-scale">${mockDesktop(p, lazy)}</div><img class="sc-shot" src="${esc(shot)}" alt="" ${lazy ? 'loading="lazy"' : ''} decoding="async" onerror="this.remove()">`;
  if (p.embed && p.url) return `<div class="sc-scale"><iframe src="${esc(p.url)}" title="Prévia ao vivo de ${esc(p.name)}" loading="lazy" tabindex="-1" sandbox="allow-scripts allow-same-origin" referrerpolicy="no-referrer"></iframe></div>`;
  return `<div class="sc-scale">${mockDesktop(p, lazy)}</div>`;
}
function buildLayer(p) {
  const el = document.createElement('div');
  el.className = 'sc-layer';
  el.innerHTML = previewHTML(p, false);
  return el;
}
function preloadImage(p) {
  if (!p) return;
  [shotOf(p), p.image, ...((p.mock && p.mock.photos) || []).map(x => x[1])].forEach(src => { if (src) { const i = new Image(); i.decoding = 'async'; i.src = src; } });
}

/* =========================================================
   7) SHOWCASE
   ========================================================= */
const els = {
  view: $('#scView'), layers: $('#scLayers'), info: $('#scInfo'), segments: $('#segments'), filters: $('#filters'),
  name: $('#pName'), catTop: $('#pCatTop'), desc: $('#pDesc'), tags: $('#pTags'), typeList: $('#pTypeList'),
  tag: $('#pTag'), status: $('#pStatus'), visit: $('#pVisit'), visitText: $('#pVisitText'), like: $('#pLike'),
  counter: $('#pCounter'), total: $('#pTotal'), nextName: $('#pNextName'), live: $('#scLive'),
  glow: $('#scGlow'), thumbs: $('#thumbs'), moreCount: $('#moreCount')
};
const state = { list: projects.slice(), index: 0, dir: 1, filter: 'Todos', animating: false, pending: null, swiped: false };
const current = () => state.list[state.index];

/* Escala das prévias (o mock é renderizado em 1280px e reduzido) */
function fitPreviews() {
  const w = els.view.clientWidth, h = els.view.clientHeight;
  const base = window.innerWidth <= 700 ? 860 : 1280; // no celular a prévia usa uma largura menor para o texto ficar legível
  const sc = w / base;
  els.view.style.setProperty('--mw', base + 'px');
  els.view.style.setProperty('--s', sc.toFixed(5));
  els.view.style.setProperty('--mh', Math.max(800, Math.ceil(h / sc)) + 'px');
  $$('.thumb-view', els.thumbs).forEach(v => v.style.setProperty('--ts', (v.clientWidth / 1280).toFixed(5)));
}
if ('ResizeObserver' in window) { const ro = new ResizeObserver(fitPreviews); ro.observe(els.view); ro.observe(els.thumbs); }
window.addEventListener('resize', fitPreviews, { passive: true });

/* Filtros (dentro do preview, como abas) */
function renderFilters() {
  const cats = ['Todos', ...new Set(projects.map(p => p.category))];
  els.filters.innerHTML = cats.map(c =>
    `<button class="chip ${c === state.filter ? 'is-active' : ''}" type="button" data-filter="${esc(c)}" aria-pressed="${c === state.filter}">${esc(c)}</button>`
  ).join('');
}
els.filters.addEventListener('click', e => {
  e.stopPropagation();
  const btn = e.target.closest('[data-filter]');
  if (!btn || btn.dataset.filter === state.filter) return;
  state.filter = btn.dataset.filter;
  const prev = current();
  state.list = state.filter === 'Todos' ? projects.slice() : projects.filter(p => p.category === state.filter);
  renderFilters(); renderSegments(); renderThumbs();
  const keep = state.list.indexOf(prev);
  if (keep > -1) { state.index = keep; updateProjectInfo(current(), keep); return; }
  state.index = -1;
  goTo(0, 1, true);
});

/* Segmentos de progresso */
function renderSegments() {
  els.segments.innerHTML = state.list.map((p, i) =>
    `<button class="seg ${i === state.index ? 'is-active' : ''}" type="button" role="tab" aria-selected="${i === state.index}" aria-label="Projeto ${i + 1}: ${esc(p.name)}" data-i="${i}"></button>`).join('');
  els.total.textContent = pad(state.list.length);
}
els.segments.addEventListener('click', e => {
  const b = e.target.closest('[data-i]');
  if (b) { const i = +b.dataset.i; if (i !== state.index) goTo(i, i > state.index ? 1 : -1); }
});

/* Miniaturas "Mais projetos" */
function renderThumbs() {
  els.thumbs.innerHTML = state.list.map((p, i) => `
    <button class="thumb ${i === state.index ? 'is-active' : ''}" type="button" data-i="${i}" aria-label="Ver projeto ${esc(p.name)}" data-cursor="Ver">
      <span class="thumb-view">${previewHTML(p, true)}</span>
      <span class="thumb-meta"><b>${esc(p.name)}</b><span>${esc(p.category)}</span></span>
    </button>`).join('');
  els.moreCount.textContent = `${state.list.length} ${state.list.length === 1 ? 'projeto' : 'projetos'}`;
  fitPreviews();
}
els.thumbs.addEventListener('click', e => {
  const t = e.target.closest('[data-i]');
  if (!t) return;
  const i = +t.dataset.i;
  const top = document.getElementById('projetos').getBoundingClientRect().top + window.scrollY - 78;
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  if (i !== state.index) goTo(i, i > state.index ? 1 : -1);
});

/* Número com efeito "roll" */
function rollNumber(el, text, dir) {
  const old = el.lastElementChild;
  if (old && old.textContent === text) return;
  if (!animate || !old) { el.innerHTML = `<span>${text}</span>`; return; }
  $$('span', el).slice(0, -1).forEach(s => s.remove());
  const neu = document.createElement('span');
  neu.textContent = text;
  neu.style.cssText = 'position:absolute;left:0;top:0';
  el.appendChild(neu);
  gsap.to(old, { yPercent: -100 * dir, duration: .5, ease: 'power3.inOut', onComplete: () => old.remove() });
  gsap.fromTo(neu, { yPercent: 100 * dir }, { yPercent: 0, duration: .6, ease: 'power3.out', delay: .05, onComplete: () => { neu.style.cssText = ''; } });
}

/* Atualiza nome, descrição, listas, botão, contador etc. */
function updateProjectInfo(p, i) {
  if (!p) return;
  const real = p.status === 'real';
  const soon = p.status === 'breve';
  const host = hostOf(p.url);
  els.name.textContent = p.name;
  els.catTop.textContent = p.category;
  els.desc.textContent = p.description;
  els.tags.innerHTML = (p.tags || []).slice(0, 4).map(t => `<li>${esc(t)}</li>`).join('');
  els.typeList.innerHTML = [p.type, p.category, p.location].filter(Boolean).map(t => `<li>${esc(t)}</li>`).join('');
  els.tag.textContent = host || (soon ? p.name + ' · em breve' : p.name);
  els.status.textContent = soon ? 'Em breve no ar' : real ? 'Projeto real' : 'Projeto conceitual';
  els.status.classList.toggle('is-real', real || soon);

  if (p.url) {
    els.visit.href = p.url;
    els.visit.removeAttribute('aria-disabled');
    els.visit.removeAttribute('tabindex');
    els.visitText.textContent = 'Visite o site';
    els.visit.setAttribute('aria-label', `Visitar o site ${p.name} (abre em nova aba)`);
    els.view.dataset.cursor = 'Abrir';
  } else {
    els.visit.removeAttribute('href');
    els.visit.setAttribute('aria-disabled', 'true');
    els.visit.setAttribute('tabindex', '-1');
    els.visitText.textContent = soon ? 'Em breve' : real ? 'Link em breve' : 'Conceito';
    els.visit.removeAttribute('aria-label');
    els.view.dataset.cursor = 'Arraste';
  }

  els.view.setAttribute('aria-label', `Prévia do site ${p.name} — ${p.category}`);
  rollNumber(els.counter, pad(i + 1), state.dir || 1);
  const next = state.list[(i + 1) % state.list.length];
  els.nextName.textContent = state.list.length > 1 ? next.name : '—';
  els.glow.style.setProperty('--glow-c', p.theme?.accent || '#7a4a22');

  $$('.seg', els.segments).forEach((s, k) => { s.classList.toggle('is-active', k === i); s.setAttribute('aria-selected', k === i); });
  $$('.thumb', els.thumbs).forEach((t, k) => t.classList.toggle('is-active', k === i));
  els.live.textContent = `Projeto ${i + 1} de ${state.list.length}: ${p.name}`;
}

/* Transição coordenada (respeita a direção) */
function animateProjectTransition({ oldL, newL, dir, onSwap }) {
  if (!animate) { oldL && oldL.remove(); onSwap(); return Promise.resolve(); }
  return new Promise(resolve => {
    const infoEls = $$('[data-anim]');
    const img = newL.querySelector('.sc-shot') || newL.querySelector('.m-media img');
    const tl = gsap.timeline({
      onComplete: () => { oldL && oldL.remove(); gsap.set([newL, ...infoEls], { clearProps: 'all' }); resolve(); }
    });
    // saída do texto
    tl.to(infoEls, { x: -18 * dir, opacity: 0, duration: .26, stagger: .03, ease: 'power2.in' }, 0);
    // saída do preview atual
    if (oldL) tl.to(oldL, { xPercent: -7 * dir, scale: .965, opacity: 0, filter: 'blur(5px)', duration: .6, ease: 'power3.inOut' }, 0);
    // entrada do novo preview
    tl.fromTo(newL,
      { clipPath: dir > 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)', xPercent: 9 * dir },
      { clipPath: 'inset(0% 0% 0% 0%)', xPercent: 0, duration: .8, ease: 'expo.out' }, .12);
    if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1, ease: 'expo.out', clearProps: 'transform' }, .12);
    // troca e entrada das informações em stagger
    tl.add(onSwap, .3);
    tl.fromTo(infoEls, { x: 22 * dir, opacity: 0 }, { x: 0, opacity: 1, duration: .55, stagger: .06, ease: 'power3.out', immediateRender: false }, .32);
  });
}

function renderProject(p, i, dir) {
  const oldL = els.layers.lastElementChild;
  const newL = buildLayer(p);
  els.layers.appendChild(newL);
  fitPreviews();
  return animateProjectTransition({ oldL, newL, dir, onSwap: () => updateProjectInfo(p, i) }).then(() => {
    preloadImage(state.list[(i + 1) % state.list.length]);
    preloadImage(state.list[(i - 1 + state.list.length) % state.list.length]);
  });
}

function goTo(newIndex, dir = 1, force = false) {
  const n = state.list.length;
  if (!n) return;
  newIndex = ((newIndex % n) + n) % n;
  if (newIndex === state.index && !force) return;
  if (state.animating) { state.pending = { newIndex, dir }; return; }
  state.animating = true;
  state.index = newIndex;
  state.dir = dir;
  renderProject(state.list[newIndex], newIndex, dir).then(() => {
    state.animating = false;
    if (state.pending) { const { newIndex: ni, dir: d } = state.pending; state.pending = null; goTo(ni, d); }
  });
}
function nextProject() { if (state.list.length > 1) goTo(state.index + 1, 1); }
function previousProject() { if (state.list.length > 1) goTo(state.index - 1, -1); }

$('#btnNext').addEventListener('click', nextProject);
$('#btnPrev').addEventListener('click', previousProject);
$('#nextLabel').addEventListener('click', nextProject);
els.like.addEventListener('click', () => {
  openWhatsApp(`Olá! Vi o projeto "${current().name}" no seu portfólio e gostaria de um site parecido para o meu negócio.`);
});

/* Swipe no celular */
function handleTouch() {
  let sx = 0, sy = 0, tracking = false;
  els.view.addEventListener('touchstart', e => { const t = e.touches[0]; sx = t.clientX; sy = t.clientY; tracking = true; state.swiped = false; }, { passive: true });
  els.view.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const t = e.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) { state.swiped = true; dx < 0 ? nextProject() : previousProject(); }
  }, { passive: true });
}
handleTouch();

/* Clique no preview abre o site */
els.view.addEventListener('click', () => {
  if (state.swiped) { state.swiped = false; return; }
  const p = current();
  if (p && p.url) window.open(p.url, '_blank', 'noopener,noreferrer');
});

/* Teclado */
document.addEventListener('keydown', e => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (['input', 'textarea', 'select'].includes(tag) || e.target.isContentEditable) return;
  if (e.key === 'Escape') { closeMenu(); return; }
  if (e.altKey || e.ctrlKey || e.metaKey || document.body.classList.contains('menu-open')) return;
  if (e.key === 'ArrowRight') { e.preventDefault(); nextProject(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); previousProject(); }
});

function initShowcase() {
  renderFilters(); renderSegments(); renderThumbs();
  els.layers.appendChild(buildLayer(current()));
  fitPreviews();
  updateProjectInfo(current(), 0);
  preloadImage(state.list[1]);
}

/* =========================================================
   8) MENU MOBILE
   ========================================================= */
const menu = $('#mobileMenu');
const toggle = $('#menuToggle');
function openMenu() {
  document.body.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Fechar menu');
  menu.inert = false;
}
function closeMenu() {
  if (!document.body.classList.contains('menu-open')) return;
  document.body.classList.remove('menu-open');
  document.body.style.overflow = '';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  menu.inert = true;
}
toggle.addEventListener('click', () => document.body.classList.contains('menu-open') ? closeMenu() : openMenu());
$$('nav a', menu).forEach(a => a.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); }, { passive: true });

/* Destaque do link atual no header */
const navLinks = $$('.center-nav a');
const sectionsForNav = navLinks.map(a => document.querySelector(a.getAttribute('href')));
window.addEventListener('scroll', () => {
  const y = window.scrollY + 140;
  let idx = 0;
  sectionsForNav.forEach((s, k) => { if (s && s.offsetTop <= y) idx = k; });
  navLinks.forEach((a, k) => a.classList.toggle('is-current', k === idx));
}, { passive: true });

/* =========================================================
   9) MICROINTERAÇÕES
   ========================================================= */
function initCursor() {
  if (!animate || !finePointer) return;
  const c = document.createElement('div');
  c.className = 'cursor';
  c.setAttribute('aria-hidden', 'true');
  c.innerHTML = '<span class="cursor-label"></span>';
  document.body.appendChild(c);
  const label = $('.cursor-label', c);
  const xTo = gsap.quickTo(c, 'x', { duration: .35, ease: 'power3' });
  const yTo = gsap.quickTo(c, 'y', { duration: .35, ease: 'power3' });
  window.addEventListener('pointermove', e => { xTo(e.clientX); yTo(e.clientY); c.classList.add('is-visible'); }, { passive: true });
  document.addEventListener('pointerover', e => {
    const lab = e.target.closest('[data-cursor]');
    const hov = e.target.closest('a, button');
    const useLabel = lab && !(hov && hov !== lab && lab.contains(hov));
    c.classList.toggle('is-label', !!useLabel);
    c.classList.toggle('is-hover', !useLabel && !!hov);
    if (useLabel) label.textContent = lab.dataset.cursor;
  });
  document.documentElement.addEventListener('pointerleave', () => c.classList.remove('is-visible'));
}

/* =========================================================
   10) ANIMAÇÕES
   ========================================================= */
function prepareIntro() {
  if (!animate) return;
  gsap.set('#header', { y: -16, opacity: 0 });
  gsap.set('[data-intro]', { y: 28, opacity: 0 });
}
function intro() {
  if (!animate) return;
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .to('#header', { y: 0, opacity: 1, duration: .9 }, 0)
    .to('[data-intro]', { y: 0, opacity: 1, duration: 1.1, stagger: .08, clearProps: 'transform' }, .1);
}
function initScrollAnimations() {
  if (!animate || !window.ScrollTrigger) return;
  $$('[data-reveal]').forEach(el => gsap.from(el, { y: 40, opacity: 0, duration: 1.05, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  $$('[data-reveal-stagger]').forEach(el => gsap.from(el.children, { y: 32, opacity: 0, duration: .9, stagger: .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));
  gsap.from('.thumb', { y: 30, opacity: 0, duration: .9, stagger: .06, ease: 'power3.out', scrollTrigger: { trigger: '#thumbs', start: 'top 90%', once: true } });
  const fill = $('#stepsFill');
  fill.style.setProperty('--p', 0);
  ScrollTrigger.create({ trigger: '#steps', start: 'top 75%', end: 'bottom 60%', scrub: .5, onUpdate: self => fill.style.setProperty('--p', self.progress.toFixed(3)) });
  gsap.from('[data-step]', { y: 30, opacity: 0, duration: .9, stagger: .14, ease: 'power3.out', scrollTrigger: { trigger: '#steps', start: 'top 80%', once: true } });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

/* =========================================================
   11) PRELOADER
   ========================================================= */
function runPreloader(done) {
  const pre = $('#preloader');
  if (!animate) { pre.remove(); done(); return; }
  const counter = { v: 0 };
  const out = $('#preloaderCount');
  gsap.timeline()
    .to(counter, { v: 100, duration: .9, ease: 'power2.inOut', onUpdate: () => { out.textContent = pad(Math.round(counter.v)); } }, 0)
    .to('#preloaderBar', { scaleX: 1, duration: .9, ease: 'power2.inOut' }, 0)
    .to(pre, { yPercent: -100, duration: .8, ease: 'expo.inOut' }, '+=0.05')
    .add(done, '-=0.45')
    .add(() => pre.remove());
}

/* =========================================================
   12) INIT
   ========================================================= */
renderStatic();
bindWhatsApp();
initShowcase();
prepareIntro();
initScrollAnimations();
runPreloader(intro);

})();
