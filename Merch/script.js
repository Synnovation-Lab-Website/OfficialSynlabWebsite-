const merch_location = document.querySelector(".merchDisplayElement");
for (let src of image_sources) {
  let image = document.createElement("img");
  image.src = src;
  merch_location.appendChild(image);
}
