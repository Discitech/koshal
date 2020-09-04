import React,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEmail, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../../css/login.css';
import '../../css/signup.css';
import validator from 'validator';

class Signup extends Component{

	constructor(props){
		super(props);
		this.state={
			name: "",
			email: "",
			password:"",
			nameError: "",
			passwordError: "",
			emailError: ""
		}
		this.submit = this.submit.bind(this);
		this.valid = this.valid.bind(this);
	}

	valid(){
		if(!validator.isEmail(this.state.email)){
			this.setState({emailError: "invalid Email"});
		}

		if(this.state.password.length > 5 && this.state.password.length < 15){
			this.setState({passwordError: "password length sholud be more than 5 and less than 15"});
		}

		if(this.state.name.length > 30){
			this.setState({nameError: "Name cannot be greater than 30 characters"});
		}
	}

	submit()
	{
		console.log("1");
		this.setState({nameError: "",passwordError: "", emailError: ""});
		if (this.valid()) {
			alert("form submitted", this.state.passwordError);
		}
    }
    
	render(){
		return(
			<div>
				<div className="main-container signup-container">		
					<div className="base-container-1">
						<h1>Sign Up</h1>
                        <h3>It only takes 2 minutes!</h3>
							<form className="form-deco">
								<div>
									<FontAwesomeIcon icon={faUser} className="user-logo"/>				
									<input type="text" className="input-4" name="username" placeholder="username" onChange={(event)=> {this.setState({name:event.target.value})}}/>
								</div>
								<div>
									<FontAwesomeIcon icon={faEnvelope} className="user-logo"/>				
									<input type="email" className="input-4" name="username" placeholder="email" onChange={(event)=> {this.setState({email:event.target.value})}}/>
								</div>
								<div>
									<FontAwesomeIcon icon={faLock} className="user-logo"/>				
                                	<input type="password" className="input-4" name="password" placeholder="password" onChange={(event) => {this.setState({password:event.target.value})}}/>
								</div>
								<p><span><input type="checkbox"/></span> I agree to the terms and conditions of the services</p>
								<button type="button" onClick={this.submit} className="btn-4">Sign Up</button>
							</form>
						<div className="form-bottom-2 decrease-gap">
							<p>Already have a code fox account?</p>
							<a href="/Login">Sign In</a>
					</div>
	  			 </div>
					
				<div className="vertical-line increase-height"><p className="or">OR</p></div>
					<div className="base-container-2">
						<h1>Other ways to Login</h1>
						<div className="adjust-4">                          
							<div className="envolope">
								<span  className="logo-color-1"><FontAwesomeIcon icon={faFacebook} /></span>
								<a href="#">Facebook Login</a>
							</div>
						<div className="envolope">
							<span  className="logo-color-1"><FontAwesomeIcon icon={faGoogle}/></span>
							<a href="#">Google Login</a>
						</div>
						<div className="envolope">
							<span  className="logo-color-1"><FontAwesomeIcon icon={faInstagram} /></span>
							<a href="#">Instagram Login</a>
						</div>
                        <div>
	                        <p>Don't worry, we won't post anything without your permission.</p>
	                    </div> 
					</div>
	   			</div>
	    	</div>
		</div>
	)}
};
export default Signup;
