function ErrorPopup(props) {
    return (
      <div
        className={`error-popup ${
          props.isOpen ? "error-popup_active" : ""
        }`}
      >
        <div className="error-popup__content">
          <button
            type="button"
            aria-label="Закрыть"
            className={"error-popup__quit-button"}
            onClick={props.onClose}
          ></button>
          <h2 className="error-popup__title">Что-то пошло не так! Попробуйте еще раз.</h2>
        </div>
      </div>
    );
  }
  
  export default ErrorPopup;