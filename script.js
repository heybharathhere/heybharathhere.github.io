/* =====================================================================
   Portfolio logic. You edit content in data.js — not here.
   Feature on/off switches also live in data.js (the "features" block).
   ===================================================================== */

/* ---------- inline icons ---------- */
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
  palette:'<circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" stroke="none"/><path d="M12 2a10 10 0 1 0 0 20c1.66 0 2-1.34 2-2 0-.5-.2-.96-.53-1.29-.32-.32-.47-.75-.47-1.21a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8z"/>',
  send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
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
function pick(list){ return list[Math.floor(Math.random()*list.length)]; }

const D = PORTFOLIO;

/* ---------- FEATURE SWITCHES (defaults; overridden by data.js "features") ---------- */
const FEATURES = Object.assign({
  astronaut:true, fallingStars:true, game:true, fortuneCookie:true,
  moodSwitcher:true, secretChapter:true, secretMessageBox:true,
  sectionArrows:true, moonUnlocksChapter:true, astronautChallenge:true, dayNight:false
}, D.features || {});

/* ---------- shared section header (with the animated scroll arrow between blocks) ---------- */
function header(eyebrow, title, intro){
  return `<div class="reveal">
    <span class="eyebrow">${esc(eyebrow)}</span>
    <h2 class="section-title">${esc(title)}</h2>
    ${intro ? `<p class="section-intro">${esc(intro)}</p>` : ''}
  </div>`;
}

/* ---------- toast ---------- */
function toast(msg){
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.classList.add('show'));
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=> t.remove(), 400); }, 2600);
}

/* =====================================================================
   NAV
   ===================================================================== */
function buildNav(){
  const brand = document.getElementById('brand');
  if(D.logo){
    brand.innerHTML = `<img class="brand-logo" src="${esc(D.logo)}" alt="${esc(D.name)}">`;
    brand.classList.add('brand-has-logo');
  } else {
    brand.textContent = D.initials || (D.name ? D.name[0] : '\u00b7');
  }
  // NOTE: the Secret Chapter is intentionally NOT in the nav — it unlocks by scrolling.
  const links = [];
  if(D.about && D.about.paragraphs && D.about.paragraphs.length) links.push(['about','About']);
  if(D.skills && D.skills.length) links.push(['skills','Skills']);
  if(D.projects && D.projects.length) links.push(['work','Work']);
  if(D.experience && D.experience.length) links.push(['experience','Experience']);
  if(FEATURES.game || (FEATURES.fortuneCookie && D.fortunes && D.fortunes.length)) links.push(['play','Play']);
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

/* =====================================================================
   ABOUT / SKILLS / PIPELINE / PROJECTS / EXPERIENCE
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
      ? `<div class="pconn"><span class="pdot" style="animation-delay:${(i*0.3).toFixed(1)}s"></span><span class="pdot" style="animation-delay:${(i*0.3+0.8).toFixed(1)}s"></span></div>` : '';
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
    if(prog < 1) requestAnimationFrame(step); else el.textContent = fmt(target, f);
  }
  requestAnimationFrame(step);
}

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
    card.addEventListener('click', e=>{ if(e.target.closest('.js-stop')) return; card.classList.toggle('open'); });
  });
}

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
   FUN & GAMES (Tic-Tac-Toe + Fortune Cookie) — toggleable
   ===================================================================== */
function buildPlay(){
  const el = document.getElementById('play');
  const hasGame = FEATURES.game;
  const hasFortune = FEATURES.fortuneCookie && D.fortunes && D.fortunes.length;
  if(!hasGame && !hasFortune){ if(el) el.remove(); return; }

  const gameCard = hasGame ? `
    <div class="play-card reveal">
      <h3>Tic-Tac-Toe</h3>
      <p class="play-sub">You're X. Beat the machine — if you can. Try Hard mode.</p>
      <div class="ttt-controls">
        <div class="ttt-diff" id="tttDiff">
          <button data-diff="easy" class="on">Easy</button>
          <button data-diff="hard">Hard</button>
        </div>
      </div>
      <div class="ttt-board" id="tttBoard"></div>
      <div class="ttt-msg" id="tttMsg">Your move.</div>
      <button class="btn btn-ghost ttt-reset" id="tttReset">Restart</button>
    </div>` : '';

  const fortuneCard = hasFortune ? `
    <div class="play-card reveal">
      <h3>Digital Fortune Cookie</h3>
      <p class="play-sub">A little something for your day.</p>
      <div class="fortune">
        <div class="fortune-cookie" id="fortuneCookie" title="Crack it open" role="button" tabindex="0">\ud83e\udd60</div>
        <p class="fortune-text" id="fortuneText"></p>
        <p class="fortune-hint">tap the cookie for another</p>
      </div>
    </div>` : '';

  el.innerHTML = `<div class="wrap">
    ${header('Take a break','Fun & Games','A couple of little things I built into the site for fun.')}
    <div class="play-grid ${(hasGame&&hasFortune)?'':'one'}">${gameCard}${fortuneCard}</div>
  </div>`;

  if(hasGame) initGame();
  if(hasFortune) initFortune();
}

function initGame(){
  const boardEl = document.getElementById('tttBoard');
  const msgEl = document.getElementById('tttMsg');
  const diffEl = document.getElementById('tttDiff');
  const resetBtn = document.getElementById('tttReset');
  const LINES=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let board, over, difficulty='easy';

  function winnerOf(b){
    for(const line of LINES){ const a=line[0],c=line[1],d=line[2]; if(b[a] && b[a]===b[c] && b[a]===b[d]) return {who:b[a],line:line}; }
    return null;
  }
  function minimax(b, isAI){
    const w=winnerOf(b);
    if(w) return { score: w.who==='O'?10:-10, index:-1 };
    if(b.every(Boolean)) return { score:0, index:-1 };
    let best = { score: isAI?-Infinity:Infinity, index:-1 };
    for(let i=0;i<9;i++){
      if(!b[i]){
        b[i]=isAI?'O':'X';
        const s=minimax(b,!isAI).score;
        b[i]='';
        if(isAI ? s>best.score : s<best.score) best={score:s,index:i};
      }
    }
    return best;
  }
  function aiMove(){
    const empties=[]; board.forEach((v,i)=>{ if(!v) empties.push(i); });
    if(!empties.length) return;
    let idx;
    if(difficulty==='hard'){ idx = minimax(board.slice(), true).index; if(idx<0) idx=pick(empties); }
    else { idx = pick(empties); }
    board[idx]='O';
  }
  function render(winLine){
    boardEl.innerHTML = board.map((v,i)=>{
      const cls = v==='X'?'x':(v==='O'?'o':'');
      const filled = v?'filled':'';
      const win = winLine && winLine.indexOf(i)>-1 ? 'win' : '';
      return `<div class="ttt-cell ${cls} ${filled} ${win}" data-i="${i}">${v?`<span class="mark">${v}</span>`:''}</div>`;
    }).join('');
  }
  function finish(result){
    over=true;
    if(result==='X') msgEl.textContent = pick(D.game.winPhrases);
    else if(result==='O') msgEl.textContent = pick(D.game.losePhrases);
    else msgEl.textContent = pick(D.game.drawPhrases);
  }
  function playAt(i){
    if(over || board[i]) return;
    board[i]='X';
    let w=winnerOf(board);
    if(w){ render(w.line); return finish('X'); }
    if(board.every(Boolean)){ render(); return finish('draw'); }
    aiMove();
    w=winnerOf(board);
    if(w){ render(w.line); return finish('O'); }
    render();
    if(board.every(Boolean)) return finish('draw');
    msgEl.textContent='Your move.';
  }
  function reset(){ board=Array(9).fill(''); over=false; msgEl.textContent='Your move.'; render(); }

  boardEl.addEventListener('click', e=>{
    const cell=e.target.closest('.ttt-cell'); if(!cell) return;
    playAt(parseInt(cell.dataset.i,10));
  });
  diffEl.addEventListener('click', e=>{
    const b=e.target.closest('button'); if(!b) return;
    difficulty=b.dataset.diff;
    Array.prototype.forEach.call(diffEl.children, c=>c.classList.toggle('on', c===b));
    reset();
  });
  resetBtn.addEventListener('click', reset);
  reset();
}

function initFortune(){
  const cookie=document.getElementById('fortuneCookie');
  const text=document.getElementById('fortuneText');
  const list=D.fortunes;
  let last=-1;
  function show(){
    let i=Math.floor(Math.random()*list.length);
    if(list.length>1 && i===last) i=(i+1)%list.length;
    last=i;
    text.style.animation='none'; void text.offsetWidth; text.style.animation='pop .3s ease';
    text.textContent = list[i];
  }
  cookie.addEventListener('click', show);
  cookie.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); show(); } });
  show();
}

/* =====================================================================
   SECRET CHAPTER OF ME — hidden until unlocked (scroll to bottom, or click the moon)
   ===================================================================== */
function buildSecret(){
  const el = document.getElementById('secret');
  const sc = D.secretChapter;
  if(!FEATURES.secretChapter || !(sc && sc.passions && sc.passions.length)){ if(el) el.remove(); return; }

  const cards = sc.passions.map(p=>`
    <div class="passion reveal">
      <div class="passion-emoji">${esc(p.emoji)}</div>
      <div><h3>${esc(p.title)}</h3><p>${esc(p.note)}</p></div>
    </div>`).join('');

  const msgBox = FEATURES.secretMessageBox ? `
    <div class="secret-msg reveal">
      <h3>Secret Message Box</h3>
      <p class="sm-sub">${esc(sc.messagePrompt || 'Leave a secret, a note, or just say hi — no name needed.')}</p>
      <div class="sm-form">
        <textarea class="sm-input" id="smInput" maxlength="280" placeholder="Type your secret and send it into the stars..."></textarea>
        <div class="sm-actions">
          <button class="btn btn-primary" id="smSend">${icon('send',16)} Send to the stars</button>
          <span class="sm-confirm" id="smConfirm">${esc(sc.messageConfirm || 'Your secret is safe among the stars. \u2728')}</span>
        </div>
      </div>
      <div class="sm-wall">
        <div class="sm-wall-label">${icon('clock',14)} Secret wall</div>
        <div class="sm-wall-msg" id="smWall"></div>
      </div>
    </div>` : '';

  el.innerHTML = `<div class="wrap">
    ${header('Off the clock','Secret Chapter of Me', sc.intro || '')}
    <p class="secret-note">You found this by exploring all the way down. Welcome. \ud83c\udf19</p>
    <div class="secret-grid">${cards}</div>
    ${msgBox}
  </div>`;

  if(FEATURES.secretMessageBox) initSecretMessages();
}

function initSecretMessages(){
  const input = document.getElementById('smInput');
  const send = document.getElementById('smSend');
  const confirmEl = document.getElementById('smConfirm');
  const wall = document.getElementById('smWall');
  const seeds = (D.secretChapter && D.secretChapter.wallSeeds) || [];
  function load(){ try{ return JSON.parse(localStorage.getItem('secretMessages')||'[]'); }catch(e){ return []; } }
  function save(a){ try{ localStorage.setItem('secretMessages', JSON.stringify(a)); }catch(e){} }
  let all = seeds.concat(load());
  let wi = 0;
  function rotate(){
    if(!all.length){ wall.textContent = 'Be the first to leave a secret.'; return; }
    wall.style.opacity = '0';
    setTimeout(()=>{ wall.textContent = '\u201c' + all[wi % all.length] + '\u201d'; wall.style.opacity = '1'; wi++; }, 300);
  }
  rotate();
  setInterval(rotate, 4500);
  function submit(){
    const v = (input.value||'').trim();
    if(!v) return;
    const mine = load(); mine.push(v); save(mine);
    all = seeds.concat(mine);
    input.value = '';
    confirmEl.classList.add('show');
    setTimeout(()=> confirmEl.classList.remove('show'), 3200);
  }
  send.addEventListener('click', submit);
  input.addEventListener('keydown', e=>{ if((e.metaKey||e.ctrlKey) && e.key==='Enter'){ e.preventDefault(); submit(); } });
}

let SECRET_UNLOCKED = false;
function revealSecret(scrollTo){
  const sec = document.getElementById('secret');
  if(!sec) return;
  if(!SECRET_UNLOCKED){
    SECRET_UNLOCKED = true;
    sec.classList.add('unlocked');
    sec.querySelectorAll('.reveal').forEach(el=> el.classList.add('in'));
    toast('\u2728 You found the Secret Chapter');
  }
  if(scrollTo){ setTimeout(()=> sec.scrollIntoView({behavior:'smooth', block:'start'}), 140); }
}
function setupSecretGate(){
  const sec = document.getElementById('secret');
  if(!sec) return;
  function check(){
    if(SECRET_UNLOCKED) return;
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight - 60){
      revealSecret(false);
      window.removeEventListener('scroll', check);
    }
  }
  window.addEventListener('scroll', check, { passive:true });
  setTimeout(check, 700);
}

/* =====================================================================
   MOOD PALETTE SWITCHER — toggleable
   ===================================================================== */
function initMood(){
  const wrap = document.getElementById('mood');
  const moods = (D.moods && D.moods.length) ? D.moods : null;
  if(!FEATURES.moodSwitcher || !moods || !wrap){ if(wrap) wrap.remove(); return; }
  const btn = document.getElementById('moodBtn');
  const panel = document.getElementById('moodPanel');

  btn.innerHTML = icon('palette',22);
  panel.innerHTML = `<div class="mood-title">Pick a mood</div>` + moods.map((m,i)=>`
    <button class="mood-opt" data-i="${i}">
      <span class="mood-swatch" style="background:linear-gradient(135deg, ${esc(m.accent)}, ${esc(m.accent2)})"></span>
      ${esc(m.name)}
    </button>`).join('');

  function apply(m){
    const r=document.documentElement.style;
    if(m.accent)  r.setProperty('--accent', m.accent);
    if(m.accent2) r.setProperty('--accent-2', m.accent2);
    if(m.bg)      r.setProperty('--bg', m.bg);
    try{ localStorage.setItem('portfolioMood', m.name); }catch(e){}
  }
  try{ const saved=localStorage.getItem('portfolioMood'); if(saved){ const m=moods.find(x=>x.name===saved); if(m) apply(m); } }catch(e){}

  btn.addEventListener('click', e=>{ e.stopPropagation(); panel.classList.toggle('open'); });
  panel.addEventListener('click', e=>{ const b=e.target.closest('.mood-opt'); if(!b) return; apply(moods[parseInt(b.dataset.i,10)]); panel.classList.remove('open'); });
  document.addEventListener('click', ()=> panel.classList.remove('open'));
}

/* =====================================================================
   PEEK-A-BOO ASTRONAUT + MOON — draggable, gravity-tethered "spacewalk"
   ===================================================================== */
function initAstronaut(){
  const space = document.getElementById('astroSpace');
  if(!space){ return; }
  const moon = document.getElementById('moon');
  const astro = document.getElementById('astro');
  if(!moon || !astro){ return; }

  const reduce = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) || false;
  function W(){ return window.innerWidth; }
  function H(){ return window.innerHeight; }
  const MW = moon.offsetWidth || 54,  MH = moon.offsetHeight || 54;
  const AW = astro.offsetWidth || 92,  AH = astro.offsetHeight || 144;
  const margin = 10;
  const offX = -6, offY = 116;   // astronaut hangs below the moon

  let m = { x: W()-MW/2-46, y: 118 };
  let a = { x: m.x+offX, y: m.y+offY };
  let mv = { x:0, y:0 }, av = { x:0, y:0 };
  let drag = null, grab = { x:0, y:0 }, down = { x:0, y:0 };

  function clampC(c,w,h){
    c.x = Math.max(w/2+margin, Math.min(W()-w/2-margin, c.x));
    c.y = Math.max(h/2+margin, Math.min(H()-h/2-margin, c.y));
  }
  function place(el,c,w,h,rot){
    el.style.transform = `translate(${(c.x-w/2).toFixed(1)}px, ${(c.y-h/2).toFixed(1)}px)` + (rot?` rotate(${rot.toFixed(1)}deg)`:'');
  }
  clampC(m,MW,MH); clampC(a,AW,AH); place(moon,m,MW,MH); place(astro,a,AW,AH);

  function startDrag(which, el){
    return function(e){
      drag = which;
      const c = which==='moon' ? m : a;
      grab.x = e.clientX - c.x; grab.y = e.clientY - c.y;
      down.x = e.clientX; down.y = e.clientY;
      if(el.setPointerCapture){ try{ el.setPointerCapture(e.pointerId); }catch(err){} }
      el.classList.add('grabbing');
    };
  }
  function onMove(e){
    if(!drag) return;
    const c = drag==='moon' ? m : a;
    c.x = e.clientX - grab.x; c.y = e.clientY - grab.y;
    if(drag==='moon') clampC(m,MW,MH); else clampC(a,AW,AH);
  }
  function onUp(e){
    if(!drag) return;
    const wasMoon = drag==='moon';
    const el = wasMoon ? moon : astro;
    el.classList.remove('grabbing');
    if(el.releasePointerCapture){ try{ el.releasePointerCapture(e.pointerId); }catch(err){} }
    const dist = Math.hypot((e.clientX||down.x)-down.x, (e.clientY||down.y)-down.y);
    drag = null;
    if(dist < 6){ // treated as a click, not a drag
      if(wasMoon && FEATURES.moonUnlocksChapter) revealSecret(true);
      else if(!wasMoon && FEATURES.astronautChallenge && document.getElementById('play')){
        toast(pick(['Astronaut: think you can beat me? \ud83d\ude80','Astronaut: I challenge you to Tic-Tac-Toe! \ud83e\udd16']));
        setTimeout(()=>{ const pl=document.getElementById('play'); if(pl) pl.scrollIntoView({behavior:'smooth',block:'start'}); }, 200);
      }
    }
  }

  moon.addEventListener('pointerdown', startDrag('moon', moon));
  astro.addEventListener('pointerdown', startDrag('astro', astro));
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointercancel', onUp);
  window.addEventListener('resize', ()=>{ clampC(m,MW,MH); clampC(a,AW,AH); });

  let t = 0, lastStar = 0;
  function frame(ts){
    t++;
    // MOON: follow finger while dragging, else drift slowly to nearest wall + gentle bob
    if(drag==='moon'){ mv.x=0; mv.y=0; }
    else {
      const wallX = (m.x < W()/2) ? (MW/2+margin) : (W()-MW/2-margin);
      mv.x += (wallX - m.x) * 0.012;
      if(!reduce) mv.y += Math.sin(t*0.02) * 0.25;
      mv.x *= 0.9; mv.y *= 0.9;
      m.x += mv.x; m.y += mv.y; clampC(m,MW,MH);
    }
    // ASTRONAUT: pulled by the moon's "gravity" (spring tether)
    const tx = m.x + offX, ty = m.y + offY;
    if(drag==='astro'){ av.x=0; av.y=0; }
    else {
      av.x += (tx - a.x) * 0.055; av.y += (ty - a.y) * 0.055;
      av.x *= 0.8; av.y *= 0.8;
      a.x += av.x; a.y += av.y; clampC(a,AW,AH);
    }
    const tilt = Math.max(-14, Math.min(14, av.x * 2.2));
    place(moon, m, MW, MH);
    place(astro, a, AW, AH, tilt);

    // occasional falling stars from the astronaut
    if(FEATURES.fallingStars && !reduce && ts-lastStar > 1500 && (Math.abs(av.x)+Math.abs(av.y) > 0.35 || Math.random() < 0.25)){
      lastStar = ts; dropStar(a.x + (Math.random()*20-10), a.y + AH*0.15);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function dropStar(x,y){
    const s = document.createElement('span');
    s.className = 'astro-star'; s.textContent = '\u2726';
    s.style.left = (x - 6) + 'px'; s.style.top = (y - 6) + 'px';
    space.appendChild(s);
    setTimeout(()=> s.remove(), 1400);
  }
}

/* =====================================================================
   Section arrows, day/night, reveal, sticky nav
   ===================================================================== */
function addSectionCues(){
  if(!FEATURES.sectionArrows) return;
  const order = ['about','skills','pipeline','work','experience','play','contact'];
  const ids = order.filter(id => document.getElementById(id));
  for(let i=0;i<ids.length-1;i++){
    const el = document.getElementById(ids[i]);
    const wrap = el.querySelector('.wrap') || el;
    const a = document.createElement('a');
    a.className = 'section-cue'; a.href = '#' + ids[i+1];
    a.setAttribute('aria-label','Scroll to next section');
    a.innerHTML = icon('chevronDown',24);
    wrap.appendChild(a);
  }
}

function applyDayNight(){
  if(!FEATURES.dayNight) return;
  const moon = document.getElementById('moon');
  if(!moon) return;
  const h = new Date().getHours();
  moon.classList.toggle('sun', h>=6 && h<18);
}

function setupReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold:0.12, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
}

function setupNav(){
  const nav = document.getElementById('nav');
  const links = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  const sections = links.map(l=> document.getElementById(l.dataset.sec)).filter(Boolean);
  function onScroll(){
    nav.classList.toggle('scrolled', window.scrollY > 10);
    let current = '';
    const y = window.scrollY + 120;
    sections.forEach(sec=>{ if(sec.offsetTop <= y) current = sec.id; });
    links.forEach(l=> l.classList.toggle('active', l.dataset.sec === current));
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navLinks');
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = icon(open?'close':'menu',20);
  });
  menu.addEventListener('click', e=>{
    if(e.target.closest('.nav-link')){ menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.innerHTML = icon('menu',20); }
  });
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
  document.getElementById('footerText').textContent = `\u00a9 ${new Date().getFullYear()} ${D.name} \u00b7 Built and deployed on GitHub Pages`;
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
  buildPlay();
  buildContact();
  buildSecret();
  initMood();
  addSectionCues();
  applyDayNight();
  if(FEATURES.astronaut) initAstronaut();
  else { const sp = document.getElementById('astroSpace'); if(sp) sp.remove(); }
  setupSecretGate();
  setupReveal();
  setupNav();
});
