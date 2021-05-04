import React from 'react';
import useForm from './useForm';
import './Form.css'
import validate from './validateInfo';
function FormSignUp({submitForm}:any) {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm, validate);
    const obj:any = errors;
    return (
        <>
            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Get Started with us today! Create yout account by filling out the information below</h1>
                    
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                    <input id="username" type="text" name="username" className="form-input" onChange={handleChange} value={values.username} placeholder="Enter your username" />
                    {obj.username &&<p>{obj.username}</p>}
                    </div>

                    <div className="form-inputs">
                        <label htmlFor="email" className="form-label">
                        Email
                        </label>
                    <input id='email' type="email" name="email" className="form-input" onChange={handleChange} value={values.email} placeholder="Enter your email" />
                        {obj.email &&<p>{obj.email}</p>}

                    </div>

                    <div className="form-inputs">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                    <input id="password" type="password" name="password" className="form-input" onChange={handleChange} value={values.password} placeholder="Enter your password" />
                        {obj.password &&<p>{obj.password}</p>}

                    </div>

                    <div className="form-inputs">
                        <label htmlFor="confirm-password" className="form-label">
                        Confirm Password
                        </label>
                    <input id='confirm-password' type="password" name="confirm_password" className="form-input" onChange={handleChange} value={values.confirm_password} placeholder="Enter your password" />
                    {obj.confirm_password &&<p>{obj.confirm_password}</p>}

                    </div>
                    
                        <button type='submit' className="form-input-btn">Sign Up</button>
                        <span className="form-input-login">Already have an account ? Log in <a href="#"> here</a></span>
                </form>
            </div>
        </>
    );
}

export default FormSignUp;