// ═══════════════════════════════════════════════════════════════
// THEMES — top-5 popular design styles + corner dropdown switcher.
// Usage:
//   1. Copy this file's THEMES object + applyTheme() + toggleDD() +
//      renderThemes() into your board's <script>.
//   2. Add the fixed corner button + menu container (below).
//   3. Style .theme-dd / .theme-dd-btn / .theme-dd-menu / .theme-item
//      (see the CSS block at the bottom).
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
  neon: {
    label:'Neon', bg:'radial-gradient(1100px 700px at 85% -10%, rgba(0,229,255,0.14), transparent 60%), #0B0E14',
    surf:'#121826', text:'#EAF6FF', text2:'#8FA3C0',
    accent:'#00E5FF', accentInk:'#001018', rule:'#1E2A3F', muted:'#5C6F8C',
    hf:"system-ui,-apple-system,'SF Pro Display','Segoe UI',sans-serif",
    bf:"system-ui,-apple-system,'SF Pro Text','Segoe UI',sans-serif",
    radius:'10px', borderw:'1px', hls:'-0.01em'
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
  var lbl = document.getElementById('themeDDLabel');
  if(lbl) lbl.textContent = t.label;
  document.querySelectorAll('.theme-item').forEach(function(it){
    it.classList.toggle('on', it.dataset.theme === id);
  });
  var dd = document.getElementById('themeDD');
  if(dd) dd.classList.remove('open');
}
function toggleDD(e){
  if(e) e.stopPropagation();
  document.getElementById('themeDD').classList.toggle('open');
}
document.addEventListener('click', function(){
  document.getElementById('themeDD').classList.remove('open');
});
function renderThemes(){
  var menu = document.getElementById('themeDDMenu');
  if(!menu) return;
  var html = '';
  Object.keys(THEMES).forEach(function(id){
    html += '<button class="theme-item" data-theme="' + id + '" onclick="applyTheme(\'' + id + '\')"><span class="theme-dot" style="background:' + THEMES[id].accent + '"></span>' + THEMES[id].label + '</button>';
  });
  menu.innerHTML = html;
  var saved = 'apple';
  try{ saved = localStorage.getItem('board-theme') || 'apple'; }catch(e){}
  applyTheme(saved);
}

/* HTML — fixed corner button + menu (place just before </body>):
<div class="theme-dd" id="themeDD">
  <button class="theme-dd-btn" onclick="toggleDD(event)">🎨 <span id="themeDDLabel">Apple</span> ▾</button>
  <div class="theme-dd-menu" id="themeDDMenu"></div>
</div>
*/

/* Minimal CSS — add to your board's <style>:
.theme-dd{position:fixed;bottom:16px;right:16px;z-index:300}
.theme-dd-btn{display:flex;align-items:center;gap:6px;padding:9px 16px;border-radius:980px;border:var(--borderw) solid var(--rule);background:var(--surf);color:var(--text);font-size:0.75rem;font-weight:600;font-family:inherit;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,0.14);transition:all 0.15s}
.theme-dd-btn:hover{border-color:var(--accent)}
.theme-dd-menu{position:absolute;bottom:calc(100% + 8px);right:0;min-width:172px;background:var(--surf);border:var(--borderw) solid var(--rule);border-radius:var(--radius);padding:6px;box-shadow:0 8px 24px rgba(0,0,0,0.18);display:none}
.theme-dd.open .theme-dd-menu{display:block}
.theme-item{display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;border:none;background:transparent;color:var(--text);font-size:0.78rem;font-family:inherit;cursor:pointer;border-radius:8px;text-align:left}
.theme-item:hover{background:var(--bg)}
.theme-item.on{color:var(--accent);font-weight:700}
.theme-dot{width:12px;height:12px;border-radius:50%;border:1px solid var(--rule);flex-shrink:0}
*/
