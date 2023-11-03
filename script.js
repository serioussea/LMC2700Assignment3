let allMovies = [];

class Movie {
  constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
  }
}

let addMovie = (movie) => {
  allMovies.push(movie);
}

let resultDiv = document.getElementById("result");

let printMovies = () => {
  let totalMovies = allMovies.length;
  if (totalMovies === 0) {
    resultDiv.innerHTML = "No movies to display.";
  } else {
    let resultHTML = "All Movies:<br>";
    allMovies.forEach((movie) => {
      resultHTML += `Title: ${movie.title}, Rating: ${movie.rating}, Have Watched: ${movie.haveWatched ? 'Yes' : 'No'}<br>`;
    });
    resultHTML += `Total number of movies: ${totalMovies}`;
    resultDiv.innerHTML = resultHTML;
  }
}

let highRatings = (rating) => {
  let highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
  let totalHighRatedMovies = highRatedMovies.length;

  if (totalHighRatedMovies === 0) {
    resultDiv.innerHTML = `No movies with a rating higher than ${rating}.`;
  } else {
    let resultHTML = `Highly Rated Movies (Rating > ${rating}):<br>`;
    highRatedMovies.forEach((movie) => {
      resultHTML += `Title: ${movie.title}, Rating: ${movie.rating}<br>`;
    });
    resultHTML += `Total number of highly rated movies: ${totalHighRatedMovies}`;
    resultDiv.innerHTML = resultHTML;
  }
}

let changeWatched = (title) => {
  let movie = allMovies.find((movie) => movie.title === title);
  if (movie) {
    movie.haveWatched = !movie.haveWatched;
    resultDiv.innerHTML = `The 'haveWatched' status for "${title}" has been toggled to ${movie.haveWatched ? 'Yes' : 'No'}`;
  } else {
    resultDiv.innerHTML = `Movie with title "${title}" not found.`;
  }
}

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);