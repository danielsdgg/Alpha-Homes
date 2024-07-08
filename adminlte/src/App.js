import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewProperty from './components/property/AddProperty';
import { Routes, Route } from 'react-router-dom';
import UpdateProperty from './components/property/UpdateProperty';
import PropertyList from './components/property/PropertyList';
import React, {useState, useEffect} from 'react';
import Login from './components/users/Login';
import Main from './components/Main';
import UpdateUsers from './components/users/UpdateUser';
import NewUser from './components/users/CreateUser';
import ViewUser from './components/users/ViewUser';

function App() {
  const [property, setProperty] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    fetching()
    fetchingUsers()
  },[])

  const fetching = async () => {
    const response = await fetch("/propertyes")
    const data = await response.json()
    return setProperty(data)

  }
  const fetchingUsers = async () => {
    const response = await fetch("/users")
    const data = await response.json()
    return setUser(data)

  }
  const getuser = (email) => {
    fetch(`/users/${email}`)
    .then(res => res.json())
    .then(data => setUser(data))
  }

  
  return (
    <div className="App">
      <Header/>     
      {/* <NavBar email = {user.email} name = {user.username} /> */}
      <Routes>
        <Route path="/dashboard" element = {<Main/>}></Route>
        <Route path='/addproperties' element = {<NewProperty />}></Route>
        <Route path='/updateproperty/:id' element = {<UpdateProperty />}></Route>
        <Route path='/properties' element = {<PropertyList property = {property}/>}></Route>
        <Route path='/addusers' element = {<NewUser  />}></Route>
        <Route path='/users' element = {<ViewUser user = {user}/>}></Route>
        <Route path='/updateuser/:id' element = {<UpdateUsers />}></Route>
        <Route path='/' element = {<Login getuser={getuser}/>}></Route>
      </Routes>
      <Footer/>
      

    </div>
  );
}

export default App;
