import axios from 'axios'
import { PIZZA_URL } from './url'
let token=localStorage.getItem('_token');
export function getMenu(){
    return axios.get(`${PIZZA_URL}pizza/fetchMenu`,{headers:{"Authorization":`Bearer ${token}`}})
}
export function AddUser(data){
    return axios.post(`${PIZZA_URL}user/adduser`,data)
}
export function Checkuser(data){
    return axios.post(`${PIZZA_URL}user/checkuser`,data)
}
export function AddCart(data){
    return axios.post(`${PIZZA_URL}cart/addcart`,data)
}
export function AddQuantity(data){
    return axios.post(`${PIZZA_URL}cart/addquantity`,data)
}
export function GetCart(data){
    return axios.post(`${PIZZA_URL}cart/getCart`,data)
}
export function DELETEPIZZA(data){
    return axios.post(`${PIZZA_URL}cart/deletepizza`,data)
}
export function PLACEORDER(data){
    return axios.post(`${PIZZA_URL}pizza/Placeorder`,data)
}
export function DeleteUsercart(data){
    return ( console.log(data) ,axios.post(`${PIZZA_URL}cart/Placeorder`,data))
}
export function GetORder(data){
    return axios.post(`${PIZZA_URL}pizza/getorder`,data)
}