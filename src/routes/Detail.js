import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState([]);
    const getMovieDetail = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
        setMovieDetail(json.data.movie);
        setLoading(false);
        console.log(json);
    };
    useEffect(() => {
        getMovieDetail();
    }, []);
    console.log("movie detail", movieDetail);
    return (
        <div>
        {loading ? <h1>Loading...</h1> : (
                <div>
                        <MovieDetail
                            key={movieDetail.id}
                            title={movieDetail.title}
                            coverImg={movieDetail.small_cover_image}
                            rating={movieDetail.rating}
                            runtime={movieDetail.runtime}
                            genres={movieDetail.genres}
                            likeCount={movieDetail.like_count}
                        />
                </div>
            )
        }
        </div>
    )
}

export default Detail;