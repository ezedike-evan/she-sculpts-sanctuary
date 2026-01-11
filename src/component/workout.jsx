import '../css/workout.css'

const WorkOut = () => {
    return (
        <section id='workout' className='workout-container'>
            <div className='workout-inner-container'>
                <h3 className="section-title">
                    CHOOSE YOUR<br />
                    <span>ONLINE WORKOUT</span>
                </h3>
                <p className="section-subtitle">
                    Transform your body from the comfort of your home.
                    Choose a program that fits your goals and let's start sculpting
                    the best version of you today.
                </p>
                <div className='workout-cards'>
                    <div className="workout-card">
                        <h4>Strength & Sculpt</h4>
                        <p>Build lean muscle and define your physique with targeted resistance training designed for all levels.</p>
                    </div>
                    <div className="workout-card">
                        <h4>HIIT Burn</h4>
                        <p>High-energy cardio sessions to boost metabolism, torch calories, and improve cardiovascular health.</p>
                    </div>
                    <div className="workout-card">
                        <h4>Core & Stability</h4>
                        <p>Strengthen your powerhouse for better posture, balance, and a defined midsection.</p>
                    </div>
                    <div className="workout-card">
                        <h4>Mobility Flow</h4>
                        <p>Improve flexibility and recovery with yoga-inspired movements to keep your body moving pain-free.</p>
                    </div>
                </div>
                <button className="cta-button">BOOK NOW</button>
            </div>
        </section>
    )
}

export default WorkOut