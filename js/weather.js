const API_KEY = "eec5e330f5ade4183c386d6a8b0f65d2";
const WEATHER_INFO = "weatherInfo";

function getWeather(lat, lon) {
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weatherIcon = document.querySelector(
				"#weather img:first-child"
			);
			const weatherSpan = document.querySelectorAll("#weather span");
			const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
			const temp = Math.floor(data.main.temp);

			weatherIcon.src = icon;
			weatherSpan[0].innerText = `${data.weather[0].main} / ${temp}℃`;
			weatherSpan[1].innerText = data.name;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

function onGeoOk(position) {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const weatherPositionObj = {
		latitude,
		longitude,
	};
	console.log("onGeoOk.weatherPositionObj = ", weatherPositionObj);
	savaWeatherInfo(weatherPositionObj);
	getWeather(latitude, longitude);
}

function savaWeatherInfo(positionObj) {
	localStorage.setItem(WEATHER_INFO, JSON.stringify(positionObj));
}

function askForWeather() {
	navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

function loadWeather() {
	const loadedWeather = localStorage.getItem(WEATHER_INFO);
	if (loadedWeather === null) {
		askForWeather();
	} else {
		const parsedWeatherPosition = JSON.parse(loadedWeather);
		getWeather(
			parsedWeatherPosition.latitude,
			parsedWeatherPosition.longitude
		);
	}
}

loadWeather();
