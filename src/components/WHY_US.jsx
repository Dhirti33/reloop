import "../styles/WHY_US.css"
import one from "../images/one.png"
import two from "../images/two.png"
import three from "../images/three.png"
import four from "../images/four.png"


const WhyUs = () => {
    return(
        <section className="whyContainer">
            <div className="whyHead">Why Us</div>
            <div className="whyGrid">
                <div className="why">
                    <div className="whyTop">
                        <div className="number">
                            <img src={one} alt="" />
                        </div>
                        <div className="whytext">Innovative Solutions</div>
                    </div>
                    <div className="whyBottom">
                        <div className="whyDesc">Our cutting-edge technologies and methodologies are designed to seamlessly integrate with your operations, transforming waste into valuable assets and enhancing your sustainability efforts.</div>
                    </div>
                </div>
                <div className="why">
                    <div className="whyTop">
                        <div className="number">
                            <img src={two} alt="" />
                        </div>
                        <div className="whytext">Sustainability Commitment</div>
                    </div>
                    <div className="whyBottom">
                        <div className="whyDesc">We are passionate about the environment, and our solutions are rooted in a deep commitment to conserving resources, reducing waste, and promoting the reuse of materials.</div>
                    </div>
                </div><div className="why">
                    <div className="whyTop">
                        <div className="number">
                            <img src={three} alt="" />
                        </div>
                        <div className="whytext">Proven Results</div>
                    </div>
                    <div className="whyBottom">
                        <div className="whyDesc">Our proven track record in delivering impactful, sustainable solutions has earned us the trust of businesses worldwide. We combine innovation with practicality to achieve measurable results</div>
                    </div>
                </div><div className="why">
                    <div className="whyTop">
                        <div className="number">
                            <img src={four} alt="" />
                        </div>
                        <div className="whytext">Collaborative Approach</div>
                    </div>
                    <div className="whyBottom">
                        <div className="whyDesc">We work hand-in-hand with our clients, understanding their unique challenges and providing tailored solutions that deliver real value. Your success is our success.</div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default WhyUs;