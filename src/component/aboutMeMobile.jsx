import '../css/aboutme.css'

const AboutMeMobile = () => {
    return (
        <div className='about-me-container'>
            <h3 className="section-title-small">About Me</h3>
            <h6 className="about-subtitle">Welcome to She Sculpts Sanctuary</h6>
            <div className="about-image-wrapper">
                <img src='/bg2.jpg' alt="Michelle L'enchengo" />
            </div>
            <div className="about-content">
                <h4 className="about-heading">Your Fitness Partner</h4>
                <p>
                    I'm here to guide your fitness adventure with passion and expertise.
                    From building strength to boosting energy, I create tailored plans that fit your unique lifestyle.
                    My own journey started with a spark, and I'm dedicated to igniting that same fire in you.
                </p>

                <h4 className="about-heading">Why Choose Me?</h4>
                <p>
                    Beyond the workout, I'm your biggest supporter.
                    I'm here to celebrate every milestone, conquer every challenge,
                    and help you become the best version of yourself.
                </p>

                <div className="about-signature">
                    <p>To your health,</p>
                    <span className="signature">Michelle L'enchengo</span>
                </div>
            </div>
        </div>
    )
}

export default AboutMeMobile