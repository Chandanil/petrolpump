import { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import "./Login.scss";
export const Login = () => {
    const navigate = useNavigate();
    const[uname,setUname]=useState('');
    const[password,setPassword]=useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [inputTypePassword, setInputTypePassword] = useState('password');
    const [eye, setEye] = useState('fa fa-eye-slash');
    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
    const loginHandler = (e)=> {
        
        e.preventDefault();
        const userData = database.find((user) => user.username === uname);
      
        if (userData) {
            if (userData.password !== password) {
              // Invalid password
              setErrorMessages({ name: "pass", message: "Invalid password" });
            } else {
                navigate("home");
                window.location.reload()
            }
          } else {
         
            // Username not found
            setErrorMessages({ name: "uname", message: "Username not found" });
          }
        
       
    }
    const renderErrorMessage = (message) =>{
        return(
            <div className="text-danger">{message}</div>
        )
       
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
                                        onChange = {(e)=>{ setUname(e.target.value)}}
                                    />
                                   
                                </div>
                                <div className="form-group mb-3  flex">
                                    <input
                                        type={inputTypePassword}
                                        className="form-control" placeholder="passsword"
                                        onChange = {(e)=>{ setPassword(e.target.value)}}
                                    />
                                    
                                    <i className={eye+" icon"} onClick={()=>{
                                        if(eye === 'fa fa-eye'){
                                            setEye('fa fa-eye-slash')
                                            setInputTypePassword('password')
                                        }else{
                                            setEye('fa fa-eye')
                                            setInputTypePassword('text')
                                        }
                                       
                                    }}></i>
                                </div>
                                {renderErrorMessage(errorMessages.message)}
                                <div className="form-group flex">
                                    <input type={"checkbox"} /><label className="remember">rememnber me</label>
                                    <Link to="" className="fpw">Forgot  Password</Link>
                                </div>
                                {/* <Link to="" className="cl-btn btn" onClick={loginHandler}>Login</Link> */}
                                <button type="submit"  onClick={loginHandler}> login</button>
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
