/* ---------- DATOS DE LA CARTA ----------
   Sacados del menú online OFICIAL y en vivo (menu.fu.do/cafeterianatsuko,
   verificado el 08-09-2026) — precios reales. La carta completa tiene más
   de 200 ítems (incluye ~150 combinaciones de rolls de sushi armables), así
   que acá se muestra una selección representativa por categoría; el botón
   "ver la carta completa" en la sección Carta linkea al menú online real. */
const MENU = {
  cafeteria: {
    label: 'Cafetería',
    groups: [{ items: [
      { n: 'Espresso doble', p: 2990 },
      { n: 'Café americano', d: '230 ml', p: 3290 },
      { n: 'Latte', d: '230 ml', p: 3690 },
      { n: 'Latte caramelo', d: 'Latte machiatto con shot de salsa de caramelo', p: 4290 },
      { n: 'Capuccino', d: '230 ml', p: 3590 },
      { n: 'Capuccino vainilla', d: '230 ml', p: 4290 },
      { n: 'Mocaccino', p: 4490 },
      { n: 'Café bombón', d: 'Espresso doble con leche condensada', p: 3990 },
      { n: 'Chocolate caliente', d: 'A elección: leche, semi amargo, amargo o blanco', p: 4290 },
    ]}]
  },
  te: {
    label: 'Té y Bubble Tea',
    groups: [{ items: [
      { n: 'Té individual', p: 1590 },
      { n: 'Tetera 400 cc', d: 'Té de hoja de selección', p: 3590 },
      { n: 'Tetera 800 cc', d: 'Té de hoja de selección', p: 4990 },
      { n: 'Matcha latte', p: 4290 },
      { n: 'Bubble tea de té negro tapioca', d: 'Bolitas de tapioca, leche y leche condensada', p: 5490 },
      { n: 'Bubble tea de frutilla', p: 5490 },
      { n: 'Té de guisante de mariposa', d: 'Té azul con hielo y popping de mora', p: 5990 },
      { n: 'Ice matcha latte', p: 4490 },
      { n: 'Milkshake matcha', p: 5490 },
    ]}]
  },
  heladas: {
    label: 'Bebidas Heladas',
    groups: [{ items: [
      { n: 'Espresso tonic', d: 'Espresso, hielo y agua tónica', p: 4190 },
      { n: 'Affogato', d: 'Helado de vainilla más espresso doble', p: 3690 },
      { n: 'Ice latte', d: 'Versión sin lactosa o vegana disponible', v:1, p: 4490 },
      { n: 'Ice latte Nutella', p: 4490 },
      { n: 'Café helado', p: 4590 },
      { n: 'Frapuccino Lotus', p: 5200 },
    ]}]
  },
  mochis: {
    label: 'Mochis y Postres',
    groups: [{ items: [
      { n: 'Mochi matcha', d: 'Pastel japonés en base a harina de arroz glutinosa, cocido al vapor', p: 2990 },
      { n: 'Mochi frambuesa', p: 2990 },
      { n: 'Mochi oreo leche condensada', p: 2990 },
      { n: 'Mochi bon o bon', d: 'Premium', p: 3390 },
      { n: 'Mochi red velvet', d: 'Premium', p: 3390 },
      { n: 'Waffle', d: 'Con frutilla, plátano, 2 salsas a elección y mini marshmellow', p: 6990 },
      { n: 'Brownie con helado', d: 'Con salsa de chocolate', p: 4990 },
      { n: 'Cake japonés', p: 4990 },
    ]}]
  },
  panaderia: {
    label: 'Ciabattas y Baoz',
    groups: [{ items: [
      { n: 'Ciabatta jamón queso', p: 4990 },
      { n: 'Ciabatta jamón serrano', d: 'Queso crema, ciboulette-limón, hojas verdes y tomate cherry', p: 5990 },
      { n: 'Ciabatta queso de cabra', d: 'Con tomate y albahaca', p: 6990 },
      { n: 'Ciabatta mechada palta', p: 6990 },
      { n: 'Ciabatta pastrami', d: 'Con queso, pepinillos y mostaza', p: 7990 },
      { n: 'Bao salmón', d: 'Dos unidades, con queso crema, palta y salsa acevichada', p: 6990 },
      { n: 'Bao lomo saltado', p: 7990 },
    ]}]
  },
  ramen: {
    label: 'Miso Ramen',
    groups: [{ title:'Sopa miso con choclo, cebollín, huevo, fideos japoneses y verduras salteadas', items: [
      { n: 'Miso ramen de pollo', p: 8990 },
      { n: 'Miso ramen de camarón', p: 8990 },
      { n: 'Miso ramen de champiñón', v:1, p: 8990 },
      { n: 'Miso ramen de carne de res', p: 9990 },
      { n: 'Miso ramen de gyozas', p: 9990 },
    ]}]
  },
  sushi: {
    label: 'Sushi y Entradas',
    groups: [{ title:'Selección — la carta completa suma más de 150 combinaciones armables de rolls', items: [
      { n: 'Gyozas de camarón', d: 'Empanadas japonesas cocidas y salteadas', p: 4690 },
      { n: 'Gyozas de verduras', v:1, p: 4690 },
      { n: 'Nigiri salmón', p: 4990 },
      { n: 'Sashimi mixto', p: 12990 },
      { n: 'Tartar salmón camarón', p: 8990 },
      { n: 'Ceviche mixto', d: 'Salmón, reineta y camarón en leche de tigre', p: 11990 },
    ]}]
  },
  gohan: {
    label: 'Gohan',
    groups: [{ title:'Sobre cama de arroz o lechuga, con queso crema, palta, cebollín y sésamo', items: [
      { n: 'Gohan salmón', p: 6790 },
      { n: 'Gohan pollo teriyaki', p: 6790 },
      { n: 'Gohan verduras', d: 'Coliflor tempura y verduras salteadas — apto vegano', v:1, p: 6590 },
      { n: 'Gohan lomo saltado', d: 'Premium', p: 9990 },
    ]}]
  },
  calientes: {
    label: 'Platos Calientes',
    groups: [{ items: [
      { n: 'Lomo Saltado', p: 10490 },
      { n: 'Yakisoba pollo', p: 8990 },
      { n: 'Pollo teriyaki', p: 8990 },
      { n: 'Salmón teriyaki', p: 10590 },
      { n: 'Yakimeshi camarón', p: 8990 },
    ]}]
  },
  promos: {
    label: 'Promociones',
    groups: [{ items: [
      { n: 'Promo café más pastel', p: 6990 },
      { n: 'Fondue para 2 personas', d: '2 chocolates a elección + 4 acompañamientos', p: 15990 },
      { n: 'Once para 2', p: 25990 },
    ]}]
  }
};

const money = n => n ? '$' + n.toLocaleString('es-CL') : 'Consultar';

const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');
const catKeys = Object.keys(MENU);

catKeys.forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i===0 ? ' active':'');
  tab.textContent = MENU[key].label;
  tab.addEventListener('click', () => showTab(key));
  tab.dataset.key = key;
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i===0 ? ' active':'');
  panel.id = 'panel-' + key;

  MENU[key].groups.forEach(group => {
    if(group.title){
      const h = document.createElement('div');
      h.className = 'menu-group-title';
      h.textContent = group.title;
      panel.appendChild(h);
    }
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    group.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.addEventListener('click', () => openModal(item));

      if(item.img){
        const photo = document.createElement('div');
        photo.className = 'menu-item-photo';
        const photoImg = document.createElement('img');
        photoImg.src = item.img;
        photoImg.alt = item.n;
        photo.appendChild(photoImg);
        row.appendChild(photo);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'menu-item-text';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.n;
      textWrap.appendChild(nameSpan);

      if(item.v){
        const vegTag = document.createElement('span');
        vegTag.className = 'veg-tag';
        vegTag.textContent = 'VEG';
        textWrap.appendChild(vegTag);
      }

      if(item.d){
        const descDiv = document.createElement('div');
        descDiv.className = 'desc';
        descDiv.textContent = item.d;
        textWrap.appendChild(descDiv);
      }

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price mono';
      priceDiv.textContent = money(item.p);

      row.appendChild(textWrap);
      row.appendChild(priceDiv);
      grid.appendChild(row);
    });
    panel.appendChild(grid);
  });
  panelsEl.appendChild(panel);
});

function showTab(key){
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + key));
}

/* ---------- MODAL PRODUCTO ---------- */
let currentItem = null;
function openModal(item){
  currentItem = item;
  document.getElementById('modalName').textContent = item.n;
  document.getElementById('modalPrice').textContent = money(item.p);
  document.getElementById('modalDesc').textContent = item.d || 'Preparado real de la carta de Cafetería Natsuko.';
  const photoWrap = document.getElementById('modalPhoto');
  if(item.img){
    photoWrap.innerHTML = '';
    const photoImg = document.createElement('img');
    photoImg.src = item.img;
    photoImg.alt = item.n;
    photoWrap.appendChild(photoImg);
    photoWrap.style.display = 'block';
  } else {
    photoWrap.style.display = 'none';
  }
  toggleModal(true);
}
document.getElementById('modalAddBtn').addEventListener('click', () => {
  addToCart(currentItem);
  toggleModal(false);
  toggleCart(true);
});
function toggleModal(open){ document.getElementById('modalOverlay').classList.toggle('open', open); }

/* ---------- CARRITO ---------- */
let cart = [];
function addToCart(item){
  const existing = cart.find(c => c.n === item.n);
  if(existing){ existing.qty++; } else { cart.push({...item, qty:1}); }
  renderCart();
}
function changeQty(name, delta){
  const line = cart.find(c => c.n === name);
  if(!line) return;
  line.qty += delta;
  if(line.qty <= 0) cart = cart.filter(c => c.n !== name);
  renderCart();
}
function renderCart(){
  const linesEl = document.getElementById('cartLines');
  const totalEl = document.getElementById('cartTotal');
  const countEl = document.getElementById('cartCount');
  const totalQty = cart.reduce((s,c) => s + c.qty, 0);
  countEl.textContent = totalQty;
  if(cart.length === 0){
    linesEl.innerHTML = '<p class="cart-empty">Todavía no agregaste nada.</p>';
    totalEl.textContent = '$0';
    return;
  }
  linesEl.innerHTML = '';
  let total = 0;
  cart.forEach(line => {
    total += (line.p || 0) * line.qty;
    const div = document.createElement('div');
    div.className = 'cart-line';
    div.innerHTML = `
      <div>
        <div class="name">${line.n}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" data-name="${line.n}" data-delta="-1">−</button>
          <span class="mono">${line.qty}</span>
          <button class="qty-btn" data-name="${line.n}" data-delta="1">+</button>
        </div>
      </div>
      <div class="price mono">${money(line.p)}</div>
    `;
    linesEl.appendChild(div);
  });
  totalEl.textContent = money(total);
  linesEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => changeQty(btn.dataset.name, parseInt(btn.dataset.delta)));
  });
}
document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
document.getElementById('cartCloseBtn').addEventListener('click', () => toggleCart(false));
function toggleCart(open){ document.getElementById('cartOverlay').classList.toggle('open', open); }

document.getElementById('modalCloseBtn').addEventListener('click', () => toggleModal(false));
[document.getElementById('cartOverlay'), document.getElementById('modalOverlay')].forEach(ov => {
  ov.addEventListener('click', (e) => { if(e.target === ov) ov.classList.remove('open'); });
});

/* ---------- NAV MÓVIL Y NAVEGACIÓN POR PESTAÑAS ---------- */
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

const panels = document.querySelectorAll('.tab-panel');
function goToTab(tabId){
  panels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === tabId));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
  initScrollReveal();
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

/* ---------- INDICADOR ABIERTO/CERRADO EN VIVO
   Horario oficial verificado en el menú online (fu.do) el 08-09-2026,
   coincide con el estado "Abierto · cierra 21:30" visto en vivo en Google
   Maps un martes:
   Lunes a jueves 10:00–21:30 · Viernes 10:00–22:00
   Sábado 12:00–22:00 · Domingo 12:00–21:00 ---------- */
function getTodayHours(){
  const day = new Date().getDay(); // 0=domingo ... 6=sábado
  if(day === 0) return [12*60, 21*60];
  if(day >= 1 && day <= 4) return [10*60, 21*60+30];
  if(day === 5) return [10*60, 22*60];
  return [12*60, 22*60]; // sábado
}
function updateOpenStatus(dotId, textId){
  const dot = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if(!dot || !text) return;
  const now = new Date();
  const minutes = now.getHours()*60 + now.getMinutes();
  const [open, close] = getTodayHours();
  const isOpen = minutes >= open && minutes < close;
  text.textContent = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !isOpen);
}
updateOpenStatus('statusDot', 'statusText');
updateOpenStatus('statusDot2', 'statusText2');

/* ---------- SCROLL REVEAL (entrada ordenada al hacer scroll) ----------
   Solo agrega/observa animación de entrada — la navegación sigue siendo
   100% por pestañas (SPA), esto NO es sticky-scroll. Incluye red de
   seguridad por si IntersectionObserver no dispara a tiempo. */
function initScrollReveal(){
  const els = document.querySelectorAll('.reveal:not(.revealed)');
  if(!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => {
    el.style.transitionDelay = (Math.min(i % 6, 6) * 60) + 'ms';
    io.observe(el);
  });
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
  }, 1200);
}
initScrollReveal();

/* ---------- PANTALLA DE CARGA (rápida, <1s) ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 350);
});
