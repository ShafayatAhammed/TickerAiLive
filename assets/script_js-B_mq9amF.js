const s = document.getElementsByClassName("sm-nav-toggler")[0],
  e = document.getElementsByClassName("sm-nav")[0],
  t = document.getElementById("html"),
  l = document.getElementsByClassName("theme-toggler")[0],
  n = document.getElementsByClassName("theme-toggler")[1];
l.addEventListener("click", () => {
  t.classList.toggle("dark");
});
n.addEventListener("click", () => {
  t.classList.toggle("dark");
});
const a = () => {
    e.classList.toggle("hidden");
  },
  d = () => {
    window.innerWidth > 842 &&
      !e.classList.contains("hidden") &&
      e.classList.add("hidden");
  };
window.addEventListener("load", () => {
  window.addEventListener("resize", d);
});
s.addEventListener("click", a);
