import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section>
      <div className="grid gap2 contact_section_container    pad_blk2 container">
        <div className="contact_info_container flex flex_column gap1">
          <div>
            <h2>
              Entrez en <span>contact</span> avec nous
            </h2>
            <p className="pad_blk1">
              Des questions sur nos cours de français ou envie de discuter de
              vos besoins linguistiques ? N'hésitez pas à nous contacter ! Notre
              équipe est là pour répondre à toutes vos interrogations et vous
              aider à commencer votre voyage d'apprentissage du français.
            </p>
          </div>
          <div className="flex gap2">
            <FaPhone className="contact_info_icon" />
            <span>+213 70 70 04 04</span>
          </div>
          <div className="flex gap2">
            <FaMapMarkerAlt className="contact_info_icon" />
            <span>25 rue de jardin</span>
          </div>
          <div className="flex gap2">
            <FaEnvelope className="contact_info_icon" />
            <span>chlearn@gmail.com</span>
          </div>
        </div>
        <form
          className="contact_form"
          action="https://formspree.io/f/xkndjqpw"
          method="POST"
        >
          <div className="flex flex_column gap1">
            <input type="email" name="_replyto" style={{ display: "none" }} />
            <div className="flex  flex_column gap1-2 label_input">
              <label htmlFor="nom">Nom</label>
              <input
                name="Name"
                value={formData.Name}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Entrer votre nom"
              />
            </div>
            <div className="flex  flex_column gap1-2 label_input">
              <label htmlFor="email">Email</label>
              <input
                name="Email"
                value={formData.Email}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Entrer votre email"
              />
            </div>
            <div className="flex  flex_column gap1-2 label_input">
              <label htmlFor="message">Message</label>
              <textarea
                name="Message"
                value={formData.Message}
                onChange={(e) => handleChange(e)}
                placeholder="Entrer votre message"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <button className="primary_btn " type="submit">
              <span>Envoyer</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
