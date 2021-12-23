/**
 * 随机生成十六进制颜色
 */
export const randomHexColorCode = () => {
  return `#${(Math.random() * 0xfffff * 1e6).toString(16).slice(0, 6)}`;
};

export const RGBToHex = (r, g, b) =>
  `#${((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')}`;
