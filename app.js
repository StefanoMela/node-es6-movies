const mediaCollection = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "film"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        type: "film"
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Crime",
        rating: 9.5,
        type: "serie",
        seasons: 5
    },
    {
        title: "The Witcher",
        year: 2019,
        genre: "Fantasy",
        rating: 8.2,
        type: "serie",
        seasons: 3
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "film"
    },
    {
        title: "Friends",
        year: 1994,
        genre: "Comedy",
        rating: 8.9,
        type: "serie",
        seasons: 10
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.3,
        type: "serie",
        seasons: 8
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.6,
        type: "film"
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Horror",
        rating: 8.7,
        type: "serie",
        seasons: 4
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        rating: 8.9,
        type: "film"
    }
];


// creo classe movie
class Movie {

    // no sense passare type perché stiamo cmq istanziando dei film qui e le serie tv più giù, so già cosa voglio creare, 
    // le classi son Movie e Tvserie. Diverso sarebbe stato se la classe fosse stata Media, quindi meritevole di una specifica interna
    constructor(title, year, genre, rating, type) { 

        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString() {
        return `${this.title} è un ${this.type} di genere ${this.genre}. È stato rilasciato nel ${this.year} e ha un voto di ${this.rating}`
    }
}

// creo classe TvSerie
class TvSerie extends Movie {

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type)
        this.seasons = seasons;
    }

    toString() {
        return `${this.title} è una ${this.type} di genere ${this.genre} e ha un voto di ${this.rating}. In totale sono state prodotte ${this.seasons} stagioni, la prima in onda dal ${this.year}`
    }

}

// tramite .map creare un nuvo array con varie istanze in base al type del oggetto.
const mappedMedia1 = mediaCollection.map(media => {
    return media.type === 'film' ? new Movie(media.title, media.year, media.genre, media.rating, media.type) : new TvSerie(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
})

// versione destructured
const mappedMedia2 = mediaCollection.map(({title, genre, year, rating, type, seasons}) => {
     return type === 'film' ? new Movie(title, year, genre, rating, type) : new TvSerie(title, year, genre, rating, type, seasons);
    })

// versione terza
const mappedMedia3 = mediaCollection.map( m => {
     return m.type === 'film' ? new Movie(m.title, m.year, m.genre, m.rating, m.type) : new TvSerie(m.title, m.year, m.genre, m.rating, m.type, m.seasons);
    })

// calcolare la media dei voti di tutti i film per determinato genere

function avgVote(movies, genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);

    const totalRating = filteredMovies.reduce((sum, movie) => sum + movie.rating, 0);

    const averageRating = totalRating / filteredMovies.length;

    return Math.round(averageRating);

}

console.log(avgVote(mediaCollection, 'Sci-Fi'));


// Restituire la lista di tutti i generi dei film, senza che si ripetano.
function getGenres() {
    let genres = [];
    mappedMedia2.forEach(movie => {
        if (!genres.includes(movie.genre)) {
            genres.push(movie.genre);
        }
    })

    return genres;
}
console.log(getGenres(mediaCollection));

// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array
// con all'interno il risultato della funzione toString() di ogni film.

function filterMoviesByGenre(movies, genre) {

    const filteredMovies = movies.filter((movie) => movie.genre === genre)
    const sortedMovies = filteredMovies.map((movie) => movie.toString());

    return sortedMovies;
}
console.log(filterMoviesByGenre(mappedMedia2, 'Crime'));



// forEach quando dobbiamo eseguire un'operazione per ogni elemento dell'array. non voglio ritornare nessun valore. voglio usare gli elementi per fare qualcosa. restituisce sempre undefined.
// map cicla un array e ne restituisce un altro che sarà sempre della stessa lunghezza dell'array iniziale.
// filter invece ovviamete filtra e l'array restituito sarà uguale o minore all'array iniziale