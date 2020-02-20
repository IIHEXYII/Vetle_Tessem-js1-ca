const params = new URLSearchParams(document.location.search)
const resultsContainer = document.querySelector(".detail-container");
const detailsUrl = `https://rickandmortyapi.com/api/character/${id}`;

let id;

if (params.get("id") !== "") {
    id = params.get("id");

} else {
    window.location = "error.html"
};


let html = "";

fetch(detailsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createDetails(json);
    })
    .catch(function (error) {
        console.dir(error);
    });



function createDetails(details) {
    html += `<div class="detail-container">
            <img class="details-image" src="${details.image}" alt="${details.name}" />
            <div class="detail-details">
                <h1>${details.name}</h1>
                <p>Status: <span class="value" id="status">${details.status}</span></p>
                <p>Species: <span class="value" id="species">${details.species}</span></p>
                <p>Origin: <span class="value" id="origin">${details.origin.name}</span></p>
                <p>Location: <span class="value" id="location">${details.location.name}</span></p>                   
            </div>
        </div>`
    resultsContainer.innerHTML = html;
};