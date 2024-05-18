import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import Image from '../components/base/Image';
import Image from './Image';
// import { createUser } from '../servicies/productsServicies';
import { createUser } from '../../servicies/productsServicies';
// import {useDispatch} from 'react-redux';
import { useDispatch } from 'react-redux';
// import { adduser } from '../redux/slices/usersSlice';
import { adduser } from '../../redux/slices/usersSlice';
import Swal from 'sweetalert2';



const RegisterForm = () => {
 const navigate=useNavigate()
 const dispatch = useDispatch()


 
  return (
    // style={{ backgroundImage: `url(${require("../assets/images/online-shop.jpg")})` }}
    <div className='w-[100%] flex justify-center items-center'>
      <div className="w-[40%] bg-white sm:w-[75%] md:w-[50%] lg:w-[70%]">
    <Formik 
     
     initialValues={{name:'',family:'',phone:'',address:'',email: '',password:'',copypassword:'',choiceList:[],wishLists:[],rateStarsList:[]}}
     validationSchema={Yup.object({
       name:Yup.string().required('Entering the name is required'),
       family:Yup.string().required('Entering the family is required'),
       phone:Yup.number().typeError('you must specify a number').required('Entering the phone is required'),
       address:Yup.string().required('Entering the address is required'),
       email: Yup.string().email('Invalid email address').required('Required')
      //  when we want handle customize validation for email or password we can use test methode of Yup library
       .test('Unique Email', 'Email already in use', (value)=> {
           return new Promise((resolve, reject) => {
               axios.get(`http://localhost:9000/users`)
                   .then((res) => {
                    const existEmail=res?.data?.find(item=>item?.email==value)

                       if (existEmail) {
                        resolve(false)//when resolve becomes false,Yup show  error message context to user that we specify as the second input of test methode
                       }else{

                         resolve(true)
                       }
                       
                   })
                   .catch((error) => {
                      console.log("error",error);
                   })
           })
       }
   )
       ,
       password: Yup.string()
         .min(8,'Must be 8 characters or more')
         .max(20, 'Must be 20 characters or less')
         .required('Required'),

       copypassword: Yup.string()
         .oneOf([Yup.ref('password'), null], 'Passwords must match')
       
     })}
     onSubmit={async(values, { setSubmitting }) => {
      //  setTimeout(() => {
      //   //  alert(JSON.stringify(values, null, 2));
      //    alert("Registered Successfully");
      //    navigate("/sign in")
      //    createUser(values)
      //    setSubmitting(false);
      //  }, 400);
      Swal.fire({
        title: "Your Register was Successfuly",
        text:"Please sign in",
        confirmButtonColor:"#F28C28"
       
      });
        
         await createUser(values)
         navigate("/sign in")
         dispatch(adduser(values))
         setSubmitting(false);
         
     }}
   >
     <Form className='flex flex-col items-center p-3 gap-y-5 w-full shadow-xl shadow-orange-500 rounded-md'>
     
       {/* <div className='flex justify-center items-center'>
       <svg xmlns="http://www.w3.org/2000/svg" width="70" height="120" fill="orange" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
         <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
         <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
       </svg>
         
       </div> */}
       <Image src={require("../../assets/images/userDefultImg.png")} width={"90px"} height={"140px"}/> 

       <div className='flex flex-col gap-y-2 px-2 w-full'>
       <div className='flex flex-col w-full' >
         <label htmlFor="name">Name : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="name" type="text" placeholder="Enter Your First Name" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="name" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
           {/* when we want to set customize style for errorMessage we must use render property */}
         </div>
         
        </div>

        <div className='flex flex-col gap-y-2 w-full' >
         <label htmlFor="family">Family : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="family" type="text" placeholder="Enter Your Last Name" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="family" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
         </div>
         
        </div>

        <div className='flex flex-col gap-y-2 w-full' >
         <label htmlFor="phone">Phone Number : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="phone" type="text" placeholder="Enter Your Phone Number" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="phone" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
         </div>
         
        </div>

        <div className='flex flex-col gap-y-2 w-full' >
         <label htmlFor="address">Address : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="address" type="text" placeholder="Enter Your Address" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="address" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
         </div>
         
        </div>

        <div className='flex flex-col gap-y-2 w-full'>
         <label htmlFor="email">Email : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="email" type="emailpassword" placeholder="Enter Your Email" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="email" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
           
         </div>
        </div>

        <div className='flex flex-col gap-y-2 w-full'>
         <label htmlFor="password">Password : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="password" type="password" placeholder="Enter Your Password" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="password" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
           
         </div>
        </div>

        <div className='flex flex-col gap-y-2 w-full'>
         <label htmlFor="copypassword"> Confirm Password : </label>
         <div className='flex gap-x-2 w-full'>
           <Field name="copypassword" type="password" placeholder="Enter Your Confirm Password" className="outline-none border border-gray-300 rounded-sm pl-2 w-full"/>
           <ErrorMessage name="copypassword" render={(msg)=>(<div className='text-red-600 text-xs'>{msg}</div>)}/>
           
         </div>
        </div>
       </div>

       <div className='flex flex-col items-center w-full gap-y-2'>
        {/* <NavLink to="/" className={"w-full flex justify-center items-center"}>
           
       </NavLink> */}
          {/* <NavLink to="/register" className={"w-full flex justify-center items-center"}> */}
          <button type="submit" className="btn2 text-md rounded-md w-[50%] h-[30px] p-2 relative border border-orange-500 text-orange-500 leading-none overflow-hidden hover:text-white">
            <span className="absolute inset-0 bg-orange-500"></span>
            <span className="absolute text-md inset-0 flex justify-center items-center"> Create Account </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
         </button> 
          {/* </NavLink> */}
            
   
        
       </div>
     </Form>
    </Formik>
   
   </div>
    </div>
  )
}

export default RegisterForm