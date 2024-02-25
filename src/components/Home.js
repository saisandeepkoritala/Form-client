import "../styles/Home.css";
import {useSelector} from "react-redux"
import axios from "axios";

const Home=()=> {
    const {userInfo} = useSelector((store)=>store.user)
    console.log(userInfo)

    const handleClick = async(e)=>{
        e.preventDefault();
        const resp = await axios.get(`https://form-server-app.onrender.com/api/v1/user/getData`,{
            withCredentials: true
        })
        console.log(resp)
    }

    const handlePost = async(e)=>{
        e.preventDefault();
        const resp = await axios.post(`https://form-server-app.onrender.com/api/v1/user/getData1`,{
            withCredentials: true
        },{
            "name":"sai"
        }
        )
        console.log(resp)
    }

    return <div>
        Home
        <div onClick={handleClick}>Click here</div>
        <div onClick={handlePost}>Post</div>
        </div>
}

export default Home;
