import { useState } from "react";
import FormComponent from "../../components/FormComponent"
import ToastComponent from "./Toast";

const ContactPage = () => {
  const [status,setStatus] = useState(false);

const handleClick = (status:boolean)=>{
  setStatus(status);
  console.log("Contact Form "+status);
  status && alert('Contact Form saved successfully');
}

  return (
    <>
<div>
  <div className="row">
    <div className="col">
    <h2>Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae earum aliquid illum, magni eveniet fugit quasi ab error consectetur, ipsam laudantium hic culpa nesciunt nobis sunt non assumenda blanditiis veniam?</p>
      <ul>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
    </div>
    <div className="col">
    <FormComponent type="contactForm" callback={handleClick}/>
    </div>
  </div>
</div>
{
  status && (<ToastComponent message="Contact info saved successfully!!!"></ToastComponent>)
}
</>
  )
}

export default ContactPage