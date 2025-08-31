const randomBtn = document.getElementById('random');
const applyBtn  = document.getElementById('apply');
const hexInput  = document.getElementById('hex');

const toHex = (n) => n.toString(16).padStart(2, '0');
const randomHex = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');

function setColor(hex) {
  // normalize: allow "ff6600" without '#'
  if (/^[0-9a-fA-F]{6}$/.test(hex)) hex = '#' + hex;
  if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return; // ignore invalid
  document.body.style.backgroundColor = hex;
}

randomBtn.addEventListener('click', () => setColor(randomHex()));
applyBtn.addEventListener('click', () => setColor(hexInput.value.trim()));
hexInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') setColor(hexInput.value.trim());
});

// Start color
setColor('#f6f7fb');
