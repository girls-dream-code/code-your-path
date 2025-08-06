function displayImage() {
  const inputText = document.getElementById("input-text").value.toLowerCase();
  const imageContainer = document.getElementById("image-container");
  const resultImage = document.getElementById("result-image");
  const resultText = document.getElementById("result-text");

  let imageUrl = "";
  let text = "";

  // Conditions for different keywords
  if (inputText.includes("valentine")) {
    imageUrl = "https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    text = "This is a beautiful vintage outfit inspo.";
  } else if (inputText.includes("christmas")) {
    imageUrl = "https://m.media-amazon.com/images/I/61b8h8+fFnL._AC_UF350,350_QL80_.jpg";
    text = "A sleek casual look!";
  } else if (inputText.includes("halloween")) {
    imageUrl = "https://i.pinimg.com/736x/06/43/3c/06433cf4d48a9ee599718ecce43d2672.jpg";
    text = "Get inspo from this formal collection.";
  } else {
    imageUrl = "https://hips.hearstapps.com/hmg-prod/images/halloween-nails-1594327873.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*";
    text = "We will work to find some more nail art inspo!";
  }

  // Update the image and text based on the condition
  if (imageUrl) {
    resultImage.src = imageUrl;
    resultImage.alt = inputText;
    resultText.textContent = text;
    //imageContainer.style.display = "flex";
  } else {
    imageContainer.style.display = "none";
    alert("Please enter a word for fashion insp.");
  }
}