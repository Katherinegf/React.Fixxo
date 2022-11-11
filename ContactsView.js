import React from 'react'
import Breadcrumb from '../sections/Breadcrumb'
import ContactForm from '../sections/ContactForm'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenu from '../sections/MainMenu'
import MapSection from '../sections/MapSection'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'
  return (
    <>
        <MainMenu /> 
        <Breadcrumb currentPage="Contact"/> 
        <MapSection /> 
        <ContactFormSection />
        <ContactForm />
        <FooterSection /> 
    </>
  )
}

export default ContactsView