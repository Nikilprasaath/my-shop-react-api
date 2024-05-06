import { useForm } from "react-hook-form";

interface IForm {
  type: string;
  callback:(status:boolean)=>void;
}

const FormComponent: React.FC<IForm> = ({ type, callback }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleFormSubmit = ( formData: any ) => {
    switch (type) {
      case "contactForm":
        callback(formData);
        console.log("Contact Form submitted...");
        break;
      case "reviewForm":
        callback(true);
        console.log("Review Form submitted...");
        break;
    }
  };
  return (
    <form
      className="col-md-8 offset-md-3"
      onSubmit={handleSubmit(handleFormSubmit)}
      data-testid="formTest"
    >
      <div className="form-group row mb-3">
        <label htmlFor="nameInput">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            id="nameInput"
            className="form-control"
            placeholder="Enter Name"
          />
          {errors.name?.type === "required" && (
            <p role="alert">* Name is required</p>
          )}
        </div>
      </div>
      {type === "reviewForm" && (
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput">Phone</label>
          <div className="col-sm-10">
            <input
              type="text"
              {...register("phone", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              aria-invalid={errors.phone ? "true" : "false"}
              id="phoneInput"
              className="form-control"
              placeholder="Enter Phone"
            />
            {errors.phone?.type === "required" && (
              <p role="alert">* Phone is required</p>
            )}
          </div>
        </div>
      )}
      <div className="form-group row mb-3">
        <label htmlFor="emailInput">Email</label>
        <div className="col-sm-10">
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            id="emailInput"
            className="form-control"
            placeholder="Enter Email"
          />
          {errors.email?.type === "required" && (
            <p color="red" role="alert">
              * Email is required
            </p>
          )}
        </div>
      </div>
      {type === "reviewForm" && (
        <div className="form-group row mb-3">
          <label htmlFor="productRating">Product Rating</label>
          <div className="col-sm-10">
            <input
              {...register("productRating", { required: true })}
              type="text"
              id="productRating"
              className="form-control"
              placeholder="Enter Rating"
            />
          </div>
        </div>
      )}
      {type === "reviewForm" && (
        <div className="form-group row mb-3">
          <label htmlFor="feedback">Feedback</label>
          <div className="col-sm-10">
            <textarea
              {...register("feedback", { required: true, maxLength: 100 })}
              id="feedback"
              className="form-control"
              placeholder="Enter Feedback"
            />
          </div>
        </div>
      )}
      {type === "contactForm" && (
        <div className="form-group row mb-3">
          <label htmlFor="message">Message</label>
          <div className="col-sm-10">
            <textarea
              {...register("message", { required: true, maxLength: 100 })}
              id="message"
              className="form-control"
              placeholder="Enter Message"
            />
          </div>
        </div>
      )}
      <div className="form-group row">
        <div>
          <input data-testid="formSubmit" type="submit" className="btn btn-primary"></input>
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
