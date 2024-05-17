import CommonBanner from "../CommonBanner";
import image from "../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../Hooks/useMenu";
import { useEffect, useState } from "react";
import Loader from "../Loader";

const Dessert = () => {
  const { menu, loading } = useMenu();
  const [dessert, setDessert] = useState([]);
  useEffect(() => {
    setDessert(menu.filter((s) => s.category === "dessert"));
  }, [menu]);
  if (loading) return <Loader />;
  return (
    <div className="my-12 w-[85%] mx-auto flex justify-center items-center flex-col">
      <CommonBanner
        image={image}
        heading={"DESSERTS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {dessert?.map((d) => (
          <div key={d._id} className="flex items-center gap-4">
            <img
              style={{
                borderRadius: "0px 200px 200px 200px",
              }}
              className="w-[118px] h-[104px]"
              src={d.image}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-cinzel text-[#151515]">{d.name}</h4>
              <p className="text-[#737373]">{d.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${d.price}</p>
          </div>
        ))}
        <button className="btn btn-outline text-center md:col-span-2 w-fit mx-auto my-3 border-b-4">
          Order Your Favorite Food
        </button>
      </div>
    </div>
  );
};

export default Dessert;
