const points = [
  { id: 1, text: "Точка 1: описание", image: "../image1.jpg" },
  { id: 2, text: "Точка 2: описание", image: "../image2.jpg" },
  { id: 3, text: "Точка 3: описание", image: "../image3.jpg" }
];

document.querySelectorAll(".point").forEach(point => {
  point.addEventListener("click", () => {
    const id = point.dataset.id;
    const data = points.find(p => p.id == id);

    document.getElementById("popupImage").src = data.image;
    document.getElementById("popupText").textContent = data.text;
    document.getElementById("popup").style.display = "block";
  });
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
