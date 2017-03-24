/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/
function search_for_x(search){
	var keys = Object.keys(search);
	console.log(keys);

	for(i in movies_object) {
		
		m = movies_object[i];

		if (m.otitle.toLowerCase().includes(search.otitle.toLowerCase()) &&
			m.dir.toLowerCase().includes(search.dir.toLowerCase()) &&
			m.country.toLowerCase().includes(search.country.toLowerCase())
			) {
			console.log(m.otitle);
			film_title.innerHTML+= "<li><a href= \"show_movie.html?id=" + i + "\">" + m.otitle + "</a> </li> <br>";
		}
	}
}

window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;

	var search = {
		"otitle" : "",
		"dir" : "",
		"country" : "",
		"folk": ""

	}
	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
        search.otitle = query_params.film_title;
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
    }
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor;
		search.folk = query_params.actor;
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
		search.dir = query_params.director;
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
    }
	
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country;
		search.country = query_params.country;
    }
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater
	search_for_x(search);

	
}