import { Link } from "react-router";
import styles from "./ProductCard.module.scss";

function ProductCard({ product }) {
    const discountedPrice =
        product.price * (1 - product.discountPercentage / 100);

    return (
        <div className={styles.card}>
            <Link to={`/products/${product.slug}`} className={styles.link}>
                <p className={styles.discount}>
                    Giảm: {product.discountPercentage}%
                </p>

                <img
                    className={styles.image}
                    src={product.thumbnail}
                    alt={product.title}
                />

                <h3 className={styles.title}>{product.title}</h3>

                <p className={styles.description}>{product.description}</p>

                <span className={styles.originalPrice}>
                    {product.price.toFixed(2)} $
                </span>

                <p className={styles.discountedPrice}>
                    Giá sau giảm: {discountedPrice.toFixed(2)} $
                </p>
            </Link>
        </div>
    );
}

export default ProductCard;
