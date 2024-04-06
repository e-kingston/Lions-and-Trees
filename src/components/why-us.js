const data = [
  {
    title: "Non-Traditional Clientele",
    description:
      "We cater our unique service offering to non-traditional customers.",
    details:
      "Somewhat ironically, the personal financial planning industry often neglects the people most in need of personal financial counsel. The industry instead caters to, unsurprisingly and perhaps understandably, individuals and families with significant assets, who no doubt benefit from such advice but whose assets are attractive for their fee-rich potential. Lions & Trees is different by design; we cater our unique service offering to non-traditional customers. We do have several clients who are more conventional personal finance candidates, and have chosen us for our low-cost, high-touch service. But we mostly cater towards non-traditional customers, whose assets may not warrant conventional coverage but whose financial situations are ripe for targeted, value-add counsel.",
  },
  {
    title: "Low or No Cost",
    description:
      "We provide the usual service offering but at a tiny fraction of the cost.",
    details:
      "Most financial advisors charge both significant upfront fees and ongoing management fees. We provide a similar service offering -- often one even more intensive, and thus more customized and nuanced -- but at a tiny fraction of the cost. Upfront 'plan creation' fees typically start at several thousand dollars and can easily run into the tens of thousands of dollars; Lions & Trees, in stark contrast, charges nothing for this upfront consultation. And while the industry norm is to collect roughly 1% of assets in the form of an annual management fee, Lions & Trees charges no AUM-based fee for most clients and only charges a modest quarterly management fee in its place for other clients.",
  },
  {
    title: "Uniquely Tailored Solutions",
    description:
      " We provide customization to solve the types of highly-specific financial challenges that people face.",
    details:
      "Many financial advisors aim to customize their financial advice to individual clients, but the end result is often a fairly uniform investment strategy masquerading as a differentiated solution. Lions & Trees, in part because its clientele rarely fits a traditional mold, instead provides bottom-up customization to solve the types of highly-specific financial challenges that people face in day-to-day life",
  },
];

function WhyUsCard(props) {
  return (
    <>
      <div
        className="modal fade"
        id={`${props.index}-detailsModal`}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.item.title}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {props.item.details}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4 d-flex align-items-stretch">
        <div className="card bg-light-primary w-100">
          <div className="card-body d-flex flex-column align-items-start">
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text">{props.item.description}</p>
            <button
              className="btn read-more-btn mt-auto"
              data-bs-toggle="modal"
              data-bs-target={`#${props.index}-detailsModal`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function WhyUs() {
  return (
    <div className="section container" id="why-us">
      <h2 className="text-center section-title">Why us</h2>
      <div className="row" style={{ rowGap: "24px" }}>
        {data.map((item, index) => (
          <WhyUsCard key={item.title} item={item} index={index}/>
        ))}
      </div>
    </div>
  );
}
