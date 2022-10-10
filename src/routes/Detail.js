import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function Detail() {
    // useParams 함수로 url 의 :parameter(:id) 값을 가져올 수 있다.
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const getMovie = async (id) => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie)
        setDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie(id);
    }, [id]);
    // console.log(detail);
    return (
        <div>{loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <div>
                        <p><Link to={"/movie"}>Go back</Link></p>
                    </div>
                    <div>
                       <img src={detail.small_cover_image} alt={detail.title} />
                        <h3>{`${detail.title} (${detail.year})`}</h3>
                        <div>
                            {detail.genres.map(g => (
                                <p key={g}><strong>{g}</strong></p>
                            ))}
                            <p>Rating : {detail.rating}</p>
                            <p>{detail.description_intro}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Detail;
