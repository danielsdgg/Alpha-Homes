import React,{useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Details = () => {
    const [properties, setProperties] = useState([])
    const [show2, setShow2] = useState(false);
    // const { name } = useParams()
    const data = []
    var image1 = ""
    var image2 = ""
    var image3 = ""

    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(properties)
    data.push(properties)
    // console.log(data)

    data.map(info => {
      console.log(info)
      console.log(info.images)
      //  info.images.map(image => {
      // console.log(image.image1)
      // image1 = image.image1
      // image2 = image.image2
      // image3 = image.image3
    //})
    })
    // console.log(typeof(properties.images))  
    // deleting a property
    // images.map(picha => {
    //   console.log(picha)
    // })

    // images.push(properties.images)

    // console.log(properties.images)


    properties.images?.map(image => {
      console.log(image.image1)
      image1 = image.image1
      image2 = image.image2
      image3 = image.image3
    })
    

    // images.map(image => {
    //   console.log(image)
    //   image.map(picha => {
    //     console.log(picha)
    //     // image1 = picha.image1
    //     // image2 = picha.image2
    //     // image3 = picha.image3
    //   })
    // })

    // console.log(image1)
    
    // const display = properties.map(property => {
    //   console.log(property)
    // })


    // declaring form variables
    const [date, setDate] = useState("")
    const [price] = useState("")

    function handleSubmit(e){
        e.preventDefault()

        // object that hold data
        const newBooking = {
            date:date,
            price:price,
        }
        fetch("/booking", {
            method: "POST",
            headers:{
                "Context-Type":"application/json"
            },
            body: JSON.stringify(newBooking)
        })
        .then((r) => {
          r.json() 
          navigate('/booking')})
        .then((data) => console.log(data))
        setInputClear()

        // nav('/properties')
    }
    function setInputClear(){
        setDate("")
    } 
    function handleDelete(){
      fetch(`/properties/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
      })
      .then((response) => {
        if (response.status === 200){
          navigate('/')
          response.json()
        }
      })
      .then((data) => setProperties(data))

    }

    useEffect(() => {
      const fetching = async () => {
        const response = await fetch(`/properties/${id}`)
        const data = await response.json()
        return setProperties(data)
      }
      fetching()
  }, [id])

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt={properties.name} src={image1} />
                <img className="mt-6 w-full" alt={properties.name} src={image2} />
            </div>
            <div className="md:hidden">
                <img className="w-full" alt={properties.name} src={image1}/>
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src={image1} />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src={image2} />
                    <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src={image3} />
                    
                </div>
            </div>







            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    {/* <p className="text-sm leading-none text-gray-600">{product.name}</p> */}
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2 ">
                        {properties.name}
                    </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">{properties.description}</p>
                    {/* <p className="text-base leading-4 text-gray-800">Colours</p> */}
                    {/* <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600">Smoke Blue with red accents</p>
                        <div
                            className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"
                        ></div>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div> */}
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Price</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mr-3">Kshs .{properties.selling_price}</p>
                        {/* <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> */}
                    </div>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Location</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 mr-3">{properties.location}</p>
                        {/* <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> */}
                    </div>
                </div>
                <Link to="/booking"><button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					"
                >
                    <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /> */}
                    </svg>
                    Book
                </button></Link>
                <div>
                    {/* <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">{product.details}</p> */}
                    {/* <p className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
                    <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p> */}
                </div>
                {/* <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">{properties.property_type}</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            {properties.description}
                        </div>
                    </div>
                </div> */}
                <div>
                    <div className="border-b py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Description</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                         <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            {properties.description}
                        </div> 
                    </div>
                </div>
                {/* <button className='bg-[#ed3e3e] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black' onClick={handleDelete}>Delete Property</button> */}
            </div>
        </div>
    
  )
}

export default Details