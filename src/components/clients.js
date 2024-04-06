

const data = [
  {
    title: "Targeted Borrowing",
    description: "A client was in need of a modest loan to execute a transformative real estate transaction, one that would provide a permanent and less expensive housing solution and thus, in time, unlock a new quality of life. Lions & Trees provided the necessary loan at well below-market rates, providing an essential catalyst for the acquisition. Lions & Trees was empowered to do this by its deep knowledge of both the challenge and opportunity involved."
  },

  {
    title: "Efficient Giving",
    description: "A client tithes reliably but was struggling to effectively and tax-efficiently manage the giving process. Lions & Trees, informed by its familiarity with the client's unique situation, recommended donating appreciated assets directly into a newly-established donor-advised fund, saving the client thousands of dollars and, as importantly, establishing a more robust giving platform for future generosity."
  },
  
  {
    title: "Optimal Earning",
    description: "A client was saving money on a regular basis but was not stewarding the savings productively, instead deploying net assets into low-yielding accounts and other suboptimal options. Lions & Trees reconfigured the client's net assets, shifting the client's earnings baseline by several thousands of dollars per year."
  },
  
  {
    title: "Newfound Saving",
    description: "A client was struggling with month-to-month ebbs and flows that were proving disruptive to building a save-and-invest mentality. Lions & Trees helped the client rework the monthly budget while also finding significant one-off savings opportunities in certain financial accounts, helping to pour a more secure foundation upon which the client can continue to grow net assets."
  },
  
]

function AccordionItem(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.id}`} aria-expanded="false" aria-controls={props.id}>
          {props.title}
        </button>
      </h2>
      <div id={props.id} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default function clients() {
  return (
    <div className="section container" id="client-success-stories">
      <h2 className="text-center section-title">Client Success Stories</h2>
      <div className="accordion" id="accordionExample">
        {
          data.map((item, index) => (
            <AccordionItem title={item.title} description={item.description} id={index} />
          ))
        }
      </div>
    </div>
  )
}

