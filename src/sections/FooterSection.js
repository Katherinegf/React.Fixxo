import React from 'react'
import ExternalLinkicon from '../components/ExternalLinkicon'


const FooterSection = () => {
  return (
    <footer>
        <div className="socialmedia">
          <ExternalLinkicon link="https://facebook.com" icon="fa-brands fa-facebook-f"/>
          <ExternalLinkicon link="https://instagram.com" icon="fa-brands fa-instagram"/>
          <ExternalLinkicon link="https://twitter.com" icon="fa-brands fa-twitter"/>
          <ExternalLinkicon link="https://google.com" icon="fa-brands fa-google"/>
          <ExternalLinkicon link="https://facebook.com" icon="fa-brands fa-linkedin"/>
        </div>
        <div>&copy; 2022 Fixxo. All Rights Reserved.</div>
    </footer>
  )
}

export default FooterSection