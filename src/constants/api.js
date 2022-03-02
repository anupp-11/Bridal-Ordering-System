export const BASE_URL ="https://localhost:5001";

//Products
export const GET_PRODUCTS = "/Product/get";
export const ADD_PRODUCTS = "/Product/add";
export const GET_PRODUCT_BY_ID = "/Product/:id";
export const DELETE_PRODUCT = "/Product/:id";

//Authentication
export const LOGIN = "/Authentication/login";
export const REGISTER = "/Authentication/register";

//Carousel
export const GET_CAROUSEL = "/Carousel/get";


//Products
export const GET_PRODUCTS_URL = `${BASE_URL}${GET_PRODUCTS}`;
export const ADD_PRODUCTS_URL = `${BASE_URL}${ADD_PRODUCTS}`;
export const GET_PRODUCT_BY_ID_URL = `${BASE_URL}${GET_PRODUCTS}`;
export const DELETE_PRODUCT_URL = `${BASE_URL}${DELETE_PRODUCT}`;

//Authentication
export const USER_LOGIN = `${BASE_URL}${LOGIN}`;
export const USER_REGISTER = `${BASE_URL}${REGISTER}`;

//Carousel
export const CAROUSEL = `${BASE_URL}${GET_CAROUSEL}`