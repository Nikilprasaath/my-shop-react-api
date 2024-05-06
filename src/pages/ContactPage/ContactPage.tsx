import { useState } from "react";
import FormComponent from "../../components/FormComponent";
// import ToastComponent from "./Toast";
import { CategoryService } from "../../services/CategoryService";

const contactService: CategoryService = new CategoryService();

const ContactPage = () => {
  const [status, setStatus] = useState<boolean | undefined>(false);

  const handleClick = async ( formData: any ) => {
    const res = await contactService.postContact(formData) 
    console.log(res)
    setStatus(res);
    console.log("Contact Form " + status);
    res == true ? alert("Contact Form saved successfully"): alert("Contact Form save failed")
  };

  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae earum aliquid illum, magni eveniet fugit quasi ab
              error consectetur, ipsam laudantium hic culpa nesciunt nobis sunt
              non assumenda blanditiis veniam?
            </p>
            <ul>
              <li>34, </li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="col">
            <FormComponent type="contactForm" callback={handleClick} />
          </div>
        </div>
      </div>
      {/* {status && (
        <ToastComponent message="Contact info saved successfully!!!"></ToastComponent>
      )} */}
    </>
  );
};

export default ContactPage;
