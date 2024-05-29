import { FaRegWindowClose } from "react-icons/fa";
import './Modal.css'
const Modal = ({ title, content, onConfirm, onCancel }) => {
  return (
    <div className="flex_center modal">
      <div className="border_shadow modal_content">
        <div className="flex_between">
          <h3>{title}</h3>
          <button onClick={onCancel}>
            <FaRegWindowClose color="#2f327d" size={20} />
          </button>
        </div>
        <p className="pad_blk1">{content}</p>
        <div className="flex gap1 modal_buttons">
          <button className="secondary_btn" onClick={onCancel}>
            <span>annulé</span>
          </button>
          <button className="primary_btn" onClick={onConfirm}>
            <span>ok</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
