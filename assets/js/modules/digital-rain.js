import { ABYSS_FADE, RAIN, MOON } from '../constants/colors.js';

const FONT_SIZE = 14;
const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let canvas, ctx, drops, columns, skipFactor = 1;

function init() {
  canvas = document.getElementById('digital-rain-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
  animate();
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / FONT_SIZE);
  drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -100));
  skipFactor = navigator.hardwareConcurrency <= 2 ? 3 : 1;
}

function animate() {
  // Fade trail with abyss bg at 5% opacity / 以5%透明度的深渊黑绘制拖尾
  ctx.fillStyle = ABYSS_FADE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${FONT_SIZE}px monospace`;
  for (let i = 0; i < columns; i += skipFactor) {
    const char = CHARS[Math.floor(Math.random() * CHARS.length)];
    const x = i * FONT_SIZE;
    const y = drops[i] * FONT_SIZE;
    // 2% chance moon white, else rain green / 2%概率月白色，其余雨丝绿
    ctx.fillStyle = Math.random() < 0.02 ? MOON : RAIN;
    ctx.fillText(char, x, y);
    if (y > canvas.height && Math.random() < 0.025) drops[i] = 0;
    drops[i]++;
  }
  requestAnimationFrame(animate);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
