import axios from "axios";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useMenu from "../../../Hooks/useMenu";
import { useState } from "react";
import LoadingSpinner from "../../../Components/LoadingSpinner";

const imgbb_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;

const AddItem = () => {
  const { refetch } = useMenu();
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    // console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const { data: imageRes } = await axios.post(img_hosting_api, formData);
    if (imageRes.success) {
      const menuItem = {
        name: data.recipeName,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: imageRes.data.display_url,
      };
      console.log(menuItem);
      try {
        const { data } = await axiosSecure.post("/menu", menuItem);
        if (data.insertedId) {
          setLoading(false);
          reset();
          refetch();
          Swal.fire({
            title: "Success!",
            text: `Item has just added to your Menu`,
            icon: "success",
          });
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };
  if (loading) return <LoadingSpinner />;
  return (
    <div className="mb-10 mt-5 w-full md:w-3/4 mx-auto">
      <div className="flex px-3 font-poppins flex-col gap-1 mb-10 items-center justify-center">
        <p className="text-[#D99904] text-center text-[18px] italic">
          ---Whats new?---
        </p>
        <hr color="#E8E8E8" />
        <h3
          className={`md:text-[40px] uppercase text-[28px] border-y-4 text-center border-[#E8E8E8] text-[#151515] px-4 py-3`}
        >
          ADD AN ITEM
        </h3>
      </div>
      <div className="md:p-12 p-6 bg-[#F3F3F3] rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="font-medium block" htmlFor="recipeName">
            Recipe Name*
          </label>
          <input
            className="block p-3 my-2 w-full"
            type="text"
            id="recipeName"
            name="recipeName"
            required
            {...register("recipeName", { required: true })}
            placeholder="Recipe Name"
          />
          {errors.recipeName && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
          <div className="flex gap-6 my-6 items-center">
            <div className="basis-1/2">
              <label className="font-medium block" htmlFor="category">
                Category*
              </label>
              <select
                {...register("category", { required: true })}
                className="select my-2 select-bordered w-full"
              >
                <option selected disabled>
                  Select a Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drink</option>
                <option value={"offered"}>Offered</option>
                <option value={"popular"}>Popular</option>
              </select>
              {errors.category && (
                <p className="text-red-500 mt-2">This field is required</p>
              )}
            </div>
            <div className="basis-1/2">
              <label className="font-medium block" htmlFor="price">
                Price*
              </label>
              <input
                className="block p-3 my-2 w-full"
                type="number"
                id="price"
                required
                name="price"
                {...register("price", { required: true })}
                placeholder="Price"
              />
            </div>
          </div>
          <label className="font-medium block" htmlFor="recipe">
            Recipe Details*
          </label>
          <textarea
            name="recipe"
            required
            placeholder="Recipe Details"
            {...register("recipe", { required: true })}
            className="textarea min-h-[160px] rounded textarea-bordered textarea-lg my-2 w-full"
          ></textarea>
          {errors.recipe && (
            <p className="text-red-500 mt-2">This field is required</p>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            {...register("image", { required: true })}
            required
            className="file-input my-4 file-input-bordered w-full max-w-xs"
          />
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-1 px-8 py-3 font-semibold text-white hover:bg-[#bb8a40] transition-all duration-300 bg-gradient-to-r from-[#835D23] to-[#B58130]"
            >
              Add Item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
