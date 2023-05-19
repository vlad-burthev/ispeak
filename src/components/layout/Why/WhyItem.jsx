import style from "./Why.module.scss";

const WhyItem = ({ title, info }) => {
  return (
    <div className={style.item}>
      <div className={style["item-title"]}>{title}</div>
      <div className={style["item-info"]}>{info}</div>
    </div>
  );
};

export default WhyItem;
