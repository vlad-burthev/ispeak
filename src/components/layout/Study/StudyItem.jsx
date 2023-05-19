import style from "./Study.module.scss";

const StudyItem = ({ title, info }) => {
  return (
    <div className={style.item}>
      <div className={style["item-title"]}>{title}</div>
      <div className={style["item-info"]}>{info}</div>
    </div>
  );
};

export default StudyItem;
