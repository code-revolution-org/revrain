import { ABYSS_FADE, RAIN, MOON } from '../constants/colors.js';

let canvas, ctx, drops, columns, skipFactor = 1;
let config = {
  enable: true,
  chars: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  fontSize: 14,
  moonChance: 0.02,
  resetChance: 0.025
};

function parseConfig(canvas) {
  const d = canvas.dataset;
  const num = (v, fallback) => v === '' || v == null ? fallback : Number(v);
  return {
    enable: d.enable !== 'false',
    chars: d.chars || config.chars,
    fontSize: num(d.fontSize, config.fontSize),
    moonChance: num(d.moonChance, config.moonChance),
    resetChance: num(d.resetChance, config.resetChance)
  };
}

function init() {
  canvas = document.getElementById('digital-rain-canvas');
  if (!canvas) return;

  config = parseConfig(canvas);

  // 如果禁用数字雨，则不初始化 / If digital rain is disabled, don't init
  if (!config.enable) return;
  ctx = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
  animate();
}

// 调整画布尺寸并重置列数 / Resize canvas and reset columns
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / config.fontSize);
  drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -100));
  // 低性能设备跳帧 / Skip frames on low-end devices
  skipFactor = navigator.hardwareConcurrency <= 2 ? 3 : 1;
}

function animate() {
  // Fade trail with abyss bg at 5% opacity / 以5%透明度的深渊黑绘制拖尾
  ctx.fillStyle = ABYSS_FADE;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${config.fontSize}px monospace`;
  for (let i = 0; i < columns; i += skipFactor) {
    const char = config.chars[Math.floor(Math.random() * config.chars.length)];
    const x = i * config.fontSize;
    const y = drops[i] * config.fontSize;
    // 月白色概率 / Moon white probability
    ctx.fillStyle = Math.random() < config.moonChance ? MOON : RAIN;
    ctx.fillText(char, x, y);
    if (y > canvas.height && Math.random() < config.resetChance) drops[i] = 0;
    drops[i]++;
  }
  requestAnimationFrame(animate);
}

// DOM加载完成后初始化 / Init after DOM loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
