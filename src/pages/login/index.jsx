import React from 'react'
import style from "./style.module.scss";
import highBridge from "../../assets/login_images/icons/highBridge.svg";
import FormPage from "./form";

const LoginPage = () => {
  return (
    <div className={style.login}>

			<div className={style.login_container}>
				<div className={style.login_container_column}>
					<div className={style.login_container_column_image}>
						<img src={highBridge} alt="highBridge" />
					</div>
					<div className={style.login_container_column_slide}>
						<div className={style.login_container_column_slide_text}>
							<h1>Building the Future...</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							</p>
						</div>
						<div className={style.login_container_column_slide_line}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					
				</div>
					<div className={style.login_container_column}>
						<FormPage />
					</div>
				</div>
			</div>
  )
}

export default LoginPage