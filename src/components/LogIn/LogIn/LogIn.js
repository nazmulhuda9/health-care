
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle, handleRegistration, emailHandle, passwordHandle } = useAuth();





    return (
        <div className="container p-5  mx-5">
            <form onSubmit={handleRegistration}>
                <div className="row mb-2">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={emailHandle} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={passwordHandle} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            <br />
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google sign in</button>
        </div>
    );
};

export default LogIn;