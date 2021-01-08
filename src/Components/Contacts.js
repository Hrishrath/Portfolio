import React from 'react'

const Contacts = () => {
  return (
    <div className="container cont" id = "section8">
    <div className = "row ">
    <div className="col-lg-12 col-md-12">
       <h1>CONTACTS</h1>
    </div>
    </div>
    <div className="row mb-10 animation-translate animation-item-2">
    <div className="col-12 col-md-4">
        <div className="contact">
            <h3 className="contact-label">Stay in touch</h3>
            <a href="mailto:john@wilson.com">john@wilson.com</a><br/>
            <a href="tel:+420652887351">+420 652 887 351</a>
        </div>
    </div>
    <div className="col-12 col-md-4">
        <div className="contact">
            <h3 className="contact-label">Social</h3>
            <a href="https://www.facebook.com">Facebook</a><br/>
            <a href="https://www.linked.com">LinekdIn</a><br/>
            <a href="https://www.twitter.com">Twitter</a>
        </div>
    </div>
    <div className="col-12 col-md-4">
        <div className="contact">
            <h3 className="contact-label">Address</h3>
           <p> 1234 Houston Street<br/>
            New York<br/>
            NY 123456<br/>
            </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Contacts
