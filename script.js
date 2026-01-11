function googleSearch() {
  const q = document.getElementById("searchInput").value;
  if (!q) return;
  window.open("https://www.google.com/search?q=" + encodeURIComponent(q), "_blank");
}