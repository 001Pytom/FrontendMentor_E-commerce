// selecting all elements

const gallery = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box");
const closeIcon = document.querySelector(".close-icon");
const thumbnail = document.querySelectorAll(".thumbnail .img");
let imageContainer = document.querySelector(".image-container");
let previewImage = imageContainer.querySelector("img");
const cartBasket = document.querySelector(".cart-basket");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    let newIndex = i;
    gallery[i].onclick = () => {
      //to get the source
      function preview() {
        let selectedImgUrl = gallery[newIndex].querySelector("img").src; //getting user clicked url
        previewImage.src = selectedImgUrl;
        // console.log(selectedImgUrl);
      }

      // the next and prev botton
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
        }
      };
      nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
        }
      };

      previewBox.classList.remove("hidden");
      previewBox.classList.add("lg:flex");

      closeIcon.onclick = () => {
        prevBtn.style.display = "flex";
        nextBtn.style.display = "flex";

        previewBox.classList.remove("lg:flex");
        previewBox.classList.add("hidden");
      };
    };
  }
};

// hamburger menu

const ham = document.getElementById("menu-toggle");
ham.addEventListener("click", (e) => {
  document.querySelector(".menu-items-mobile").classList.add("show");
});

const close = document.getElementById("menu-close");
close.addEventListener("click", (e) => {
  document.querySelector(".menu-items-mobile").classList.remove("show");
});

// cart
function openCart() {
  cartBasket.classList.toggle("open");
}
