function Signup() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ width: "100%", maxWidth: "450px" }}>
                <h1 className="text-center mb-3">
                    Create an Account
                </h1>
                <p className="text-center text-muted mb-4">
                    Join our community and start sharing your thoughts.
                </p>
                <form>
                    {/* Registration form */}

                    <button type="submit" className="btn btn-primary w-100">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
