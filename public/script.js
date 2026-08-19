const accounts = window.STEAMZONE_ACCOUNTS || [];

let cart = [];

const icons = {
  AAA: 'fa-solid fa-crown',
  multi: 'fa-solid fa-people-group',
  rare: 'fa-solid fa-gem',
  starter: 'fa-solid fa-seedling'
};

function accountCard(a) {
  return `
    <div class="account-card ${a.featured ? 'featured' : ''}" data-id="${a.id}" onclick="goToProduct(${a.id})">
      <div class="spot"></div>
      <div class="account-banner ${a.wide ? 'acct-wide' : ''}" style="background:linear-gradient(135deg, ${a.accent}44, ${a.accent}22)">
        ${a.image
          ? `<img src="${a.image}" alt="${a.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">`
          : ''}
        ${a.image ? '<i class="' + a.icon + ' banner-fallback" style="display:none"></i>' : `<i class="${a.icon}"></i>`}
      </div>
      <div class="account-body">
        <h3>${a.name}</h3>
        <div class="title-sep"><span></span><i class="fa-solid fa-diamond"></i><span></span></div>
        ${a.gamesList.length ? `<div class="account-games">${a.gamesList.map(g => `<span class="game-tag">${g}</span>`).join('')}</div>` : ''}
        <div class="price-wrap">
          <span class="coin"><i class="fa-solid fa-coins"></i></span>
          <span class="price-new">${a.price.toLocaleString()} <small>DA</small></span>
        </div>
        <button class="buy-btn" onclick="event.stopPropagation(); addToCart(${a.id})"><i class="fa-solid fa-cart-plus"></i> أضف للسلة</button>
      </div>
    </div>`;
}

function goToProduct(id) {
  window.location.href = 'product.html?id=' + id;
}

function formatHours(h) {
  if (h >= 1000) return (h / 1000).toFixed(1).replace('.0', '') + 'K+ ساعة';
  return h + ' ساعة';
}

function formatPrice(a, v) {
  return v ? v.toLocaleString() + ' ' + (a.currency || 'USD') : '';
}

function renderAccounts() {
  const grid = document.getElementById('accounts-grid');
  const query = document.getElementById('search').value.trim().toLowerCase();
  const sort = document.getElementById('sort').value;

let list = accounts.filter(a => {
    const matchQuery = !query ||
      a.name.toLowerCase().includes(query) ||
      a.gamesList.some(g => g.toLowerCase().includes(query)) ||
      a.category.includes(query);
    return matchQuery;
  });

if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sort === 'featured') list.sort((a, b) => (b.featured - a.featured) || (b.sold - a.sold));

  grid.innerHTML = list.map(accountCard).join('');
  document.getElementById('no-results').style.display = list.length ? 'none' : 'block';
}

function applyFilters() { renderAccounts(); }

function addToCart(id) {
  const acc = accounts.find(a => a.id === id);
  if (!acc) return;
  if (cart.some(i => i.id === id)) {
    showToast('هذا الحساب موجود بالفعل في السلة!', 'fa-circle-info', '#06b6d4');
    return;
  }
  cart.push(acc);
  updateCart();
  openCart();
  showToast('تمت إضافة الحساب إلى السلة', 'fa-check', '#22c55e');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function updateCart() {
  document.getElementById('cart-count').textContent = cart.length;
  const badge = document.getElementById('cart-count');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
  const items = document.getElementById('cart-items');
  if (!cart.length) {
    items.innerHTML = '<div class="cart-empty"><i class="fa-solid fa-box-open"></i><small>سلة الشراء فارغة — أضف حسابك الأول الآن!</small></div>';
    document.getElementById('checkout-btn').disabled = true;
  } else {
    items.innerHTML = cart.map(a => `
      <div class="cart-item">
        <div class="cart-item-icon">
          ${a.image
            ? `<img src="${a.image}" alt="${a.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
               <i class="${a.icon}" style="display:none"></i>`
            : `<i class="${a.icon}"></i>`}
        </div>
        <div class="cart-item-info">
          <h4>${a.name}</h4>
          <span>المستوى ${a.level} • ${a.games} لعبة</span>
        </div>
        <span class="cart-item-price">${a.price.toLocaleString()} <small>DA</small></span>
        <button class="remove-item" onclick="removeFromCart(${a.id})"><i class="fa-solid fa-trash"></i></button>
      </div>`).join('');
    document.getElementById('checkout-btn').disabled = false;
  }
  document.getElementById('cart-total').textContent = cartTotal().toLocaleString() + ' DA';
}

function cartTotal() { return cart.reduce((s, a) => s + a.price, 0); }

function cartCurrency() {
  return cart.length ? (cart[0].currency || 'USD') + ' ' : '';
}

function toggleCart() {
  const panel = document.getElementById('cart-panel');
  panel.classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show', panel.classList.contains('open'));
}

function openCart() {
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function closePanels() {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('checkout-modal').classList.remove('open');
}

function openCheckout() {
  if (!cart.length) return;
  closePanels();
  document.getElementById('checkout-summary').innerHTML = cart.map(a =>
    `<div class="row"><span>${a.name}</span><span>${formatPrice(a, a.price)}</span></div>`).join('') +
    `<div class="row"><strong>الإجمالي</strong><strong>${cartCurrency()}${cartTotal().toLocaleString()}</strong></div>`;
  document.getElementById('checkout-total').textContent = cartTotal().toLocaleString() + ' ' + (cart[0].currency || 'USD');
  document.getElementById('checkout-modal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.remove('open');
}

function showStep(id) {
  document.getElementById('checkout-step-form').style.display = id === 'form' ? '' : 'none';
  document.getElementById('checkout-step-success').style.display = id === 'success' ? '' : 'none';
}

/* ---------- loading helpers ---------- */
function setLoading(btn, loading) {
  if (!btn) return;
  btn.querySelector('.btn-label').style.display = loading ? 'none' : '';
  btn.querySelector('.spinner').style.display = loading ? 'inline-block' : 'none';
  btn.disabled = loading;
}

async function api(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'حدث خطأ غير متوقع');
  return data;
}

/* ---------- submit order (contact via Discord) ---------- */
async function submitOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('order-btn');
  setLoading(btn, true);

  try {
    const data = await api('/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        name: document.getElementById('o-name').value.trim(),
        email: document.getElementById('o-email').value.trim(),
        discord: document.getElementById('o-discord').value.trim(),
        items: cart.map(a => ({ name: a.name, price: a.price, currency: a.currency || 'USD' }))
      })
    });

    document.getElementById('pay-ref').textContent = data.reference;
    cart = [];
    updateCart();
    showStep('success');
    burst(innerWidth / 2, innerHeight / 2, 28);
    showToast(`تم استلام طلبك — المرجع ${data.reference}`, 'fa-circle-check', '#22c55e');
  } catch (err) {
    showToast(err.message, 'fa-circle-exclamation', '#ef4444');
  } finally {
    setLoading(btn, false);
  }
}

let toastTimer;
function showToast(msg, icon, color) {
  const t = document.getElementById('toast');
  t.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> ${msg}`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

function toggleMenu() {
  document.getElementById('nav').classList.toggle('open');
}

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener('resize', resize);

const burstPalette = ['#f59e0b', '#7c3aed', '#06b6d4', '#22c55e', '#fbbf24', '#eaeaf6'];
for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 2.4 + 0.4,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    color: Math.random() > 0.72 ? '245,158,11' : (Math.random() > 0.5 ? '124,58,237' : '6,182,212')
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color},0.55)`;
    ctx.fill();
  });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d = Math.hypot(dx, dy);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 120) * 0.15})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); revealObserver.unobserve(en.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

document.querySelectorAll('.section-head, .info-card').forEach(el => {
  if (!el.classList.contains('section-head')) {
    el.classList.add('reveal');
    revealObserver.observe(el);
  }
});

renderAccounts();
updateCart();

/* add-to-cart from the product page */
const pendingAdd = localStorage.getItem('steamzone-pending-add');
if (pendingAdd) {
  localStorage.removeItem('steamzone-pending-add');
  const acc = accounts.find(a => a.id === Number(pendingAdd));
  if (acc && !cart.some(i => i.id === acc.id)) {
    cart.push(acc);
    updateCart();
    openCart();
    showToast('تمت إضافة ' + acc.name + ' إلى السلة', 'fa-check', '#22c55e');
  }
}

/* ============================================================
   LEGENDARY FX ENGINE
   ============================================================ */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* scroll progress bar */
  const prog = document.createElement('div');
  prog.id = 'scroll-progress';
  document.body.appendChild(prog);
  addEventListener('scroll', () => {
    const h = document.documentElement;
    prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
  }, { passive: true });

  /* floating nebula orbs */
  ['orb-1', 'orb-2', 'orb-3'].forEach(c => {
    const o = document.createElement('div');
    o.className = 'orb ' + c;
    document.body.appendChild(o);
  });

  /* cursor aura (mouse devices only) */
  if (matchMedia('(hover: hover)').matches) {
    const orb = document.createElement('div');
    orb.className = 'cursor-orb';
    document.body.appendChild(orb);
    let tx = innerWidth / 2, ty = innerHeight / 2, x = tx, y = ty;
    addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      orb.style.transform = 'translate(' + (x - 210) + 'px, ' + (y - 210) + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* click burst */
  function burst(x, y, n) {
    for (let i = 0; i < n; i++) {
      const p = document.createElement('span');
      p.className = 'fx-burst';
      p.style.background = burstPalette[(Math.random() * burstPalette.length) | 0];
      const s = Math.random() * 8 + 5;
      p.style.width = p.style.height = s + 'px';
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      document.body.appendChild(p);
      const ang = Math.random() * Math.PI * 2;
      const dist = Math.random() * 130 + 40;
      p.animate([
        { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
        { transform: 'translate(' + (Math.cos(ang) * dist - s / 2) + 'px, ' + (Math.sin(ang) * dist - s / 2) + 'px) scale(' + (Math.random() * 0.6 + 0.1) + ')', opacity: 0 }
      ], { duration: 700 + Math.random() * 400, easing: 'cubic-bezier(.15,.7,.3,1)' }).onfinish = () => p.remove();
    }
  }
  document.addEventListener('click', e => { if (Math.random() < 0.85) burst(e.clientX, e.clientY, 8); }, { passive: true });
  window.burst = burst;

  /* button ripple */
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn, .buy-btn');
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    const rip = document.createElement('span');
    rip.className = 'ripple';
    rip.style.width = rip.style.height = size + 'px';
    rip.style.left = (e.clientX - r.left - size / 2) + 'px';
    rip.style.top = (e.clientY - r.top - size / 2) + 'px';
    btn.appendChild(rip);
    rip.addEventListener('animationend', () => rip.remove());
  });

  /* 3D tilt on account cards (mouse devices only) */
  if (matchMedia('(hover: hover)').matches) {
    let hoverCard = null;
    document.addEventListener('mouseover', e => {
      const c = e.target.closest('.account-card');
      if (c !== hoverCard) {
        if (hoverCard) {
          hoverCard.style.setProperty('--rx', '0deg');
          hoverCard.style.setProperty('--ry', '0deg');
        }
        hoverCard = c;
      }
    });
    document.addEventListener('mousemove', e => {
      if (!hoverCard) return;
      const r = hoverCard.getBoundingClientRect();
      hoverCard.style.setProperty('--rx', ((e.clientY - r.top) / r.height - 0.5) * -7 + 'deg');
      hoverCard.style.setProperty('--ry', ((e.clientX - r.left) / r.width - 0.5) * 9 + 'deg');
      hoverCard.style.setProperty('--px', ((e.clientX - r.left) / r.width * 100) + '%');
      hoverCard.style.setProperty('--py', ((e.clientY - r.top) / r.height * 100) + '%');
    });

    /* magnetic buttons */
    let hoverBtn = null;
    document.addEventListener('mouseover', e => {
      const b = e.target.closest('.btn, .buy-btn');
      if (b !== hoverBtn) {
        if (hoverBtn) { hoverBtn.style.setProperty('--mx', '0px'); hoverBtn.style.setProperty('--my', '0px'); }
        hoverBtn = b;
      }
    });
    document.addEventListener('mousemove', e => {
      if (!hoverBtn) return;
      const r = hoverBtn.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const max = 8;
      hoverBtn.style.setProperty('--mx', Math.max(-max, Math.min(max, dx * 0.18)) + 'px');
      hoverBtn.style.setProperty('--my', Math.max(-max, Math.min(max, dy * 0.18)) + 'px');
    });

    /* golden sparkle trail */
    let lastSpark = 0;
    addEventListener('mousemove', e => {
      const now = performance.now();
      if (now - lastSpark < 45) return;
      lastSpark = now;
      const s = document.createElement('span');
      s.className = 'spark';
      s.style.left = e.clientX + 'px';
      s.style.top = e.clientY + 'px';
      s.style.background = burstPalette[(Math.random() * burstPalette.length) | 0];
      document.body.appendChild(s);
      s.animate([
        { transform: 'translate(-50%,-50%) translate(0,0) scale(1)', opacity: 0.9 },
        { transform: 'translate(' + (Math.random() * 16 - 8) + 'px, ' + (Math.random() * -34 - 8) + 'px) scale(0.15)', opacity: 0 }
      ], { duration: 650 + Math.random() * 250, easing: 'ease-out' }).onfinish = () => s.remove();
    }, { passive: true });
  }

  /* shooting stars */
  for (let i = 1; i <= 3; i++) {
    const st = document.createElement('div');
    st.className = 'shooting-star star-' + i;
    document.body.appendChild(st);
  }
})();
