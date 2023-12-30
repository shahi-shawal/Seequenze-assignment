import { useEffect } from "react";
import { useState } from "react";
import Headline from "../../Components/Navbar/Headline/Headline";
import { Link } from "react-router-dom";

const SampleProject = () => {
    const [images, setImages] = useState([])
    useEffect(()=>{
        fetch("https://picsum.photos/v2/list?page=1&limit=6")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setImages(data)
        })
    },[])
    console.log(images);
    return (
        <div>
            <Headline headline={"Sample Projects"}></Headline>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
           {
            images.map((image)=><div key={image.id} className="card w-[404px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image.download_url} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Author: {image.author}</h2>
             <p>Width: {image.width}</p>
             <p>height: {image.height}</p>
             <Link to={image.url}><p className="btn">Go to Download</p></Link>
            </div>
          </div>)
           }
           </div>
        
        </div>
      
    );
};

export default SampleProject;