import React,{useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function UpdateUsers() {
    //const {name, property_type, location, selling_price, leasing_price, description, leasing, status} = property
    const navigate = useNavigate()
    // declaring the variables
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    
    const { id } = useParams()

    
    // const [image1, setImage1] = useState("")
    // const [image2, setImage2] = useState("")
    // const [image3, setImage3] = useState("")
    // const [image, setImage] = useState("")
    // const [images, setImages] = useState([])
    var images = []
    function handleSubmit(e){
        e.preventDefault()
        // creating an object to hold data
        const updateuser = {
            username:username,
            email:email,
            password:password,
            role:role,            
        }

        // const images = {
        //     // property_id:property_id,
        //     image1:image1,
        //     image2:image2,
        //     image3:image3

        // }
        // fetch request to add property to the server
        fetch(`/users/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(updateuser)
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
        // clearing our input fields after adding data
        // setInputClear()
        // navigate to properties page after adding a property
        // navigate('/properties')
    }
    function setInputClear(){
        setName("")
        setPassword("")
        setEmail("")
        setRole("")
    }

    // const submitImage = () => {
    //     // console.log(image1)
    //     // console.log(image2)
    //     // console.log(image3)

    //    images.push(image1)
    //    images.push(image2)
    //    images.push(image3)

    // //    console.log(image)
    //    images.map(picha => {
    //     const data = new FormData()
    //     data.append("file",picha)
    //     data.append("upload_preset","react-upload")
    //     data.append("cloud_name","ddei3mzex")

    //     fetch("https://api.cloudinary.com/v1_1/ddei3mzex/image/upload",{
    //         method:"POST",
    //         body:data
    //     })
    //     .then((res) =>res.json())
    //     .then((data) => {
    //         console.log(data.url);
    //         setImage(data.url)
    //     }).catch((err) => {
    //         console.log(err)
    //     })

    //     return image
        

    //    })        
    // }
    

   


    // Our form
  return (
    <div className='addproperty'>
            
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
    <h1 className='text-center'>Update User</h1>
    <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Username
        </label>
        </div>
        <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="username" value = {username} placeholder="johndoe" onChange={e => setName(e.target.value)} />
                        </div>


    </div>


    <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Password
        </label>
        </div>
        <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password" value = {password} placeholder="Update password" onChange={e => setPassword(e.target.value)} />
        </div>

    </div>
    <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Role
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value = {role} placeholder="role" onChange={e => setRole(e.target.value)} />
            </div>

        </div>

    <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
        </label>
        </div>
        <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" value = {email} placeholder="johndoe@example.com" onChange={e => setEmail(e.target.value)} />
        </div>

    </div>

    
                

    
    <div className="md:flex md:items-center">
        <div className="md:w-1/3" />
        <div className="md:w-2/3">
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Submit
        </button>
        </div>
    </div>
    </form>
    </div>
  )
}

export default UpdateUsers