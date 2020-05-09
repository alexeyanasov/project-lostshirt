(function() {
  const controlls = document.querySelectorAll(".filter__link");
  const activeClass = "filter__item--active";

  controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
      e.preventDefault();
      
      controlls.forEach(function(link) {
        link.closest(".filter__item").classList.remove(activeClass);
      });

      control.closest(".filter__item").classList.add(activeClass);

    });
  });
})();
