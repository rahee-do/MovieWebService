import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
function MovieDetail() {
    // useParams 함수로 url 의 :parameter(:id) 값을 가져올 수 있다.
    const { id } = useParams();
    console.log(id);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const getDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getDetail();
    }, []);
    console.log(detail);
    return (
        <div>{loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={detail.large_cover_image} alt={detail.title} />
                    <h2>{`${detail.title} (${detail.year})`}</h2>
                    <ul>
                        {detail.genres.map(g => (
                            <li key={g}><strong>{g}</strong></li>
                        ))}
                        <li>{detail.description_intro}</li>
                        <li><a href={detail.url} target="_blank">Download</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default MovieDetail;
