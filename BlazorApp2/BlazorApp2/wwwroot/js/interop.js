createAlert = () => {
	alert("this is an alert.");
}

createPrompt = (question) => {

	
	return prompt(question);
}

setElementTextById = (id, text) => {
	document.getElementById(id).innerText = text;
}