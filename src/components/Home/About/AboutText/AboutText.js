// import AnimatedText from 'react-animated-text-content';
const AboutText = (props) => {

  return (
    <article className="about__rightside" >
      <div className={"about__rightside__container "+ props.className}>
        <p className="about__rightside__p ">
          {props.AboutTextP || "Kleine uitleg over mij"}
        </p>
      </div>
    </article>
  );
};

export default AboutText;
