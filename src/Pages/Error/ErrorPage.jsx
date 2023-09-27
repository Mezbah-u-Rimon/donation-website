import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-5 h-screen">
            <h1 className="text-5xl font-semibold"> This Page is Error</h1>
            <Link to='/'>
                <button className="btn btn-primary text-white"> Go Back Home </button>
            </Link>
        </div>
    );
};

export default ErrorPage;