const ContactHeader = () => {
  return (
    <form action="" className="contact__form">
      <div className="row">
        <div className="input__wrapper">
          <input type="text" id="name" className="input row" required />
          <label htmlFor="name">
            <i className="fa-regular fa-user"></i> Naam
          </label>
        </div>
        <div className="input__wrapper">
          <input type="text" id="lastName" className="input row" required />
          <label htmlFor="lastName">
            <i className="fa-regular fa-user"></i> Achternaam
          </label>
        </div>

        <div className="input__wrapper">
          <input type="text" id="email" className="input" required />
          <label htmlFor="email">
            <i className="fa-regular fa-envelope"></i> Email
          </label>
        </div>
      </div>

      <div className="input__wrapper bericht__wrapper">
        <textarea
          name=""
          id="bericht"
          className="textarea"
          rows="8"
          required
        ></textarea>
        <label htmlFor="bericht" className="bericht">
          <i className="fa-regular fa-comments"></i> Bericht
        </label>
      </div>
    </form>
  );
};

export default ContactHeader;
