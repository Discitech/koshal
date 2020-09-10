import React,{ Component } from 'react';
import '../../css/forgotpassword.css';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

class ForgotPassword extends Component{

	constructor(props){
		super(props);
		this.state = {
            email: ""
		}
		this.reset_password = this.reset_password.bind(this);
    };

	reset_password(e){
		e.preventDefault();

		if(!validator.isEmail(this.state.email)){
			toast.error('🦄 Invalid Email!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
		}else{
			axios.post('/mail/reset-password',{
				email: this.state.email
			})
			.then((res) => {
				if(res.data.success ===  true){
					this.setState({
						email: ""
					});
					toast.success(res.data.msg, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
					this.props.history.push('/Login');
				}else if(res.data.success === false){
					toast.error(res.data.msg, {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					});
				}
			})
			.catch(err => {
				console.log(err);
			});
		}
	}

    render(){
        return(
		    <div>
		        <div className="forgot">
		            <h1 className="readjust-1">Password Reset</h1>
		            <p>Please enter your email address below and we'll email you a link to a page where you can easily create a new password.</p>
		            <input type="email" value={this.state.email} className="input-5" name="email" placeholder="Email" onChange={(event)=> {this.setState({email:event.target.value})}}/>
		            <button type="button" onClick={(event) => {this.reset_password(event)}} className="btn-5">Submit</button>
		            <p>Take me back to the <a href="/Login">login</a> page</p>
		        </div>
				<ToastContainer />
		    </div>
	    );
    }
}

export default ForgotPassword;
