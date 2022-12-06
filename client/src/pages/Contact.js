export default function Contact(props) {
  return (
    <div className="container ">
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <h1>Contact</h1>
        </header>

        <main>
          <p>
            To get in touch, Navigate to one of the icons present below or fill
            our a form
          </p>
          <div className="group fs-5 col-md-8">
            <a
              href="https://discord.gg/VgKxme4"
              style={{ margin: "2px" }}
              className="text-reset"
            >
              <i className="bi bi-discord"></i>
            </a>
            <a
              href="https://www.instagram.com/langaracpsc/"
              style={{ margin: "2px" }}
              className="text-reset"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://twitter.com/Langaracpsc"
              style={{ margin: "2px" }}
              className="text-reset"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
          <hr className="col-3 col-md-2 mb-5"></hr>
        </main>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScRdCBEKaPm7iTgxlL_90j0hhkkoqSRhwYgXW-rCSYiXpQoVA/viewform?embedded=true"
          width="640"
          height="382"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
