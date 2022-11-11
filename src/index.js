import "./styles.css";
updateScreen();
//updates the screen at the beginning of runtime

const searchoutput = document.getElementById("searchoutput");

const movies = [
  ["The Incredibles", "pg", "action"],
  ["Night at the Museum", "pg", "action"],
  //pg action movies
  ["The Dark Knight", "pg13", "action"],
  ["Mission: Impossible - Fallout", "08:02", "pg13", "action"],
  //pg13 action movies
  ["Home Alone", "pg", "comedy"],
  [
    "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    "20:30",
    "pg",
    "comedy"
  ],
  //pg comedy movies
  ["Mrs Doubtfire", "pg13", "comedy"],
  ["Daddy's Home", "pg13", "comedy"],
  //pg13 comedy movies
  ["Gremlins", "pg", "horror"],
  ["Monster House", "pg", "horror"],
  //pg horror movies
  ["Scary Stories to Tell in the Dark", "pg13", "horror"],
  ["Lights Out", "pg13", "horror"]
  //pg13 horror movies
];

setInterval(() => {
  if (searchoutput) {
    updateScreen();
  }
}, 1000);
//updates the screen every second(1000ms)

function updateScreen() {
  if (searchoutput) {
    const ageinput = document.getElementById("ageinput");
    let agerating;
    if (ageinput.value >= 13) {
      agerating = "pg13";
    } else {
      agerating = "pg";
    }
    //determines the age rating based on specified age
    const genreinput = document.getElementById("genreinput");
    searchoutput.textContent = `Results For - (Age: ${agerating}, Genre: ${genreinput.value}):`;
    //updates the search result header

    for (let i = 0; i < 12; i++) {
      if (movies[i][1] === agerating) {
        if (movies[i][2] === genreinput.value) {
          const movie1 = new movie(movies[i][0], movies[i][1], movies[i][2]);
          printMovie1(movie1.name);
          i++;
          const movie2 = new movie(movies[i][0], movies[i][1], movies[i][2]);
          printMovie2(movie2.name);
        }
      }
    }
    //looks at all the movies and determines the best 2 based on the search results
  }
}

function printMovie1(name) {
  document.getElementById("movie1").textContent = name;
}
//prints the first movie name

function printMovie2(name) {
  document.getElementById("movie2").textContent = name;
}
//prints the second movie name

class movie {
  constructor(name, rating, genre) {
    this.name = name;
    this.rating = rating;
    this.genre = genre;
  }
}
//movie class
