import Hero from "../component/Hero/Hero";

import Companies from "../component/Companies/Companies";
import Review from "../component/Review/Review"
import Value from "../component/Value/Value";
import Contact from "../component/Contact/Contact";
import GetStarted from "../component/GetStarted/GetStarted";

import Steps from "../component/Steps/Steps"
const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Hero></Hero>  
      </div>
      <Companies/>
      <Review></Review>
      <Value/>
      <Contact/>
      <Steps/>
      <GetStarted/>
    </div>
  )
}

export default Website
