import PageHeader from '../components/pageHeader/PageHeader';
import styles from '../styles/ContactPage.module.scss';
import { useState } from 'react';
import Router from 'next/router';

const defaultFormFields = {
  userName: '',
  email: '',
  message: '',
};

function ContactPage() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reply = fetch('/api/sendmessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFields),
    });
    console.log(reply);
    setFormFields(defaultFormFields);
    Router.push('/success');
  };

  return (
    <section>
      <PageHeader />
      <div className={styles.contactForm}>
        <h2 class="fs-3 fw-light m-5 pb-3">
          Thanks for taking the time to reach out. How can I help you today?
          Want to discuss a startup collaboration? I am most definitely game.
          Drop me a message.
        </h2>
        <form onSubmit={handleSubmit}>
          <div class="container m-2 p-2">
            <div class="row">
              <div class="col-sm-6 m-auto">
                <label for="Name" class="form-label text-start">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                />
              </div>
              <div class="col-sm-6 m-auto">
                <label for="InputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="InputEmail1"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="container m-2 p-2">
            <div class="row">
              <div class="col">
                <label for="Message" class="form-label">
                  Message
                </label>
                <input
                  style={{ height: '250px' }}
                  type="text"
                  class="form-control"
                  id="Message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div class="d-flex flex-row m-5">
            <button
              type="button"
              class="btn btn-outline-primary px-5 mb-5 rounded-pill"
              onClick={resetFormFields}
            >
              Reset
            </button>
            <button
              type="submit"
              class="btn btn-outline-primary px-5 mb-5 rounded-pill"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
