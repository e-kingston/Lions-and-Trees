export default function contact() {
  return (
    <div className="section container" id="contact">
      <h2 className="text-center section-title">Contact Us</h2>
      <div className="mb-3">
        <label for="full-name" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="full-name"/>
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label for="phone-number" className="form-label">Phone Number (optional)</label>
        <input type="number" className="form-control" id="phone-number" placeholder="1234567890"/>
      </div>
      <div className="mb-3"> 
        <label for="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="5"></textarea>
      </div>
      <div>
      <button type="submit" class="btn btn-primary mb-3">Submit</button>
      </div>
    </div>
  )
}