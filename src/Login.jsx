import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./Login.css"

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const handlelogin = async (e) => {
        e.preventDefault();
        const data = {
            "email": e.target.elements.email.value,
            "password": e.target.elements.password.value,
        };
        dispatch({ type: "LOGIN", payload: data });
        navigate("/");
    }
    return (
        <>
            <div className="loginMain">
                <div className="loginContainer">
                    <div className="loginTitle">Login</div>
                    <form onSubmit={(e) => handlelogin(e)}>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" autoComplete="on" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
