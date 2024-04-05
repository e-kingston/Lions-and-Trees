import { useEffect } from "react";

export default function WhyUsDetailed() {

  useEffect(() => {
    document.getElementsByClassName("navbar")[0]?.classList.remove("fixed-top")
  }, [])

  return (
    <div id="detail">
      Eden will fill in the details here
    </div>
  );
}
