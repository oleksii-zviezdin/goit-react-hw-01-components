export function getRandomSaturatedColor() {
  const hue = Math.floor(Math.random() * 20) * 18; // обираємо випадкове значення в діапазоні 0-340 для hue
  const saturation = Math.floor(Math.random() * 51) + 50; // обираємо випадкове значення в діапазоні 50-100 для saturation
  const lightness = Math.floor(Math.random() * 31) + 10; // обираємо випадкове значення в діапазоні 10-40 для lightness
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
