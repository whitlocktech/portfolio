import { useState } from 'react'

import './contact-form.styles.scss'

import FormInput from '../form-input/form-input.components'

const defaultFormFields = {
  name: '',
  email: '',
  message: ''
}

const ContactForm = () => { 
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, message } = formFields

  const resetFormFields = () => { 
    setFormFields(defaultFormFields)
  }

  const handleSubmit = (event) => { 
    event.preventDefault()

    try {
      // make this an emailer form
    } catch (error) {
      alert('There was an error sending the contact form',error)
    }
  }
  const handleChange = (event) => { 
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div className="contact-form">
      <h1 className='contact-form'>Contact</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Message'
          type='text'
          required
          onChange={handleChange}
          name='message'
          value={message}
        />
        <div className='buttons'>
          <button type='submit'>Submit</button>
          <button type='button' onClick={resetFormFields}>Reset</button>
        </div>
      </form>
    </div>
  )
}
