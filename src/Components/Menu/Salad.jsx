import CommonBanner from "../CommonBanner";
import image from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const Salad = () => {
  const { menu, loading } = useMenu();
  const [salad, setSalad] = useState([]);
  useEffect(() => {
    setSalad(menu.filter((s) => s.category === "salad"));
  }, [menu]);
  if (loading) return <Loader />;
  return (
    <div className="my-12 w-[85%] mx-auto flex justify-center items-center flex-col">
      <CommonBanner
        image={image}
        heading={"SALADS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {salad?.map((s) => (
          <div key={s._id} className="flex items-center gap-4">
            <img
              style={{
                borderRadius: "0px 200px 200px 200px",
              }}
              className="w-[118px] h-[104px]"
              src={s.image}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-cinzel text-[#151515]">{s.name}</h4>
              <p className="text-[#737373]">{s.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${s.price}</p>
          </div>
        ))}
        <button className="btn btn-outline text-center md:col-span-2 w-fit mx-auto my-3 border-b-4">
          Order Your Favorite Food
        </button>
      </div>
    </div>
  );
};

export default Salad;
