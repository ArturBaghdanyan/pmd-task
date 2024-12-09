import React from 'react'
import statisticsIcon from '../../../../assets/mainpage/statistics_images/statistics.png';
import eclipse1 from '../../../../assets/mainpage/statistics_images/eclipse1.svg';
import eclipse2 from '../../../../assets/mainpage/statistics_images/eclipse2.svg';
import style from "./style.module.scss";

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
					<div className={style.aside_asideTwo_content_activity_row_statistics_item}>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_line}>
							<span>500</span>
							<b></b>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_line}>
							<span>400</span>
							<b></b>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_line}>
							<span>300</span>
							<b></b>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_line}>
							<span>200</span>
							<b></b>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_line}>
							<span>100</span>
							<b></b>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_line}>
							<span style={{paddingLeft: "15px"}}>0</span>
							<b></b>
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_icon}>
							<img src={statisticsIcon} alt="statisticsIcon" />  
						</div>
						<div className={style.aside_asideTwo_content_activity_row_statistics_item_days}>
								<span>Sat</span>
								<span>Sun</span>
								<span>Mon</span>
								<span>Tue</span>
								<span>Wed</span>
								<span>Thu</span>
								<span>Fri</span>
						</div>
					</div>
					
				
				</div>

			</div>
    </section>
  )
}

export default Activity