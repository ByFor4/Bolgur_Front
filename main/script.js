const points = [
  { id: 1, text: "Точка 1: описание", image: "../image1.jpg" },
  { id: 2, text: "Точка 2: описание", image: "../image2.jpg" },
  { id: 3, text: "Точка 3: описание", image: "../image3.jpg" }
];

document.querySelectorAll(".point").forEach(point => {
  point.addEventListener("click", () => {
    const id = point.dataset.id;
    const data = points.find(p => p.id == id);
    const p_top = Number(point.style.top.split("%")[0])
    const p_left = Number(point.style.left.split("%")[0])


    document.getElementById("popupImage").src = data.image;
    document.getElementById("popupText").textContent = data.text;
    document.getElementById("popup").style.display = "block";

    if (p_top > 70) {

      if (p_left > 70) {
        document.getElementById("popup").style.top = p_top + "%"
        document.getElementById("popup").style.left = `calc(${p_left}% - 244px)`
      }

      else {
        document.getElementById("popup").style.top = p_top + "%"
        document.getElementById("popup").style.left = p_left + "%"
      }
    } else {

      if (p_left > 70) {
        document.getElementById("popup").style.top = `calc(${p_top}% + 244px)`
        document.getElementById("popup").style.left = `calc(${p_left}% - 244px)`
      }

      else {
        document.getElementById("popup").style.top = `calc(${p_top}% + 244px)`
        document.getElementById("popup").style.left = p_left + "%"
      }
    }
  });
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
