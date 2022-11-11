import React, { useState } from 'react'


const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({name:'', email:'', comment: ''}) /*key value pair*/
   const [formErrors, setFormErrors] = useState ({}) /*vi kan lägga in vad det ska stå i error meddelandet*/
    const [submitted, setSubmitted] = useState(false) 

    const validate =(values) => { /* Den funktionen vill jag köra när jag submitar mitt formulär*/
        const errors = {}
        const regex_email =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

       if(!values.name)
       errors.name = "You must enter a name"

       if(!values.email)
       errors.email = "You must enter an e-mail address"
       else if(!regex_email.test(values.email))
       errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

       if(!values.comment)
       errors.comment = "You must enter a comment"
       else if(values.comment.length < 5)
       errors.comment = "Your comment must be longer then five characters"

       if(Object.keys(errors).length === 0) /*om den är tom alltså ej innehåller några nycklar*/
       setSubmitted(true)
       else
       setSubmitted(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm ({...contactForm, [id]: value}) /*"spread"...den sprider ut med de tre prickarna operator hämtar ut informationen som jag redan matat in */
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

  return (
    <section className="contact-form">
        <div className="container">
           {
            submitted ? 
            (<div className="d-flex justify-content-center- align-items-center">
                <div>Thank you for your comment.</div>
            </div>)
            :
            (
                <>
                 <h2>Come in Contact with Us</h2>
            <pre>{JSON.stringify(formErrors)}</pre>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                    <div className="errorMessage">{formErrors.name}</div>
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                    <div className="errorMessage">{formErrors.email}</div>
                </div>
                <div className="textarea">
                    <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                    <div className="errorMessage">{formErrors.comment}</div>
                </div>
                <div className="formBtn">
                    <button type="submit" className="btn-theme">Post Comments</button>
                </div>
            </form>
                </>
            )
           }
        </div>
    </section>
  )
}

export default ContactFormSection