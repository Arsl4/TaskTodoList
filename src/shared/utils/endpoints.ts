const BASE_URL = 'http://3.141.12.110/api/v1/';
const ENDPOINTS = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/signup',
  FORGETEMAIL: '/auth/forgotPassword',
  CREATE_PROFILE: 'user/profile',
  GET_ALL_PROFILE: 'user/profile',
  GET_USER_DETAIL: 'user/profile/',
  UPDATE_PROFILE: 'user/profile/',
  SOCIAL_FB: 'auth/socialLogin',
  GETALLPHARMACY: 'pharmacy',
  SEARCH_MEDICINE: 'pharmacy/search-product?search=',
  STORE_PRODUCT: 'pharmacy/products',
  GET_CATEGORIES: 'pharmacy/categories',
  PRODUCT_DETAIL: 'pharmacy/product-detail',
  PRE_ORDER: 'user/order/pre-order',
  GET_PREORDER: 'user/order/preOrder/profile/',
  ADD_TO_CARDT: 'user/cart/profile',
  ADD_PROMO: 'user/order/preOrder/',
  PLACE_ORDER: 'user/order',
};

export {BASE_URL, ENDPOINTS};
