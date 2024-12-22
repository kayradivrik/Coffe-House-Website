const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    navbar.classList.toggle("sticky", window.scrollY > 0);


    if (window.scrollY >= menu.offsetTop) {


        if (!start) {
            nums.forEach((num) => {
                startCount(num);
            });
        }
        start = true;
    }
});

const startCount = (el) => {
    let max = parseInt(el.dataset.val); // `dataset.val` değeri sayıya dönüştürülüyor
    let current = 0;
    let increment = Math.ceil(max / 200); // Hız ayarı için küçük bir artış değeri hesaplanıyor
    let count = setInterval(() => {
        current += increment;
        if (current >= max) {
            el.textContent = max; // Maksimum değere ulaşıldığında sabitleniyor
            clearInterval(count);
        } else {
            el.textContent = current;
        }
    }, 10); // Daha akıcı bir artış için 10 ms aralık kullanılıyor
};

