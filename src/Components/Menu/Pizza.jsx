import CommonBanner from "../CommonBanner";
import image from "../../assets/menu/pizza-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const Pizza = () => {
  const { menu, loading } = useMenu();
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    setPizza(menu.filter((s) => s.category === "pizza"));
  }, [menu]);
  if (loading) return <Loader />;
  return (
    <div className="my-12 w-[85%] mx-auto flex justify-center items-center flex-col">
      <CommonBanner
        image={image}
        heading={"PIZZA"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {pizza?.map((p) => (
          <div key={p._id} className="flex items-center gap-4">
            <img
              style={{
                borderRadius: "0px 200px 200px 200px",
              }}
              className="w-[118px] h-[104px]"
              src={p.image}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-cinzel text-[#151515]">{p.name}</h4>
              <p className="text-[#737373]">{p.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${p.price}</p>
          </div>
        ))}
        <Link
          to={"/shop?index=1"}
          className="text-center md:col-span-2 w-fit mx-auto my-3"
        >
          <button className="btn btn-outline  border-b-4">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pizza;
