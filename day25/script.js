// To hide the API Key, I stored API Key in localStorage.
// Format: apiKey = "apiKey"

const options = {
	method: "GET",
	headers: {
		"x-rapidapi-key": localStorage.getItem("apiKey"),
		"x-rapidapi-host": "movies-api14.p.rapidapi.com",
	},
};

async function searchMovieByName(movieName) {
	const url = `https://movies-api14.p.rapidapi.com/search?query=${movieName}`;

	try {
		const response = await fetch(url, options);
		const result = await response.json();

		const movies = result?.contents;

		return movies;
	} catch (error) {
		console.error(error);
	}
}

const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", () => {
	document.querySelector(".msg").style.display = "none";

	const movieName = document.getElementById("movieName").value;

	const uriFormattedMovieName = encodeURIComponent(movieName.toLowerCase());

	// console.log(uriFormattedMovieName);

	if (!uriFormattedMovieName || uriFormattedMovieName.length === 0) {
		return;
	}

	document.querySelector(".loading").style.display = "block";

	// search movies and stored in moviesList array
	searchMovieByName(uriFormattedMovieName)
		.then((movies) => {
			if (!movies || movies.length === 0) {
				document.querySelector(".msg").style.display = "block";
			} else {
				movies.sort(
					(a, b) =>
						new Date(b.release_date) - new Date(a.release_date)
				);

				displayMovie(movies);
			}

			document.querySelector(".loading").style.display = "none";
		})
		.catch((err) => console.error(err));
});

function displayMovie(moviesList) {
	const movieContainer = document.getElementById("movie-container");
	moviesList.innerHTML = ""; // Clear previous content

	const size = Math.min(3, moviesList.length);

	// Display only the first four movies
	for (let i = 0; i < size; i++) {
		const movie = moviesList[i];

		// console.log(movie);

		const movieItem = document.createElement("div");
		movieItem.classList.add("movie-item");
		movieItem.classList.add("fadeIn");

		const movieTitle = document.createElement("div");
		movieTitle.classList.add("movie-title");
		movieTitle.textContent = movie?.original_title || "";

		const moviePoster = document.createElement("img");
		moviePoster.classList.add("movie-poster");
		moviePoster.setAttribute("src", movie?.poster_path || "");
		moviePoster.setAttribute("alt", movie?.original_title || "");

		const movieOverview = document.createElement("div");
		movieOverview.className = "movie-overview";
		movieOverview.innerText = movie?.overview || "";

		const moreInfoButton = document.createElement("button");
		moreInfoButton.className = "more-info";
		moreInfoButton.innerText = "More Info";

		moreInfoButton.addEventListener("click", () => {
			if (movieOverview.style.display === "none") {
				moviePoster.style.display = "none";
				moviePoster.style.marginLeft = "8px";

				movieOverview.style.display = "block";
			} else {
				moviePoster.style.display = "block";
				moviePoster.style.marginLeft = "8px";

				movieOverview.style.display = "none";
			}
		});

		movieItem.appendChild(movieTitle);
		movieItem.appendChild(moviePoster);
		movieItem.appendChild(movieOverview);
		movieItem.appendChild(moreInfoButton);

		movieContainer.appendChild(movieItem);
	}
}
