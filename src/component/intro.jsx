/* eslint-disable react/no-unescaped-entities */
import '../css/intro.css'
const Intro = () => {
    return (
        <section className='intro-container'>
            <div className='intro-inner-container'>
                <h1>
                    SCULPT YOUR <br />
                    <span className="highlight-text">SANCTUARY</span>
                </h1>
                <p className="intro-subtitle">
                    Transform your body and mind with personalized online coaching.
                    Finding strength, balance, and confidence starts here.
                </p>
                <p className="coach-name">Michelle L'enchengo — Your Online Fitness Coach</p>
                <div className='intro-btn'>
                    <button className="primary-btn">Get Started</button>
                    <a href="#workout"><button className="secondary-btn">View Programs</button></a>
                </div>
            </div>
        </section>
    )
}

export default Intro