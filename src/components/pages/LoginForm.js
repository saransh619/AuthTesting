import { useState, useEffect } from "react";
import AuthUser from "../service/AuthUser";
import UserAuthentication from "../service/auth";

const LoginForm = () => {
    const {http} = AuthUser();
    const userAuthentication=new UserAuthentication();
    const [formValues, setFormValues] = useState({
        userName: '',
        userPassword: ''
    });
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
        // setFormError(validate(formValues));
        // setisSubmit(true);

        // userAuthentication.userAuth(formValues).then(res=>{
        //     console.log("response data",res.data)
        // }).catch(err=>{
        //     console.log("canntot",err);
        // })


        http.post('/login', formValues).then(res => {
            console.log("response data", res.data);
        }).catch(err => {
            console.log("canntot", err);
        })

    }
    

    useEffect(() => {
        console.log(formError);
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formError]);

    // const validate = (values) => {
    //     const errors = {};
    //     // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    //     // // for username validation
    //     // if (!values.username) {
    //     //     errors.username = 'username is required';
    //     // } else if (!regex.test(values.username)) {
    //     //     errors.username = "This is not a valid username format!";
    //     // }
    //     // for password validation
    //     if (!values.password) {
    //         errors.password = "Password is required";
    //     } else if (values.password.length < 4) {
    //         errors.password = "Password must be more than 4 characters";
    //     } else if (values.password.length > 10) {
    //         errors.password = "Password cannot exceed more than 10 characters";
    //     }
    //     return errors;
    // }

    return (
        <div>
            {Object.keys(formError).length === 0 && isSubmit ? (<div className="ui msg success">Signed In Successfully</div>) : (<pre>{JSON.stringify(formValues)}</pre>)}
            <h1 className="text-red-500 text-center text-5xl mt-10">
                Login Form
            </h1>
            <div className="w-full max-w-xs m-auto mt-20">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="usernameaddress">
                            username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="usernameaddress" type="text" placeholder="username"
                            name="userName"
                            value={formValues.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="error text-red-700">{formError.username}</div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                            name="userPassword"
                            value={formValues.userPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="error text-red-700">{formError.userPassword}</div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 IT Glance. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default LoginForm