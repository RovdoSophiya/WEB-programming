function setDarkTheme() {
  document.body.setAttribute("dark", "");
  localStorage.setItem("theme", "dark");
}

function setLightTheme() {
  document.body.removeAttribute("dark");
  localStorage.setItem("theme", "light");
}

document.getElementById("darkTheme").addEventListener("click", setDarkTheme);
document.getElementById("lightTheme").addEventListener("click", setLightTheme);

// Проверяем, есть ли сохраненная тема в локальном хранилище и применяем её
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  setDarkTheme();
} else {
  setLightTheme();
}
