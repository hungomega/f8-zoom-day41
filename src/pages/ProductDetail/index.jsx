import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router";
import styles from "./ProductDetail.module.scss";
import {
    actions as productActions,
    useProductDetail,
} from "../../store/product";
import { useLoading } from "../../store/ui";

function ProductDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();

    const product = useProductDetail();
    const loading = useLoading();

    useEffect(() => {
        dispatch(productActions.getDetail(slug));
    }, [dispatch, slug]);

    return (
        <div className={styles.detail}>
            <h1 className={styles.heading}>Product Detail</h1>

            <Link to="/products" className={styles.backLink}>
                ← Quay lại danh sách sản phẩm
            </Link>

            {loading ? (
                <p className={styles.loading}>Đang tải sản phẩm...</p>
            ) : product ? (
                <div className={styles.product}>
                    <img
                        className={styles.image}
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <div className={styles.info}>
                        <h2 className={styles.title}>{product.title}</h2>

                        <p>Danh mục: {product.category}</p>

                        <p className={styles.description}>
                            {product.description}
                        </p>

                        <p className={styles.originalPrice}>
                            Giá gốc: ${product.price}
                        </p>

                        <p>Giảm giá: {product.discountPercentage}%</p>

                        <p className={styles.price}>
                            Giá sau giảm: $
                            {(
                                product.price *
                                (1 - product.discountPercentage / 100)
                            ).toFixed(2)}
                        </p>
                    </div>
                </div>
            ) : (
                <p>Không tìm thấy sản phẩm.</p>
            )}
        </div>
    );
}

export default ProductDetail;
