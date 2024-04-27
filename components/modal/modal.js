import { useState } from 'react';
import styles from './modal.module.scss';

const defaultFormFields = {
  userName: '',
  email: '',
  message: '',
};

export default function ModalPopup(props) {
  const { isModalOpen, setIsModalOpen } = props;
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { userName, email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmit(() => true);
    try {
      const response = await fetch('/api/sendmessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formFields),
      });

      if (response.status === 201) {
        resetFormFields();
        setIsSubmit(() => false);
        setIsSent(() => true);
        setTimeout(() => {
          setIsSent(() => false);
          setIsModalOpen(() => false);
        }, 4000);
      }
    } catch (error) {
      setIsSubmit(() => false);
      setIsSent(() => true);
      setTimeout(() => {
        setIsSent(() => false);
        setIsModalOpen(() => false);
      }, 4000);
    }
  };
  const handleClose = () => {
    resetFormFields();
    setIsSubmit(() => false);
    setIsSent(() => false);
    setIsModalOpen(() => false);
  };

  return (
    <div id="myModal" className={isModalOpen ? styles.modalopen : styles.modal}>
      <div className={styles.modalContent}>
        <span onClick={handleClose} className={styles.close}>
          &times;
        </span>
        {isSent ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              className="bi bi-mailbox text-primary m-5"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
              <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
            </svg>
            <h2 className="mt-2 fw-bold">Message Received. Thanks!</h2>
            <p className="fs-5 fw-light mb-5 pb-3">
              I will be in touch with you shortly.
            </p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="btn btn-primary"
              type="button"
              disabled
              style={{ width: '90px', marginRight: '1rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                className="bi bi-check-lg fw-bold"
                style={{ color: 'white' }}
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="container">
              <h2>Drop a message and I will get back to you soon.</h2>
              <div className="row m-2">
                <input
                  type="text"
                  disabled={isSubmit}
                  className="form-control"
                  placeholder="Your Name"
                  id="Name"
                  required
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                />
              </div>
              <div className="row m-2">
                <input
                  disabled={isSubmit}
                  type="email"
                  placeholder="E-mail Address"
                  required
                  className="form-control"
                  id="InputEmail1"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="container py-2">
              <div className="row">
                <div className="col mx-2">
                  <label htmlFor="Message" className="form-label">
                    Message
                  </label>
                  <textarea
                    style={{ height: '150px' }}
                    type="text"
                    disabled={isSubmit}
                    required
                    className="form-control"
                    id="Message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              {isSubmit && (
                <button
                  className="btn btn-primary"
                  type="button"
                  disabled
                  style={{ width: '90px', marginRight: '1rem' }}
                >
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </button>
              )}
              {!isSent && !isSubmit && (
                <button type="submit" className="btn btn-primary me-3">
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
