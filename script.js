const slide = document.querySelectorAll(".slide");
let currentIndex = 0;

const updateSlider = () => {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
};

const nextBtns = document.querySelectorAll(".next");
nextBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (currentIndex < slide.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // إعادة من البداية إذا كانت آخر شريحة
    }
    updateSlider();
    bolitsHandler();
  })
);

const backBtns = document.querySelectorAll(".back");
backBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slide.length - 1; 
    }
    updateSlider();
    bolitsHandler();
  })
);

const createBolits = (num) => {
  const slider = document.querySelector(".slider");
  let bolitsHTML = `<li class="bolit bolit_active"></li>`;
  for (let i = 1; i < num; i++) {
    bolitsHTML += `<li class="bolit"></li>`;
  }
  const bolitsList = `<ul class="bolits">${bolitsHTML}</ul>`;
  slider.insertAdjacentHTML("afterend", bolitsList);
};

let bolits;

const bolitsHandler = () => {
  const active = document.querySelector(".bolit_active");
  if (active) active.classList.remove("bolit_active");
  bolits[currentIndex].classList.add("bolit_active");
};

// عشان نفعل الbolit تاع اول صورة
document.addEventListener("DOMContentLoaded", () => {
  createBolits(slide.length);
  bolits = document.querySelectorAll(".bolit");
  bolitsHandler();
});

const btnsKeyboardHandler = () => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      nextBtns[currentIndex].click();
    } else if (event.key === "ArrowLeft") {
      backBtns[currentIndex].click();
    }
  });
};
btnsKeyboardHandler();

