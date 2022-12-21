const InfoWrapper = (props) => {

  return (
    <div className="footer__contact__info__wrapper">
      <ul className="footer__contact__info__ul">
        <li className="footer__contact__info__li">
          <h3 className="footer__contact__info__h3">{props.info__h3__1}</h3>
          <p className="footer__contact__info__p">{props.info__p__1}</p>
        </li>
        <li className="footer__contact__info__li">
          <h3 className="footer__contact__info__h3">{props.info__h3__2}</h3>
          <p className="footer__contact__info__p">{props.info__p__2}</p>
        </li>
        <li className="footer__contact__info__li">
          <h3 className="footer__contact__info__h3">{props.info__h3__3}</h3>
          <p className="footer__contact__info__p">{props.info__p__3}</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoWrapper;
