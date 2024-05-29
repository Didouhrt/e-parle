import './StatisticCard.css'
const StatisticCard = ({ icon, end, title }) => {
  return (
    <div className="flex_center gap1-2 statistic_card">
      <div className="statistic_icon">{icon}</div>
      <div className="flex flex_column statistic_content">
        <h4>
         {end}
        </h4>
        <span>{title}</span>
      </div>
    </div>
  );
};


export default StatisticCard;
