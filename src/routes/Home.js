import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css"
import Navbar from "../components/Navbar";

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([]);
    const getMoives = async () => {
        const json = await(
            (await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )).json());
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMoives();
    }, []);
    console.log(movies);
    return (
        <div className={styles.container}>
            <Navbar/>
            <h1>🎬 영화 리스트</h1>
            {loading ? <h1>Loading...</h1> : (
                <div className={styles.movie__container}>{movies.map(movie => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                        year={movie.year}
                    />
                ))}
                </div>
            )}
        </div>
    )
}

export default Home;