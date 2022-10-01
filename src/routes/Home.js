import {Link} from "react-router-dom";
import styles from "../css/LatestMovie.module.css";

function Home() {
    return (
        <div>
            <h1>Home!</h1>
            <ul>
                <li>
                    <Link to={"/todos"}>Todos</Link>
                </li>
                <li>
                    <Link to={"/coins"}>Coins</Link>
                </li>
                <li>
                    <Link to={"/movie"}>Movie</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home;
