import { useState, useEffect } from "react";
import { IoMdPlayCircle } from "react-icons/io";

import { Link } from "react-router-dom";
import VideoPopUp from "./VideoPopUp";
import "./PrimaryCta.css";

const PrimaryCta = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };
  useEffect(() => {
    isPopUpOpen
      ? document.body.classList.add("activeNav")
      : document.body.classList.remove("activeNav");
  }, [isPopUpOpen]);
  return (
    <section>
      <div className="flex_between flex_item_start gap3 flex_column container primaryCta_container">
        <div className="flex gap1 flex_column primaryCta_content">
          <h2>
            Révélez la <span>beauté</span> de la langue française
          </h2>
          <p>
            Découvrez la joie d'apprendre le français avec un enseignant
            passionné. Acquérez des connaissances culturelles et profitez de
            différentes leçons adaptées à vos besoins d'apprentissage uniques
          </p>
          <div className="flex gap1 flex_column sub_primaryCta_content">
            <div>
              <h3 className="pad_btm1">histoire</h3>
              <p>
                Découvrez la culture riche qui se cache derrière la langue
                française et élargissez vos horizons.
              </p>
            </div>
            <div>
              <h3 className="pad_btm1">histoire</h3>
              <p>
                Découvrez la culture riche qui se cache derrière la langue
                française et élargissez vos horizons.
              </p>
            </div>
          </div>
          <div className="flex_item_center gap1">
            <button aria-label="see courses button" className="primary_btn">
              <Link to="/cours" aria-label="see courses link">
                <span>voir cours</span>
              </Link>
            </button>
            <Link to="/login" aria-label="login link" className="secondary_btn">
              <span>Se Connecter</span>
            </Link>
          </div>
        </div>
        <div className="border_shadow primaryCta_video">
          <img
            src="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-300/other/primaryCta_img.jpg?tr:bl-6"
            srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-400/other/primaryCta_img.jpg?tr:bl-6 400w ,
            https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-500/other/primaryCta_img.jpg?tr:bl-6 500w"
            alt="primaryCta image"
          />

          <button aria-label="video play button" onClick={openPopUp}>
            <IoMdPlayCircle
              aria-label="video play button icon"
              className="play_btn"
            />
          </button>
        </div>
      </div>

      <VideoPopUp isPopUpOpen={isPopUpOpen} closePopUp={closePopUp} />
    </section>
  );
};

export default PrimaryCta;
