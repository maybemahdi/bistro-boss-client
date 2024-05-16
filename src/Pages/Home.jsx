import CallUs from "../Components/Home/CallUs";
import Category from "../Components/Home/Category";
import ChefService from "../Components/Home/ChefService";
import Menu from "../Components/Home/Menu";
import Recommendations from "../Components/Home/Recommendations";
import Slider from "../Components/Home/Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Category/>
            <ChefService/>
            <Menu/>
            <CallUs/>
            <Recommendations/>
        </div>
    );
};

export default Home;