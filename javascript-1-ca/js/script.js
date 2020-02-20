const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        createDetails(json.results);
    })
    .catch(function (error) {
        console.dir(error);
        window.location = "error.html";
    });


function createDetails(data) {
    const resultsContainer = document.querySelector(".results");
    let html = "";

    console.log(data);
    data.forEach(function (element) {
        if (!element.type) {
            element.type = "Unknown";
        }

        html += `
        <div class="col-sm-6 col-md-4 col-lg-3">                
            <div class="card">    
                <img class="image" src="${element.image}" alt="Character Name">
                <div class="details">
                    <h4 class="name">${element.name}</h4>
                    <p>Type: ${element.type}</p>    
                    <p>Episode count: ${element.episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${element.id}">Details</a>
                </div>
            </div>
        </div>`
    });


    resultsContainer.innerHTML = html;
}