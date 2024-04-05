import { useEffect } from "react";

export default function WhyUsDetailed() {

  useEffect(() => {
    document.getElementsByClassName("navbar")[0]?.classList.remove("fixed-top")
  }, [])

  return (
    <div id="detail">
      <div className="container">
        <h4>Non-Traditional Clientele</h4>
        <p>
          Somewhat ironically, the personal financial planning industry often neglects 
          the people most in need of personal financial counsel. The industry instead 
          caters to, unsurprisingly and perhaps understandably, individuals and families 
          with significant assets, who no doubt benefit from such advice but whose assets 
          are attractive for their fee-rich potential. Lions & Trees is different by design; 
          we cater our unique service offering to non-traditional customers. We do have 
          several clients who are more conventional personal finance candidates, and have 
          chosen us for our low-cost, high-touch service. But we mostly cater towards non-
          traditional customers, whose assets may not warrant conventional coverage but whose 
          financial situations are ripe for targeted, value-add counsel.
        </p>
      </div>
      <div className="container">
        <h4>Low or No Cost</h4>
        <p>
         Most financial advisors charge both significant upfront fees and ongoing management fees. 
         We provide a similar service offering -- often one even more intensive, and thus more 
         customized and nuanced -- but at a tiny fraction of the cost. Upfront 'plan creation' fees 
         typically start at several thousand dollars and can easily run into the tens of thousands 
         of dollars; Lions & Trees, in stark contrast, charges nothing for this upfront consultation. 
         And while the industry norm is to collect roughly 1% of assets in the form of an annual management
         fee, Lions & Trees charges no AUM-based fee for most clients and only charges a modest quarterly 
         management fee in its place for other clients.
        </p>
      </div>
      <div className="container">
        <h4>Uniquely Tailored Solutions</h4>
        <p>
         Many financial advisors aim to customize their financial advice to individual clients, but the end 
         result is often a fairly uniform investment strategy masquerading as a differentiated solution. Lions 
         & Trees, in part because its clientele rarely fits a traditional mold, instead provides bottom-up 
         customization to solve the types of highly-specific financial challenges that people face in day-to-day life.
        </p>
      </div>
    </div>
  );
}
