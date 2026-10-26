import { Route, Routes } from "react-router";
import ProductDetail from "../../pages/ProductDetail";
import ProductList from "../../pages/ProductList";
import Home from "../../pages/Home";
import Loading from "../../components/Loading";
function AppRoutes() {
    return (
        <>
            <Loading />
            <Routes>
                <Route index element={<Home />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:slug" element={<ProductDetail />} />
            </Routes>
        </>
    );
}
export default AppRoutes;
