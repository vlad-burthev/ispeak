import Container from "../../UI/Container/Container";
import style from "./Why.module.scss";
import WhyItem from "./WhyItem";

const Why = () => {
  return (
    <div className={style.why}>
      <Container>
        <section className={style.section}>
          <h2>Чому саме iSpeak ?</h2>

          <div className={style.content}>
            <WhyItem
              title="Всі матеріали в одному місці"
              info="Більше не потрібні зошити, підручники і словники. Всі уроки та інтерактивні д / з на платформі."
            />
            <WhyItem
              title="Заняття з будь-якого пристрою"
              info="Виконуйте вправи з будь-якого пристрою в будь-який зручний час, потрібний тільки інтернет"
            />
            <WhyItem
              title="Інтерактивні вправи"
              info="Більше 30 видів закріплення нового матеріалу і захоплююча подача нового."
            />
            <WhyItem
              title="Адаптивна програма"
              info="Більше 1000 написаних уроків і можливість комбінувати уроки так, як цікаво тобі. Загальна англійська + Бізнес + Подорожі."
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Why;
