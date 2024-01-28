'use client'
import React, { useState } from 'react'
import Button from "react"
import { register } from "module";
import { BrowserRouter, Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import TextInput from "@/components/TextInput"


const Register = () => {
    const {
        register,
        formState: { errors },
    } = useForm(
        {
            mode: "onChange",
        }
    )

    const onSubmit = async (data) => {

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //e.preventDefault()
    }

    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState("false");

    return (
        <BrowserRouter>
            <div className='bg-bgcolor w-full h-[100vh] flex items-center justify-center p-6'>
                <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl">
                    <div className='w-full lg: w=1/2 h-full p-10 2xl:px-20 flex flex-col justify-center'>
                        <div className='w-full flex gap-2 items-center mb-6'>
                        </div>
                        <p className='text-ascent-1 text-base font-semibold'>
                            Create an Account
                        </p>
                        <span className='text-sm mt-2 text-ascent-2'>Enter your email address and Password Below:</span>
                        <form className='py-8 flex flex-col gap-5'
                            onSubmit={handleSubmit(onSubmit)}>
                            <TextInput
                                name='email'
                                placeholder='email@ucdavis.edu'
                                label='Email Address'
                                type='email'
                                register={register("email", {
                                    required: "Email Address is required"
                                })}
                                styles='w-full rounded-full'
                                labelStyle='ml-2'
                                error={errors.email ? errors.email.message : ""}
                            />

                            <TextInput
                                name='password'
                                label='Password'
                                placeholder='Password'
                                type='password'
                                styles='w-full rounded-full'
                                labelStyle='ml-2'
                                register={register("password", {
                                    required: "Password is required!"
                                })}
                                error={errors.password ? errors.password?.message : ""}
                            />

                            <Link
                                to="/reset-password"
                                className="text-sm text-right text-blue font-semibold">
                                Forgot Password? </Link>

                            {
                                errMsg?.message && (
                                    <span
                                        className={`text-sm ${errMsg?.status == "failed"
                                            ? "text-[#f64949fe]"
                                            : "text-[#2ba150fe]"
                                            } mt-0.5`}>
                                        {errMsg?.message}
                                    </span>
                                )
                            }

                            <form onSubmit={handleSubmit}>
                                <input onChange={(e) => setName(e.target.value)}></input>
                                <button
                                    className="inline-flex font-bold rounded-full bg-[#B9C9DF] overflow-hidden px-8 py-3 text-sm justify-center"

                                >Submit</button>
                            </form>

                            <p className='text-ascent-2 text-sm text-center'>
                                Don't have an account?
                                <Link
                                    to='/register'
                                    className='text-[#7699C8] font-semibold ml-2 cursor-pointer'
                                >
                                    Create Account
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div >
        </BrowserRouter >
    );

};

export default Register;