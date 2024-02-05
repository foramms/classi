"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary.");
            return;
        }

        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already exists.");
                return;
            }

            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="w-full h-[100vh] flex items-center justify-center p-6">
            <div className="w-full shadow-lg p-1 rounded-lg border-t-4 border-[#7699C8]">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="bg-[#7699C8] text-white font-bold cursor-pointer px-6 py-2">
                        Register
                    </button>

                    {error && (
                        <div className="bg-[#B9C9DF] text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}

                    <Link className="text- mt-3 text-right" href={"/login"}>
                        Already have an account? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    );
}

// 'use client'
// import React, { useState } from 'react'
// import Button from "react"
// import { register } from "module";
// import { BrowserRouter } from "react-router-dom"
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form"
// import TextInput from "@/components/TextInput"
// import Link from 'next/link';

// const Register = () => {
//     const {
//         register,
//         formState: { errors },
//     } = useForm(
//         {
//             mode: "onChange",
//         }
//     )

//     const onSubmit = async (data) => {

//     }
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         //e.preventDefault()
//     }

//     const [errMsg, setErrMsg] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState("false");

//     return (
//         <BrowserRouter>
//             <div className='bg-bgcolor w-full h-[100vh] flex items-center justify-center p-6'>
//                 <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
//                     <div className='w-full lg: w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
//                         <div className='w-full flex gap-2 items-center mb-6'>
//                         </div>
//                         <p className='text-ascent-1 text-base font-semibold'>
//                             Create an Account
//                         </p>
//                         <span className='text-sm mt-2 text-ascent-2'>Enter your email address and Password Below:</span>
//                         <form className='py-8 flex flex-col gap-5'
//                             onSubmit={handleSubmit(onSubmit)}>

//                             <TextInput
//                                 name='name'
//                                 placeholder='John Doe'
//                                 label='Full Name'
//                                 type='name'
//                                 register={register("name", {
//                                     required: "Name is required"
//                                 })}
//                                 styles='w-full rounded-full'
//                                 labelStyle='ml-2'
//                                 error={errors.name ? errors.name.message : ""}
//                             />
//                             <TextInput
//                                 name='email'
//                                 placeholder='email@ucdavis.edu'
//                                 label='Email Address'
//                                 type='email'
//                                 register={register("email", {
//                                     required: "Email Address is required"
//                                 })}
//                                 styles='w-full rounded-full'
//                                 labelStyle='ml-2'
//                                 error={errors.email ? errors.email.message : ""}
//                             />

//                             <TextInput
//                                 name='password'
//                                 label='Password'
//                                 placeholder='Password'
//                                 type='password'
//                                 styles='w-full rounded-full'
//                                 labelStyle='ml-2'
//                                 register={register("password", {
//                                     required: "Password is required!"
//                                 })}
//                                 error={errors.password ? errors.password?.message : ""}
//                             />

//                             <Link
//                                 href="/reset-password"
//                                 className="text-sm text-right text-blue font-semibold">
//                                 Forgot Password? </Link>

//                             {
//                                 errMsg?.message && (
//                                     <span
//                                         className={`text-sm ${errMsg?.status == "failed"
//                                             ? "text-[#f64949fe]"
//                                             : "text-[#2ba150fe]"
//                                             } mt-0.5`}>
//                                         {errMsg?.message}
//                                     </span>
//                                 )
//                             }

//                             <form onSubmit={handleSubmit}>
//                                 <input onChange={(e) => setName(e.target.value)}></input>
//                                 <button
//                                     className="inline-flex font-bold rounded-full bg-[#B9C9DF] overflow-hidden px-8 py-3 text-sm justify-center"

//                                 >Submit</button>
//                             </form>

//                             {/* <p className='text-ascent-2 text-sm text-center'>
//                                 Don't have an account?
//                                 <Link
//                                     to='/register'
//                                     className='text-[#7699C8] font-semibold ml-2 cursor-pointer'
//                                 >
//                                     Create Account
//                                 </Link>
//                             </p> */}

//                         </form>
//                     </div>
//                 </div>
//             </div >
//         </BrowserRouter >
//     );

// };

// export default Register;