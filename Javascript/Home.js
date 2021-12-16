
const arrows = document.querySelectorAll(".arrow");

const journeyLists = document.querySelectorAll(".journey-list");



arrows.forEach((arrow,i)=>  {

    const itemNumber = journeyLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if(itemNumber - (4+clickCounter) >= 0) {
    journeyLists[i].style.transform = `translateX(${journeyLists[i].computedStyleMap().get("transform")[0].x.value -300}px)`;
    } else  {
        journeyLists[i].style.transform= "translateX(0)";

        clickCounter  = 0;
    }
});

window.innerWidth/270

});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".body, .journey-list-item, .navbar-container, .sidebar, .left-menu-icon, .toggle")
/* const items = document.querySelectorALL(".body, .journey-list-item, .navbar-container, .sidebar, .left-menu-icon, .toggle"); */


ball.addEventListener("click", ()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")

})
