const tips = [
  "Reduce, reuse, recycle.",
  "Conserve water by taking shorter showers.",
  "Use reusable bags instead of plastic ones.",
  "Turn off lights when you leave a room.",
  "Plant a tree in your community.",
  "Use energy-efficient appliances.",
  "Walk or bike instead of driving.",
  "Compost your food waste.",
  "Support renewable energy sources.",
  "Reduce meat consumption."
];

const generateTip = document.getElementById('generateTip');
const tipDisplay = document.getElementById('tipDisplay');

generateTip.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipDisplay.textContent = tips[randomIndex];
});
