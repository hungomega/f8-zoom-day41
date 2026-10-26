import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions as productActions } from "../../store/product";
import { useProducts } from "../../store/product";
import ProductCard from "../../components/ProductCard";
import styles from "./ProductList.module.scss";


function ProductList() {
    const dispatch = useDispatch();
    const products = useProducts();
    console.log(products[0]);
    console.log(Object.keys(products[0] || {}));
    useEffect(() => {
        dispatch(productActions.getList());
    }, [dispatch]);

    return (
        <div>
            <h1>Product List</h1>

            <div className={styles.productGrid}>
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}
export default ProductList;
