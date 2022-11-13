import PageHeader from '../components/pageHeader/PageHeader';

function Success() {
  return (
    <section>
      <PageHeader />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="currentColor"
        class="bi bi-mailbox text-primary m-5"
        viewBox="0 0 16 16"
      >
        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
      </svg>
      <h2 class="mt-2 fw-bold">Message Received. Thanks!</h2>
      <p class="fs-5 fw-light mb-5 pb-3">
        I will be in touch with you shortly.
      </p>
      <a
        href="/"
        type="button"
        class="btn btn-outline-primary ms-auto mb-5 px-3 rounded-pill"
      >
        Go back to Home
      </a>
    </section>
  );
}

export default Success;
