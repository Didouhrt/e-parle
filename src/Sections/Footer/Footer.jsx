import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const location = useLocation();

  const getNavLinkClass = (basePath) => {
    return location.pathname === basePath ||
      location.pathname.startsWith(`${basePath}/`)
      ? "navLink activeLink"
      : "navLink";
  };

  return (
    <footer>
      <div className="container pad_blk2 flex_center gap2 flex_column top_footer">
        <Link to="/" className="logo">
          <img
            src="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-100/logo/logo3.png"
            srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-200/logo/logo3.png 200w"
            alt="logo"
          />
        </Link>
        <div className="flex_center gap1  flex_column footer_nav">
          <Link to="/" className={getNavLinkClass("/")}>
            Accueil
          </Link>
          <Link to="/cours" className={getNavLinkClass("/cours")}>
            Cours
          </Link>
          <Link to="/à propos" className={getNavLinkClass("/%C3%A0%20propos")}>
            À Propos
          </Link>
          <Link to="/contact" className={getNavLinkClass("/contact")}>
            Contact
          </Link>
        </div>
        <div className=" flex gap1 footer_icon">
          <a
          aria-label="footer social media icon"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} />
          </a>
          <a
          aria-label="footer social media icon"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={25} />
          </a>
          <a
          aria-label="footer social media icon"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={25} />
          </a>
          <a
          aria-label="footer social media icon"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>

      <p className="flex_center pad_blk2">
        <b>©{new Date().getFullYear()} e-Parle </b>Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
