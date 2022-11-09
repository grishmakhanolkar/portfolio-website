import Chat from "../../components/Images/chat-text.svg";
import Image from "next/image";

function Contact() {
  return (
    <section>
      <h2 class="m-5 fw-bold">Interested in collaborating with me?</h2>
      <p class="fs-5 fw-light mb-4 pb-3">
        I am always open to discussing new projects or partnership
        opportunities.
      </p>
      <button
        type="button"
        class="btn btn-outline-primary ms-auto mb-5 rounded-pill"
      >
        <Image src={Chat} /> Start a Conversation
      </button>
    </section>
  );
}

export default Contact;
