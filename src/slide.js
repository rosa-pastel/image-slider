function slide(direction) {
  const images = Array.from(document.getElementsByClassName("image"));
  images.map((image) => {
    let id;
    switch (image.id) {
      case "four":
        id = direction === "right" ? "zero" : "three";
        break;
      case "zero":
        id = direction === "right" ? "one" : "four";
        break;
      case "one":
        id = direction === "right" ? "two" : "zero";
        break;
      case "two":
        id = direction === "right" ? "three" : "one";
        break;
      default:
        id = direction === "right" ? "four" : "two";
        break;
    }
    image.setAttribute("id", id);
  });
}

export default function initSlider() {
  const rightArrow = document.getElementById("arrow-right");
  rightArrow.addEventListener("click", () => {
    slide("right");
  });
  const leftArrow = document.getElementById("arrow-left");
  leftArrow.addEventListener("click", () => {
    slide("left");
  });
}
