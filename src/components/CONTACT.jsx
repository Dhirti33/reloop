import "../styles/CONTACT.css"
import mail from "../images/reloopMail.png"
import phone from "../images/reloopCall.png"

const Contact = () => {

    return(
        <section className="contactContainer">
            <div className="contactText">
                <div className="contactTop">
                    <h2 className="contactHead">Contact Us</h2>
                    <div className="contactDesc">We&apos;re here to help you take the next step in your sustainability journey. Whether you’re seeking more information about our services, have specific inquiries, or want to explore collaboration opportunities, our team is ready to assist. Reach out today, and let’s build a sustainable future together</div>
                </div>
                <div className="contactBottom">
                    <div className="contactEmail contact">
                        <div className="icon">
                            <img src={mail} alt="" />
                        </div>
                        <div className="email">lomokodesmond@gmail.com</div>
                    </div>
                    <div className="contactPhone contact">
                        <div className="icon">
                            <img src={phone} alt="" />
                        </div>
                        <div className="phone">+233 54 834 1442</div>
                    </div>
                </div>
            </div>
            <form action="" className="contactForm">
                <label htmlFor="" className="formText">We&apos;d love to hear from you! Let&apos;s get in touch</label>
                <input type="text" className="fullName" placeholder="Full Name" required />
                <input type="text" className="company" placeholder="Company" />
                <input type="email" className="email" placeholder="Email(example@gmail.com)" required />
                <input type="text" className="phone" placeholder="Your Phone Number" required />
                <input type="text" className="address" placeholder="Address" required/>
                <textarea className="message" placeholder="Your Message" required></textarea>
                <button id="submit" type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;