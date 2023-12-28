import arrow from "../../assets/images/Page-1.svg"
import image from "../../assets/images/Ellipse 1.svg"
const Navbar = () => {
    return (
        <div className="ml-[240px]">
            <div className="px-7 py-3 bg-state-100">
  <div className="flex justify-end gap-2">
   <div className="flex flex-col">
   <div className="flex gap-2 items-center">
        <h1 className="font-bold">Free Trial</h1>
        <div className="border-r-2 border-black h-4"></div>
        <h1 className="font-semi-bold text-black text-xs mb-2">2days left</h1>
    </div>
    <div className="flex items-start">
        <h1 className="text-[#FA782F] text-[14px] ">Extend free trail</h1>
    </div>
   </div>
    <div className="flex gap-2">
      <div  className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={image} />
        </div>
      </div>
      <img alt="Tailwind CSS Navbar component" src={arrow} />
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;