import {API} from "@/app/api";
import {ProductModel} from "@/interfaces/product.interface";


export async function getProducts(category:string ):Promise<ProductModel[] | []>{

    console.log(category)
    const res = await fetch(API.product.find,{
        method:'POST',
        body:JSON.stringify({
            category: category,
            limit: 10
        }),
        headers:{
            'Content-Type':'application/json'
        },
        next:{
            revalidate:10
        }
    });
    if(!res.ok){
        return [];
    }
    return res.json();
}