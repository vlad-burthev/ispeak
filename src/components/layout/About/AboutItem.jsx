import style from "./About.module.scss";

const AboutItem = ({ info, title, img, ...props }) => {
  return (
    <div {...props} className={style.item}>
      <img src={img} alt="" />
      <div className={style.info}>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default AboutItem;
