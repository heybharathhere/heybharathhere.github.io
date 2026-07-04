/* =====================================================================
   Portfolio logic.  You normally won't need to edit this file —
   it reads everything from data.js and builds the page.
   ===================================================================== */

/* ---------- inline icons (stroke-based, inherit color) ---------- */
const ICONS = {
  github:'<path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" fill="currentColor" stroke="none"/>',
  linkedin:'<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" fill="currentColor" stroke="none"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  arrowUpRight:'<path d="M7 17 17 7M8 7h9v9"/>',
  chevronRight:'<path d="m9 6 6 6-6 6"/>',
  chevronDown:'<path d="m6 9 6 6 6-6"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  play:'<path d="M7 5v14l12-7z" fill="currentColor" stroke="none"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
  database:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
  transform:'<path d="M4 8h13m0 0-3.5-3.5M17 8l-3.5 3.5"/><path d="M20 16H7m0 0 3.5-3.5M7 16l3.5 3.5"/>',
  shield:'<path d="M12 3l7 3v5.5c0 4.2-3 7.3-7 8.5-4-1.2-7-4.3-7-8.5V6z"/><path d="M9 12l2 2 4-4"/>',
  load:'<path d="M12 3v10m0 0 3.5-3.5M12 13 8.5 9.5"/><path d="M5 16v2.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16"/>'
};
function icon(name, size){
  const s = size || 32;
  return `<svg viewBox="0 0 32 32" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`;
}
function esc(str){ return String(str==null?'':str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* ---------- number formatting for pipeline metrics ---------- */
function fmt(v, f){
  if(f==='compact'){
    if(v>=1e6) return (v/1e6).toFixed(2).replace(/\.?0+$/,'')+'M';
    if(v>=1e3) return Math.round(v/1e3)+'K';
    return Math.round(v).toString();
  }
  if(f==='pct1') return v.toFixed(1)+'%';
  if(f==='pct0') return Math.round(v)+'%';
  return Math.round(v).toLocaleString();
}

const D = PORTFOLIO;

/* =====================================================================
   NAV
   ===================================================================== */
function buildNav(){
  document.getElementById('brand').textContent = D.initials || (D.name ? D.name[0] : '·');

  const links = [];
  if(D.about && D.about.paragraphs && D.about.paragraphs.length) links.push(['about','About']);
  if(D.skills && D.skills.length) links.push(['skills','Skills']);
  if(D.projects && D.projects.length) links.push(['work','Work']);
  if(D.experience && D.experience.length) links.push(['experience','Experience']);
  links.push(['contact','Contact']);

  document.getElementById('navLinks').innerHTML = links.map(
    l => `<li><a class="nav-link" href="#${l[0]}" data-sec="${l[0]}">${l[1]}</a></li>`
  ).join('');

  document.getElementById('navToggle').innerHTML = icon('menu',20);
}

/* =====================================================================
   HERO
   ===================================================================== */
function buildHero(){
  const s = D.social || {};
  const socials = [
    s.github   && `<a href="${esc(s.github)}" target="_blank" rel="noopener" aria-label="GitHub">${icon('github',23)}</a>`,
    s.linkedin && `<a href="${esc(s.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin',23)}</a>`,
    s.email    && `<a href="mailto:${esc(s.email)}" aria-label="Email">${icon('mail',23)}</a>`
  ].filter(Boolean).join('');

  const resumeBtn = D.resumeUrl
    ? `<a href="${esc(D.resumeUrl)}" target="_blank" rel="noopener" class="btn btn-ghost">Resume ${icon('arrowUpRight',16)}</a>`
    : `<a href="#contact" class="btn btn-ghost">Get in touch</a>`;

  document.getElementById('top').innerHTML = `
    <div class="hero-inner">
      ${D.availability ? `<p class="eyebrow-badge"><span class="pulse-dot"></span>${esc(D.availability)}</p>` : ''}
      <h1 class="hero-name">${esc(D.name)}</h1>
      <p class="hero-role">${esc(D.role)}</p>
      <p class="hero-tagline">${esc(D.tagline)}</p>
      <div class="hero-cta">
        <a href="#work" class="btn btn-primary">View my work</a>
        ${resumeBtn}
      </div>
      ${socials ? `<div class="hero-social">${socials}</div>` : ''}
    </div>
    <a href="#about" class="scroll-cue" aria-label="Scroll down">${icon('chevronDown',22)}</a>`;
}

/* ---------- small helper for section headers ---------- */
function header(eyebrow, title, intro){
  return `<div class="reveal">
    <span class="eyebrow">${esc(eyebrow)}</span>
    <h2 class="section-title">${esc(title)}</h2>
    ${intro ? `<p class="section-intro">${esc(intro)}</p>` : ''}
  </div>`;
}

/* =====================================================================
   ABOUT
   ===================================================================== */
function buildAbout(){
  const el = document.getElementById('about');
  if(!(D.about && D.about.paragraphs && D.about.paragraphs.length)){ el.remove(); return; }
  const hl = (D.about.highlights||[]).map(h=>`
    <div class="highlight reveal">
      <div class="highlight-value">${esc(h.value)}</div>
      <div class="highlight-label">${esc(h.label)}</div>
    </div>`).join('');
  el.innerHTML = `<div class="wrap">
    <div class="about-grid">
      <div class="about-text reveal">
        <span class="eyebrow">About</span>
        <h2 class="section-title">A bit about me</h2>
        ${D.about.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}
      </div>
      ${hl ? `<div class="highlights">${hl}</div>` : ''}
    </div>
  </div>`;
}

/* =====================================================================
   SKILLS
   ===================================================================== */
function buildSkills(){
  const el = document.getElementById('skills');
  if(!(D.skills && D.skills.length)){ el.remove(); return; }
  const groups = D.skills.map(g=>`
    <div class="skill-group reveal">
      <h3>${esc(g.group)}</h3>
      <div class="chips">${(g.items||[]).map(i=>`<span class="chip">${esc(i)}</span>`).join('')}</div>
    </div>`).join('');
  el.innerHTML = `<div class="wrap">
    ${header('Skills','What I work with','A toolkit built around clean data and dependable checks.')}
    <div class="skills-grid">${groups}</div>
  </div>`;
}

/* =====================================================================
   PIPELINE (signature element)
   ===================================================================== */
function buildPipeline(){
  const el = document.getElementById('pipeline');
  const p = D.pipeline;
  if(!(p && p.stages && p.stages.length)){ el.remove(); return; }

  el.innerHTML = `<div class="wrap">
    ${header('Signature','The work, visualized','Instead of just listing skills — watch a validated data pipeline run.')}
    <div class="pipeline-shell reveal" id="pipelineShell">
      <div class="pipeline-launch" id="pipelineLaunch">
        <p>A live look at how data moves through extraction, transformation, and validation before it lands.</p>
        <button class="btn btn-primary" id="runPipeline">${icon('play',17)} Run pipeline</button>
      </div>
    </div>
  </div>`;

  document.getElementById('runPipeline').addEventListener('click', runPipeline);
}

function runPipeline(){
  const p = D.pipeline;
  const stages = p.stages.map((s,i)=>{
    const conn = i < p.stages.length-1
      ? `<div class="pconn"><span class="pdot" style="animation-delay:${(i*0.3).toFixed(1)}s"></span><span class="pdot" style="animation-delay:${(i*0.3+0.8).toFixed(1)}s"></span></div>`
      : '';
    return `<div class="pstage ${s.highlight?'hl':''}">
        <div class="pstage-icon">${icon(s.icon,26)}</div>
        <div class="pstage-label">${esc(s.label)}</div>
        <div class="pstage-sub">${esc(s.sub)}</div>
      </div>${conn}`;
  }).join('');

  const metrics = p.metrics.map(m=>`
    <div class="pmetric">
      <div class="pmetric-label">${esc(m.label)}</div>
      <div class="pmetric-value ${m.accent?'accent':''}" data-target="${m.value}" data-format="${m.format}">0</div>
    </div>`).join('');

  document.getElementById('pipelineShell').innerHTML = `
    <div class="pipeline-viz">
      <div class="pv-head">
        <span class="pv-title">Banking data pipeline</span>
        <span class="pv-badge"><span class="pv-live"></span>Live</span>
      </div>
      <div class="pipeline-flow">${stages}</div>
      <div class="pmetrics">${metrics}</div>
      <div class="pv-foot">${icon('clock',14)} Last run 2 min ago · next in 58 min</div>
    </div>`;

  document.querySelectorAll('.pmetric-value').forEach(countUp);
}

function countUp(el){
  const target = parseFloat(el.getAttribute('data-target'));
  const f = el.getAttribute('data-format');
  const dur = 1400; let start = null;
  function step(ts){
    if(!start) start = ts;
    const prog = Math.min((ts-start)/dur, 1);
    const eased = 1 - Math.pow(1-prog, 3);
    el.textContent = fmt(target*eased, f);
    if(prog < 1) requestAnimationFrame(step);
    else el.textContent = fmt(target, f);
  }
  requestAnimationFrame(step);
}

/* =====================================================================
   PROJECTS
   ===================================================================== */
function buildProjects(){
  const el = document.getElementById('work');
  if(!(D.projects && D.projects.length)){ el.remove(); return; }
  const cards = D.projects.map(pr=>{
    const tech = (pr.tech||[]).map(t=>`<span class="tech-pill">${esc(t)}</span>`).join('');
    const link = pr.link ? `<a href="${esc(pr.link)}" target="_blank" rel="noopener" class="project-link js-stop">View project ${icon('arrowUpRight',15)}</a>` : '';
    return `<article class="project reveal">
      <div class="project-top">
        <span class="project-tag">${esc(pr.tag)}</span>
        <span class="project-toggle">${icon('chevronRight',20)}</span>
      </div>
      <h3>${esc(pr.title)}</h3>
      <p class="project-summary">${esc(pr.summary)}</p>
      <div class="project-detail">
        <div class="detail-block"><div class="detail-label">Problem</div><p>${esc(pr.problem)}</p></div>
        <div class="detail-block"><div class="detail-label">Approach</div><p>${esc(pr.approach)}</p></div>
        <div class="detail-block"><div class="detail-label">Result</div><p>${esc(pr.result)}</p></div>
        ${tech ? `<div class="project-tech">${tech}</div>` : ''}
        ${link}
      </div>
    </article>`;
  }).join('');
  el.innerHTML = `<div class="wrap">
    ${header('Work','Selected case studies','Click any card to see the problem, approach, and result.')}
    <div class="projects-grid">${cards}</div>
  </div>`;

  el.querySelectorAll('.project').forEach(card=>{
    card.addEventListener('click', e=>{
      if(e.target.closest('.js-stop')) return; // let links work without toggling
      card.classList.toggle('open');
    });
  });
}

/* =====================================================================
   EXPERIENCE
   ===================================================================== */
function buildExperience(){
  const el = document.getElementById('experience');
  if(!(D.experience && D.experience.length)){ el.remove(); return; }
  const items = D.experience.map(x=>`
    <div class="tl-item reveal">
      <div class="tl-period">${esc(x.period)}</div>
      <div class="tl-role">${esc(x.role)}</div>
      <div class="tl-company">${esc(x.company)}</div>
      <ul class="tl-points">${(x.points||[]).map(pt=>`<li>${esc(pt)}</li>`).join('')}</ul>
    </div>`).join('');
  el.innerHTML = `<div class="wrap">
    ${header('Experience','Where I\'ve worked','')}
    <div class="timeline">${items}</div>
  </div>`;
}

/* =====================================================================
   CONTACT + FOOTER
   ===================================================================== */
function buildContact(){
  const c = D.contact || {};
  const s = D.social || {};
  const socials = [
    s.github   && `<a href="${esc(s.github)}" target="_blank" rel="noopener" aria-label="GitHub">${icon('github',21)}</a>`,
    s.linkedin && `<a href="${esc(s.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin',21)}</a>`,
    (c.email||s.email) && `<a href="mailto:${esc(c.email||s.email)}" aria-label="Email">${icon('mail',21)}</a>`
  ].filter(Boolean).join('');

  document.getElementById('contact').innerHTML = `<div class="wrap">
    <div class="reveal">
      <span class="eyebrow" style="justify-content:center">Contact</span>
      <h2 class="section-title">${esc(c.heading||'Get in touch')}</h2>
      <p class="contact-text">${esc(c.text||'')}</p>
      ${(c.email||s.email) ? `<a href="mailto:${esc(c.email||s.email)}" class="btn btn-primary">${icon('mail',17)} ${esc(c.email||s.email)}</a>` : ''}
      ${socials ? `<div class="contact-social">${socials}</div>` : ''}
    </div>
  </div>`;

  document.getElementById('footerText').textContent =
    `© ${new Date().getFullYear()} ${D.name} · Built and deployed on GitHub Pages`;
}

/* =====================================================================
   INTERACTIONS: reveal on scroll, sticky nav, mobile menu
   ===================================================================== */
function setupReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

function setupNav(){
  const nav = document.getElementById('nav');
  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links.map(l=>document.getElementById(l.dataset.sec)).filter(Boolean);

  function onScroll(){
    nav.classList.toggle('scrolled', window.scrollY > 10);
    let current = '';
    const y = window.scrollY + 120;
    sections.forEach(sec=>{ if(sec.offsetTop <= y) current = sec.id; });
    links.forEach(l=>l.classList.toggle('active', l.dataset.sec === current));
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  // mobile menu
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navLinks');
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = icon(open?'close':'menu',20);
  });
  menu.addEventListener('click', e=>{
    if(e.target.closest('.nav-link')){
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.innerHTML = icon('menu',20);
    }
  });
}

/* =====================================================================
   INIT
   ===================================================================== */
document.addEventListener('DOMContentLoaded', ()=>{
  buildNav();
  buildHero();
  buildAbout();
  buildSkills();
  buildPipeline();
  buildProjects();
  buildExperience();
  buildContact();
  setupReveal();
  setupNav();
});
