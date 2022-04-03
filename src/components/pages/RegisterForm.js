import { useState, useEffect } from "react";
// import UserAuthentication from "../service/auth";
import AuthUser from "../service/AuthUser";
const RegisterForm = () => {
  const {http} = AuthUser();
  // const userAuthentication=new UserAuthentication();
  const [formValues, setFormValues] = useState({
    userFirstName: '',
    userLastName: '',
    userName: '',
    userPassword: '',
    // confirmuserPassword: '',
    // role: [],
  });
//   const object=formValues.role;
// console.log("mampaka",JSON.stringify(object))
  console.log("sransh form", formValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    // console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    setFormError(validate(formValues));
    setisSubmit(true);

    // userAuthentication.userAuth(formValues).then(res=>{
    //   if(res && res.data){
    //           console.log("response data",res.data)
    //   }
    // }
    // ).catch(err=>{
    //   console.log("canntot",err);
    // })

    http.post('/registerNewUser', formValues).then(res => {
      console.log("response data", res.data);
  }).catch(err => {
      console.log("canntot", err);
  })

  }

  // useEffect(() => {
  //   console.log(formError);
  //   if (Object.keys(formError).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formError]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // for first name validation 
    if (!values.userFirstName) {
      errors.userFirstName = 'First name is required';
    }
    // for last name validation 
    if (!values.userLastName) {
      errors.userLastName = 'Last name is required';
    }
 
    // // for role validation 
    // if (!values.role) {
    //   errors.role = 'Role is required';
    // }
    // for username validation
    // if (!values.username) {
    //   errors.username = 'username is required';
    // } else if (!regex.test(values.username)) {
    //   errors.username = "This is not a valid username format!";
    // }
    // for userPassword validation
    if (!values.userPassword) {
      errors.userPassword = "userPassword is required";
    } else if (values.userPassword.length < 4) {
      errors.userPassword = "userPassword must be more than 4 characters";
    } else if (values.userPassword.length > 10) {
      errors.userPassword = "userPassword cannot exceed more than 10 characters";
    }
    //for confirm userPassword validation
    // if (!values.confirmuserPassword) {
    //   errors.confirmuserPassword = "Confirm userPassword is required";
    // } else if (values.confirmuserPassword !== values.userPassword) {
    //   errors.confirmuserPassword = "userPassword and Confirm userPassword must be same";
    // }
    return errors;
  }
  return (
    <div>
       {Object.keys(formError).length === 0 && isSubmit ? (<div className="ui msg success">Registered Successfully</div>) : (<pre>{JSON.stringify(formValues)}</pre>)}
      <h1 className="text-red-500 text-center text-5xl mt-10">
        Registration Form
      </h1>
      <div className="w-full max-w-xl m-auto mt-20">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              First Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
              value={formValues.userFirstName}
              onChange={handleChange}
              name="userFirstName"
            />
          </div>
          <div className="error text-red-700">{formError.userFirstName}</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Last Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
              value={formValues.userLastName}
              onChange={handleChange}
              name="userLastName"
            />
          </div>
          <div className="error text-red-700">{formError.userLastName}</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              name="userName"
            />
          </div>
          <div className="error text-red-700">{formError.username}</div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Role
            </label>
            <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
              name="role" id="name" onChange={handleChange} >
              <option selected disabled>Choose Your Role......</option>
              <option value="Job Seeker" >Job Seeker</option>
              <option value="Recruiter">Recruiter</option>
              <option value="Admin">Admin</option>
            </select>


          </div>
 */}
          {/* <div className="error text-red-700">{formError.role}</div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              userPassword
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
              value={formValues.userPassword}
              onChange={handleChange}
              name="userPassword"
            />
          </div>
          <div className="error text-red-700">{formError.userPassword}</div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Confirm userPassword
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
              value={formValues.confirmuserPassword}
              onChange={handleChange}
              name="confirmPassword"
            />
          </div> */}
          <div className="error text-red-700">{formError.confirmPassword}</div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto" type="submit">
              Sign Up
            </button>

          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 IT Glance. All rights reserved.
        </p>
      </div></div>
  )
}

export default RegisterForm