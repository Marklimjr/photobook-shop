import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getToken , getUser} from "../../utilities/users-service";


const LogInForm = ({setUser}) => {


    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const body = Object.fromEntries(formData);
    
        try {
          const response = await fetch("/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
          const data = await response.json();
          
          if (data.token) {
            localStorage.setItem("token", data.token);
            setUser(getUser())
            setError("");
            window.alert("Account has login successfully."); 
            navigate('/');
           } else {
            setError(data.message);
          }
        } catch (error) {
          setError(error.message);
        }
      };

    return (
        <form onSubmit={handleLogin}>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Log In</h1>
                        {error}

                        <input 
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            label="Email Address"
                            required 
                            placeholder="Email" />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            label="Enter your password"
                            required
                            placeholder="Password" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"         
                            >Log In</button>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Don't have an account? 
                        <Link to={`/users/signup`}>
                        <button> Sign Up here! </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LogInForm;