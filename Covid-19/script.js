async function fetchData() {
  const res = await fetch("https://api.covid19api.com/summary");

  const record = await res.json();

  console.log(record.Countries[77]);
  document.getElementById("Nconfirmed").innerHTML =
    record.Countries[77].NewConfirmed;
  document.getElementById("NewDeaths").innerHTML =
    record.Countries[77].NewDeaths;

  document.getElementById("Nrecovered").innerHTML =
    record.Countries[77].NewRecovered;
}
fetchData();
