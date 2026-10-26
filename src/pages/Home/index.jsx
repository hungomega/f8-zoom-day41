import { Link } from "react-router";
import styles from "./Home.module.scss";

function Home() {
    return (
        <div className={styles.home}>
            <h1>F8-zoom-day-41</h1>

            <Link to="/products" className={styles.button}>
                Products
            </Link>
        </div>
    );
}

export default Home;
