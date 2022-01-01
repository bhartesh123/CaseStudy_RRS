import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../../src/moduleCSS/login.css"
import email from '../../src/resources/email.png'
import pass from '../../src/resources/pass.png'
import App from '../App';

export class LogInCls extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        // <Redirect to={'/trainlist'} exact component={App}/>

        const data={
            email:this.email,
            password: this.password
        }

        axios.post("auth",data)
        .then(res=>{
            alert('Your Logged In')
            sessionStorage.setItem('token',res.data.token)
            console.log(res)
            this.props.history.push(`/`);
            window.location.reload()
            
          
            
        })
        .catch(err=>{
            alert('Your userID or password is Incorrect')
            console.log(err)

        })
    }
    render() {
        return (
            <section >
                <form onSubmit={this.handleSubmit}>
                {/* <script src="https://kit.fontawesome.com/41178afe37.js" crossorigin="anonymous"></script> */}
                <div className='co'>
                    <h1>User Login</h1>
                    <div className="box">
                        {/* <label className="form-label" for="typeEmailX-2">UserName</label>   */}
                        {/* <i class="far fa-envelope"></i> */}
                        <img src={email} style={{height:20}}/>&nbsp;&nbsp;
                        <input type="email" name="email"  placeholder="Enter Email" onChange={e=>this.email=e.target.value}/>
                        
                    </div>

                    <div className="box">
                        {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
                        <img src={pass} style={{height:20}}/>&nbsp;&nbsp;
                        <input type="password" name="password" placeholder="Enter password" onChange={e=> this.password=e.target.value}/>
                        
                    </div>

                    
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="bt" onClick={()=>{}} type="submit" style={{width:150,}}>Login</button>&nbsp;&nbsp;
                
                    <p style={{color: 'white'}}>Don't have an account? <Link to="/signUp" className="fw-bold text-body" ><u style={{color:'white'}}>Register here</u></Link></p>
                    {/* <hr className="my-4"/>

                    <button className="  block btn btn-primary btn-lg btn-block" style={{backgroundColor: '#dd4b39',width:300, marginBottom:10}} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                    <br/>
                    <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998',width:300}} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

                    */}
                </div>
                </form>
                <div className='card-bhar'>
                    <p>Hii I am Bhartesh</p>
                </div>
            </section>
        )
    }
}

export default LogInCls
