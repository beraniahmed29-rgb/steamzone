'use strict';

/* Daily Draw Page Logic */

const API = '/api/daily-draw';

const form = document.getElementById('draw-form');
const nameInput = document.getElementById('d-name');
const emailInput = document.getElementById('d-email');
const discordInput = document.getElementById('d-discord');
const agreeInput = document.getElementById('d-agree');
const submitBtn = document.getElementById('draw-submit');
const formNote = document.getElementById('form-note');
const winnerCard = document.getElementById('winner-card');
const participantsEl = document.getElementById('stat-participants');
const winnersEl = document.getElementById('stat-winners');
const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const formSection = document.getElementById('draw-form-section');

let emailChecked = false;

async function loadStats() {
  try {
    const res = await fetch(`${API}/stats`);
    const data = await res.json();
    if (participantsEl) participantsEl.textContent = data.todayEntries || 0;
    if (winnersEl) winnersEl.textContent = data.totalWinners || 0;
  } catch (e) {
    console.error('Failed to load draw stats:', e);
  }
}

async function loadWinner() {
  try {
    const res = await fetch(`${API}/winner`);
    const data = await res.json();
    if (winnerCard && data.winner) {
      winnerCard.innerHTML = `
        <div class="winner-info">
          <div class="winner-name">${escapeHtml(data.winner.name)}</div>
          <div class="winner-prize"><i class="fa-solid fa-gift"></i> ${escapeHtml(data.winner.prize)}</div>
          <div class="winner-date">سحب يوم ${formatDate(data.winner.draw_date)}</div>
        </div>
      `;
    }
  } catch (e) {
    console.error('Failed to load winner:', e);
  }
}

async function checkEntered() {
  const email = emailInput.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

  try {
    const res = await fetch(`${API}/status?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    emailChecked = true;
    if (data.entered) {
      showFormNote('لقد سجلت مشاركتك في السحب اليومي بالفعل', 'error');
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-label').innerHTML = '<i class="fa-solid fa-check"></i> مسجل بالفعل';
    } else {
      showFormNote('');
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-label').innerHTML = '<i class="fa-solid fa-ticket"></i> المشاركة في السحب';
    }
  } catch (e) {
    console.error('Failed to check entry status:', e);
  }
}

async function handleSubmit(e) {
  e.preventDefault();
  if (submitBtn.disabled) return;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const discord = discordInput.value.trim();

  if (!name || name.length < 2) {
    showFormNote('يرجى إدخال اسم صحيح', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormNote('يرجى إدخال بريد إلكتروني صحيح', 'error');
    return;
  }
  if (!/^[A-Za-z0-9_.#-]{2,64}$/.test(discord)) {
    showFormNote('يرجى إدخال اسم مستخدم Discord صحيح', 'error');
    return;
  }
  if (!agreeInput.checked) {
    showFormNote('يجب الموافقة على الشروط للمشاركة', 'error');
    return;
  }

  setLoading(true);
  showFormNote('');

  try {
    const res = await fetch(`${API}/enter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, discord })
    });
    const data = await res.json();

    if (!res.ok) {
      showFormNote(data.error || 'حدث خطأ، حاول مرة أخرى', 'error');
      return;
    }

    showFormNote('تم تسجيلك بنجاح! تم إضافة مشاركتك للسحب اليومي', 'success');
    form.reset();
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-label').innerHTML = '<i class="fa-solid fa-check"></i> تم التسجيل';
    await loadStats();
    await loadWinner();
  } catch (e) {
    console.error('Entry failed:', e);
    showFormNote('حدث خطأ في الاتصال، حاول مرة أخرى', 'error');
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  submitBtn.disabled = isLoading;
  const label = submitBtn.querySelector('.btn-label');
  const spinner = submitBtn.querySelector('.spinner');
  if (isLoading) {
    label.style.display = 'none';
    spinner.style.display = 'inline-block';
  } else {
    label.style.display = 'inline';
    spinner.style.display = 'none';
  }
}

function showFormNote(message, type) {
  if (!formNote) return;
  formNote.textContent = message;
  formNote.className = 'form-note';
  if (type) formNote.classList.add(type);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

/* Countdown timer to end of day */
function updateTimer() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  const diff = endOfDay - now;

  if (diff <= 0) {
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerHours.textContent = String(hours).padStart(2, '0');
  timerMinutes.textContent = String(minutes).padStart(2, '0');
  timerSeconds.textContent = String(seconds).padStart(2, '0');
}

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
  loadStats();
  loadWinner();
  updateTimer();
  setInterval(updateTimer, 1000);

  if (emailInput) {
    emailInput.addEventListener('blur', checkEntered);
    emailInput.addEventListener('input', () => {
      if (emailChecked) checkEntered();
    });
  }

  if (form) form.addEventListener('submit', handleSubmit);
});