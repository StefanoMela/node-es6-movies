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

class Movie {
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

class TvSerie extends Movie {

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type)
        this.seasons = seasons;
    }

    toString() {
        return `${this.title} è una ${this.type} di genere ${this.genre} e ha un voto di ${this.rating}. In totale sono state prodotte ${this.seasons}, la prima in onda dal ${this.year}`
    }

}


const mappedMedia = mediaCollection.map(media => {
    // if (media.type === 'film') {
    //     return new Movie(media.title, media.year, media.genre, media.rating, media.type);
    // } else if (media.type === 'serie') {
    //     return new TvSerie(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
    // }

    return media.type == 'film' ? new Movie(media.title, media.year, media.genre, media.rating, media.type) : new TvSerie(media.title, media.year, media.genre, media.rating, media.type, media.seasons);
})


/**
 * 
 * Creiamo una funzione che restituisca la media dei voti di tutti i film per un determinato genere.
 *  Prevedere un argomento per la lista dei film ed uno per il genere.
 */


function avgVote(movies, genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);

    const totalRating = filteredMovies.reduce((sum, movie) => sum + movie.rating, 0);

    const averageRating = totalRating / filteredMovies.length;

    return averageRating;

}



console.log(avgVote(mappedMedia, 'Sci-Fi'));
