import React from 'react';
import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
  const [state, handleSubmit] = useForm("mzbolprv");
  if (state.succeeded) {
      return (<div className='answer-box'>
        <p className='answer'>Thanks for joining!</p>;
        </div>)
  }
  return (
      <form className='form' onSubmit={handleSubmit} >
      <label className='label' htmlFor="email">
        Email Address
      </label>
      <input className='inputForm'
        id="email"
        type="email" 
        name="email"
        required='required'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className='label' htmlFor="email">
        Your Message
      </label>
      <textarea className='textarea'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn-submit' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    
  );
}
function MyForm() {
  return (
    <ContactForm />
  );
}
export default MyForm;
