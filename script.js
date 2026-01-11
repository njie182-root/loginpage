const toggle = document.getElementById("themeToggle");
const body = document.body;

// load saved theme
if(localStorage.getItem("theme") === "light"){
  body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if(body.classList.contains("light")){
    toggle.textContent = "☀️";
    localStorage.setItem("theme","light");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme","dark");
  }
});
