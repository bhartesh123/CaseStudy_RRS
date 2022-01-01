import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../moduleCSS/form.css"
import "../../src/moduleCSS/signup.css"
class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             mobileNumber:'',
             gender:'',
             email:'',
             usernameError:'',
             passwordError:'',
             mobileNumberError:'',
             genderError:'',
             emailError:'',
             isProfile: false
        }
        this.register=this.register.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    valid(){
        if(this.state.username.length<4 && this.state.password.length<6 && this.state.mobileNumber.length<10 && this.state.email.length<11 ) {
            this.setState({
                usernameError:"Invalid UserName",
                passwordError:"Invalid Password", 
                mobileNumberError:"Invalid Mobile Number",
                emailError:"Invalid Email Address"
            })
        }
        else if(this.state.username.length<4){
            this.setState({
                usernameError:"Invalid UserName"})
        }
        else if(this.state.password.length<6){
            this.setState({
                passwordError:"Invalid Password"
            })
        }
        else if(this.state.mobileNumber.length<10){
            this.setState({
                mobileNumberError:"Invalid Mobile Number"
            })
        }
        else if(this.state.email.length<10){
          this.setState({
              emailError:"Invalid Email Address"})
      }
        else{
            return true
        }
    }
    register(e){
        this.setState({
            usernameError:"",
            passwordError:"",
            mobileNumberError:"",
            emailError:""

        })
        e.preventDefault()
        
        if(this.valid()){
            fetch("http://localhost:8682/subs",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    username: this.state.username,
                    password:this.state.password,
                    mobileNumber: this.state.mobileNumber,
                    email:this.state.email,
                    gender: this.state.gender
                })
            })
            .then(response=> response.json())
            .then(response=>{
                alert("You have been Registered Successfully")
                alert("Please Login Now.....!")
                this.props.history.push(`/login`);
            })
            
            .catch(err=>{
                alert("Your Registration Failed..!!!!")
            })
            
        }
    }
    handleChange(changeObject){
        this.setState(changeObject)
    }
    render() {
        return (
            
            <section>
  <div className="signup mask d-flex  h-100 gradient-custom-3">
    <div className='si'>
      <center>
    <h2>Create Your Account</h2></center>
      <div className='box1'>
                  <input type="text" id="form3Example1cg"  placeholder='Enter your Name' onChange={(e)=>this.handleChange({username: e.target.value})}/>
                  <p style={{color:'red'}}>{this.state.usernameError}</p>
                  <input type="email" id="form3Example3cg"  placeholder='Enter your Email Id' onChange={(e)=>this.handleChange({email: e.target.value})}/><br/>
                  <p style={{color:'red'}}>{this.state.emailError}</p>
                  <input type="password" id="form3Example4cg"  placeholder='Enter your Password'
                  onChange={(e)=> this.handleChange({password: e.target.value})}/>
                  <p style={{color:'red'}}>{this.state.passwordError}</p>
        </div>
        <div className='box2'>
        <input type="date"   placeholder="DOB"
                  />
                  <p ></p>
                 <input type="tel" id="form3Example4cdg"  placeholder='Enter Your Mobile Number'
                  onChange={(e)=>this.handleChange({
                      mobileNumber: e.target.value
                  })}
                  />
                   <p style={{color:'red'}}>{this.state.mobileNumberError}</p>
                   <input type="tel" id="form2"  placeholder='Enter Your Gender'
                  onChange={(e)=>this.handleChange({
                      gender: e.target.value
                  })}
                  />
                   <p style={{color:'red'}}>{this.state.genderError}</p>
                 
        </div>
        <hr style={{color:'purple'}}></hr>
        <center>
        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={(e)=>this.register(e)} style={{width:200, fontFamily: "Harlow Solid Italic"}}><strong>Register</strong></button>
        <br/>   <br/>
        <p  style={{color: 'white'}}>Have already an account? <Link to="/login" className="fw-bold text-body" ><u  style={{color: 'white'}}>Login here</u></Link></p>
        <br/>
        
        </center>
    </div>
  </div>
</section>
           
        
    );}
}

export default SignUp
