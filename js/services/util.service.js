export const storageService = {
	save: saveToStorage,
	load: loadFromStorage,
}

function saveToStorage(key, val) {
	localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
	const val = localStorage.getItem(key)
	return JSON.parse(val)
}

export function getRandomInt(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) // The maximum is exclusive and the minimum is inclusive
}

export function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}
