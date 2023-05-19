import Container from "../../UI/Container/Container";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Container>
        <div>
          iSpeak - молоді та талановиті фахівці, які знають, як взаємодіяти з
          дітьми! Ми знаходимося на одній хвилі з нашими юними учнями та вміємо
          підходити до кожного !
        </div>
      </Container>
    </div>
  );
};

export default Footer;
