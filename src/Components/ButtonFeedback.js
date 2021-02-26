import s from "./ButtonFeedback.module.scss";

const ButtonFeedback = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <div>
      <button className={s.buttonGood} onClick={onClickGood}>
        Good
      </button>
      <button className={s.buttonNeutral} onClick={onClickNeutral}>
        Neutral
      </button>
      <button className={s.buttonBad} onClick={onClickBad}>
        Bad
      </button>
    </div>
  );
};

export default ButtonFeedback;
