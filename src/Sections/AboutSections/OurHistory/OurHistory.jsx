import { Link } from "react-router-dom";
import "./OurHistory.css";

const OurHistory = () => {
  return (
    <section>
      <div className="flex_center text_center flex_column ">
        <h2>À propos de moi</h2>
        <p>
          Découvrez notre mission à <b>e-Parle</b> : Rendre l'apprentissage du
          français accessible à tous, où que vous soyez dans le monde.
        </p>
      </div>
      <div className="flex_between flex_item_start gap3 flex_column pad_blk4 container  ourHistory_container">
        <div className=" ourHistory_imgBox">
          <img
            src="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:h-300/other/ourHistory_img.png?tr:bl-6"
            srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-400/other/ourHistory_img.png?tr:bl-6 400w "
            alt="ourHistory image"
          />
        </div>
        <div className="flex gap1 flex_column ourHistory_content">
          <h2>
            c'est notre <span>histoire</span>
          </h2>
          <p>
            Découvrez la joie d'apprendre le français avec un enseignant
            passionné. Acquérez des connaissances culturelles et profitez de
            différentes leçons adaptées à vos besoins d'apprentissage uniques
          </p>
          <div className="flex gap1 flex_column sub_ourHistory_content">
            <div>
              <h3 className="pad_btm1">notre vision</h3>
              <p>
                Découvrez la culture riche qui se cache derrière la langue
                française et élargissez vos horizons.
              </p>
            </div>
            <div>
              <h3 className="pad_btm1">notre but</h3>
              <p>
                Découvrez la culture riche qui se cache derrière la langue
                française et élargissez vos horizons.
              </p>
            </div>
          </div>
          <div className="flex_item_center gap1">
            <Link to="/cours" className="primary_btn">
              <span>voir cours</span>
            </Link>
            <Link to="/signUp" className="secondary_btn">
              <span>se connecter</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
