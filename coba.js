menu.addEventListener("click", function () {
  this.classList.add("active");

  setTimeout(() => {
    this.classList.remove("active");
  }, 200); // hilang setelah 0.2 detik
});
