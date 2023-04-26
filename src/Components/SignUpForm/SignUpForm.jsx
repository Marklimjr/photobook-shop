import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


const SignUpForm = ({setUser}) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirm: "",
        userRole: "user",
      });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const disable = state.password !== state.confirm;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.password.length < 5) {
        setError("Password must be at least 5 characters or numbers long.");
        return;
        }
    
        window.alert(state.email + " Account has been created successfully. Please Login.");
        fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        })
          .then((response) => response.json())
          .then((data) => console.log( data ));
          console.log("submitted");
          navigate('/users/login');
      };

      const handleChange = (event) => {
        setState({
          ...state, 
          [event.target.name]: event.target.value, userRole:"user"
        });
      };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            label="UserName"
                            value={state.name}
                            onChange={handleChange}
                            required 
                            placeholder="Username" />

                        <input 
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            label="Email Address"
                            value={state.email}
                            onChange={handleChange}
                            required 
                            placeholder="Email" />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            label="Password (min 5)"
                            value={state.password}
                            onChange={handleChange}
                            required
                            placeholder="Password (min 5 char)" />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm"
                            label="Confirm Password"
                            value={state.confirm}
                            onChange={handleChange}
                            required
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                            disabled={disable}                  
                            >Create Account</button>
                            <p>&nbsp;{state.error}</p>

                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <Link to={`/users/login`}>
                        <button> Log In </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;