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
});
