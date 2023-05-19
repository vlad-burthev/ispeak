import Container from "../../UI/Container/Container";
import style from "./Study.module.scss";
import StudyItem from "./StudyItem";

const Study = () => {
  return (
    <div className={style.study}>
      <Container>
        <section className={style.section}>
          <h2>Рівні навчання англійської мови</h2>
          <div className={style.content}>
            <StudyItem
              title="Begginer"
              info="Рівень для початківців, які можуть розуміти та використовувати базові вирази та фрази, що пов'язані з повсякденним життям."
            />
            <StudyItem
              title="Elementary"
              info="Рівень, на якому людина може спілкуватися в простих ситуаціях, розуміти прості тексти та висловлювати свої думки на простому рівні."
            />
            <StudyItem
              title="Pre-Intermediate"
              info="Рівень, на якому людина може розуміти та використовувати складніші вирази, розуміти основний зміст тексти та статей, висловлювати свої думки та ідеї, вести прості бесіди та спілкуватися з носіями мови."
            />
            <StudyItem
              title="Intermediate"
              info="Рівень, на якому людина може розуміти та використовувати складніші тексти, активно вести бесіди з носіями мови, висловлювати свої думки та ідеї на різні теми."
            />
            <StudyItem
              title="Upper-Intermediate"
              info="Рівень, на якому людина може легко розуміти та використовувати складні тексти, вести бесіди на будь-які теми, розуміти відтінки значень слів та висловлювати свої думки досить виразно та аргументовано."
            />
            <StudyItem
              title="Advanced"
              info="Рівень для тих, хто володіє мовою майже на рівні носія мови. Людина може розуміти будь-які тексти та мовлення, вести складні бесіди на будь-які теми."
            />
          </div>
          <a href="#form" className={style.btn}>
            Покращити рівень англійської
          </a>
        </section>
      </Container>
    </div>
  );
};

export default Study;
