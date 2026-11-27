import Signup from "./pages/Signup";

function Navigation() {
    const currentPage = window.location.pathname;

    if (currentPage === "/signup") {
        return <Signup />;
    }

    return <h1> 404 Page not found</h1>;
}

export default Navigation;