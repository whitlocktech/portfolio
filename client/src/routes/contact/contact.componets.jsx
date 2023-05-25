import './contact.styles.scss'
import ContactForm from '../../components/contact-form/contact-form.components'

const Contact = () => { 

  return (

    <div className="contact">
      <h1 className='contactTitle'> Contact Me</h1>
      <p className='contactBody'>For information or question please submit this form or email me at <a href='mailto:colby@whitlocktech.net' className='listedEmail'>colby@whitlocktech.net</a></p>
      <ContactForm />
    </div>

  )
}

export default Contact