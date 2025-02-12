
import Breadcrumbs from "./BreadCrumbs";
import CompanyValues from "./CompanyValues";
import Footer from "./Footer";
import FutureProtection from "./FutureProtection";

function AboutMain() {
    return (
      <div>
      <Breadcrumbs/>
      <FutureProtection/>
      <CompanyValues/>
      {/* <AboutCTA/> */}
      <Footer/>
      </div>
    );
  }

  export default AboutMain;