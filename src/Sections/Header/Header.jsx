import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavOnOutsideClick = (event) => {
    const isMenuBtn = event.target.closest(".menu_btn");

    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !isMenuBtn
    ) {
      setIsNavOpen(false);
    }
  };

  const getNavLinkClass = (basePath) => {
    return location.pathname === basePath ||
      location.pathname.startsWith(`${basePath}/`)
      ? "navLink activeLink"
      : "navLink";
  };

  useEffect(() => {
    isNavOpen
      ? document.body.classList.add("activeNav")
      : document.body.classList.remove("activeNav");
  }, [isNavOpen]);

  useEffect(() => {
    let prevScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update header position
      if (scrollY > prevScrollY && scrollY > 300) {
        // Scrolling down, hide the header
        setIsFixed(true);
      } else {
        // Scrolling up, show the header
        setIsFixed(false);
      }
      prevScrollY = scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeNavOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeNavOnOutsideClick);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavOpen(false);
  }, [location]);

  return (
    <header
      className={` 
        ${isNavOpen ? "activeNav" : ""} 
        ${isFixed ? "hideHeader" : ""} 
      `}
    >
      <div className={`flex_between header_container container `}>
        <Link to="/" className="logo">
          <img
            src="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-100/logo/logo3.png"
            srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-200/logo/logo3.png 200w"
            alt="logo"
          />
        </Link>
        <nav
          ref={navRef}
          className={`flex_item_center  ${isNavOpen ? "activeNav" : ""}`}
        >
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
        </nav>
        <div className="flex_item_center gap1">
          <button className="secondary_btn header_btn" aria-label="login button">
            <Link to="/login" >
              <span>Se Connecter</span>
            </Link>
          </button>
          <button
            aria-label="menu toggle button"
            className={`menu_btn ${isNavOpen ? "activeNav" : ""}`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
