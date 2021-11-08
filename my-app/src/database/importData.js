
function data(movie) {

    let currentMovie = {
        title:movie.title,
        episod_id:movie.episod_id,
        opening_crawl:movie.opening_crawl,
        director:movie.director,
        producer:movie.producer,
        release_date: movie.release_date,
        characters:[],
        planets:[],
        starships:[],
        vehicale:[],
        specias:[]
    }
    return currentMovie;
}



export default data