import React from 'react';
import pic6 from '../images/img-2.svg';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={pic6} alt='success-image' />
    </div>
  );
};
export default FormSuccess;