import type { FC } from 'react';
import LoginImg from '..//..//Assets/lgo1.avif'
import GoogleImg from '..//..//Assets/google.png'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import LoginIm from '..//..//Assets/lgo1.avif'
import axios from 'axios';




interface LoginProps { }

const Login: FC<LoginProps> = () => {
    const nevigate = useNavigate()
    const url = `http://localhost:3000/api/login`;
    const initialValues = {
        email: "",
        password: ""
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Email is required'),
        password: Yup.string().required('Password is required')
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol')
    });
    const handleLogin = async (values: any) => {
        console.log(values);
    
        try {
            const response = await axios.post(url, values);
            console.log(response.data.token);
            sessionStorage.setItem("token", response.data.token);
        } catch (error) {
            console.error("Error occurred:", error);
        }
        nevigate("/home")
    };
    
    return (

        <>
            <div className='w-full h-screen'>
                <div className='w-full h-full flex bg-white'>
                    <img className='w-[55%] hidden md:block h-full' src={LoginImg} alt="login" />
                    <div className='md:w-[45%] w-full h-full bg-white'>
                        <div className='w-full px-6 sx:px-32 md:px-10 h-full flex justify-center items-center flex-col'>
                            <div className=' animate-spin rounded-full'>
                                <img className='h-10 w-10 rounded-full duration-100' src={LoginIm} alt="round" />
                            </div>
                            <h2 className='text-xl font-semibold'><span className='font-bold'>New user ?</span>  <Link to='/register' className='text-teal-700'>
                                SignUp
                            </Link>
                            
                            </h2>
                            <div className='border rounded-md w-full h-8 flex justify-center items-center gap-4 mt-6 cursor-pointer'>
                                <img className='w-4 h-4' src={GoogleImg} alt="google" />
                                <span className='text-xs font-medium'>Continue with Google</span>
                            </div>
                            <div className='flex justify-center items-center my-10 w-full'>
                                <p className='border-b w-[25%] border bg-gray-300'></p>
                                <p className='bg-white px-1 text-sm truncate'>or sign in with Email</p>
                                <p className='border-b w-[25%] border bg-gray-300'></p>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleLogin}
                            >
                                <Form className='flex flex-col gap-4 w-full' >
                                    <Field className="border rounded-md pl-2 text-sm py-1" name='email' id='email' label='Email' placeholder="Email" />
                                    <Field className="border rounded-md pl-2 text-sm py-1" name='password' id='password' label='Password' required={true} placeholder="Password" />
                                    <div className='mt-2 flex justify-end text-xs'>
                                        <span className='text-teal-700 cursor-pointer'>Forgot Password?</span>
                                    </div>
                                    <button type='submit' className='border w-full h-8 rounded-md mt-6 flex justify-center items-center bg-teal-700 font-semibold text-white'>Login</button>
                                </Form>
                            </Formik>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
