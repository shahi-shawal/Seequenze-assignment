import { useForm } from "react-hook-form";
import Headline from "../../Components/Navbar/Headline/Headline";


const CreateProjects = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
        const images = {
            author: data.author,
            image_url: data.image_url,
            download_url: data.download_url,
            width: data.width,
            height: data.height
        }
    console.log(images);
    }
    return (
        <div>
            <Headline headline={"Create Projects"}></Headline>
            <div className="text-black">
              <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-5">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              {...register("author")}
              type="text"
              placeholder="Author"
              required
              className="input input-bordered w-full "
            />
          </div>
          
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">image url</span>
              </label>
              <input
              {...register("image_url")}
              type="text"
              placeholder="Image url"
              required
              className="input input-bordered w-full "
            />
            </div>
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Download url</span>
              </label>
              <input
              {...register("download_url")}
              type="text"
              placeholder="Image url"
              required
              className="input input-bordered w-full "
            />
            </div>

            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Width</span>
              </label>
              <input
                {...register("width")}
                type="number"
                placeholder="width"
                required
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Height</span>
              </label>
              <input
                {...register("height")}
                type="number"
                placeholder="Height"
                required
                className="input input-bordered w-full "
              />
            </div>
          </div>
          
          <button className="btn btn-outline hover:bg-[#FA782F]" >Add Projects </button>
        </form>
      </div>
        </div>
        </div>
    );
};

export default CreateProjects;