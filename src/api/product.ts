import { Iproduct } from "../interfaces/product";
import insntance from "./insntace";
const user = JSON.parse(localStorage.getItem("user")!);
export const getAllProducts = () =>{
    return insntance.get("/products");
}
export const deleteProduct = (id:number|string) =>{
    return insntance.delete(`/products/${id}`,{
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    });
}
export const addProduct = (product:Iproduct) =>{
    return insntance.post("/products",product,{
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    });
}
export const updateProduct = (product:Iproduct,id:string|number) =>{
    return insntance.put(`/products/${id}`,product,{
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    });
}