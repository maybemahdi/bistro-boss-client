import Category from "../Components/Home/Category";
import ChefService from "../Components/Home/ChefService";
import Menu from "../Components/Home/Menu";
import Slider from "../Components/Home/Slider";


const Home = () => {
    return (
        <div>
            <Slider/>
            <Category/>
            <ChefService/>
            <Menu/>
        </div>
    );
};

export default Home;