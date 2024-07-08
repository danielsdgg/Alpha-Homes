import React,{useState} from 'react'


const Contacts = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("/feedback",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name:name, email:email, message:message})
  })
  .then((r) => r.json())
  .then((data) => console.log(data))
  }



  return (
    <div className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h3 className='text-center font-extrabold'>We would love to hear from you</h3>
        <div className='grid md:grid-cols-2'>
          <img src='https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/'
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
          <form onSubmit={handleSubmit}>
            <div className=' grid grid-cols-2'>
              <input className=' border m-2 p-2' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='name'/>
              <input className=' border m-2 p-2' value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
              <textarea className='border col-span-2 m-2 p-2' cols='30' rows='10' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='enter feedback'></textarea>
              <button className='col-span-2 m-1 bg-[orangered]] w-[200px] rounded-md font-medium my-2 mx-auto py-1 text-black'>submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contacts