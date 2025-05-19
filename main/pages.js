const overlay = document.getElementById('overlay');
const page_legend = document.getElementById('page_legend');
const page_history = document.getElementById('page_history');

function overlay_on() {
    console.log('overlay_on')
    overlay.style.opacity = 100;
}

function overlay_off() {
    console.log('overlay_off')
    overlay.style.display = "none"
}

function l_on() {
    console.log('l_on')
    page_legend.style.opacity = 100;
}

function l_off() {
    console.log('l_off')
    page_legend.style.display = "none"
}

function h_on() {
    console.log('h_on')
    page_history.style.opacity = 100;
}

function h_off() {
    console.log('h_off')
    page_history.style.display = "none"
}

document.querySelectorAll(".legend").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik legend")
        if (window.getComputedStyle(overlay).display === "none") {
            overlay.style.display = "block"
            setTimeout(overlay_on, 300)
        }
        if (window.getComputedStyle(page_history).display === "block") {
            page_history.style.opacity = 0;
            setTimeout(h_off, 300)
        }
        page_legend.style.display = "block"
        setTimeout(l_on, 300)
    });
});

document.querySelectorAll(".history").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik history")
        if (window.getComputedStyle(overlay).display === "none") {
            overlay.style.display = "block"
            setTimeout(overlay_on, 300)
        }
        if (window.getComputedStyle(page_legend).display === "block") {
            page_legend.style.opacity = 0;
            setTimeout(l_off, 300)
        }
        page_history.style.display = "block";
        setTimeout(h_on, 300)
    });
});

document.querySelectorAll(".map").forEach(side_menu_el => {
    side_menu_el.addEventListener("click", () => {
        console.log("clik map")
        if (window.getComputedStyle(page_legend).display === "block") {
            page_legend.style.opacity = 0;
            setTimeout(l_off, 300)
        }
        if (window.getComputedStyle(page_history).display === "block") {
            page_history.style.opacity = 0;
            setTimeout(h_off, 300)
        }
        overlay.style.opacity = 0;
        setTimeout(overlay_off, 300)
    });
});

