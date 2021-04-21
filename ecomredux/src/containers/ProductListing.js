import React,{ useEffect} from 'react';
import axios from 'axios';
import ProductComponent from "./ProductComponent";
import { useSelector } from 'react-redux';
const ProductListing = () =>{
    const products = useSelector((state) => state);

    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
       console.log(response.data);
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
    
    console.log(products);
    return(
        <div className ="ui grid container">
            <br></br>
        <ProductComponent/>
        </div>
        );
};
export default ProductListing;