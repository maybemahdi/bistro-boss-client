import { useEffect, useState } from "react";
import useMenu from "../../Hooks/useMenu";
import Loader from "../Loader";
import SectionStart from "../SectionStart";

const TodaysOffer = () => {
  const { menu, loading } = useMenu();
  const [offered, setOffered] = useState([]);
  useEffect(() => {
    setOffered(menu.filter((s) => s.category === "offered"));
  }, [menu]);
  if (loading) return <Loader />;
  return (
    <div className="my-12 w-[85%] mx-auto flex justify-center items-center flex-col">
      <SectionStart heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {offered?.map((offer) => (
          <div key={offer._id} className="flex items-center gap-4">
            <img
              style={{
                borderRadius: "0px 200px 200px 200px",
              }}
              className="w-[118px] h-[104px]"
              src={offer.image}
              alt=""
            />
            <div className="flex flex-col gap-2">
              <h4 className="font-cinzel text-[#151515]">{offer.name}</h4>
              <p className="text-[#737373]">{offer.recipe}</p>
            </div>
            <p className="text-[#BB8506]">${offer.price}</p>
          </div>
        ))}
        <button className="btn btn-outline text-center md:col-span-2 w-fit mx-auto my-3 border-b-4">
          Order Your Favorite Food
        </button>
      </div>
    </div>
  );
};

export default TodaysOffer;
