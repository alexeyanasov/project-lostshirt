// Сайдбар меню (открытие/закрытие)
(function() {
const openingBtn = document.querySelector(".sidebar__hamburger");
const closingBtn = document.querySelector(".sidebar__close");
const sidebar = document.querySelector(".sidebar");

// вызов функций
openingBtn.addEventListener("click", openSidebar);
closingBtn.addEventListener("click", closeSidebar)


// функция открытия бургера
function openSidebar(){
    sidebar.classList.add('sidebar--opened');
}
// функция закрытия бургера
function closeSidebar(){
    sidebar.classList.remove('sidebar--opened');
}
}())


// Слайдер
(function() {

    const slides = document.querySelectorAll('.fade-slider__item');
    const activeClass = "fade-slider__item--visible";
    let index = 0;
  
    setInterval(function() {
      slides[index].classList.remove(activeClass);
      index++;
  
      if (index + 1 > slides.length) {
        index = 0;
      }
  
      slides[index].classList.add(activeClass);
      
    }, 5000);
  
  }())

  