import "../styles/Home.css";
import {useSelector} from "react-redux"

const Home=()=> {
    const {userInfo} = useSelector((store)=>store.user)
    console.log(userInfo)
    return <div>Home</div>
}

export default Home;
