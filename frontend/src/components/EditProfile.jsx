import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate()
    // declaring the variables
    const [name, setName] = useState("")
    const [property_type, setPropertyType] = useState("")
    const [location, setLocation] = useState("")
    const [selling_price, setSellingPrice] = useState("")
    const [leasing_price, setLeasingPrice] = useState("")
    const [description, setDescription] = useState("")
    const [leasing, setLeasing] = useState("")
    const [status, setStatus] = useState("")

    
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image, setImage] = useState("")
    // const [images, setImages] = useState([])

    const {id}= useParams()
    var images = []
    function handleSubmit(e){
        e.preventDefault()
        // creating an object to hold data
        const newProperty = {
            name:name,
            property_type:property_type,
            location:location,
            selling_price:selling_price,
            leasing_price:leasing_price,
            description:description,
            leasing:leasing,
            status:status,
            
        }

        // const images = {
        //     // property_id:property_id,
        //     image1:image1,
        //     image2:image2,
        //     image3:image3

        // }
        // fetch request to add property to the server
        fetch(`/profile/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newProperty)
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
        setPropertyType("")
        setLocation("")
        setSellingPrice("")
        setLeasingPrice("")
        setDescription("")
        setLeasing("")
        setStatus("")
    }

    const submitImage = () => {
        // console.log(image1)
        // console.log(image2)
        // console.log(image3)

       

    //    console.log(image)
       
        const data = new FormData()
        data.append("file",data)
        data.append("upload_preset","react-upload")
        data.append("cloud_name","ddei3mzex")

        fetch("https://api.cloudinary.com/v1_1/ddei3mzex/image/upload",{
            method:"POST",
            body:data
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data.url);
            setImage(data.url)
        }).catch((err) => {
            console.log(err)
        })
        

               
    }
    
    return(
        <div class="w-full">
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h1 className='text-center font-bold md:text-2xl sm:text-1xl text-lg '>Edit Profile</h1>

            <label for="name">UserName</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value = {name} placeholder="username" onChange={e => setName(e.target.value)}/>

            {/* <label for="property_type">Gender</label>
            <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value = {property_type} onChange={e => setPropertyType(e.target.value)}>
                <option>Apartment</option>
                <option>Land</option>
                <option>Homes</option>
            </select> */}
            {/* <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" /> */}
            <label for="location">Email</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value = {location} placeholder="email" onChange={e => setLocation(e.target.value)}/>

            


            <label for="location">First name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value = {location} placeholder="first name" onChange={e => setLocation(e.target.value)}/>

            <label for="description">Last Name</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value = {description} placeholder="last name" onChange={e => setDescription(e.target.value)}/>

            <label for="selling_price">Phone Number</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value = {selling_price} placeholder="phone number" onChange={e => setSellingPrice(e.target.value)}/>

            <label for="image">Property-Image</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='file' onChange={(e) => setImage(e.target.files[0])}/>	

            <button className='bg-[#00df9a] w-[100px] rounded-md font-medium my-11 mx-auto py-2 text-black' type='submit' onClick={submitImage}>Submit</button>

        </form>
    </div>
    )

}

export default EditProfile