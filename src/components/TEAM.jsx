import "../styles/TEAM.css"
import team from "../images/team.jpg"
import team2 from "../images/team2.jpg"
import team3 from "../images/team3.jpg"
import team4 from "../images/team4.jpg"
import team5 from "../images/team5.jpg"
import team6 from "../images/team6.jpg"



const Team = () => {

    return (
        <section className="teamContainer">
            <div className="teamHead">Our experts at RELOOP Innovatives are the driving force behind transforming waste into value. Partner with us to unlock the potential of your waste stream and achieve your sustainability goals.</div>
            <div className="teamGrid">
                <div className="team">
                    <div className="teamImg">
                            <img src={team} alt="" />
                    </div>
                    <div className="teamInfo">
                        <div className="teamName">Owuahene Agyeman</div>
                        <div className="teamPosition">Product Designer</div>
                        <div className="teamSocial">
                            <i className="devicon-twitter-plain"></i>
                            <i className="devicon-linkedin-plain"></i>
                            <i className="devicon-facebook-plain"></i>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamImg">
                            <img src={team2} alt="" />
                    </div>
                    <div className="teamInfo">
                        <div className="teamName">Cypher Don</div>
                        <div className="teamPosition">Circular Economy Experts</div>
                        <div className="teamSocial">
                            <i className="devicon-twitter-plain"></i>
                            <i className="devicon-linkedin-plain"></i>
                            <i className="devicon-facebook-plain"></i>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamImg">
                            <img src={team3} alt="" />
                    </div>
                    <div className="teamInfo">
                        <div className="teamName">Adwoa Enerstina</div>
                        <div className="teamPosition">Material Scientists</div>
                        <div className="teamSocial">
                            <i className="devicon-twitter-plain"></i>
                            <i className="devicon-linkedin-plain"></i>
                            <i className="devicon-facebook-plain"></i>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamImg">
                            <img src={team4} alt="" />
                    </div>
                    <div className="teamInfo">
                        <div className="teamName">Strike Free</div>
                        <div className="teamPosition">Process Engineers</div>
                        <div className="teamSocial">
                            <i className="devicon-twitter-plain"></i>
                            <i className="devicon-linkedin-plain"></i>
                            <i className="devicon-facebook-plain"></i>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamImg">
                            <img src={team5} alt="" />
                    </div>
                    <div className="teamInfo">
                        <div className="teamName">Abena Gyamfuah </div>
                        <div className="teamPosition">Environmental Scientists</div>
                        <div className="teamSocial">
                            <i className="devicon-twitter-plain"></i>
                            <i className="devicon-linkedin-plain"></i>
                            <i className="devicon-facebook-plain"></i>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <div className="teamImg">
                            <img src={team6} alt="" />
                    </div>
                    <div className="teamInfo">
                        <div className="teamName">Street Pryst</div>
                        <div className="teamPosition">IT Specialists</div>
                        <div className="teamSocial">
                            <i className="devicon-twitter-plain"></i>
                            <i className="devicon-linkedin-plain"></i>
                            <i className="devicon-facebook-plain"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;