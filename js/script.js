// Сайдбар меню (открытие/закрытие)

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