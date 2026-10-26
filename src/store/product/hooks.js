import { useSelector } from "react-redux";
import { getProductDetail, getProducts } from "./selectors";

export const useProducts = () => {
    return useSelector(getProducts);
};

export const useProductDetail = () => {
    return useSelector(getProductDetail);
};