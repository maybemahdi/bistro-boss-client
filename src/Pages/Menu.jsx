import CommonBanner from "../Components/CommonBanner";
import Dessert from "../Components/Menu/Dessert";
import Pizza from "../Components/Menu/Pizza";
import Salad from "../Components/Menu/Salad";
import Soup from "../Components/Menu/Soup";
import TodaysOffer from "../Components/Menu/TodaysOffer";
import image from "../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div className="mb-10">
      <CommonBanner
        image={image}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      />
      <TodaysOffer/>
      <Dessert/>
      <Pizza/>
      <Salad/>
      <Soup/>
    </div>
  );
};

export default Menu;
