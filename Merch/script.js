const merch_location = document.querySelector(".merchDisplayElement");
for (let src of image_sources) {
  let merch = document.createElement("div");
  merch.onclick = function() { window.location.href = "https://store.innersloth.com/products/among-us-crewmate-plush-official"; }
  let image = document.createElement("img");
  image.src = src[0];
  let label = document.createElement("p");
  label.innerText = src[1];
  merch.appendChild(image);
  merch.appendChild(label);
  merch_location.appendChild(merch);
}
