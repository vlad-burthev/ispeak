import Container from "../../UI/Container/Container";
import style from "./Header.module.scss";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <section className={style.section}>
          <a href="/" className={style.logo}>
            <img src="./img/logo/logo.png" alt="logo" />
            <span>iSpeak</span>
          </a>

          <HeaderNav />
        </section>
      </Container>
    </header>
  );
};

export default Header;
