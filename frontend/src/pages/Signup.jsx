
import { useState } from "react";

function Signup() {

    // Store the registration form values
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    }

    return (
    <div className="container-fluid min-vh-100 bg-light py-5">
        <div className="container">

            <h1 className="text-center mb-3" style={{ color: "#0d6efd" }}>
                Create an Account
            </h1>

            <p className="text-center text-muted mb-5">
                Join our community and start sharing your thoughts.
            </p>

            <form onSubmit={handleSubmit}>
                <div class="row g-5 mb-3"> 
                {/* Username */}
                    <div class="col-md">
                        <div className="mb-4">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                    </div>
                    {/* Email */}
                    <div class="col-md">  
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div class="row g-5 mb-3">
                {/* Password */}
                    <div class="col-md"> 
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div class="col-md"> 
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">
                    Sign Up
                </button>

            </form>
        </div>
    </div>
    );
}

export default Signup;
