// script for creating undelines on links of footer while hover on them
let footerLinks = document.querySelectorAll(".col");
console.log(footerLinks);

footerLinks = Array.from(footerLinks).forEach((e) => {
  e.addEventListener("mouseenter", () => {
    for (let i = 0; i < e.children.length; i++) {
      e.children[i].style.textDecoration = "underline";
    }
  });

  e.addEventListener("mouseleave", () => {
    for (let i = 0; i < e.children.length; i++) {
      e.children[i].style.textDecoration = "none";
    }
  });
});
