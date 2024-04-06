// TODO...
// variables para tomar los datos 
let form = null;
let countDisplay = null;
let cardsContainer = null;
let existingFirstCard = null;
let loadingOverlay = null;

// aqui van la API KEY y las demas cuestiones para conectarme 
const baseUrl = "https://api.nasa.gov";
const API_KEY = "WRMA3wCsSio1W4ZQFUSa96XDs7cUjLUCbI3rG8A7";

// el contador para contar los elementos
let totalCount = 0;

// hacer ciegos los elementos xd
const bindElements = () => {
    form = document.querySelector("#form");
    countDisplay = document.querySelector("#count");
    cardsContainer = document.querySelector("#container-cards");
    existingFirstCard = cardsContainer.querySelector(".first-card");
    loadingOverlay = document.getElementById("loading-overlay");
}

// escuchar los elementos que vamos a tomar datos 
const addEventListeners = () => {
    form.addEventListener("submit", function (event) {
        event.preventDefault();   // Para que no recarge
        loading(false);
        getData();                // aqui hacemos fetch 
    });
}

// promise para mostrar los elementos cuando ya se encuentren 
const loading = (complete) => {
    if (complete) {
        loadingOverlay.style.display = "none";
    }
    else {
        loadingOverlay.style.display = "flex";
    }
}

// para agarrar los datos 
const getData = async () => {
    const queryParams = new URLSearchParams();

    queryParams.append("api_key", API_KEY);
    queryParams.append("count", "1");
    queryParams.append("thumbs", "true");

    const urlWithParams = `${baseUrl}/planetary/apod?${queryParams.toString()}`;


    try {
        // parte de la try 
        const response = await fetch(urlWithParams);
        if (response.ok) {
            const data = await response.json(); // Parse the response as JSON
            loading(true);                      // Hide the loading overlay
            displayData(data[0]);               // Display the data on the card

        } else if (response.status === 400 || response.status === 404) {

            // Throws an error with the API's error message.
            const errorData = await response.json();
            throw new Error(`No se pudo papi: ${errorData.msg}`);

        } else {

            // Throws a general error 
            throw new Error(`No se pudo pedir nada papi`);
        }

    } catch (error) {
        // catch code
        loading(true);                              // Hide the loading overlay
        showErrorAlert(error);                      // Display an error using a function declared later
        console.error("Revise, que paso un error:", error); // Show the error in the console
    }
}

const displayData = ({ date, explanation, media_type, title, url, thumbnail_url }) => {
    /* displayData code */
    const mediaURL = media_type === "image" ? url : thumbnail_url;

    const encodedExplanation = encodeURIComponent(explanation);

    const newCardHTML = `
  <li class="card">
    <div class="card__content">
      <h3 class="card__title">
        <a href="description.html?date=${date}&explanation=${encodedExplanation}&title=${title}&mediaURL=${mediaURL}" class="card__link">
          ${title}
        </a>
      </h3>
      <time class="card__date">${date}</time>
    </div>
    <img class="card__img" src="${mediaURL}" alt="${title}" />
  </li>
`;

    // If it's the first element, remove the default card
    if (totalCount == 0) {
        cardsContainer.removeChild(existingFirstCard);
    }

    // Add the new element to the beginning of the list
    cardsContainer.insertAdjacentHTML("afterbegin", newCardHTML);

    // Increment the count and update the display
    totalCount++;
    countDisplay.textContent = totalCount;

}

// para mostrar los errores 
const showErrorAlert = (msg) => {
    alert(msg || "An unexpected error occurred");
}

// para las cosas salgan invisibles 
const main = () => {
    bindElements();
    addEventListeners();
}

window.onload = main;