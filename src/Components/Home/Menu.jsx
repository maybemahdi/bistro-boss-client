import { useEffect, useState } from "react";
import SectionStart from "./SectionStart";
import axios from "axios";
import Loader from "../Loader";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/menu.json");
      setMenu(data.filter((d) => d.category === "popular"));
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="my-12 w-[85%] mx-auto flex justify-center items-center flex-col">
      <SectionStart
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {menu.map((singleMenu) => (
          <div className="flex items-center gap-4" key={singleMenu._id}>
            <img
              style={{
                borderRadius: "0px 200px 200px 200px",
              }}
              className="w-[118px] h-[104px]"
              src={singleMenu.image}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-cinzel text-[#151515]">{singleMenu.name}</h4>
              <p className="text-[#737373]">{singleMenu.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${singleMenu.price}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-outline border-b-4">View Full Menu</button>
    </div>
  );
};

export default Menu;
