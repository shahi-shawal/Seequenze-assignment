import Headline from "../../Components/Navbar/Headline/Headline";
import image6 from "../../assets/images/images (5).svg"
const Myprojects = () => {
    return (
        <div>
           <Headline headline={"My Projects"}></Headline>
           <div className="mt-[30px]">
           <div className="card w-[404px] h-[265px] bg-base-100">
  <div className=" mx-auto mt-4">
    <div className=" bg-[#FA782F66] w-[360px] h-[180px] ">
    <img src={image6} alt="Shoes" className="mx-auto py-16 rounded-xl" />
    </div>
   
  </div>
  <div className="items-center text-center">
    <h2 className="mt-2 font-bold text-[18px]">Create a new project</h2>
    <h2 className="mb-2 font-bold text-[13px]">or try a <span className="text-[#FA782F]">sample project</span></h2>
  </div>
</div>
           </div>
        
        </div>

    );
};

export default Myprojects;