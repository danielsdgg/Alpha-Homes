import React,{useState} from "react";
import NavBar from "./NavBar";
import Home from "./Home";
const Main = () =>{
    const [user, setUser] = useState([])
    const getuser = (email) => {
        fetch(`http://127.0.0.1:5000/users/${email}`)
        .then(res => res.json())
        .then(data => setUser(data))
      }
    return (
        <div>
            <NavBar email = {user.email} name = {user.username}/>
            <Home />
        </div>
    )

}

export default Main