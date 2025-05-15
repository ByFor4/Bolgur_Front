const overlay = document.getElementById('overlay');
const page_legend = document.getElementById('page_legend');
const page_history = document.getElementById('page_history');


function opacity_on_l() {
    overlay.style.opacity = 100;
    page_legend.style.display = "block"
    page_history.style.display = "none"
  }

function opacity_on_h() {
    overlay.style.opacity = 100;
    page_history.style.display = "block"
    page_legend.style.display = "none"
}

function opacity_off() {
    overlay.style.display = "none"
    page_legend.style.display = "none"
    page_history.style.display = "none"
}

document.querySelectorAll(".legend").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        overlay.style.display = "block";
        setTimeout(opacity_on_l, 100)
    });
});

document.querySelectorAll(".history").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        overlay.style.display = "block";
        setTimeout(opacity_on_h, 100)
    });
});

document.querySelectorAll(".map").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik")
        setTimeout(opacity_off, 1000)
        overlay.style.opacity = 0;
    });
});