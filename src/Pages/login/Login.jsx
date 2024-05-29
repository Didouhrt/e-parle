import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiArrowLeftDoubleFill } from "react-icons/ri"; // Assuming you have react-icons installed
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <section className="login_section flex">
      <div className="image_side">
        <img
          src="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-400/other/login_img.jpg?tr:bl-6"
          srcSet="https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-600/other/login_img.jpg?tr:bl-6 600w , 
          https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-800/other/login_img.jpg?tr:bl-6 800w 
          https://ik.imagekit.io/img5b6kvn/eParle/images/tr:w-1000/other/login_img.jpg?tr:bl-6 1000w"
          alt="login"
        />
      </div>
      <div className="login_side">
        <div
          onClick={() => window.history.back()}
          className="flex_center  login_back"
        >
          <RiArrowLeftDoubleFill aria-label="back button icon" />
          <span>Retour</span>
        </div>
        <div className="login_container text_center">
          <h3>Se connecter</h3>

          <form className="pad_top2" onSubmit={handleSubmit}>
            <div className="flex flex_column gap1">
              <div className="flex  flex_column gap1-2 label_input">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Entrer votre email" />
              </div>

              <div className="flex  flex_column gap1-2 label_input">
                <label htmlFor="password">Mot de passe</label>
                <div className="password_input">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Entrer votre mot de passe"
                  />
                  <div
                    className="password_icon"
                    onClick={handlePasswordVisibility}
                  >
                    {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                  </div>
                </div>
                <a
                  aria-label="forget password"
                  className="forget_password_tag"
                  href="#"
                >
                  Mot de passe oublié?
                </a>
              </div>
              <button
                aria-label="login button"
                className="primary_btn "
                type="submit"
              >
                <span>Se connecter</span>
              </button>
            </div>
            <p className="pad_blk1 form_separator">ou</p>

            <div className="flex flex_column gap1 pad_btm0-5">
              <button
                className="connect_with_button flex_center gap1-2"
                type="button"
              >
                <img
                  src="https://ik.imagekit.io/img5b6kvn/eParle/images/logo/google_logo.svg"
                  alt="google_logo"
                />
                <span>Connecter avec Google</span>
              </button>
              <button
                className="connect_with_button flex_center gap1-2"
                type="button"
              >
                <img
                  src="https://ik.imagekit.io/img5b6kvn/eParle/images/logo/facebook_logo.svg"
                  alt="facebook_logo"
                />
                <span>Connecter avec Facebook</span>
              </button>
            </div>
            <p className="signInUp_btn">
              Vous n'avez pas de compte ?
              <Link aria-label="sign up link" to="/signUp">
                <b> Inscrivez-vous</b>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
