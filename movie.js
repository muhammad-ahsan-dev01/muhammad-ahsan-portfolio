const apiKey = "9a9c0c68";

const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const movieResult = document.getElementById("movieResult");

searchBtn.addEventListener("click", searchMovie);

function searchMovie() {

    const movieName = movieInput.value.trim();

    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    movieResult.innerHTML = "<p>Searching... 🔍</p>";

    fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieName)}`
    )

    .then(response => response.json())

    .then(data => {

        console.log(data);

        if (data.Response === "False") {

            movieResult.innerHTML = `
                <h2>Movie Not Found ❌</h2>
                <p>${data.Error}</p>
            `;

            return;
        }

        movieResult.innerHTML = `

            <div class="movie-card">

                <img
                    src="${data.Poster !== "N/A" ? data.Poster : ""}"
                    alt="${data.Title}"
                >

                <div class="movie-info">

                    <h2>${data.Title}</h2>

                    <p><strong>Year:</strong> ${data.Year}</p>

                    <p><strong>Genre:</strong> ${data.Genre}</p>

                    <p><strong>Director:</strong> ${data.Director}</p>

                    <p><strong>Actors:</strong> ${data.Actors}</p>

                    <p><strong>IMDb Rating:</strong> ⭐ ${data.imdbRating}</p>

                    <p><strong>Plot:</strong> ${data.Plot}</p>

                </div>

            </div>

        `;

    })

    .catch(error => {

        console.error(error);

        movieResult.innerHTML = `
            <h2>Error ❌</h2>
            <p>Something went wrong. Please try again.</p>
        `;

    });
}