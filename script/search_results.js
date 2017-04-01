/*Denne funksjonen går igjennom movies_object og legger de titlene som mather søket ditt inn i en array*/
function search_title(search){
	var sResult = [];
	for(let films in search_results){
		var film = search_results[films];
		if(film.otitle){
		if(film.otitle.toLowerCase().includes(search.toLowerCase())){
			film_title.innerHTML+= "<li><a href= \"show_movie.html?id=" + films + "\">" + film.otitle + "</a> </li> <br>";
		}
			
		}
	}
	console.log(sResult);
	
}
/*Samme bare for skuespillerer*/
function search_actor(search){
	var sResult = [];
	for(let films in search_results){
		var film = search_results[films];
		if(film.folk){
		if(film.folk.toLowerCase().includes(search.toLowerCase())){
			actor.innerHTML+= "<li><a href= \"show_movie.html?id=" + films + "\">" + film.otitle + "</a> </li> <br>";
		}
			
		}
	}
	console.log(sResult);
	
}
/*Samme bare for regissører*/
function search_dic(search){
	var sResult = [];
	for(let films in search_results){
		var film = search_results[films];
		if(film.director){
		if(film.director.toLowerCase().includes(search.toLowerCase())){
			director.innerHTML+= "<li><a href= \"show_movie.html?id=" + films + "\">" + film.otitle + "</a> </li> <br>";
		}
			
		}
	}
	console.log(sResult);
	
}
/*Samme bare for sjangere*/
function search_genre(search){
	var sResult = [];
	for(let films in search_results){
		var film = search_results[films];
		if(film.genre){
		if(film.genre.toLowerCase().includes(search.toLowerCase())){
			genre.innerHTML+= "<li><a href= \"show_movie.html?id=" + films + "\">" + film.otitle + "</a> </li> <br>";
		}
			
		}
	}
	console.log(sResult);
	
}
/*Samme bare for land*/
function search_country(search){
	var sResult = [];
	for(let films in search_results){
		var film = search_results[films];
		if(film.country){
		if(film.country.toLowerCase().includes(search.toLowerCase())){
			country.innerHTML+= "<li><a href= \"show_movie.html?id=" + films + "\">" + film.otitle + "</a> </li> <br>";
		}
			
		}
	}
	console.log(sResult);
	
}





 

/*Funksjon som legger sjanger til som en atributt hos et film-objekt*/
window.onload = function() {
    search_results = movies_object;
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
  

	query_params = get_query_string_parameters();

	/*Søker på tittel, og finner frem den diven.*/
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
        film_title.innerHTML = query_params.film_title.toLowerCase();
		search_title(query_params.film_title.toLowerCase());
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		
    }
	/*Søker på skuespiller, og finner frem den diven.*/
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor.toLowerCase();
		search_actor(query_params.actor.toLowerCase());
    }
	/*Søker på regissør, og finner frem den diven.*/
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director.toLowerCase();
		search_dir(query_params.director.toLowerCase());
    }
	/*Søker på sjanger, og finner frem den diven.*/
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre.toLowerCase();
		search_genre(query_params.genre.toLowerCase());
    }
   
    
	/*Søker på land, og finner frem den diven.*/
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country.toLowerCase();
		search_country(query_params.country.toLowerCase());
    }
	
	
	search_for_x(search);
    	
}
