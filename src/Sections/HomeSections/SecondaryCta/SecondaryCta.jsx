import { Link } from "react-router-dom";
import "./SecondaryCta.css";
const SecondaryCta = () => {
  return (
    <section>
      <div className="flex_between flex_item_start gap3 flex_column container secondaryCta_container">
        <div className="flex gap1 flex_column secondaryCta_content">
          <h2>
            Enfin Convaincu de Commencer Votre <span>Aventure </span>
            d'Apprentissage Aujourd'hui
          </h2>
          <p>
            Prêt à commencer votre voyage d'apprentissage ? Nous sommes là pour
            vous guider vers l'excellence éducative. Embarquez dès aujourd'hui
            pour une aventure enrichissante !
          </p>
          <div className="flex_item_center gap1">
            <Link to="/signUp" className="primary_btn">
              <span>inscriver-vous</span>
            </Link>
            <Link to="/login" className="secondary_btn">
              <span>Se Connecter</span>
            </Link>
          </div>
        </div>
        <div className="border_shadow secondaryCta_img_box">
          <img
            loading="lazy"
            src="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-300/other/secondaryCta_img.jpg?tr:bl-6"
            srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-400/other/secondaryCta_img.jpg?tr:bl-6 400w ,
            https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-500/other/secondaryCta_img.jpg?tr:bl-6 500w"
            alt="secondaryCta image"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondaryCta;
