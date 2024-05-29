import { FaQuoteLeft } from "react-icons/fa";
import "./TestemonialCards.css";

const getRandomVibrantColor = () => {
  const vibrantColors = ["#FF5733", "#25FD88", "#2547FD", "#EC25FD", "#FDE725"];

  const randomIndex = Math.floor(Math.random() * vibrantColors.length);
  return vibrantColors[randomIndex];
};

const TestemonialCards = ({ card }) => {
  const quoteIconColor = getRandomVibrantColor();

  return (
    <div className="testimonial_card">
      <div className="testimonial_card_header flex_between">
        <div className="flex_center gap1 pad_btm0-5">
          <img
            src={card.avatar}
            alt={`${card.name}'s avatar`}
            className="testimonial_avatar"
          />
          <div>
            <h4>{card.name}</h4>
            <span>{card.role}</span>
          </div>
        </div>
        <FaQuoteLeft color={quoteIconColor} className="quote_icon" />
      </div>

      <p>{card.testimonial_text}</p>
    </div>
  );
};

export default TestemonialCards;
