import axios from "axios"


export const getProducts = async ()=>{
    try {
        return  await axios.request({url:"https://fakestoreapi.com/products/",
            method:"GET",
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json'
            }
        })
       
    } catch (error) {
        return error
    }
}