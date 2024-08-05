import { React, useRef, useEffect } from 'react';
import '../../css/PasswordModal.css';
import '../../css/Button.css';


function Modal({ onClose, onSubmit }) {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <span className="close" onClick={onClose}>&times;</span>
        <form className="password-form" onSubmit={onSubmit}>
          <label>
            Password:
            <input className="password-input" type="password" name="password" />
          </label>
          <button className='password-button' type="submit">입장</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;