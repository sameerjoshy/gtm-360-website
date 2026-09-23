// WCAG-safe text colors. Brand accent colors (engine/layer) are tuned for fills
// and dots, not for text on white — this darkens them just enough to pass AA.

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}
function rgbToHex([r, g, b]) {
  return '#' + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
}
function luminance([r, g, b]) {
  const a = [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}
function contrast(fg, bg) {
  const l1 = luminance(hexToRgb(fg)), l2 = luminance(hexToRgb(bg));
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * Darken a hex color until it meets `target` contrast against `bg`.
 * Returns the original color if it already passes.
 */
export function forText(hex, bg = '#f8fafc', target = 4.5) {
  if (!hex || !/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) return hex;
  if (contrast(hex, bg) >= target) return hex;
  let rgb = hexToRgb(hex);
  for (let i = 0; i < 20; i++) {
    rgb = rgb.map((v) => v * 0.9);
    const c = rgbToHex(rgb);
    if (contrast(c, bg) >= target) return c;
  }
  return '#0f172a';
}
