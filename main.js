let arr = Array.from(document.querySelectorAll(".tests-box"));
let next = document.getElementById("rightBtn");
let prev = document.getElementById("leftBtn");
let dots = Array.from(document.querySelectorAll(".data-slide ul li"));

if (!arr.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    if (n > arr.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = arr.length;
    }

    for (i = 0; i < arr.length; i++) {
      arr[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    arr[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});
