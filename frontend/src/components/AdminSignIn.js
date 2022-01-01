import React, { Component, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import * as Yup from 'yup'
import _get from 'lodash.get'
import { Field, Form, Formik } from 'formik'
import nav1 from "../../src/resources/adminLogin.jpeg";
import { message } from 'antd'
import "../../src/moduleCSS/login.css"


const LoginSchema= Yup.object().shape({
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Admin Name is required")
})

const AdminSignIn =()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory();
    const location=useLocation();
    const fromUrl=_get(location,"state.from.pathname");
    const signInSuccess=(userData)=>
    {
        if(fromUrl){
            history.push(fromUrl)
        }
        else{
            alert("Admin Logged in successfully..!")
            history.push('/addTrain')
        }
    }
    const login =(userData)=>{
        fetch("http://localhost:9050/auth",{
                "method":"POST",
                "headers":{
                    "content-type":"application/json",
                    "accept":"application/json",
                    "Access-Control-Allow-Origin":"*"
                },
                "body": JSON.stringify({
                    username: userData.username,
                    password: userData.password                   
                })
        })
        .then(response=> response.json())
        .then(message=>{
            if(message.error){
                alert('Your userID or password is Incorrect')
            }
            else{
                const userData={
                    token: message,
                    name: username
                    
                }
                
                sessionStorage.setItem('token',JSON.stringify(userData.token))
                signInSuccess(userData)
                console.log(message)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    
    }
        return (
            <Formik
            initialValues={{
                username: "",
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
                <section className="vh-200" style={{background:'cover'}}>
  <div className="container py-5 h-200">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem",width:500, marginTop:'23%'}}>
          <div className="card-body p-5 text-center">

          <h2 className="card-header info-color white-text text-center py-4" style={{backgroundColor: "#6BD9D7"}}>
                                    <strong style={{color:"black",fontFamily: "Monotype Corsiva"}}>
                                        {" "}
                                        Admin Account{" "}
                                    </strong>
                                </h2>
                                <br/>

            <div className="form-outline mb-4">
            {/* <label className="form-label" for="typeEmailX-2">UserName</label>   */}
              <Field type="text" name="username" className="form-control form-control-lg" placeholder="Enter Admin User Name" />
              
            </div>

            <div className="form-outline mb-4">
            {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
              <Field type="password" name="password" className="form-control form-control-lg" placeholder="Enter password"/>
              
            </div>

            
            

            <button className="auth-button btn btn-success btn-block btn-lg gradient-custom-4 text-body " onClick={()=>{}} type="submit" style={{width:150,}}>Login</button>&nbsp;&nbsp;
          
            {/* <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/adminSignUp" className="fw-bold text-body"><u>Register here</u></Link></p> */}
            

            
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

export default AdminSignIn
