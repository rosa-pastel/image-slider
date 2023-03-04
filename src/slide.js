function convert(num) {
  if (typeof num === "number")
    switch (num) {
      case 0:
        return "zero";
      case 1:
        return "one";
      case 2:
        return "two";
      case 3:
        return "three";
      default:
        return "four";
    }
  else {
    switch (num) {
      case "zero":
        return 0;
      case "one":
        return 1;
      case "two":
        return 2;
      case "three":
        return 3;
      default:
        return 4;
    }
  }
}
function slide(direction) {
  const images = Array.from(document.getElementsByClassName("image"));
  const circles = Array.from(document.getElementsByClassName("circle"));
  images.map((image, imgIndex) => {
    const oldPos = convert(image.id);
    let newPos;
    if (direction === "right") {
      newPos = oldPos === 4 ? 0 : oldPos + 1;
    } else {
      newPos = oldPos === 0 ? 4 : oldPos - 1;
    }
    const imgCircle = circles[imgIndex];
    if (newPos === 2) {
      imgCircle.classList.add("circle-full");
    } else {
      imgCircle.classList.remove("circle-full");
    }
    image.setAttribute("id", convert(newPos));
  });
}
function goToSlide(circleIndex) {
  const image = document
    .getElementById("image-container")
    .children.item(circleIndex);
  while (image.id !== "two") {
    slide("left");
  }
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
  const circles = Array.from(document.getElementsByClassName("circle"));
  circles.map((circle, index) => {
    circle.addEventListener("click", goToSlide.bind(circle, index));
  });
  setInterval(slide, 5000);
}
