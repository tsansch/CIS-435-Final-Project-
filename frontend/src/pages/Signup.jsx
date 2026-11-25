function Signup() {
    return (
        <div className="signup-container">
        <div className="signup-card">
            <h1>Create an Account</h1>

            <p>Join our community and start sharing your thoughts.</p>

            <form>
            {/* Registration form*/}

                <button type="submit">
                    Sign Up
                </button>
            </form>
        </div>
        </div>
    );
}

export default Signup;