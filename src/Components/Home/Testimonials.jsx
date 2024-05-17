import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import SectionStart from "../SectionStart";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/reviews.json");
      setReviews(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <Loader />;
  return (
    <div className="my-20 w-[85%] mx-auto">
      <SectionStart
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      />
      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center gap-4">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <FaQuoteLeft className="my-4" size={60} />
                <p className="w-3/4 mx-auto text-center">{review.details}</p>
                <h3 className="text-[32px] text-[#CD9003]">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
