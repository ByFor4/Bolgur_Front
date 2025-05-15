const overlay = document.getElementById('overlay');

function opacity_on() {
    overlay.style.opacity = 100;
  }

function opacity_off() {
    overlay.style.display = "none"
    
}

document.querySelectorAll(".legend").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        overlay.style.display = "block";
        setTimeout(opacity_on, 100)
    });
});

document.querySelectorAll(".history").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        overlay.style.display = "block";
        setTimeout(opacity_on, 100)
    });
});

document.querySelectorAll(".map").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        setTimeout(opacity_off, 1000)
        overlay.style.opacity = 0;
    });
});