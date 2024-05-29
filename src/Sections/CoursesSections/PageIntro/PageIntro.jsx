import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import "./pageIntro.css";
function PageIntro({ location, navLink }) {
  return (
    <div className="pageIntro">
      <div className="pageIntro_content text_center">
        <div>
          <h3>{location}</h3>
          <div className="flex_center gap1-2">
            <Link to="/">Accueil</Link>
            <FaChevronRight />
            <Link to={`/${navLink}`}>{navLink}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageIntro;
