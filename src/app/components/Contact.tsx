"use client"

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';



interface FormInputValues {
    firstname: string,
    lastname: string,
    email: string,
    number: string,
    message: string,
};


const Contact : React.FC = () => {

    const [onLoad, setOnLoad] = useState<boolean>(false);

    const validationSchema = Yup.object({
        firstname: Yup.string().required('First Name is required'),
        lastname: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        number: Yup.string().matches(/^[0-9]+$/, 'Only digits are allowed').min(10, 'Contact number must be exactly 10 digits').max(10, 'Contact number must be exactly 10 digits').required('Contact Number is required'),
        message: Yup.string().min(5, 'Message Should Be Minimum 5 Characters').required('Message is Required'),
    });
    const initialValues: FormInputValues= { firstname:'', lastname:'' , email: '', number: '', message: ''};


    const onSubmit = (values: FormInputValues) => {
        console.log(values);

    };

    return(
        <>
            <div id="contact" className="flex justify-center">
                <div className="w-full max-w-[1440px] py-[2rem] px-[1rem]">
                    {/* tagline and title container */}
                    <div className="flex flex-col items-center">
                        <div className="w-fit px-[0.5rem] py-[0.25rem] bg-gray-200 rounded-full">
                            <h1 className="capitalize text-[0.75rem] text-gray-800">Contact</h1>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl leading-[4rem] font-semibold capitalize">Let's Create Something Beautiful</h1>
                            <p className="text-center text-gray-600 leading-[1.75rem] mt-[0.75rem] capitalize">Ready to transform your space? Get in touch with us today to discuss your project <br></br>and receive a personalized consultation.</p>
                        </div>
                    </div>

                    {/* contact master container */}
                    <div className="grid grid-cols-2 gap-[1rem] my-[1rem]">
                        <div className="col-span-2 lg:col-span-1 bg-gray-100 rounded-lg px-[1rem] py-[1.5rem]">
                            <div className="">
                                <div className="inline-flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                    <h1 className="">Send Us a Message</h1>
                                </div>
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                    <Form action="submit" className="">
                                        <div className="grid grid-cols-2 gap-[1rem]">
                                            <div className="col-span-1">
                                                <label htmlFor="" className="capitalize font-semibold text-[0.875rem]">first name</label><br></br>
                                                <Field 
                                                    name="firstname" 
                                                    type="text" 
                                                    className="bg-white w-full px-[1rem] py-[0.5rem] rounded-lg focus:outline-none" 
                                                    placeholder="john"
                                                    suppressHydrationWarning
                                                />
                                                <ErrorMessage name="firstname" component="p" className="text-red-500 text-[1rem] mt-[0.5rem]"  />
                                            </div>
                                            <div className="col-span-1">
                                                <label htmlFor="" className="capitalize font-semibold text-[0.875rem]">last name</label><br></br>
                                                <Field 
                                                    name="lastname" 
                                                    type="text" 
                                                    className="bg-white w-full px-[1rem] py-[0.5rem] rounded-lg focus:outline-none" 
                                                    placeholder="mathew"
                                                    suppressHydrationWarning
                                                />
                                                <ErrorMessage name="lastname" component="p" className="text-red-500 text-[1rem] mt-[0.5rem]" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-[1rem] mt-[1rem]">
                                            <div className="col-span-1">
                                                <label htmlFor="" className="capitalize font-semibold text-[0.875rem]">email</label><br></br>
                                                <Field 
                                                    name="email" 
                                                    type="email" 
                                                    className="bg-white w-full px-[1rem] py-[0.5rem] rounded-lg focus:outline-none" 
                                                    placeholder="john@gmail.com"
                                                    suppressHydrationWarning
                                                />
                                                <ErrorMessage name="email" component="p" className="text-red-500 text-[1rem] mt-[0.5rem]" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-[1rem] mt-[1rem]">
                                            <div className="col-span-1">
                                                <label htmlFor="" className="capitalize font-semibold text-[0.875rem]">phone</label><br></br>
                                                <Field 
                                                    name="number" 
                                                    type="tel" 
                                                    className="bg-white w-full px-[1rem] py-[0.5rem] rounded-lg focus:outline-none" 
                                                    placeholder="(+1) 999 999 9999"
                                                    suppressHydrationWarning
                                                />
                                                <ErrorMessage name="number" component="p" className="text-red-500 text-[1rem] mt-[0.5rem]" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-[1rem] mt-[1rem]">
                                            <div className="col-span-1">
                                                <label htmlFor="" className="capitalize font-semibold text-[0.875rem]">tell us about your project</label><br></br>
                                                <Field 
                                                    name="message" 
                                                    as="textarea"  
                                                    className="bg-white w-full px-[1rem] py-[0.5rem] rounded-lg focus:outline-none" 
                                                    placeholder="Please tell us about your project in detail"
                                                    suppressHydrationWarning
                                                />
                                                <ErrorMessage name="message" component="p" className="text-red-500 text-[1rem] mt-[0.5rem]" />
                                            </div>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full capitalize cursor-pointer bg-black px-[0.75rem] py-[0.5rem] text-[1rem] text-white rounded-lg my-[0.5rem]"
                                            suppressHydrationWarning
                                        >
                                            {
                                                onLoad?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-auto animate-spin  ">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>

                                                :
                                                "submit form"
                                            }    
                                            
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div className="bg-gray-100 rounded-lg px-[1rem] py-[0.5rem] flex items-center gap-[1rem] mb-[1rem] cursor-pointer duration-150 hover:shadow-lg">
                                <div className="bg-white w-fit p-[0.5rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold capitalize">Visit Our Studio</h1>
                                    <p className="text-gray-600">35/9, Betaspace, Desabandhu Street, Ram Nagar, Coimbatore - 641009</p>
                                    <div className="mt-[0.5rem]">
                                        <a href="https://maps.google.com/?q=35/9,Betaspace,Desabandhu Street,Ram Nagar,Coimbatore-641009" target="_blank" rel="noopener noreferrer" className="capitalize inline-flex items-center gap-1">
                                            <p className="text-[0.875rem] font-semibold">get directions</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-lg px-[1rem] py-[0.5rem] flex items-center gap-[1rem] mb-[1rem] cursor-pointer duration-150 hover:shadow-lg">
                                <div className="bg-white w-fit p-[0.5rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                    </svg>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold capitalize">call us</h1>
                                    <p className="text-gray-600">+91 94872 88218</p>
                                    <div className="mt-[0.5rem]">
                                        <a href="tel:+919487288218" className="capitalize inline-flex items-center gap-1">
                                            <p className="text-[0.875rem] font-semibold">call now</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-lg px-[1rem] py-[0.5rem] flex items-center gap-[1rem] mb-[1rem] cursor-pointer duration-150 hover:shadow-lg">
                                <div className="bg-white w-fit p-[0.5rem] rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div className="">
                                    <h1 className="font-semibold capitalize">email us</h1>
                                    <p className="text-gray-600">gminteriors474@gmail.com</p>
                                    <div className="mt-[0.5rem]">
                                        <a href="mailto:gminteriors474@gmail.com" className="capitalize inline-flex items-center gap-1">
                                            <p className="text-[0.875rem] font-semibold">send email</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};


export default Contact;