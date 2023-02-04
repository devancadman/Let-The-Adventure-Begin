const imageContainer = document.getElementById("image-container");

  async function getImages() {
    for (let i = 0; i < 12; i++) {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?query=hiking,mountaineering,traveling&client_id=b5H9YUli8wDuaTQPTiLDEqBO3x6NkDbaRabIW48Q5_U"
      );
      const data = await response.json();
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-attribution-container");
      const image = document.createElement("img");
      image.classList.add("image");
      image.src = data.urls.regular;
      image.alt = `Photo by ${data.user.name} on Unsplash`;
      image.addEventListener("click", () => {
        window.open(data.links.download, "_blank");
      });
      const attribution = document.createElement("div");
      attribution.classList.add("attribution");
      attribution.innerHTML = `Photo by <a href="${data.user.links.html}?utm_source=Randomly_get_Images_for_LTAB&utm_medium=referral" target="_blank">${data.user.name}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral" target="_blank">Unsplash</a>`;
      imageContainer.appendChild(image);
      imageContainer.appendChild(attribution);
      document.getElementById("image-container").appendChild(imageContainer);
    }
  }

getImages();
