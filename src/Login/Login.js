import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        setState(data);
        console.log(state);
    };
    console.log("렌더링");

    return (
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <input name="email" placeholder="Enger email" ref={register}/>

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    ref={register({ required: true })}
                />
                <input type="submit"/>
            </form>
    )
}

export default Login;