let loupe = document.querySelector("#loupe");
document.querySelector("#search").addEventListener("focus", () => loupe.style.display = "none");
document.querySelector("#search").addEventListener("blur", () => loupe.style.display = "");

logo = () => window.location.assign("/");