const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "greetings";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginInput.value);

	paintGreetings();
}

function paintGreetings() {
	const userName = localStorage.getItem(USERNAME_KEY);
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${userName}! Nice meet to you.`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
	// loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings();
}
