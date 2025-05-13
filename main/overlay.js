const overlay = document.getElementById('overlay');

function opacity_on() {
    overlay.style.opacity = 100;
  }

function opacity_off() {
    overlay.style.opacity = 0;
}

document.querySelectorAll(".side_menu_el").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        overlay.style.display = "block";
        setTimeout(opacity_on, 100)
    });
});
