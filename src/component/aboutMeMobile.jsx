import '../css/aboutme.css'

const AboutMeMobile = () => {
    return (
        <div className='about-me-container'>
            <h3 className="section-title-small">About Me</h3>
            <h6 className="about-subtitle">Welcome to She Sculpts Sanctuary</h6>
            <div className="about-image-wrapper">
                <img src='/me.jpg' alt="Michelle L'enchengo" />
            </div>
            <div className="about-content">
                <h4 className="about-heading">Your Partner for Fitness Success</h4>
                <p>
                    Hello! I'm here to guide you through your fitness adventure. With a deep passion for wellness,
                    I'm committed to helping you reach your goals. My own fitness journey began with a spark,
                    and now I'm dedicated to helping you ignite that same fire within yourself.
                </p>

                <h4 className="about-heading">What I Offer</h4>
                <p>
                    I specialize in creating tailored fitness plans that suit your unique lifestyle.
                    Whether you're looking to build strength, lose weight, or boost your energy,
                    together we'll craft a plan that works for you.
                </p>

                <h4 className="about-heading">Why Choose Me?</h4>
                <p>
                    I bring expertise to every session, but beyond that, I'm your biggest supporter.
                    I'm here to celebrate every milestone and help you conquer every challenge.
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