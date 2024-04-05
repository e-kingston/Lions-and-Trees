export default function WhyUs() {
  return (
    <div className="section container" id="why-us">
      <h2 className="text-center section-title">Why us</h2>
      <div className="row">
        <div className="col-sm-4">
          <div className="card bg-light-primary">
            <div className="card-body">
              <h5 className="card-title">
                Non-Traditional Clientele
              </h5>
              <p className="card-text">
                We cater our unique service offering to non-traditional customers.
              </p>
              <a href="/why-us" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-light-primary">
            <div className="card-body">
              <h5 className="card-title">
                Low or No Cost
              </h5>
              <p className="card-text">
                We provide the usual service offering but at a tiny fraction of the cost.
              </p>
              <a href="/why-us" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card bg-light-primary">
            <div className="card-body">
              <h5 className="card-title">
                Uniquely Tailored Solutions
              </h5>
              <p className="card-text">
                We provide customization to solve the types of highly-specific financial challenges that people face.
              </p>
              <a href="/why-us" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}