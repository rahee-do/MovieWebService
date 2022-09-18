import React, {useEffect, useState} from "react";
import Movie from "../components/Movie";

function Movies() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // async-await 사용
    const getMovies = async () => {
        // await 으로 한번 더 감싸줘서 사용.
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year")
        ).json();
        /*
          const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
          const json = await response.json();
        */
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
        // 영화 별점이 8.5점 이상이면서 연도별로 정렬된 데이터 API 호출
        /*
            .then 보다 많이 사용되는 async-await 사용하기
            fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
                .then(response => response.json())
                .then(json => {
                  setMovies(json.data.movies);
                  setLoading(false);
                });
         */
    }, []);
    console.log(movies);
    return (
        <div>
            <h1>{loading ? "" : `Movies(${movies.length})`}</h1>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Movies;
