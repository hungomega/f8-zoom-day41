import { useSelector } from "react-redux";
import { getLoading } from "./selectors";

export const useLoading = () => {
    return useSelector(getLoading);
};