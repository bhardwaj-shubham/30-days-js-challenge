// To hide the API Key, I stored API Key in localStorage.
// Format: apiKey = "apiKey"

const apiKey = localStorage.getItem("apiKey");

async function fetchWeather(cityName) {
	try {
		const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&appid=${apiKey}&units=metric`;

		const response = await fetch(apiUrl);
		const data = await response.json();

		return data;
	} catch (error) {
		throw new Error(error);
	}
}

const searchBtn = document.getElementById("searchBtn");

const weatherNodeList = document.querySelectorAll("#weather li");

const tempNodeList = document.querySelectorAll("#temp li");

searchBtn.addEventListener("click", () => {
	const inputCity = document.getElementById("inputCity").value;

	if (!inputCity || inputCity.length === "") {
		return;
	}

	fetchWeather(inputCity)
		.then((weatherData) => {
			if (weatherData?.cod === "404") {
				alert("Please enter correct city name!");
				return;
			}

			console.log(weatherData);

			document.getElementById("cityName").firstElementChild.innerHTML =
				weatherData?.city?.name;

			const forecastData = weatherData?.list;

			// display the forecast div
			document.getElementById("forecast").style.display = "block";
			document.getElementById("forecast").classList.add("fadeIn");

			tempNodeList.forEach((li, index) => {
				li.innerHTML = `${forecastData[index]?.main?.temp} <span>℃</span>`;
			});

			weatherNodeList.forEach((li, index) => {
				li.firstElementChild.src = `https://openweathermap.org/img/wn/${forecastData[index]?.weather[0].icon}@2x.png`;
			});
		})
		.catch((err) => console.error(err));
});
