import React, { Component ,useState, useContext} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as Yup from 'yup'
import _get from 'lodash.get'
import { Field, Form, Formik } from 'formik'
import nav1 from "../../src/resources/login.jpg";
import Logout from './logout'
import {UserContext} from '../App'

const LoginSchema=Yup.object().shape({
    password: Yup.string().required("Password is required..!"),
    email: Yup.string().required("Email is required..!")
})
const Login=()=>{
    const {state,dispatch} = useContext(UserContext)
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
            dispatch({type:"USER", payload: true})
            alert("Logged in successfully..!")
            history.push("/")
        }
    }
    const login = (userData)=>{
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
                <section className="vh-300" style={{backgroundColor: "#508bfc", backgroundImage:`url(${nav1})`}}>
  <div className="container py-5 h-300">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

          <h2 className="card-header info-color white-text text-center py-4" style={{backgroundColor: "#6BD9D7"}}>
                                    <strong style={{color:"black",fontFamily: "Monotype Corsiva"}}>
                                        {" "}
                                        Login to Your Account{" "}
                                    </strong>
                                </h2>
                                <br/>

            <div className="form-outline mb-4">
            {/* <label className="form-label" for="typeEmailX-2">UserName</label>   */}
              <Field type="email" name="email" className="form-control form-control-lg" placeholder="Enter Email" />
              
            </div>

            <div className="form-outline mb-4">
            {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
              <Field type="password" name="password" className="form-control form-control-lg" placeholder="Enter password"/>
              
            </div>

            
            <div className="form-check d-flex justify-content-start mb-4">
              <Field
                className="form-check-input"
                type="checkbox"
                
                id="form1Example3"
              />
              <label className="form-check-label" for="form1Example3">&nbsp; Remember password </label>
            </div>

            <button className="auth-button btn btn-success btn-block btn-lg gradient-custom-4 text-body " onClick={()=>{}} type="submit" style={{width:150,}}>Login</button>&nbsp;&nbsp;
          
            <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/signUp" className="fw-bold text-body"><u>Register here</u></Link></p>
            <hr className="my-4"/>

            <button className="  block btn btn-primary btn-lg btn-block" style={{backgroundColor: '#dd4b39',width:300, marginBottom:10}} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <br/>
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: '#3b5998',width:300}} type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
                

                    </Form>
                )}
            </Formik>
    )
}

export default Login