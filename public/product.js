/* Product detail page */

const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const account = (window.STEAMZONE_ACCOUNTS || []).find(a => a.id === id);

function addToCartFromProduct() {
  localStorage.setItem('steamzone-pending-add', String(account.id));
  window.location.href = '/#accounts';
}

function handleImageError(img) {
  img.style.display = 'none';
  const container = img.parentElement;
  if (!container.querySelector('.image-fallback')) {
    const fb = document.createElement('div');
    fb.className = 'image-fallback';
    fb.innerHTML = `<i class="${account.icon}"></i><span>${account.name}</span>`;
    container.appendChild(fb);
  }
}

if (!account) {
  document.getElementById('product-page').innerHTML = `
    <div class="product-error">
      <i class="fa-solid fa-circle-exclamation"></i>
      <h2>المنتج غير موجود</h2>
      <p>تعذر العثور على هذا المنتج.</p>
      <a href="/#accounts" class="btn btn-primary">العودة للمتجر</a>
    </div>`;
} else {
  const min = account.requirements.min;
  const rec = account.requirements.rec;

  document.getElementById('product-page').innerHTML = `
    <nav class="breadcrumb"><a href="/">الرئيسية</a> <i class="fa-solid fa-chevron-left"></i> <a href="/#accounts">الحسابات</a> <i class="fa-solid fa-chevron-left"></i> <span>${account.name}</span></nav>

    <div class="product-grid">
      <div class="product-gallery">
        <div class="main-image ${account.wide ? 'acct-main-wide' : ''}">
          <img src="${account.image}" alt="${account.name}" id="main-image" onerror="handleImageError(this)">
          ${account.featured ? '<span class="p-badge">مميز</span>' : ''}
        </div>
      </div>

      <div class="product-info">
        <h1>${account.name}</h1>

        <div class="price-plate">
          <div class="pd-price">${account.price.toLocaleString()} <small>DA</small></div>
          <button class="btn btn-primary btn-lg" onclick="addToCartFromProduct()"><i class="fa-solid fa-cart-plus"></i> أضف للسلة</button>
        </div>
      </div>
    </div>

    <div class="p-section">
      <h2><i class="fa-solid fa-circle-info"></i> عن اللعبة</h2>
      <p class="p-desc">${account.description[0]}</p>
    </div>

    <div class="p-section">
      <h2><i class="fa-solid fa-clipboard-check"></i> المواصفات المطلوبة</h2>
      <div class="req-grid">
        <div class="req-card">
          <h3 class="req-min"><i class="fa-solid fa-gauge-low"></i> ${min.label}</h3>
          <ul>
            <li><span>نظام التشغيل</span>${min.os}</li>
            <li><span>المعالج</span>${min.cpu}</li>
            <li><span>الذاكرة</span>${min.ram}</li>
            <li><span>كرت الشاشة</span>${min.gpu}</li>
            <li><span>المساحة</span>${min.storage}</li>
            <li><span>DirectX</span>${min.directx}</li>
          </ul>
        </div>
        <div class="req-card rec">
          <h3 class="req-rec"><i class="fa-solid fa-rocket"></i> ${rec.label}</h3>
          <ul>
            <li><span>نظام التشغيل</span>${rec.os}</li>
            <li><span>المعالج</span>${rec.cpu}</li>
            <li><span>الذاكرة</span>${rec.ram}</li>
            <li><span>كرت الشاشة</span>${rec.gpu}</li>
            <li><span>المساحة</span>${rec.storage}</li>
            <li><span>DirectX</span>${rec.directx}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}