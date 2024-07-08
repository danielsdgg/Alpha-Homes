import React,{useState} from 'react'

function Uploads() {
    const [image, setImage] = useState("")

    const submitImage = () => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","react-upload")
        data.append("cloud_name","ddei3mzex")

        fetch("https://api.cloudinary.com/v1_1/ddei3mzex/image/upload",{
            method:"POST",
            body:data
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <input type='file' onChange={(e) => setImage(e.target.files[0])}/>
        <button onClick={submitImage}>upload</button>

    </div>
  )
}

export default Uploads