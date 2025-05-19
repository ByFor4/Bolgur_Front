const overlay = document.getElementById('overlay');
const page_legend = document.getElementById('page_legend');
const page_history = document.getElementById('page_history');

function overlay_on() {
    overlay.style.display = "block"
}

function l_on() {
    page_legend.style.display = "block"
}

function l_off() {
    legend.style.display = "none"
}

function h_on() {
    page_history.style.display = "block"
}

function h_off() {
    page_istory.style.display = "none"
}


window.getComputedStyle()



document.querySelectorAll(".legend").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik legend")
        if (window.getComputedStyle(overlay).display === "none") {
            overlay.style.opacity = 100;
            setTimeout(overlay_on(), 100)
        }
        if (window.getComputedStyle(page_history).display === "block")
            page_history.style.opacity = 0;
            setTimeout(h_off(), 100)
        page_legend.style.opacity = 100;
        setTimeout(l_on, 100)
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



function opacity_on_l() {
    overlay.style.opacity = 100;
    page_legend.style.opacity = 100;
    page_legend.style.display = "block"
    page_history.style.display = "none"
  }

function opacity_on_h() {
    overlay.style.opacity = 100;
    page_history.style.opacity = 100;
    page_history.style.display = "block"
    page_legend.style.display = "none"
}

function opacity_off() {
    overlay.style.display = "none"
    page_legend.style.display = "none"
    page_history.style.display = "none"
}
