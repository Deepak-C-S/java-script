const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const passwordLength = 8;

function getRandomValue(max) {
	if (window.crypto && window.crypto.getRandomValues) {
		const array = new Uint32Array(1);
		window.crypto.getRandomValues(array);
		return array[0] % max;
	}

	return Math.floor(Math.random() * max);
}

function shuffleCharacters(list) {
	for (let index = list.length - 1; index > 0; index -= 1) {
		const randomIndex = getRandomValue(index + 1);
		[list[index], list[randomIndex]] = [list[randomIndex], list[index]];
	}

	return list;
}

function generatePassword() {
	const passwordCharacters = [];

	for (let index = 0; index < passwordLength; index += 1) {
		passwordCharacters.push(characters[getRandomValue(characters.length)]);
	}

	const password = shuffleCharacters(passwordCharacters).join("");
	passwordField.value = password;
}

async function copyPassword() {
	const value = passwordField.value;

	if (!value) {
		return;
	}

	try {
		await navigator.clipboard.writeText(value);
		copyBtn.textContent = "Copied";
		window.setTimeout(() => {
			copyBtn.textContent = "Copy";
		}, 1200);
	} catch (error) {
		copyBtn.textContent = "Copy failed";
		window.setTimeout(() => {
			copyBtn.textContent = "Copy";
		}, 1200);
	}
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);

generatePassword();
