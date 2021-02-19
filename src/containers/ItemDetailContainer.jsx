import React, { useState, useEffect } from "react";
import ItemDetail from "../components/itemDetail";
import productList from '../mock/productList';
import { useParams } from "react-router-dom";


const ItemDetailContainer = (props) => {
    
    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [productSelected, setProductSelected] = useState([])

    useEffect(() => {

        setIsLoading(true)

        const myPromise = new Promise((resolve, reject) => {
            setTimeout(()=>resolve(productList), 1000)
        })
        
        myPromise.then(
            (result)=>{
                result.filter( product => {
                   return product.id.toString() === id? setProductSelected(product) : null;                 
                })
                setIsLoading(false);
            }
        )
            
    }, [id])

    if(isLoading){
        return (
            <>
            
                <div className='loadingComponent'>
                    <p > Cargando productos </p>    
                    <div className="spinner-grow bounce1" role="status">
                        <span className="sr-only">Cargando Productos</span>
                    </div>
                    <div className="spinner-grow bounce2" role="status">
                        <span className="sr-only">Cargando Productos</span>
                    </div>
                    <div className="spinner-grow bounce3" role="status">
                        <span className="sr-only">Cargando Productos</span>
                    </div>
                </div>

            </>

        )
    }

    return (
        <>
            <div id="services" className="cards-2">
                <div className="container" style={{textAlign:"center"}}>   
                            <ItemDetail product={productSelected}/>
                </div> 
            </div> 
        </>
    )
    
}
export default ItemDetailContainer;