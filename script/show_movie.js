function panic(message) {
    // window.history.back();
    alert(message);
}


/*Funksjon for å hjelpe oss å finne bilder, og hvor de ligger*/
   function findImage(id){
            if (id < 1000){
               return "<img id=\"movieName\" src=\"https://imdb.uib.no/o/0/" + id +".jpg\">";
            }else if (id > 1000 && id < 2000){
                return "<img id=\"movieName\" src=\"https://imdb.uib.no/o/1/" + id +".jpg\">";
            }else if (id > 2000 && id < 3000){
                return "<img id=\"movieName\" src=\"https://imdb.uib.no/o/2/" + id +".jpg\">";
            }else if (id > 3000 && id < 4000){
                return "<img id=\"movieName\" src=\"https://imdb.uib.no/o/3/" + id +".jpg\">";
            }
        }
function add_row(table, left, right) {
    new_row = document.createElement("TR");
    left_cell = document.createElement("TD");
    left_cell.appendChild(left);
    new_row.appendChild(left_cell);
    
    right_cell = document.createElement("TD");
    right_cell.appendChild(right);
    new_row.appendChild(right_cell);
    
    table.appendChild(new_row);
}

window.onload = function() {
    query_params = get_query_string_parameters();
    if (!query_params.id) {
        panic("No id given");
        return;
    }
    
    // get the movie_object from the "database" movies_object
    movie_object = movies_object[query_params.id];
    if (!movie_object) {
	panic("Could not retrieve movie_object!");
	return;
    }

    /*Henter ut bildet og setter de inn i pictureMovie Div'en*/
    var id = movie_object["id"];
    document.getElementById("pictureMovie").innerHTML = findImage(id);
    
    // get the genre info (if it exists)
    genre_object = genres_object[query_params.id];
    // get the review info (if it exists)
    review_object = reviews_object[query_params.id];
    
    
    // render page
    var title_element = document.getElementById("otitle");
    // title_element.appendChild(document.createTextNode(movie_object["otitle"]));    
    title_element.innerHTML = movie_object["otitle"] + " (" + movie_object["year"] + ")";

    /*Henter ut lengde på filmen*/
     var length = movie_object["length"];
    document.getElementById("lengthM").innerHTML = "Lengde: " + length + ".min";
    
    /*Henter ut beskrivelse av filmen*/
     var description = movie_object["description"];
    document.getElementById("mDesc").innerHTML = "Description: " + description;
    
    /*Henter ut hvilken land filmen er fra*/
    var country = movie_object["country"];
    document.getElementById("country").innerHTML = "Country: " + country;
    
    /*Henter ut regissøren av filmen*/
     var director = movie_object["dir"];
    document.getElementById("director").innerHTML = "Director: " + director;
    
    /*Henter ut skuespillerne i filmen*/
     var folk = movie_object["folk"];
    document.getElementById("folk").innerHTML = "Stars: " + folk;
    
    /*Henter ut norsk tittel om det finnes, om ikke så gir den oss engelsk tittel, orginal tittel vises over uansett*/
    var etitle = movie_object["etitle"];
    var ntitle = movie_object["ntitle"];
    if (ntitle){
    document.getElementById("nTitle").innerHTML = "(" + ntitle + ")";
    }else if(etitle){
    document.getElementById("eTitle").innerHTML = "(" + etitle + ")";  
    }
    
    // add a "debug-table" on the bottom showing all elements from movie_object
    stats_table = document.getElementById("movie_stat_table");
    for (key in movie_object) {
        left = document.createTextNode(key);
        right = document.createTextNode(movie_object[key]);
        add_row(stats_table, left, right);
    }
    
    // add a "debug-table" on the bottom showing all genre info
    genre_table = document.getElementById("genre_stat_table");
    for (var i in genre_object) {
		left = document.createTextNode(" ");
		right = document.createTextNode(genre_object[i]);
		add_row(genre_table, left, right);
    }

    // review object debug-table
    review_table = document.getElementById("review_stat_table");
    for (key in review_object) {
	left = document.createTextNode(key);
	right = document.createTextNode(review_object[key]);
	add_row(review_table, left, right);
	for (subkey in review_object[key]) {
	    left = document.createTextNode(" -> " + subkey);
	    right = document.createTextNode(review_object[key][subkey]);
	    add_row(review_table, left, right);
	}
       
    }


 /*Om filmen har en youtube trailer id, settes den inn i youtube div'en*/
     if(movie_object["youtube trailer id"]){
            document.getElementById("youtube").innerHTML = "<iframe width=\"800\" height=\"400\" src=\"https://www.youtube.com/embed/" + movie_object["youtube trailer id"] +  "\" frameborder=\"0\" allowfullscreen></iframe>";
            
        }


}


    


