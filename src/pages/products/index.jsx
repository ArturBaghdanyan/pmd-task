import React from 'react'
import style from "./style.module.scss";
import { productData } from '../../data/products/productList';
import Header from '../../components/header';
import ProductList from './productList';

const ProductPage = () => {

  return (
    <>
      <Header />
      <div className={style.products}>
        <div className='container_spacing'>
          <h2>Product list</h2>
          <div className={style.products_list}>
             <ProductList data={productData} />  
          </div>
        </div>
        
      </div>
    </>

  )
}

export default ProductPage