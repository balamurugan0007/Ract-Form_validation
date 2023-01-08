import React from 'react'
import "./sign.css"
import{useFormik } from "formik"
import * as yup from "yup"

export const Signinpage = () => {

    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            confirm_password:'',
           
        },
        validationSchema:yup.object({
            name:yup.string()
            .strict()
            .required("username must require")
            .min(6)
            .trim("aviod space"),
            
            email:yup.string()
            .required("email must required")
            .email(),

            password:yup.string()
            .required("Password must be required")
            .trim("aviod space")
            .min(7),
        
            confirm_password:yup.string()
            .oneOf([yup.ref('password'),null],"confirm_password and password must same one")
           .required("confirm password required"),
            
            
        }),
        onSubmit:(userInputData)=>{
            console.log(userInputData);
        }

    })





  return (
    <div className="container mt-5 " id="container">
       
        <div className="row " >
            <h2 className="text-center mt-5 mb-4" id="head-tag"><span className="text-danger">Super</span> downloader</h2>
            <div className="col-lg-6 ">
                <img src={require("../images/sign.png")} className="img-fluid" alt="pic"/>
            </div>
            <div className=" col-lg-5 mt-3 ">
                <form  onSubmit={formik.handleSubmit} autoComplete="off">
                    <h3 className="text-center text-danger" id="signup-btn">Signup</h3>
                    <div className="row">
                        <div className="col-lg  m-sm-auto">
                            <input type="text" 
                            placeholder=" user name" 
                            name='name'
                            className="form-control mt-2 mb-2 pt-3 "
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            />
                            {formik.errors.name ?
                            <div className='text-danger'> * {formik.errors.name}</div>
                            :null}
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg  m-sm-auto">
                           <input type="text" 
                           placeholder="E-mail" 
                           className="form-control mt-2 mb-2 pt-3"
                           name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                            />
                            {formik.errors.email?
                            <div className='text-danger'> * {formik.errors.email}</div>
                            :null}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg  m-sm-auto">
                            <input type="text" 
                            placeholder="Password" 
                            className="form-control mt-2 mb-2 pt-3" 
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />
                            {formik.errors.password ?
                            <div className='text-danger'> * {formik.errors.password}</div>
                            :null
                        }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg  m-sm-auto ">
                           <input type="text" 
                           placeholder="Repeat Password" 
                           className="form-control mt-2 mb-2 pt-3" 
                           name='confirm_password'
                           onChange={formik.handleChange}
                           value={formik.values.confirm_password}
                           />{formik.errors.confirm_password ?
                        <div className='text-danger'> * {formik.errors.confirm_password}</div>
                        :null}
                        </div>
                    </div>
                    
                     <span id="terms" className="d-flex justify-content-center"> 
                           <input type="checkbox"  
                           className="form-check mt-lg-3 mb-3 ml-2 pt-3"
                           name='Terms and condition'
                       
                           />
                           
                            <p className="mt-4">Read the terms and conditions and  the privacy agreements</p>
                       
                     </span>  

                     <div className="row">
                        <div className="col-lg  m-sm-auto mt-3">
                           <button type="submit" id="submit-btn"  className="form-control  pt-2 bg-black text-white">Signup</button>
                        </div>
                    
                    </div>
                    
                        <div className="row mt-4 mb-4">
                            <p className="text-center" >You already have an account! <a href="#" className="text-decoration-none ">Login </a></p>
                        </div>
                    
                        
                    
                    
                    

                </form>
            </div>
        </div>
       </div>
  )
}
