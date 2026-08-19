'use strict';

/* SteamZone Admin — order management & Discord contact */

const STATUS = {
  pending:   { label: 'جديد',            cls: 'st-pending',   icon: 'fa-inbox' },
  contacted: { label: 'تم التواصل',      cls: 'st-confirmed', icon: 'fa-comments' },
  completed: { label: 'مكتمل',           cls: 'st-approved',  icon: 'fa-circle-check' },
  cancelled: { label: 'ملغى',            cls: 'st-cancelled', icon: 'fa-ban' }
};

let refreshTimer = null;
let searchTimer = null;

/* ---------- helpers ---------- */

function $(id) { return document.getElementById(id); }

async function api(url, options = {}) {
  const res = await fetch(url, { headers: { 'Content-Type': 'application/json' }, ...options });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) { showLogin(); throw new Error('unauthorized'); }
  if (!res.ok) throw new Error(data.error || 'خطأ');
  return data;
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fmtDate(d) { return new Date(d + 'Z').toLocaleString('ar-DZ'); }

function setLoading(btn, loading) {
  btn.querySelector('.btn-label').style.display = loading ? 'none' : '';
  btn.querySelector('.spinner').style.display = loading ? 'inline-block' : 'none';
  btn.disabled = loading;
}

let toastTimer;
function showToast(msg, icon = 'fa-circle-check', color = '#22c55e') {
  const t = $('toast');
  t.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> ${esc(msg)}`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ---------- auth ---------- */

function showLogin() {
  $('login-view').style.display = 'grid';
  $('dash-view').style.display = 'none';
  stopAutoRefresh();
}

function showDash() {
  $('login-view').style.display = 'none';
  $('dash-view').style.display = 'block';
  loadOrders();
  startAutoRefresh();
}

$('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = $('login-btn');
  setLoading(btn, true);
  try {
    await api('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username: $('login-user').value.trim(), password: $('login-pass').value })
    });
    $('login-form').reset();
    showDash();
    showToast('مرحبًا بعودتك!');
  } catch (err) {
    showToast(err.message, 'fa-circle-exclamation', '#ef4444');
  } finally {
    setLoading(btn, false);
  }
});

async function logout() {
  try { await api('/api/admin/logout', { method: 'POST' }); } catch (e) {}
  showLogin();
}

/* ---------- orders ---------- */

async function loadOrders() {
  const q = $('q').value.trim();
  const status = $('status-filter').value;
  const params = new URLSearchParams();
  if (status !== 'all') params.set('status', status);
  if (q) params.set('q', q);
  params.set('_', Date.now());

  try {
    const orders = await api('/api/admin/orders?' + params.toString());
    renderOrders(orders);
    loadStats();
  } catch (err) {
    if (err.message !== 'unauthorized') showToast(err.message, 'fa-circle-exclamation', '#ef4444');
  }
}

function debouncedLoad() { clearTimeout(searchTimer); searchTimer = setTimeout(loadOrders, 350); }

function renderOrders(orders) {
  const body = $('orders-body');
  $('orders-empty').style.display = orders.length ? 'none' : 'block';
  body.innerHTML = orders.map(o => {
    const st = STATUS[o.status] || STATUS.pending;
    return `
      <tr>
        <td class="ref-cell">${esc(o.reference)}</td>
        <td>
          <div class="cust">${esc(o.customerName)}</div>
          <div class="cust-sub">${esc(o.customerEmail)}</div>
        </td>
        <td>
          <span class="discord-cell"><i class="fa-brands fa-discord"></i> ${esc(o.discord)}</span>
        </td>
        <td class="items-cell">${o.items.map(it => esc(it.name)).join('، ')}</td>
        <td><span class="status-badge ${st.cls}"><i class="fa-solid ${st.icon}"></i> ${st.label}</span></td>
        <td class="date-cell">${fmtDate(o.createdAt)}</td>
        <td class="actions-cell">
          <button class="act-btn" title="تفاصيل" onclick="showOrder(${o.id})"><i class="fa-solid fa-eye"></i></button>
          ${o.status === 'pending' ? `
            <button class="act-btn ok" title="تم التواصل مع العميل" onclick="contactedOrder(${o.id})"><i class="fa-solid fa-comments"></i></button>` : ''}
          ${o.status === 'contacted' ? `
            <button class="act-btn ok" title="إتمام الطلب" onclick="completeOrder(${o.id})"><i class="fa-solid fa-check"></i></button>` : ''}
          ${(o.status === 'pending' || o.status === 'contacted') ? `
            <button class="act-btn no" title="إلغاء الطلب" onclick="cancelOrder(${o.id})"><i class="fa-solid fa-ban"></i></button>` : ''}
        </td>
      </tr>`;
  }).join('');
}

async function loadStats() {
  try {
    const s = await api('/api/admin/stats?_=' + Date.now());
    $('stats-grid').innerHTML = `
      <div class="stat-card"><i class="fa-solid fa-inbox"></i><div><strong>${s.total}</strong><span>إجمالي الطلبات</span></div></div>
      <div class="stat-card warn"><i class="fa-solid fa-inbox"></i><div><strong>${s.pending}</strong><span>طلبات جديدة</span></div></div>
      <div class="stat-card info"><i class="fa-solid fa-comments"></i><div><strong>${s.contacted}</strong><span>تم التواصل</span></div></div>
      <div class="stat-card ok"><i class="fa-solid fa-circle-check"></i><div><strong>${s.completed}</strong><span>مكتملة</span></div></div>
      <div class="stat-card no"><i class="fa-solid fa-ban"></i><div><strong>${s.cancelled}</strong><span>ملغاة</span></div></div>`;
  } catch (e) {}
}

/* ---------- actions ---------- */

async function contactedOrder(id) {
  try {
    await api(`/api/admin/orders/${id}/contacted`, { method: 'POST' });
    showToast('تم تحديد أنك تواصلت مع العميل', 'fa-comments', '#06b6d4');
    loadOrders();
  } catch (err) {
    showToast(err.message, 'fa-circle-exclamation', '#ef4444');
  }
}

async function completeOrder(id) {
  if (!confirm('تم تسليم الحساب للعميل؟ سيُحسب الطلب كمكتمل.')) return;
  try {
    await api(`/api/admin/orders/${id}/complete`, { method: 'POST' });
    showToast('تم إتمام الطلب بنجاح');
    loadOrders();
  } catch (err) {
    showToast(err.message, 'fa-circle-exclamation', '#ef4444');
  }
}

async function cancelOrder(id) {
  if (!confirm('إلغاء هذا الطلب نهائيًا؟')) return;
  try {
    await api(`/api/admin/orders/${id}/cancel`, { method: 'POST' });
    showToast('تم إلغاء الطلب', 'fa-ban', '#ef4444');
    loadOrders();
  } catch (err) {
    showToast(err.message, 'fa-circle-exclamation', '#ef4444');
  }
}

/* ---------- details modal ---------- */

async function showOrder(id) {
  const orders = await api('/api/admin/orders?all=1&_=' + Date.now());
  const o = orders.find(x => x.id === id);
  if (!o) return;
  const st = STATUS[o.status] || STATUS.pending;
  $('modal-title').textContent = 'طلب ' + o.reference;
  $('modal-body').innerHTML = `
    <div class="detail-grid">
      <div><small>العميل</small><strong>${esc(o.customerName)}</strong></div>
      <div><small>البريد</small><strong dir="ltr">${esc(o.customerEmail)}</strong></div>
      <div><small>Discord</small><strong><span class="discord-cell"><i class="fa-brands fa-discord"></i> ${esc(o.discord)}</span></strong></div>
      <div><small>الحالة</small><strong><span class="status-badge ${st.cls}"><i class="fa-solid ${st.icon}"></i> ${st.label}</span></strong></div>
    </div>
    <div class="detail-items">
      <small>محتويات الطلب</small>
      ${o.items.map(it => `<div class="row"><span>${esc(it.name)}</span><span>${it.price.toLocaleString()} ${esc(it.currency)}</span></div>`).join('')}
    </div>
    <div class="detail-actions">
      ${o.status === 'pending' ? `<button class="btn btn-primary" onclick="contactedOrder(${o.id})"><i class="fa-solid fa-comments"></i> تم التواصل</button>` : ''}
      ${o.status === 'contacted' ? `<button class="btn btn-primary" onclick="completeOrder(${o.id})"><i class="fa-solid fa-check"></i> إتمام الطلب</button>` : ''}
      ${(o.status === 'pending' || o.status === 'contacted') ? `<button class="btn btn-danger" onclick="cancelOrder(${o.id})"><i class="fa-solid fa-ban"></i> إلغاء</button>` : ''}
      <button class="btn btn-ghost" onclick="closeModal()">إغلاق</button>
    </div>`;
  $('order-modal').classList.add('open');
}

function closeModal() { $('order-modal').classList.remove('open'); }

/* ---------- auto refresh ---------- */

function startAutoRefresh() {
  stopAutoRefresh();
  refreshTimer = setInterval(loadOrders, 10000);
}
function stopAutoRefresh() { if (refreshTimer) { clearInterval(refreshTimer); refreshTimer = null; } }

/* ---------- init ---------- */

(async function init() {
  try {
    await api('/api/admin/orders?_=' + Date.now());
    showDash();
  } catch (e) {
    showLogin();
  }
})();
