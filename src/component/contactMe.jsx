/* eslint-disable react/no-unescaped-entities */
import '../css/contactMe.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
const ContactMe = () => {
    return (
        <section id="contact" className="contact-container">
            <div className="contact-info">
                <h3>Michelle L'enchengo</h3>
                <h4>Expert Fitness Coach</h4>
                <div className="contact-details">
                    <p>Online Coaching / Global</p>
                    <p>contact@shesculptssanctuary.com</p>
                </div>
                <div className='socials-contact'>
                    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram /></a>
                </div>
            </div>
            <div className="contact-form-wrapper">
                <h3>Get In Touch</h3>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name *</label>
                        <input type="text" id="firstname" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name *</label>
                        <input type="text" id="lastname" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder='How can I help you?' rows="4"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactMe