import style from './movieItem.module.css';
const MovieItem = ({ movie }) => {
    return (
        <div className={style["movie-item"]}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
        </div>
    )
}

export default MovieItem