


/*function search_for_x(search){

	var keys = Object.keys(search);
	console.log(keys);

	for (i in movies_object) {
		
		m = movies_object[i];

		if (m.otitle.toLowerCase().includes(search.otitle) &&
			m.dir.toLowerCase().includes(search.dir) &&
            m.folk.toLowerCase().includes(search.folk) &&
			m.country.toLowerCase().includes(search.country)
			) {
		
			film_title.innerHTML+= "<li><a href= \"show_movie.html?id=" + i + "\">" + m.otitle + "</a> </li> <br>";
		}
	}
}*/


 


window.onload = function() {
    var search_results = movies_object;
    var test = [];

    for(let movie in search_results){
        for(let movieID in genres_object){
            if(movie === movieID){
                if(genres_object[movieID]){
                    search_results[movie].genre = "";
                    for(let genres of genres_object[movieID]){
                        search_results[movie].genre += genres + ", ";
                        
                    }
                    search_results[movie].genre = search_results[movie].genre.substring(0, search_results[movie].genre.lastIndexOf(", "));
                    break;
                }
                
            }
            
        }
    }
    console.log(search_results);

	query_params = get_query_string_parameters();

	var search = {
		"otitle" : "",
		"dir" : "",
        "genre" : "",
		"country" : "",
		"folk": ""

	}
	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
        film_title.innerHTML = query_params.film_title.toLowerCase();
        search.otitle = query_params.film_title.toLowerCase();
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
    }
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor.toLowerCase();
		search.folk = query_params.actor.toLowerCase();
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director.toLowerCase();
		search.dir = query_params.director.toLowerCase();
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre.toLowerCase();
        search.genre = query_params.genre.toLowerCase();
    }
   
    
	
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country.toLowerCase();
		search.country = query_params.country.toLowerCase();
    }
	
	
	//search_for_x(search);
    	
}
