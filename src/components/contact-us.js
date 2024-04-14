import { useForm } from '@formspree/react';

export default function Contact() {

  const [state, handleSubmit] = useForm("xpzvobkd")

  if (state.succeeded) {
    const inputElements = document.querySelectorAll("input");
    inputElements.forEach((el) => {
      el.value = ""
    })
    document.querySelector("textarea").value = ""
  }

  return (
    <div className="contact-section section container" id="contact">
      <div className="row justify-content-center">
        <form onSubmit={handleSubmit} className="col-lg-6" id="contact-us">
          <h2 className="text-center section-title">Contact Us</h2>
          <div className="mb-3">
            <label for="full-name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="full-name" name='Full name' />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='Email' />
          </div>
          <div className="mb-3">
            <label for="phone-number" className="form-label">Phone Number (optional)</label>
            <input type="number" className="form-control" id="phone-number" name='Phone number' />
          </div>
          <div className="mb-3">
            <label for="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" name='Message'></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary mb-3">Submit</button>
          </div>

          {
            state.succeeded && (
              <div className='mt-3'>
                Thank you for reaching out! We will get back to you soon.
              </div>
            )
          }

        </form >
      </div>
    </div>
  )
}