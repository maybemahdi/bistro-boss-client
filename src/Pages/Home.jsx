import { ScrollRestoration } from "react-router-dom";
import CallUs from "../Components/Home/CallUs";
import Category from "../Components/Home/Category";
import ChefService from "../Components/Home/ChefService";
import FromOurMenu from "../Components/Home/FromOurMenu";
import Menu from "../Components/Home/Menu";
import Recommendations from "../Components/Home/Recommendations";
import Slider from "../Components/Home/Slider";
import Testimonials from "../Components/Home/Testimonials";


const Home = () => {
    return (
        <div>
            <ScrollRestoration/>
            <Slider/>
            <Category/>
            <ChefService/>
            <Menu/>
            <CallUs/>
            <Recommendations/>
            <FromOurMenu/>
            <Testimonials/>
        </div>
    );
};

export default Home;