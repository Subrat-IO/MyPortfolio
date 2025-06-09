
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// On load: check saved mode
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '🌙'; // Dark mode is active
} else {
  body.classList.remove('dark-mode');
  toggleBtn.textContent = '🌞'; // Light mode is active
}

// On click: toggle dark mode + emoji + spin
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
  toggleBtn.textContent = isDark ? '🌙' : '🌞';

  // Rotate effect
  toggleBtn.style.transition = 'transform 0.3s ease';
  toggleBtn.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    toggleBtn.style.transform = 'rotate(0deg)';
  }, 300);
});
body.classList.add('light-mode');
body.classList.remove('light-mode');