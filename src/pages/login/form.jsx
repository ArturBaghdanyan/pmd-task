import React, {useState} from 'react'
import style from "./style.module.scss";
import eye from "../../assets/login_images/icons/eye.svg";

const FormPage = () => {
	const [checked, setChecked] = useState(true);

  return (
    <div className={style.login_container_column_piece}>
			<div className={style.login_container_column_piece_title}>
				<span>welcome back</span>
				<h3>Log In to your Account</h3>
			</div>
			<form className={style.login_container_column_piece_form}>
				<div className={style.login_container_column_piece_form_inputs}>
					<div className={style.login_container_column_piece_form_inputs_piece}>
						<label>Email</label>
						<input type="email" placeholder="johnsondoe@nomail.com" />
					</div>
					
					<div className={style.login_container_column_piece_form_inputs_piece}>
						<label htmlFor="">Password</label>
						<div className={style.login_container_column_piece_form_inputs_piece_password}>
							<input type="password" placeholder='***************'/>
							<img src={eye} alt="eye" />
						</div>
						
					</div>	
				</div>
				<div className={style.login_container_column_piece_form_checkbox}>
					<div className={style.login_container_column_piece_form_checkbox_remember}>
						<input type="checkbox" defaultChecked={checked} />
						<span>Remember me</span>
					</div>
					
					<button>Forgot Password?</button>
				</div>
				<button>continue</button>
			</form>
		</div>
)
}

export default FormPage