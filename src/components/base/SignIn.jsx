import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import Image from './Image';
import '../../cssfiles/SignIn.css'
import { checkUser, getUsers } from '../../servicies/productsServicies';
import { loginData } from '../../App';
import welcomeGif from '../../assets/images/welcome.gif'
import Swal from 'sweetalert2'


const SignIn = () => {
  const navigate=useNavigate()
  const {loginUser,setLoginUser}=useContext(loginData)
  const [enterUserInLocal, setEnterUserInLocal] = useState({})
  const validationSchema=Yup.object({
    // firstName: Yup.string()
    //   .max(15, 'Must be 15 characters or less')
    //   .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(8,'Must be 8 characters or more')
      .max(20, 'Must be 20 characters or less')
      .required('Required')
  })

  // useEffect(() => {
  //   setEnterUserInLocal(prevState => {
  //     localStorage.setItem("userInfo", JSON.stringify(prevState));
  //     return prevState;
  //   });
      
  // }, [enterUserInLocal])
  
   
  return (
    <div className='w-[25%] mt-2 sm:w-[75%] md:w-[50%]'>
     <Formik 
      
      initialValues={{email: '',password:'' }}
      //from all users check one by one to check which email and pass is for which user
          //method1:
      onSubmit={async(values,{setFieldError,setSubmitting})=>{
        //get all users for searching for the user that wants to login
      const userData=await checkUser(values.email,values.password )
       if(userData?.data){
          Swal.fire({
            title: `Welcome ${userData?.data?.name}!!`,
            width: 600,
            padding: "3em",
            color: "#F28C28",
            background: "#fff",
            confirmButtonColor:"#F28C28",
            backdrop: `
            rgba(255,165,0,0.1)
            url(${welcomeGif})
            left top
            no-repeat
            `
          });
       
          setLoginUser(userData?.data)
          localStorage.setItem('user_local',JSON.stringify(userData?.data))
          navigate('/')
        }else{
           Swal.fire({
            icon: "error",
            title: "Sorry...",
            text: "email or password is not correct!!!",
            confirmButtonColor:"#F28C28"
            
          });
        } 
      setSubmitting(false)
     
      }}
     
      // onSubmit={(values, { setSubmitting, setFieldError }) => {
      //   // setTimeout(() => {
      //   //   alert(JSON.stringify(values, null, 2));
      //   //   setSubmitting(false);
      //   // }, 400);
      //    getUsers().then(result=>{
      //       result.data.map(user=>{
      //        if (user.email === values.email) {
      //         if (user.password === values.password) {
      //           alert("login successfully")
      //           setLoginUser(user)
      //           console.log("loginUser in sign in",loginUser);
      //           console.log("user",user);
      //           // setEnterUserInLocal(user)
                
      //           // localStorage.setItem("userInfo",JSON.stringify(user))//set localStorage at first time
      //           navigate("/")
                
      //         }else{
               
      //           setFieldError('password', 'password is wrong');
              
      //         }
              
      //       }else if(values.email !== "" ||  user.email !== values.email){
    
      //         setFieldError('email', 'email is not already exit');
              
      //       }
    
      //     })
      //   })
      //   .catch(err =>console.log(err))
        
      //   setSubmitting(false);
      // }}

       validationSchema={validationSchema}
    >
      <Form className='flex flex-col items-center p-3 gap-y-10 w-full shadow-xl shadow-orange-500 rounded-md'>
      
        <div className='flex justify-center items-center'>
          <Image src={require("../../assets/images/userDefultImg.png")} width={"90px"} height={"140px"}/>
        </div>

        <div className='flex flex-col px-2 gap-y-5 w-full'>
         <div className='flex flex-col gap-y-2 w-full' >
          <label htmlFor="email">Email : </label>
          <div className='flex gap-x-2 w-full'>
            <Field name="email" type="email" placeholder="Enter Your Email" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
            <ErrorMessage name="email" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
          </div>
          
         </div>

         <div className='flex flex-col gap-y-2 w-full'>
          <label htmlFor="password">Password : </label>
          <div className='flex gap-x-2 w-full'>
            <Field name="password" type="password" placeholder="Enter Your Password" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
            <ErrorMessage name="password" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
            
          </div>
          <a className='text-xs text-orange-500'>Forgote Password? </a>
         </div>
        </div>

        <div className='flex flex-col items-center w-full gap-y-2'>
         {/* <NavLink to="/" className={"w-full flex justify-center items-center"}>
            
        </NavLink> */}
           <button type="submit" className="btn2 text-md rounded-md w-[50%] h-[30px] p-2 relative border border-gray-300 text-orange-500 leading-none overflow-hidden hover:text-white">
             <span className="absolute inset-0 bg-orange-500"></span>
             <span className="absolute text-md inset-0 flex justify-center items-center"> Sign in </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
           </button>
           <NavLink to="/register" className={"w-full flex justify-center items-center"}>
           <button type="submit" className="btn2 text-md rounded-md w-[50%] h-[30px] p-2 bg-gradient-to-r from-white to-orange-200 relative border border-orange-500 text-orange-500 leading-none overflow-hidden hover:text-white">
             <span className="absolute inset-0 bg-white"></span>
             <span className="absolute text-md inset-0 flex justify-center items-center text-orange-500"> Create Account </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          </button> 
           </NavLink>
             
    
         
        </div>
      </Form>
     </Formik>
    </div>
  )
}

export default SignIn