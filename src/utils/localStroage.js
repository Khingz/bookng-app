export const saveToLocalStorage = (key, value) => {
	try {
		const serializedValue = JSON.stringify(value);
		localStorage.setItem(key, serializedValue);
	} catch (error) {
		console.error("Error saving to local storage:", error);
	}
};

export const getFromLocalStorage = (key) => {
	try {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : null;
	} catch (error) {
		console.error("Error reading from local storage:", error);
		return null;
	}
};
