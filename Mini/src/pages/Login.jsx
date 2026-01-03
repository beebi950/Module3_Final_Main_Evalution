import {useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const {login} =useContext(AuthContext);
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const [password,setpassword] = useState("");

    const handleLogin =() => {
        
        const role= login(email,password);
        if(!role) {
            alert("Invalid Credentials ");
            return;
        }
        navigate(role == "admin" ? "/admin/dashboard" : "/cutomers/dashboard");

    };

    return(

        <div className ="center">
            <h2>Login</h2>
            <input placeholder="Email" onClick={(e) => setEmail(e.target.value)} />
            <input  
                placeholder="Password" type="password"
                onClick={(e) => setpassword(e.target.value)}
            />

            <button onClick= {handleLogin}>Login</button>
        </div>
    );
};

export default Login;