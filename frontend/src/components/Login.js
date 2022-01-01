import React, { Component ,useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as Yup from 'yup'
import _get from 'lodash.get'
import { Field, Form, Formik } from 'formik'
import nav1 from "../../src/resources/login.jpg";
import Logout from './logout'

import "../../src/moduleCSS/login.css"

const LoginSchema=Yup.object().shape({
    password: Yup.string().required("Password is required..!"),
    email: Yup.string().required("Email is required..!")
})
const Login=()=>{
   
    const [email, serUsername]= useState('')
    const [password, setPassword]=useState('')
    const history=useHistory();
    const location=useLocation();
    const fromUrl=_get(location,"state.from.pathname")
    const signInSuccess=(useData)=>{
        if(fromUrl){
            history.push(fromUrl)
        }
        else{
       
            alert("Logged in successfully..!")
            history.push("/")
        }
    }
    const login = (userData)=>{
        userData.preventDefault()
        fetch("http://localhost:8682/auth",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    email: userData.email,
                    password: userData.password                   
                })
        })
        .then(response=> response.json())
        .then(response=>{
            if(response.error){
                alert('Your userID or password is Incorrect')
            }
            else{
                const userData={
                    token: response,
                    name: email
                    
                }
                
                sessionStorage.setItem('token',JSON.stringify(userData.token))
                signInSuccess(userData)
                console.log(response)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    // const logout=()=>{
    //     sessionStorage.removeItem('token')
    //     alert("You have been Logged Out..!")
    //     // setToken(null)
    // }
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, {resetForm})=>{
                try{
                    const userData={...values}
                    resetForm();
                    login(userData)
                } catch(err){
                    console.log(err)
                }
            }}>
                {()=>(
                    
                    <Form>
                       
            <section >
                {/* <script src="https://kit.fontawesome.com/41178afe37.js" crossorigin="anonymous"></script> */}
                <div className='co'>
                    <h1>User Login</h1>
                    <div className="box">
                        {/* <label className="form-label" for="typeEmailX-2">UserName</label>   */}
                        {/* <i class="far fa-envelope"></i> */}
                        <img src='https://cdn-icons.flaticon.com/png/128/2669/premium/2669578.png?token=exp=1640917963~hmac=6bf260eeb478f009b6de02362517d62f' style={{height:20}}/>&nbsp;&nbsp;
                        <Field type="email" name="email"  placeholder="Enter Email" />
                        
                    </div>

                    <div className="box">
                        {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
                        <img src='https://cdn-icons.flaticon.com/png/128/4581/premium/4581266.png?token=exp=1640918066~hmac=eb0466a73a11a55e3bb072b9f98c27e6'style={{height:20}}/>&nbsp;&nbsp;
                        <Field type="password" name="password" placeholder="Enter password"/>
                        
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
                <div className='card-bhar'>
                    <p>Hii I am Bhartesh</p>
                </div>
            </section>
          
                    </Form>
                )}
            </Formik>
    )
}

export default Login