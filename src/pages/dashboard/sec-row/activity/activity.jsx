import React from 'react'
import eclipse1 from '../../../../assets/mainpage/statistics_images/eclipse1.svg';
import eclipse2 from '../../../../assets/mainpage/statistics_images/eclipse2.svg';
import style from "./style.module.scss";
import Barchart from './chart';

const Activity = () => {
  return (
    <section className={style.aside_asideTwo_content_activity}>
			<h2>Weekly Activity</h2>
			<div className={style.aside_asideTwo_content_activity_row}>
				<div className={style.aside_asideTwo_content_activity_row_eclipse}>
						<div className={style.aside_asideTwo_content_activity_row_eclipse_item}>
								<img src={eclipse1} alt="eclipse1" />
								<span>Diposit</span>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_eclipse_item}>
							<img src={eclipse2} alt="eclipse2" />
							<span>Withdraw</span>
						</div>
				</div>

				<div className={style.aside_asideTwo_content_activity_row_statistics}>
					<Barchart />
				</div>

			</div>
    </section>
  )
}

export default Activity