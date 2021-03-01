import s from "./ButtonFeedback.module.scss";

const ButtonFeedback = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <div>
      <button className={s.buttonGood} onClick={onClickGood} name="good">
        Good
      </button>
      <button
        className={s.buttonNeutral}
        onClick={onClickNeutral}
        name="neutral"
      >
        Neutral
      </button>
      <button className={s.buttonBad} onClick={onClickBad} name="bad">
        Bad
      </button>
    </div>
  );
};

export default ButtonFeedback;
