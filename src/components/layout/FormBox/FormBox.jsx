import axios from "axios";
import { useState } from "react";
import Container from "../../UI/Container/Container";
import style from "./FormBox.module.scss";

const FormBox = () => {
  const [changeName, setChangeName] = useState("");
  const [changePhone, setChangePhone] = useState("");
  const [changeEmail, setChangeEmail] = useState("");

  const mail = `Телефон: ${changePhone}, Имя: ${changeName}, Email: ${changeEmail}`;

  const onSubmit = (event) => {
    event.preventDefault();
    setChangeName("");
    setChangePhone("");
    setChangeEmail("");
  };

  const token = "6029871288:AAHiFFWL2in4QUbtD01MRkKAC5vh65Dz8cs";
  const chat_id = "-1001690624449";

  return (
    <div className={style.formBox} id="form">
      <Container>
        <section className={style.section}>
          <h2>Почніть навчатися вже зараз</h2>
          <p>Заповніть форму</p>

          <div className={style.content}>
            <form onSubmit={onSubmit}>
              <h2>Введіть свої контактні дані</h2>

              <div>
                <input
                  minlength="1"
                  type="text"
                  placeholder="Ім'я"
                  value={changeName}
                  onChange={(e) => setChangeName(e.target.value)}
                />
                <input
                  minlength="9"
                  type="number"
                  placeholder="Номер телефону"
                  value={changePhone}
                  onChange={(e) => setChangePhone(e.target.value)}
                />
              </div>

              <input
                minlength="6"
                type="email"
                placeholder="Електронна пошта"
                value={changeEmail}
                onChange={(e) => setChangeEmail(e.target.value)}
              />

              <button
                type="submit"
                className="SubmitButton"
                onClick={async () => {
                  try {
                    await axios({
                      url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${mail}`,
                      headers: {
                        "Content-type": "application/json",
                      },
                      params: {
                        field: "",
                      },
                      method: "GET",
                      data: null,
                    }).then(({ data }) => {
                      return data;
                    });
                  } catch (e) {
                    console.log("Sending error", e);
                  }
                }}
              >
                Відправити
              </button>
            </form>
            <div className={style.description}>
              <h2>Наступний крок</h2>
              <div>
                <p>Вам зателефонує наш менеджр</p>
                <p>Підбираємо розклад та викладача</p>
                <p>Обговорюємо цілі навчання та план занять</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default FormBox;
