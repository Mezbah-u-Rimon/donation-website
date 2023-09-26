import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Error page </h1>
            <Link to='/'>
                <button className="btn btn-primary"> Go Back Home </button>
            </Link>
        </div>
    );
};

export default ErrorPage;