/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {useState,useEffect} from 'react';
import validate from './validateInfo'

const useForm=(submitForm:any,validate:any)=> {
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        confirm_password:''
    });
    const [errors,setErrors] = useState({
        validate
    });

    const [isSubmitting,setisSubmitting] = useState(false);

    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit =(e:any)=>{
        e.preventDefault();

        setErrors(validate(values));
        setisSubmitting(true);
    }
    return {handleChange,values,handleSubmit,errors}
}

export default useForm;