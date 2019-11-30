chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	 if (document.readyState === "complete") {
		 clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		  const var1 = "dks";
		 console.log(var1);


		 const elements = getallElements();

		 replaceElements(elements);

	}
	}, 10);
});

function getallElements() {
	return document.querySelectorAll('p');
}

function replaceElements(elements) {
	console.log('elemnts', elements.length);
	const regex = /the/gi
	elements.forEach(element => {
		element.textContent = element.textContent.replace(regex, '😂')
	});
	

	
}