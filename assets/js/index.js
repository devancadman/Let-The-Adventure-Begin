const imageContainer = document.getElementById("image-container");
let displayedImages = [];

async function getImages() {
for (let i = 0; i < 12; i++) {
let response = await fetch(
"https://api.unsplash.com/photos/random?query=hiking,mountaineering,traveling&client_id=H8jlm4V590DpLnhmytlnXOi71Nehjjs2giQZbqIEfyg"
);
let data = await response.json();
let image = data;

while (displayedImages.includes(image.urls.regular)) {
  response = await fetch(
    "https://api.unsplash.com/photos/random?query=hiking,mountaineering,traveling&client_id=H8jlm4V590DpLnhmytlnXOi71Nehjjs2giQZbqIEfyg"
  );
  data = await response.json();
  image = data;
}

displayedImages.push(image.urls.regular);
const imageContainer = document.createElement("div");
imageContainer.classList.add("image-attribution-container");
const img = document.createElement("img");
img.classList.add("image");
img.src = image.urls.regular;
img.alt = `Photo by ${image.user.name} on Unsplash`;
img.addEventListener("click", () => {
  window.open(image.links.download, "_blank");
});
const attribution = document.createElement("div");
attribution.classList.add("attribution");
attribution.innerHTML = `Photo by <a href="${image.user.links.html}?utm_source=randomly_get_images_for_ltab&utm_medium=referral">${image.user.name}</a> on <a href="https://unsplash.com/?utm_source=randomly_get_images_for_ltab&utm_medium=referral">Unsplash</a>`;
imageContainer.appendChild(img);
imageContainer.appendChild(attribution);
document.getElementById("image-container").appendChild(imageContainer);
}
}

getImages();
