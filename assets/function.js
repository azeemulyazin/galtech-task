// carousel-init.js

document.addEventListener("DOMContentLoaded", function () {
  const owlCarouselElement = document.querySelector(".owl-carousel");

  if (owlCarouselElement) {
    $(owlCarouselElement).owlCarousel({
      items: 3,
      loop: true,
      margin: 20,
      autoplay: true,
      dots: false,
      autoplayTimeout: 4000, // 4 seconds
    //   autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const lipstickSlider = $(".lipstick-slider");

  // Init Owl Carousel
  lipstickSlider.owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  // Custom right arrow button control
  document.getElementById("plump-next").addEventListener("click", function () {
    lipstickSlider.trigger("next.owl.carousel");
  });

  // Color swatch logic
  lipstickSlider.on("click", ".color-swatch", function () {
    const newImg = $(this).data("img");
    const container = $(this).closest(".product-item");

    container.find(".lipstick-img").attr("src", newImg);
    container.find(".color-swatch").removeClass("active");
    $(this).addClass("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  const $slider = $(".single-product-slider");

  if ($slider.length) {
    $slider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      nav: false,
      dots: false,
      margin: 20,
    });

    const $nextArrow = $("#customNextArrow");

    if ($nextArrow.length) {
      $nextArrow.on("click", function () {
        $slider.trigger("next.owl.carousel");
      });
    }
  }
});
