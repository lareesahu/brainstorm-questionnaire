// ═══════════════════════════════════════════════════════════════
// THEMES — top-5 popular design styles, ready to drop into any board.
// Usage:
//   1. Copy this file's THEMES object + applyTheme() + renderThemes()
//      into your board's <script> (or include as a separate JS file).
//   2. Add a container in your controls bar: <div class="theme-row" id="themeRow"></div>
//   3. Style .theme-row / .theme-chip (see the CSS block at the bottom).
//   4. Call renderThemes() on load.
//
// The board must be var-driven: --bg, --surf, --text, --text2, --accent,
// --accent-ink, --rule, --muted, --h-font, --b-font, --radius, --borderw,
// --h-ls. Any board that uses these variables will re-theme instantly.
// ═══════════════════════════════════════════════════════════════

var THEMES = {
  apple: {
    label:'Apple', bg:'#FFFFFF', surf:'#F5F5F7', text:'#1D1D1F', text2:'#6E6E73',
    accent:'#0071E3', accentInk:'#FFFFFF', rule:'#D2D2D7', muted:'#86868B',
    hf:"system-ui,-apple-system,'SF Pro Display','Segoe UI',sans-serif",
    bf:"system-ui,-apple-system,'SF Pro Text','Segoe UI',sans-serif",
    radius:'12px', borderw:'1px', hls:'-0.01em'
  },
  noir: {
    label:'Noir', bg:'#0A0A0C', surf:'#1C1C1E', text:'#F5F5F7', text2:'#A1A1A6',
    accent:'#FF375F', accentInk:'#FFFFFF', rule:'#2C2C2E', muted:'#6E6E73',
    hf:"system-ui,-apple-system,'SF Pro Display','Segoe UI',sans-serif",
    bf:"system-ui,-apple-system,'SF Pro Text','Segoe UI',sans-serif",
    radius:'14px', borderw:'1px', hls:'-0.01em'
  },
  glass: {
    label:'Glass', bg:'linear-gradient(135deg,#667EEA 0%,#764BA2 100%)', surf:'rgba(255,255,255,0.16)',
    text:'#FFFFFF', text2:'rgba(255,255,255,0.7)', accent:'#FFFFFF', accentInk:'#3A2A66',
    rule:'rgba(255,255,255,0.28)', muted:'rgba(255,255,255,0.6)',
    hf:"system-ui,-apple-system,'SF Pro Display','Segoe UI',sans-serif",
    bf:"system-ui,-apple-system,'SF Pro Text','Segoe UI',sans-serif",
    radius:'20px', borderw:'1px', hls:'-0.02em'
  },
  brutal: {
    label:'Brutalist', bg:'#FFFFFF', surf:'#F5F1E8', text:'#111111', text2:'#555555',
    accent:'#FF4D00', accentInk:'#FFFFFF', rule:'#111111', muted:'#888888',
    hf:"'Courier New',Courier,monospace",
    bf:"system-ui,-apple-system,'Segoe UI',sans-serif",
    radius:'0px', borderw:'2px', hls:'0.02em'
  },
  editorial: {
    label:'Editorial', bg:'#FAF6EF', surf:'#F1EADD', text:'#1A1A1A', text2:'#6B6255',
    accent:'#B8452E', accentInk:'#FFFFFF', rule:'#E0D8C8', muted:'#A39A8A',
    hf:"Georgia,'Times New Roman',serif",
    bf:"system-ui,-apple-system,'Segoe UI',sans-serif",
    radius:'4px', borderw:'1px', hls:'-0.02em'
  }
};

function applyTheme(id){
  var t = THEMES[id]; if(!t) return;
  var r = document.documentElement.style;
  r.setProperty('--bg', t.bg); r.setProperty('--surf', t.surf);
  r.setProperty('--text', t.text); r.setProperty('--text2', t.text2);
  r.setProperty('--accent', t.accent); r.setProperty('--accent-ink', t.accentInk);
  r.setProperty('--rule', t.rule); r.setProperty('--muted', t.muted);
  r.setProperty('--h-font', t.hf); r.setProperty('--b-font', t.bf);
  r.setProperty('--radius', t.radius); r.setProperty('--borderw', t.borderw);
  r.setProperty('--h-ls', t.hls);
  try{ localStorage.setItem('board-theme', id); }catch(e){}
  document.querySelectorAll('.theme-chip').forEach(function(c){
    c.classList.toggle('on', c.dataset.theme === id);
  });
}
function renderThemes(){
  var row = document.getElementById('themeRow');
  if(!row) return;
  var html = '<span class="lbl">Theme</span>';
  Object.keys(THEMES).forEach(function(id){
    html += '<button class="theme-chip" data-theme="' + id + '" onclick="applyTheme(\'' + id + '\')">' + THEMES[id].label + '</button>';
  });
  row.innerHTML = html;
  var saved = 'apple';
  try{ saved = localStorage.getItem('board-theme') || 'apple'; }catch(e){}
  applyTheme(saved);
}

/* Minimal CSS for the theme row — add to your board's <style>:
.theme-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:10px 0 2px}
.theme-row .lbl{font-size:0.65rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--muted);margin-right:4px}
.theme-chip{padding:6px 14px;border-radius:980px;border:var(--borderw) solid var(--rule);background:var(--bg);font-size:0.72rem;cursor:pointer;font-family:inherit;color:var(--text);transition:all 0.15s}
.theme-chip:hover{border-color:var(--accent)}
.theme-chip.on{background:var(--accent);border-color:var(--accent);color:var(--accent-ink)}
*/
