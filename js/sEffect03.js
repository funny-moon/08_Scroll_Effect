// 버튼 클릭해서 이동하고 애니메이션 주기
const $btn = document.querySelectorAll(".nav ul li a");

$btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const $href = document.querySelector(btn.getAttribute("href"));
    $href.scrollIntoView({ behavior: "smooth" });
  });
});

//스크롤 효과
let srollInfo = document.querySelector(".scroll span");
let nav = document.querySelector(".nav");
let contentItem = document.querySelectorAll(".content_item");
let li = document.querySelectorAll(".nav ul li");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  // if (scrollTop > 0) {
  //   nav.classList.add("show");
  // } else {
  //   nav.classList.remove("show");
  // }

  // 심힝연산자
  // 조건 ? true : false
  scrollTop > 0 ? nav.classList.add("show") : nav.classList.remove("show");

  // 버튼
  // if (scrollTop >= document.querySelector("#section2").offsetTop) {
  //   document.querySelectorAll(".nav ul li").forEach((li) => {
  //     li.classList.remove("active");
  //   });
  //   document.querySelector(".nav ul li:nth-child(2)").classList.add("active");
  // }

  // for
  // for (let i = 1; i <= 9; i++) {
  //   if (scrollTop >= document.querySelector("#section" + i).offsetTop - 10) {
  //     document.querySelectorAll(".nav ul li").forEach((li) => {
  //       li.classList.remove("active");
  //     });
  //     document.querySelector(".nav ul li:nth-child(" + i + ")").classList.add("active");
  //   }
  // }

  // forEach
  contentItem.forEach((item, index) => {
    if (scrollTop >= item.offsetTop) {
      li.forEach((li) => {
        li.classList.remove("active");
      });
      document.querySelector(`.nav ul li:nth-child(${index + 1})`).classList.add("active");
    }
  });

  // info
  srollInfo.innerText = parseInt(scrollTop);
});
