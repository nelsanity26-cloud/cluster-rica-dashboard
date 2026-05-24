document.getElementById("kpiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const releaseRate = document.getElementById("releaseInput").value;
  const nps = document.getElementById("npsInput").value;
  const csat = document.getElementById("csatInput").value;
  const sales = document.getElementById("salesInput").value;

  if (releaseRate) document.getElementById("releaseRate").textContent = releaseRate;
  if (nps) document.getElementById("nps").textContent = nps;
  if (csat) document.getElementById("csat").textContent = csat;
  if (sales) document.getElementById("sales").textContent = sales;
  document.getElementById("bonusForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nps = parseFloat(document.getElementById("npsBonus").value);
  const csat = parseFloat(document.getElementById("csatBonus").value);
  const fcr = parseFloat(document.getElementById("fcrBonus").value);
  const release = parseFloat(document.getElementById("releaseBonus").value);

  let bonus = 0;

  // KPI weights
  if (nps >= 72) bonus += 35;   // 35% of 100% bonus
  if (csat >= 84) bonus += 25;  // 25% of 100% bonus
  if (fcr >= 72) bonus += 40;   // 40% of 100% bonus
  if (release >= 85) bonus += 0; // Release Rate is a gate, not weighted

  // Multiplier logic
  let multiplier = 1;
  if (release >= 85) {
    if (bonus >= 100) multiplier = 1;
    if (bonus >= 107) multiplier = 2;
    if (bonus >= 112) multiplier = 3;
  }

  document.getElementById("bonusResult").textContent =
    `Bonus Achieved: ${bonus}% | Multiplier: x${multiplier}`;
});

