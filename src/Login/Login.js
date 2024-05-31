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
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" {...register} />
        <input type="password" name="password" {...register} />
        <button type="submit">로그인</button>
      </form>
    )
}

export default Login;