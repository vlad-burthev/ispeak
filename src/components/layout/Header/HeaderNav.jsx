import style from "./HeaderNav.module.scss";

const HeaderNav = () => {
  const windowWidth = window.innerWidth;

  return (
    <div className={style.header__nav}>
      <a href="/#about">Про Нас</a>
      <a href="/#form">Записатись</a>
      <a href="tel: +380968508500">
        {" "}
        {windowWidth > 768 ? (
          "+380968508500"
        ) : (
          <img src="./img/logo/phone.png" alt="phone" style={{ width: 25 }} />
        )}
      </a>
    </div>
  );
};

export default HeaderNav;
