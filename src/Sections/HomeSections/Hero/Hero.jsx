import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="flex_between hero_container">
        <div className="flex1 hero_content">
          <h1 className="hero_heading">
            Explorez le Charme du <span>Français</span> avec un Enseignant
            Inspirant
          </h1>
          <p className="pad_blk1">
            Explorez une aventure linguistique unique sur e-parle, où la passion
            du français prend vie avec chaque leçon captivante.
          </p>
          <div className="flex_item_center gap1">
            <Link to="/cours" className="primary_btn">
              <span>voir cours</span>
            </Link>
            <Link to="/login" className="secondary_btn ">
              <span>Se Connecter</span>
            </Link>
          </div>
        </div>
        <div className="flex1 hero_image_container">
          <img
            src="https://ik.imagekit.io/img5b6kvn/eParle/images/other/tr:w-400/hero_img.png"
            alt="hero image"
            srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/other/tr:w-500/hero_img.png 700w ,
           "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
