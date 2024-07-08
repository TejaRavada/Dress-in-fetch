
// function navSlide()
//     {
//         const nav = document.querySelector(".navbar");
//         const menu = document.querySelector(".nav_list");
//         const burger = document.querySelector(".burger");

//         burger.addEventListener("click", ()=>{
//             menu.classList.toggle("nav-active");

//             burger.classList.toggle("toggle")
//         })
//     }

//     navSlide();

function navSlide() {
    const menu = document.querySelector('.nav_list');
    const burger = document.querySelector('.burger');
    
    // Add logging to debug
    console.log("menu:", menu);
    console.log("burger:", burger);

    if (burger) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    } else {
        console.error("Burger element not found");
    }
}

document.addEventListener('DOMContentLoaded', navSlide);

