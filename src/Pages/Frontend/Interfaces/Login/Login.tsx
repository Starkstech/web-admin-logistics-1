import React from "react";
import "./Login.scss"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    Email:string,
    password:string,

};
const Login: React.FC = () => {
  const {
    register, handleSubmit, // watch,
    // eslint-disable-next-line no-unused-vars
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
  // eslint-disable-next-line react/jsx-filename-extension
  <React.Fragment>
      <>
      <div className="container-fluid login-container">
      <div className="card login-card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="exampleInputEmail1" className="form-label login-label pb-2 ">Email address</label>
              <input type="email"
              {...register("Email", {
                required: "Enter Email",
              })}
              className="form-control login-input "
              />
               <span>
                <div className="login-error-alert">
                  {errors?.Email && errors.Email.message}
                </div>
              </span>
              </div>
              <div>
               <label htmlFor="exampleInputEmail1" className="form-label pt-4 login-label pb-2">Password</label>
              <input type="text"
              {...register("password", {
                required: "Enter passoword",
              })}
              className="form-control login-input "
              />
               <span>
                <div className="login-error-alert">
                  {errors?.password && errors.password.message}
                </div>
              </span>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-4">
              <div className="form-check">
             <input className="form-check-input login-form-check" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label login-label" htmlFor="flexCheckDefault">
               Remember me
              </label>
                </div>
                <div>
              <button type="submit" className="login-btn ">Password</button>
              </div>
              </div>

          </form>
          </div>
          </div>
          </>
  </React.Fragment>

  )
}
export default Login
