import { useEffect, useState } from "react";
import image from "../../assets/menu/soup-bg.jpg";
import CommonBanner from "../CommonBanner";
import useMenu from "../../Hooks/useMenu";
import Loader from "../Loader";
import { Link } from "react-router-dom";
const Soup = () => {
  const { menu, loading } = useMenu();
  const [soup, setSoup] = useState([]);
  useEffect(() => {
    setSoup(menu.filter((s) => s.category === "soup"));
  }, [menu]);
  if (loading) return <Loader />;
  return (
    <div className="my-12 w-[85%] mx-auto flex justify-center items-center flex-col">
      <CommonBanner
        image={image}
        heading={"SOUPS"}
        subHeading={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {soup?.map((s) => (
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
        <Link
          to={"/shop?index=2"}
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

export default Soup;
