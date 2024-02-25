import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {setisUser,setuserInfo} from "../components/store";
import ColoredCircle from '../components/ColoredCircle';
import {ToastContainer,toast} from "react-toastify";
import "./Login.css";
import axios from "axios";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputEmailRef = useRef();
    const [Color,SetColor]=useState("red");
    axios.defaults.withCredentials = true;

    useEffect(() => {
        inputEmailRef.current.focus();
        axios.get(`https://form-server-app.onrender.com/api/v1/user/isAlive`,{
            withCredentials:true
        })
        .then((res)=>{
            if(res.status===200){
                SetColor("green")
            }
        })
        .catch((err)=>console.log(err))
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const notify=(msg)=>{
        toast.info(msg, {
            progressStyle: { background: "red" },
            theme: 'colored',
            style: { background: "black", color: "red" },
        });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const resp = await axios.post(`https://form-server-app.onrender.com/api/v1/user/login`,{
                email:formData.username,
                password:formData.password
            })
            if(resp.status===200){
                console.log(resp)
                dispatch(setuserInfo(resp?.data?.data))
                dispatch(setisUser(true))
                navigate("/home")
            }
        }
        catch(e){
            console.log("error")
            notify("invalid details")
        }
        
    };

    return (
        <div className='login'>
            <ToastContainer />
            <h2 >Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="johndoe@gmail.com"
                        ref={inputEmailRef}
                        required
                    />
                </div>

                <div >
                    <label >Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="password"
                        required
                    />
                </div>
                <div className='login-btn'>
                <button type="submit">
                    <span>Login</span>
                </button>
                </div>
            </form>

            <button
                type="submit"
                onClick={() => navigate("/signup")}
            >
                <span>Sign Up</span>
            </button>
            <ColoredCircle color={Color}/>
        </div>
    );
};



export default Login;
