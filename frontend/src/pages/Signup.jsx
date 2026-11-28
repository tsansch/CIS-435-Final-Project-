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

        const form = event.currentTarget;

        // Check whether passwords match
        if (password !== confirmPassword) {
            document.getElementById("confirmPassword").setCustomValidity(
                "Passwords do not match."
            );
        } else {
            document.getElementById("confirmPassword").setCustomValidity("");
        }

        // Check form validity
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
        }
        form.classList.add("was-validated");
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

            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="row g-5 mb-3"> 
                {/* Username */}
                    <div className="col-md">
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
                                required
                            />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="col-md">  
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
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-3">
                {/* Password */}
                    <div className="col-md"> 
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
                                minLength={8}
                                required
                            />
                            <div id="passwordHelpBlock" className="form-text">
                                Must be at least 8 characters long.
                            </div>
                            <div className="invalid-feedback">
                                Password must be at least 8 characters long.
                            </div>
                        </div>
                    </div>
                    {/* Confirm Password */}
                    <div className="col-md"> 
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
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter the same password.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 text-start">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="term"
                                required
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    border: "2px solid #6b6375",
                                    cursor: "pointer"
                                }}
                            />
                            <label className="form-check-label ms-2" htmlFor="term">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                Please agree to the terms and conditions to complete the signup.
                            </div>
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
