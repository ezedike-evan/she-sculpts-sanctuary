import '../css/footer.css'

import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>She Sculpts Sanctuary</h3>
                    <p>Empowering women through fitness, one rep at a time. Join our community and transform your life.</p>
                </div>

                <div className="footer-socials">
                    <h4>Connect With Me</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} She Sculpts Sanctuary. All rights reserved.</p>
                <p>Designed with ❤️ for Fitness.</p>
            </div>
        </footer>
    );
}

export default Footer;
