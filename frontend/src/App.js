import React,{useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Front from "./components/Front";
import About from "./components/About";
import PropertyList from "./components/PropertyList"
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Details from "./components/Details";
import  Login  from "./components/Login";
import  Register  from "./components/Register";
import Booking from "./components/Booking";
import BookingList from "./components/BookingList";
import UpdateProperty from "./components/UpdateProperty";
// import FileForm from "./components/FileForm";
import Home from "./components/Home";
import NewProperty from "./components/NewProperty";
import "./App.css";
import EditProfile from "./components/EditProfile";

function App() {
  const [property, setProperty] = useState([])
  const [user, setUser] = useState([])
  
  // ddei3mzex

  const uploadProfile = (file) => {
    const data = new FormData()
    data.append('cloudname','ddei3mzex')
    data.append('upload_preset','react-upload')
    data.append('file',file.file)

    fetch(`https://api.cloudinary.com/v1_1/demo/image/upload`,{method:"POST",
    body:data
  })
  .then((r) => r.json())
  .then((data) => {console.log(data)})
  }

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch("/propertyes")
      const data = await response.json()
      return setProperty(data)

    }
    fetching()
  },[])

  const getuser = (email) => {
    fetch(`/users/${email}`)
    .then(res => res.json())
    .then(data => setUser(data))
  }

  function loginUser(email,pass){
    fetch('/login',{
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Context-Type':'application/json',
        },
        body: JSON.stringify({ email,pass}),
    })
    .then((r) => {
        if (r.ok){
            alert("logged in Successfully")
            return r.json()
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:',error);
        console.log('Response:',error.response);
    });
  }

  function onSearch(filteredProperties, price){
    const filteredpropertiesbylocation = property.filter(properties => properties.location.toLowerCase().includes(filteredProperties.toLowerCase()))
    // const filteredpropertiesbyprice = property.filter(properties => properties.selling_price === price)
    
      return setProperty(filteredpropertiesbylocation)
    
    // return setProperty(filteredpropertiesbyprice)
      
  }

  return (
    <div className="App">    
    {/* <FileForm uploadProfile={uploadProfile}/>    */}
    <BrowserRouter>  
    <NavBar/> 
        <Routes>
        <Route exact path="/login" element= {<Login getuser={getuser}/>}/>
        <Route exact path="/" element= {<Home/>}/>
        <Route exact path="/front" element= {<Front/>}/>
        <Route exact path="/register" element= {<Register/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contacts" element = {<Contacts/>}/>
        <Route path="/properties" element = {<PropertyList property= {property} onSearch = {onSearch}/>} />
        <Route path="/profile" element = {<Profile id = {user.id} email={user.email} profile = {user.profile} username = {user.username}/>}/>
        <Route path="/details/:id" element = {<Details/>}/>
        <Route path="/booking" element = {<Booking/>}/>
        <Route path="/BookingList" element = {<BookingList/>} />
        <Route path="/update/:id" element = {<UpdateProperty/>}/>
        <Route path = "/addproperties" element = {<NewProperty />}></Route>
        <Route path="/editprofile/:id" element = {<EditProfile />}></Route>
        </Routes>
        <Footer/> 
    </BrowserRouter> 
    {/* <Footer/>  */}
    </div>
  );
}

export default App;