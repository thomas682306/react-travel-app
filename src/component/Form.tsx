import React,{useState} from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';
import pic9 from '../images/img-1.svg';
import pic8 from '../images/img-2.jpg';
import pic7 from '../images/img-7.jpg';
import pic6 from '../images/img-6.jpg';
import pic5 from '../images/img-5.jpg';
import './Form.css'

function Form() {
    const [isSubmitting,setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>

       <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={pic9} alt='spaceship' />
        </div>
        {!isSubmitting ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
    );
}

export default Form;