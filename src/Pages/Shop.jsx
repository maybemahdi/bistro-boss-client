import CommonBanner from "../Components/CommonBanner";
import image from ".././assets/shop/banner2.jpg";
import TabCategory from "../Components/TabCategory";
import { ScrollRestoration, useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams)
  const index = queryParams.get("index");
  return (
    <div className="mb-10">
      <ScrollRestoration />
      <CommonBanner
        image={image}
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
      />
      <TabCategory index={index} />
    </div>
  );
};

export default Shop;
