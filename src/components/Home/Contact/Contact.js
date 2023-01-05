import "./Contact.css"
import ContactHeader from "./ContactSecties/ContactHeader"
import ContactForm from "./ContactSecties/ContactForm"

const Contact = () => {
    return ( 
        <section className="contact__section" id="Contact">
            <ContactHeader/>
            <ContactForm/>
            <div className="btn__wrapper">
                <button className="contact__btn">verstuur bericht</button>
            </div>
        </section>
    );
}
 
export default Contact;