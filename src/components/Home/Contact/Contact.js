import "./Contact.css"

const Contact = () => {
    return ( 
        <section className="contact__section">
            <form action="" className="contact__form">
                <div className="row">
                    <div className="input__wrapper">
                        <input type="text" id="name" className="input row" required/>
                        <label htmlFor="name"><i class="fa-regular fa-user"></i> Naam</label>
                    </div>
                    <div className="input__wrapper">
                    <input type="text" id="lastName" className="input row" required/>
                        <label htmlFor="lastName"><i class="fa-regular fa-user"></i> Achternaam</label>
                    </div>
                </div>
                <div className="input__wrapper">
                    <input type="text" id="email" className="input" required/>
                    <label htmlFor="email"><i class="fa-regular fa-envelope"></i> Email</label>
                </div>
                <div className="input__wrapper">
                    <textarea name="" id="bericht" className="textarea" rows="8" required></textarea>
                    <label htmlFor="bericht"><i class="fa-regular fa-comments"></i> Bericht</label>
                </div>
                <div className="btn__wrapper">
                    <button className="contact__btn">VERSTUREN</button>
                </div>
            </form>
        </section>
    );
}
 
export default Contact;