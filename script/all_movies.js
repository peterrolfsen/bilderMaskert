window.onload = function() {
    list_element = document.getElementById("all_movies");
    for (movie_id in movies_object){

        movie_details = movies_object[movie_id];
        
        item_link.href = "show_movie.html?id=" + movie_id;
		
        movie_details["otitle"];    
    }
}
