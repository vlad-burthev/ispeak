import Container from "../../UI/Container/Container";
import style from "./FirstScreen.module.scss";

const FirstScreen = () => {
  return (
    <div className={style.firstScreen}>
      <Container>
        <section className={style.section}>
          <h1 className={style.title}>
            Уроки англійської в онлайн-школі iSpeak
          </h1>
          <p className={style.subTitle}>
            Допомагаємо заговорити англійською та впевнено використовувати її в
            житті
          </p>
          <a href="#form" className={style.frame}>
            Записатись на - Безкоштовне заняття !
            <span className={style.fullPrice}>
              Вартість заняття 290грн/година
            </span>
          </a>
        </section>
      </Container>
    </div>
  );
};

export default FirstScreen;
