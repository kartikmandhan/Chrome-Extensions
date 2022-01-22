function myMain() {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#111";
  document.getElementsByTagName("body")[0].style.color = "#ffe";
  let sections = document.getElementsByTagName("section");
  for (let p of sections) {
    p.style.backgroundColor = "#111";
    p.style.color = "#ffe";
  }
  let div = document.getElementsByTagName("div");
  for (let p of div) {
    p.style.backgroundColor = "#111";
    p.style.color = "#777";
  }

  let nav = document.getElementsByTagName("nav");
  for (let p of nav) {
    p.style.backgroundColor = "#111";
    p.style.color = "#ffe";
  }
  let navLinks = document.getElementsByClassName("nav-link");
  for (let p of navLinks) {
    p.style.color = "#777";
  }
  let images = document.getElementsByTagName("img");
  for (let p of images) {
    p.style.filter = "invert(1)";
  }
  if (document.getElementsByClassName("site-name")[0])
    document.getElementsByClassName("site-name")[0].style.color = "#ffe";
  if (document.getElementsByClassName("userpicture")[0])
    document.getElementsByClassName("userpicture")[0].style.filter =
      "invert(0)";

  let whiteDivs = document.getElementsByClassName("bg-white");
  for (let i = 0; i < whiteDivs.length; i++) {
    whiteDivs[0].classList.remove("bg-white");
  }
}
myMain();
setTimeout(() => {
  myMain();
}, 3000);
