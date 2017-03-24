function loggUtInn() {/*skj006*/
	var link = document.getElementById("loggUtInn");
	if(link.innerHTML == "Logg ut") {
		link.innerHTML = "Logg inn";
	} else if(link.innerHTML == "Logg inn") {
		link.innerHTML = "Logg ut";
	}
}

function sprettMeny() {/*skj006*/
	var mobildrop = document.getElementById("mobildrop");
	if(mobildrop.style.display !== "flex") {
		mobildrop.style.display = "flex";
	} else if(mobildrop.style.display !== "none") {
		mobildrop.style.display = "none";
	}
}