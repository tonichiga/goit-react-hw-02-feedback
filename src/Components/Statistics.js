const Statistics = ({ good, neutral, bad, title }) => (
  <div>
    <h2>{title}</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
  </div>
);

export default Statistics;
