import SectionStart from "../SectionStart";
import salad from "../../assets/home/slide1.jpg";
const Recommendations = () => {
  return (
    <div className="my-10 w-[85%] mx-auto">
      <SectionStart
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />
      <div className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#F3F3F3]">
          <img
            className="w-[424px] h-[300px] object-cover"
            src={salad}
            alt=""
          />
          <div className="my-5 w-3/4 mx-auto flex flex-col gap-1 items-center justify-center">
            <h5 className="text-center font-semibold">Caeser Salad</h5>
            <p className="text-center font-normal">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline border-b-4 mt-3 text-[#BB8506]">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-[#F3F3F3]">
          <img
            className="w-[424px] h-[300px] object-cover"
            src={salad}
            alt=""
          />
          <div className="my-5 w-3/4 mx-auto flex flex-col gap-1 items-center justify-center">
            <h5 className="text-center font-semibold">Caeser Salad</h5>
            <p className="text-center font-normal">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline border-0 bg-black mt-3 text-[#BB8506]">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-[#F3F3F3]">
          <img
            className="w-[424px] h-[300px] object-cover"
            src={salad}
            alt=""
          />
          <div className="my-5 w-3/4 mx-auto flex flex-col gap-1 items-center justify-center">
            <h5 className="text-center font-semibold">Caeser Salad</h5>
            <p className="text-center font-normal">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className="btn btn-outline border-b-4 mt-3 text-[#BB8506]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
