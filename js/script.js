var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    var gambarArrow = this.lastElementChild;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      gambarArrow.style.transform = "rotate(0deg)"
    } else {
      panel.style.display = "block";
      gambarArrow.style.transform = "rotate(180deg)"
    }
  });
}