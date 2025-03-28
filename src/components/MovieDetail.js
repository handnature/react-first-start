import PropTypes from "prop-types";

function MovieDetail({title, coverImg, rating, runtime, genres, likeCount}) {
    return <div>
        <img src={coverImg} alt={title}/>
        <h2>{title}</h2>
        <p>{rating}</p>
        <p>{runtime}</p>
        <p>{likeCount}</p>
        <ul>
            {genres.map((genre) => (
                <li key={genre}>{genre}</li>
            ))}
        </ul>
    </div>
}

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    likeCount: PropTypes.number.isRequired
}

export default MovieDetail;