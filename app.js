const openModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < openModal.length; i++)
openModal[i].addEventListener("click", modalOpen);
closeModal.addEventListener("click", modalClose);
overlay.addEventListener("click", modalClose);

document.addEventListener('keydown' , function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modalClose()
    }
})
