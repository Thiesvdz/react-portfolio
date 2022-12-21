const ContactHeader = () => {
  return (
    <header className="contact__header">
      <h1 className="contact__h1">Neem contact op</h1>
      <ul className="contact__ul">
        <li className="contact__li">
          <i className="contact__icon fa-solid fa-phone"></i>Telefoon: 06 12 34
          56 78
        </li>
        <li className="contact__li">
          <i className="contact__icon fa-regular fa-envelope"></i>Email:
          <a
            className="contact__email"
            href="mailto: thiesvanderzon@gmail.com"
            target="__blank"
          >
            {" "}
            thiesvanderzon@gmail.com
          </a>
        </li>
      </ul>
    </header>
  );
};

export default ContactHeader;
