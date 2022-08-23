import { Link,useNavigate  } from "react-router-dom";
import "./Login.scss";
export const Login = () => {
    const navigate = useNavigate();
    const loginHandler = ()=> {

        
        navigate("home");
        window.location.reload()
    }
    return (
        <div className="login-form pd-section">
            <div className="container">
                <form>
                    <div className="flex">
                            <div className="form-wrap">
                            <div className="login-wrap">
                                <div className="login-header">
                                    <h3 className="title">
                                        Welcome to
                                        <strong>XYZ Petrol Pump</strong>
                                    </h3>
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type={"text"}
                                        className="form-control" placeholder="username"
                                    />
                                </div>
                                <div className="form-group mb-3  flex">
                                    <input
                                        type={"text"}
                                        className="form-control" placeholder="passsword"
                                    />
                                    <i className="fa fa-eye-slash icon"></i>
                                </div>
                                <div className="form-group flex">
                                    <input type={"checkbox"} /><label className="remember">rememnber me</label>
                                    <Link to="" className="fpw">Forgot  Password</Link>
                                </div>
                                <Link to="" className="cl-btn btn" onClick={loginHandler}>Login</Link>
                            </div>
                            </div>
                        <div className="form-img">
                            <img src="img/petrolpump.jpg" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
