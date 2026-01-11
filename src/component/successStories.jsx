/* eslint-disable react/no-unescaped-entities */
import '../css/sucessstories.css'
const SuccessStories = () => {
    return (
        <div id='stories' className="stories-container">
            <h2 className="stories-title">Success Stories</h2>
            <div className="stories-grid">
                <div className="story-card">
                    <p className="story-quote">"In just 6 months of training with Michelle, I lost 38 pounds and discovered a love for lifting I never knew I had."</p>
                    <div className="story-author">
                        <h5>JACKIE M.</h5>
                        <sub>January 2024</sub>
                    </div>
                </div>
                <div className="story-card">
                    <p className="story-quote">"Reaching my goal of 22% body fat was so easy with the customized nutrition plan. Michelle makes it simple."</p>
                    <div className="story-author">
                        <h5>CARRIE S.</h5>
                        <sub>February 2024</sub>
                    </div>
                </div>
                <div className="story-card">
                    <p className="story-quote">"I crossed the finish line on my first marathon thanks to the endurance training. Best coach ever!"</p>
                    <div className="story-author">
                        <h5>IRIS P.</h5>
                        <sub>April 2024</sub>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessStories