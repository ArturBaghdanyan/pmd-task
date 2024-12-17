import React from 'react'
import style from './style.module.scss';
import Header from '../../components/header/index';

const ProductDetails = () => {
  return (
    <>
			<Header />
			<div className={style.products_list_column_mySwiper_list_body_row_productDetails}>
				<div className='container_spacing'>
				<h2>Product details</h2>
				</div>
			</div>
		</>
  )
}

export default ProductDetails