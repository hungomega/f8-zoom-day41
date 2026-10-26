import http from "../../utils/http.js";
import { GET_LIST, SET_LIST, GET_DETAIL, SET_DETAIL } from "./constants";
import { actions as uiActions } from "../ui";

export const getList = () => {
    return async (dispatch) => {
        dispatch({ type: GET_LIST });
        dispatch(uiActions.showLoading());
        try {
            const response = await http.get("/products"); //  chờ API trả về dữ liệu
            dispatch(setList(response.data.items)); // gửi dữ liệu từ API  vào redux Store để  update  state
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.hideLoading());
        }
    };
};

export const setList = (list) => {
    return {
        type: SET_LIST,
        payload: list, // payload: list: Đưa danh sách vào action để reducer nhận được qua action.payload
    };
};

export const getDetail = (slug) => {
    return async (dispatch) => {
        dispatch({ type: GET_DETAIL });
        dispatch(uiActions.showLoading());
        try {
            const response = await http.get(`/products/${slug}`); //  chờ API trả về dữ liệu
            dispatch(setDetail(response.data)); // gửi dữ liệu từ API  vào redux Store để  update  state
            console.log("Dữ liệu API:", response);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(uiActions.hideLoading());
        }
    };
};

export const setDetail = (product) => {
    return {
        type: SET_DETAIL,
        payload: product,
    };
};
