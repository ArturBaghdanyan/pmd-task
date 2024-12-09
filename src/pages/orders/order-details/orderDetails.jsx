import React, {useState} from 'react'
import style from "./style.module.scss";
import Header from "../../../components/header/index";
import DetailsForm from './detailsForm';

const OrderDetails = () => {
  const [currentPage, setCurrentPage] = useState('Orders');

  return (
		<>
			<Header isHomePage={currentPage} />
			<div className={style.orderDetails}>
					<div className='container_spacing'>

					<h2>Order details</h2>

					<div className={style.orderDetails_container}>
						<div className={style.orderDetails_container_row}>
							
							<div className={style.orderDetails_container_row_title}>
								<button className={style.orderDetails_container_row_title_active}>
									Main info
								</button>
								<button>Preferences</button>
								<button>Security</button>
							</div>

							<DetailsForm />
						</div>
					</div>
				</div>
			</div>
		</>
  )
}

export default OrderDetails