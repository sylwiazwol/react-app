import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'


const ProductPage = ({match}) => {
    return ( 
        <>
            <div>Strona produktu</div>
            <Product id={match.params.id}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </>
     ); //match - jedna z obiektów; można sprawdzic przez concole.log
}
 
export default ProductPage;