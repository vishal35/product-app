import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_PRODUCT,
} from "./constants";

export function addProduct(formData) {
  return { type: ADD_PRODUCT, payload: formData };
}
export function deleteProduct(id) {
  return { type: DELETE_PRODUCT, payload: id };
}
export function editProduct(formData) {
  return { type: EDIT_PRODUCT, payload: formData };
}
export function getProduct(id) {
  return { type: GET_PRODUCT, payload: id };
}
